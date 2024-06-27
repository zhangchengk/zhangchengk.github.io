---
title: FlowFile存储库原理
date: 2021-03-01
category: ApacheNIFI教程
tag: NIFI
author: 张诚
order: 25
---

## FlowFile Repository

系统正在积极处理的FlowFiles保存在JVM内存中的Hash Map中。 这使它们的处理效率非常高，但是由于多种原因，例如断电，内核崩溃，系统升级和维护周期，因此需要一种辅助机制来在整个进程重新启动中提供数据的持久性。 FlowFile存储库是系统中当前存在的每个FlowFiles的元数据的`Write-Ahead Log`（或数据记录）。 该FlowFile元数据包括与FlowFile相关联的所有attributes，指向FlowFile实际内容的指针（该内容存在于内容存储库中）以及FlowFile的状态，例如FlowFile所属的Connection/Queue。 预写日志为NiFi提供了处理重启和意外系统故障所需的弹性。

FlowFile存储库充当NiFi的预写日志，因此当FlowFile在系统中流动时，每个更改在作为事务工作单元发生之前都会记录在FlowFile存储库中。 这使得系统能够准确地知道节点在处理一段数据时所处的步骤。 如果节点在处理数据时发生故障，则可以在重新启动时轻松地从中断的位置恢复。日志中FlowFiles的格式是在此过程中发生的一系列增量（或更改）。NiFi通过恢复流文件的“快照”（当存储库被选中时创建）然后重放这些增量来恢复流文件。

系统会定期自动获取快照，为每个流文件创建一个新的快照。 系统通过序列化哈希映射中的每个流文件并用文件名“.partial”将其写入磁盘来计算新的基本检查点。 随着检查点的进行，新的FlowFile基线将写入“.partial”文件。 完成检查点后，旧的“快照”文件将被删除，“.partial”文件将重命名为“snapshot”。

系统检查点之间的时间间隔可在nifi.properties'文件。默认值为两分钟间隔。

## Effect of System Failure on Transactions

NiFi通过在各自的FlowFile Repo中记录每个节点当时发生的情况来防止硬件和系统故障。 如上所述，FlowFile Repo是NiFi的预写日志。当节点恢复联机时，它首先检查“snapshot”和“.partial”文件来恢复其状态。 节点要么接受“snapshot”并删除“.partial”（如果存在），要么将“.partial”文件重命名为“snapshot”（如果“snapshot”文件不存在）。

如果节点在运行时正在编写内容，那么由于Copy-On-Write和Immutability范式，没有任何内容被损坏。 由于FlowFile事务从不修改原始内容（由内容指针指向），因此原始内容是安全的。当NiFi关闭时，更改的写声明被孤立，然后由后台垃圾收集清理。这会回滚到最后一个已知的稳定状态。

然后节点从流文件恢复其状态。 

在事务性工作单元方面，这种设置允许NiFi在逆境中非常有弹性，确保即使NiFi突然被杀死，它也可以在不丢失任何数据的情况下恢复。

## Deeper View: FlowFiles in Memory and on Disk

术语“FlowFile”有点用词不当。 这会使人相信每个流文件对应于磁盘上的一个文件，但事实并非如此。 FlowFile属性存在于两个主要位置：上面解释的预写日志和工作内存中的hash map。 此hash map引用了流中正在使用的所有流文件。 此映射引用的对象与处理器使用的对象相同，并保存在连接队列中。 因为FlowFile对象保存在内存中，所以处理器要获得FlowFile所要做的就是请求ProcessSession从队列中获取它。

当FlowFile发生更改时，delta将被写入预写日志，并相应地修改内存中的对象。 这使系统能够快速处理流文件，同时还可以跟踪已发生的事情以及提交会话时将发生的事情。这提供了一个非常健壮和持久的系统。

还有“swapping”流文件的概念。 当连接队列中的流文件数超过`nifi.queue.swap.threshold`配置时。 连接队列中优先级最低的流文件被序列化，并以“swap file”的形式以10000个为一批写入磁盘。 这些流文件随后从上述hash map中删除，连接队列负责确定何时将文件交换回内存。 当FlowFile被交换出去时，FlowFile repo会收到通知，并保存交换文件的列表。 当系统被检查点时，快照包含一个用于交换文件的部分。 当交换文件被交换回时，流文件被添加回哈希映射。 这种交换技术与大多数操作系统执行的交换非常相似，允许NiFi提供对正在处理的流文件的非常快速的访问，同时仍然允许流中存在数百万个流文件，而不会耗尽系统内存。

## 源码跟踪

那么我们应该着重关注一下`一个FlowFile变更了后是怎么将变更信息存到FlowFile存储库(即FlowFile是怎么预写日志的)`

### FlowFileRepository接口

在以下接口中，我们看到了一些其他的接口，大概查了一下；
- ResourceClaimManager 管理ResourceClaim，ResourceClaim最终是与文件 文件IO流有关。这个类会在内容存储库里有深入的了解。
- RepositoryRecord  表示FlowFile的抽象，可用于跟踪FlowFile的更改状态，以便存在与存储库的事务性
- QueueProvider 提供一个 FlowFileQueue的集合，该集合表示当前流中的所有队列
- FlowFileSwapManager 定义了一种交换机制，通过该机制，FlowFiles可以移动到外部存储或内存中，以便可以将它们从Java堆中删除，反之亦然
- FlowFileRecord 继承自FlowFile接口，额外增加了ContentClaim信息和惩罚时间(ContentClaim跟流文件内容相关)
- FlowFileQueue 流文件队列 最最最底层其实是PriorityQueue无界优先级队列(背压机制又使得使用起来又有界)

```java
/**
 * 实现必须是线程安全的
 */
public interface FlowFileRepository extends Closeable {
    /**
     * 初始化内容存储库，向其提供要与内容声明进行交互的ContentClaimManager
     */
    void initialize(ResourceClaimManager claimManager) throws IOException;
    long getStorageCapacity() throws IOException;
    long getUsableStorageSpace() throws IOException;
    String getFileStoreName();

    /**
     * 使用给定的RepositoryRecords更新存储库。
     */
    void updateRepository(Collection<RepositoryRecord> records) throws IOException;

    /**
     * 加载在存储库中找到的所有流文件，建立内容声明及其引用计数
     *
     * @param queueProvider 将FlowFiles放入其中的FlowFile Queues的提供者
     *
     * @return 最高流文件标识符的索引
     */
    long loadFlowFiles(QueueProvider queueProvider) throws IOException;

    /**
     * 搜索存储库以查找当前已将数据排队的所有FlowFile队列的ID
     * @return FlowFile排队的所有FlowFileQueue标识符的集合
     */
    Set<String> findQueuesWithFlowFiles(FlowFileSwapManager flowFileSwapManager) throws IOException;

    boolean isVolatile();

    /**
     * @return 按顺序创建FlowFile的下一个ID。
     */
    long getNextFlowFileSequence();

    /**
     * @return 存储库中当前存在的所有流文件的最大ID。
     */
    long getMaxFlowFileIdentifier() throws IOException;

    /**
     * 通知FlowFile信息库已将给定标识符标识为外部（交换出）FlowFile遇到的最大值。
     */
    void updateMaxFlowFileIdentifier(long maxId);

    /**
     * 更新存储库以指示给定的FlowFileRecords已交换出内存
     */
    void swapFlowFilesOut(List<FlowFileRecord> swappedOut, FlowFileQueue flowFileQueue, String swapLocation) throws IOException;

    /**
     * 更新存储库以指示将给定的FlowFileRecords交换到内存中
     *
     * @param swapLocation the location (e.g., a filename) from which FlowFiles
     * were recovered
     * @param flowFileRecords the records that were swapped in
     * @param flowFileQueue the queue that the FlowFiles belong to
     */
    void swapFlowFilesIn(String swapLocation, List<FlowFileRecord> flowFileRecords, FlowFileQueue flowFileQueue) throws IOException;

    boolean isValidSwapLocationSuffix(String swapLocationSuffix);

    default Map<ResourceClaim, Set<ResourceClaimReference>> findResourceClaimReferences(Set<ResourceClaim> resourceClaims, FlowFileSwapManager swapManager)
        throws IOException {
        return null;
    }
    default Set<ResourceClaim> findOrphanedResourceClaims() {
        return Collections.emptySet();
    }
}

```

从以上接口方法暂时还看不出啥来，回过头来看看nifi.properties
```
nifi.flowfile.repository.implementation=org.apache.nifi.controller.repository.WriteAheadFlowFileRepository
nifi.flowfile.repository.wal.implementation=org.apache.nifi.wali.SequentialAccessWriteAheadLog
nifi.flowfile.repository.directory=./flowfile_repository
nifi.flowfile.repository.checkpoint.interval=20 secs
nifi.flowfile.repository.always.sync=false
```

### WriteAheadFlowFileRepository

`WriteAheadFlowFileRepository`是FlowFileRepository接口的实现类，使用WALI作为后备存储来实现FlowFile存储库。

首先这个类告诉我们`nifi.flowfile.repository.always.sync`这个配置是用来指示是否在每次更新时强制WALI与磁盘同步。 默认情况下，该值为false 。 仅在预计会出现断电且无法通过`不间断电源（UPS）`缓解或在不稳定的虚拟机中运行的情况下才需要这样做。 否则，我们将刷新写入操作系统的数据，并且`操作系统将在适当时负责刷新其缓冲区`。 可以将操作系统配置为仅保留特定的缓冲区大小，也可以根本不保留缓冲区。 使用UPS时，这通常不是问题，因为通常会在死机前通知机器，在这种情况下，操作系统会将数据刷新到磁盘。 此外，企业服务器上的大多数磁盘还具有`备用电池`，可以为磁盘供电足够长的时间以刷新其缓冲区。 因此，我们选择不对每次写入不同步到磁盘，而是仅在检查点时才同步。

至于写文件时操作系统刷新缓冲区我们暂时不用管，只看代码层级的日志数据是如何写到journal文件里的

```java
@Override
public void updateRepository(final Collection<RepositoryRecord> records) throws IOException {
    // alwaysSync 对应 `nifi.flowfile.repository.always.sync`，默认为false
    updateRepository(records, alwaysSync);
}

private void updateRepository(final Collection<RepositoryRecord> records, final boolean sync) throws IOException {
    // 校验 除了DELETE CONTENTMISSING CLEANUP_TRANSIENT_CLAIMS record是需要destination的(即路由到哪个队列)
    for (final RepositoryRecord record : records) {
        if (record.getType() != RepositoryRecordType.DELETE && record.getType() != RepositoryRecordType.CONTENTMISSING
                && record.getType() != RepositoryRecordType.CLEANUP_TRANSIENT_CLAIMS && record.getDestination() == null) {
            throw new IllegalArgumentException("Record " + record + " has no destination and Type is " + record.getType());
        }
    }

    // 根据分区记录的类型是否为“CLEANUP_TRANSIENT_CLAIMS”进行记录。我们这样做是因为我们不想将这些类型的记录发送到预写日志。
    // CLEANUP_TRANSIENT_CLAIMS 那些回滚了的record
    final Map<Boolean, List<RepositoryRecord>> partitionedRecords = records.stream()
            .collect(Collectors.partitioningBy(record -> record.getType() == RepositoryRecordType.CLEANUP_TRANSIENT_CLAIMS));
    // 剩下的这些确实发生了的变化 要记录到日志里
    List<RepositoryRecord> recordsForWal = partitionedRecords.get(Boolean.FALSE);
    if (recordsForWal == null) {
        recordsForWal = Collections.emptyList();
    }
    // 序列化的record
    final List<SerializedRepositoryRecord> serializedRecords = new ArrayList<>(recordsForWal.size());
    recordsForWal.forEach(record -> serializedRecords.add(new LiveSerializedRepositoryRecord(record)));

    // 把序列化的record更新存储库。
    final int partitionIndex = wal.update(serializedRecords, sync);

    updateContentClaims(records, partitionIndex);
}
```
至此，我们还未看到将变化记录更新到存储库的具体代码逻辑，那么继续看`wal.update(serializedRecords, sync)`, wal是`WriteAheadRepository`接口，而它的实现类叫`org.apache.nifi.wali.SequentialAccessWriteAheadLog`，来看一下它。

### SequentialAccessWriteAheadLog

`WriteAheadRepository`接口的此实现提供了通过写入`单个日志文件`来将所有更新`顺序`写入存储库的功能。 数据串行化为字节发生在任何锁争用之外(synchronized方法块之外)，并且使用回收的`字节缓冲区`来完成。 这样，我们就会进行最少的垃圾收集，并且`此存储库的理论吞吐量等于基础磁盘本身的吞吐量`。

这种实现方式假设只有一个线程可以在任何时候发布给定Record的更新。 即，该实现是线程安全的，但如果两个线程同时使用同一记录的更新来更新预写日志，则不能保证记录可以正确恢复(没有的事情)。

### 更新FlowFile存储库(即预写FlowFile变化日志)

最底层的方法是`WriteAheadRepository`的update

```java
/**
 * 使用指定的记录更新存储库。集合不得包含具有相同ID的多个记录
 *
 * @param records the records to update
 * @param forceSync 指定存储库是否强制将缓冲区里的数据刷新到磁盘。如果为false，则数据可以存储在操作系统缓冲区中，这可以提高性能，但是如果断电或操作系统崩溃，则可能导致数据丢失
 * @return the index of the Partition that performed the update
 */
int update(Collection<T> records, boolean forceSync) throws IOException;
```
看下update在`SequentialAccessWriteAheadLog`中的实现
```java
@Override
public int update(final Collection<T> records, final boolean forceSync) throws IOException {
    // 是否已经从持久态将FlowFile恢复到内存里(比如重启)
    if (!recovered) {
        throw new IllegalStateException("Cannot update repository until record recovery has been performed");
    }
    // 读锁 ReentrantReadWriteLock
    journalReadLock.lock();
    try {
        // WriteAheadJournal 使用给定的记录集更新journal日志
        journal.update(records, recordLookup);
        // 强制同步
        if (forceSync) {
            journal.fsync();
            syncListener.onSync(PARTITION_INDEX);
        }
        // WriteAheadSnapshot 更新快照
        snapshot.update(records);
    } finally {
        // 释放读锁
        journalReadLock.unlock();
    }
    return PARTITION_INDEX;
}
```
在这里我们看到如果强制同步才执行`journal.fsync();`，那么`journal.update(records, recordLookup);`里应该就是将record变化刷到缓冲区里了。

而`WriteAheadJournal`接口的唯一实现类`LengthDelimitedJournal`中对update的实现是

```java
@Override
public void update(final Collection<T> records, final RecordLookup<T> recordLookup) throws IOException {
    // 记录日志之前写一些信息 比如LengthDelimitedJournal类名 version 序列化类名 version等等
    if (!headerWritten) {
        throw new IllegalStateException("Cannot update journal file " + journalFile + " because no header has been written yet.");
    }

    if (records.isEmpty()) {
        return;
    }
    // 检测一些状态 有问题直接抛出异常(比如磁盘满了 too many open files 等等)
    checkState();

    File overflowFile = null;
    // 从池子里获取一个ByteArrayDataOutputStream(streamPool自己实现的 内部是BlockingQueue)
    // ByteArrayDataOutputStream是NIFI自己写的，包装了ByteArrayOutputStream和DataOutputStream
    // 而ByteArrayOutputStream我们应该都知道了 就是干字节缓冲的活的 然后一批刷到其他的输出流里(写日志的FileOutputStream)
    // DataOutputStream用来装饰ByteArrayOutputStream 按照我们定义的格式写数据
    final ByteArrayDataOutputStream bados = streamPool.borrowObject();

    try {
        FileOutputStream overflowFileOut = null;

        try {
            DataOutputStream dataOut = bados.getDataOutputStream();
            for (final T record : records) {
                // 获取给定record的唯一ID
                final Object recordId = serde.getRecordIdentifier(record);
                // 返回具有给定标识符的Record->修改前的record
                final T previousRecordState = recordLookup.lookup(recordId);
                // 通过给定的DataOutputStream将编辑记录(新record 旧record 有点那个redo undo日志的意思)序列化到日志。
                serde.serializeEdit(previousRecordState, record, dataOut);

                final int size = bados.getByteArrayOutputStream().size();
                // 字节缓冲区里保存的日志超过了5M了，且支持溢出为overflow文件
                // 指示对writeExternalFileReference(File, DataOutputStream)的调用对于此实现是否有效; 
                // maxInHeapSerializationBytes 默认5*1024*1024 5M
                if (serde.isWriteExternalFileReferenceSupported() && size > maxInHeapSerializationBytes) {
                    // 将现有缓冲区里的日志数据写到overflow文件并充值缓冲区
                    ...
                }
            }
            // 将输出刷到字节缓冲区里(到这里为止，FlowFile变更记录刷到了字节缓冲区里了)
            dataOut.flush();
            ...
        } ...
        final ByteArrayOutputStream baos = bados.getByteArrayOutputStream();
        // BufferedOutputStream(指向了journal文件的FileOutputStream)
        final OutputStream out = getOutputStream();

        final long transactionId;
        // 至此以上是并发存FlowFile变更到缓冲区(多个ByteArrayOutputStream)
        // 同步锁，将缓冲区内的日志数据刷到BufferedOutputStream缓冲区里，BufferedOutputStream再刷到journal文件的FileOutputStream
        synchronized (this) {
            checkState();
            try {
                transactionId = currentTransactionId++;
                transactionCount++;

                transactionPreamble.clear();
                transactionPreamble.putLong(transactionId);
                transactionPreamble.putInt(baos.size());

                out.write(TRANSACTION_FOLLOWS);
                out.write(transactionPreamble.array());
                baos.writeTo(out);
                out.flush();
            } ...
}
```

综上，我们可以看到，FlowFile的变更信息先(并发)刷到(多个)ByteArrayOutputStream缓冲区，然后ByteArrayOutputStream缓冲区中数据刷(加锁)到BufferedOutputStream(指向了journal文件的FileOutputStream)，BufferedOutputStream再flush到FileOutputStream写入到journal日志文件。







