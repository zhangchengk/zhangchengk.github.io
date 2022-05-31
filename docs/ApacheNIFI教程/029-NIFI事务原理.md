---
title: NIFI事务原理
date: 2021-03-09
category: ApacheNIFI教程
tag: NIFI
author: 张诚
---

Apache NIFI 处理数据的最小单位叫`FlowFile`，每一次调度里所处理的`FlowFile`(有可能是多个，即为`批`)是支持事务的，就是说：要么我完成处理FlowFile这个动作，得到了结果，要么不完成。从宏观角度可以将这个过程看成一个原子操作。

而实现这个事务机制的底层支撑就是`内容存储库``流文件内容的不变性`和`Copy-On-Write`以及`FlowFile存储库的预写日志`。

本篇我们将所有一切串联起来，看一下NIFI是如何实现它的事务机制的。

(不关心细节的同学可以直接拉到底部看总结)

## ProcessSession

首先，一切的一切，我们都从一个`ProcessSession`看起。简单来说，`ProcessSession`可以`创建FlowFile`，`路由FlowFile`(将处理完的FlowFile指定RelationShip)，`修改FlowFile的attributes`，`读写FlowFile的内容`，`提交或回滚整个会话`(提交事务，回滚事务)等待功能。(本文重点是探究NIFI的事务机制，就不对ProcessSession展开全面的研究了)
```java
public interface ProcessSession {

    // 提交回滚事务
    void commit();
    void rollback();
    void rollback(boolean penalize);

    // 转移FlowFile的归属(属于哪个session) 用的场景比较少
    void migrate(ProcessSession newOwner, Collection<FlowFile> flowFiles);

    // 更新计数器
    void adjustCounter(String name, long delta, boolean immediate);

    // 获取FlowFile
    FlowFile get();
    List<FlowFile> get(int maxResults);
    List<FlowFile> get(FlowFileFilter filter);

    // 等待处理的FlowFIle有多少
    QueueSize getQueueSize();

    // 创建FlowFile
    FlowFile create();
    FlowFile create(FlowFile parent);
    FlowFile create(Collection<FlowFile> parents);

    // 克隆FlowFile
    FlowFile clone(FlowFile example);
    FlowFile clone(FlowFile parent, long offset, long size);

    // 惩罚(一段时间不被Processor处理)
    FlowFile penalize(FlowFile flowFile);

    // 修改Attribute
    FlowFile putAttribute(FlowFile flowFile, String key, String value);
    FlowFile putAllAttributes(FlowFile flowFile, Map<String, String> attributes);
    FlowFile removeAttribute(FlowFile flowFile, String key);
    FlowFile removeAllAttributes(FlowFile flowFile, Set<String> keys);
    FlowFile removeAllAttributes(FlowFile flowFile, Pattern keyPattern);

    // 路由
    void transfer(FlowFile flowFile, Relationship relationship);
    void transfer(FlowFile flowFile);
    void transfer(Collection<FlowFile> flowFiles);
    void transfer(Collection<FlowFile> flowFiles, Relationship relationship);

    // 删除FlowFile
    void remove(FlowFile flowFile);
    void remove(Collection<FlowFile> flowFiles);
    
    // 读写FlowFile
    void read(FlowFile source, InputStreamCallback reader) throws FlowFileAccessException;
    InputStream read(FlowFile flowFile);
    void read(FlowFile source, boolean allowSessionStreamManagement, InputStreamCallback reader) throws FlowFileAccessException;
    FlowFile merge(Collection<FlowFile> sources, FlowFile destination);
    FlowFile merge(Collection<FlowFile> sources, FlowFile destination, byte[] header, byte[] footer, byte[] demarcator);
    FlowFile write(FlowFile source, OutputStreamCallback writer) throws FlowFileAccessException;
    OutputStream write(FlowFile source);
    FlowFile write(FlowFile source, StreamCallback writer) throws FlowFileAccessException;
    FlowFile append(FlowFile source, OutputStreamCallback writer) throws FlowFileAccessException;
    FlowFile importFrom(Path source, boolean keepSourceFile, FlowFile destination);
    FlowFile importFrom(InputStream source, FlowFile destination);
    void exportTo(FlowFile flowFile, Path destination, boolean append);
    void exportTo(FlowFile flowFile, OutputStream destination);

    // 返回与此ProcessSession关联的ProvenanceReporter。
    ProvenanceReporter getProvenanceReporter();
    
    // 修改state
    void setState(Map<String, String> state, Scope scope) throws IOException;
    StateMap getState(Scope scope) throws IOException;
    boolean replaceState(StateMap oldValue, Map<String, String> newValue, Scope scope) throws IOException;
    void clearState(Scope scope) throws IOException;
}
```

我们期望了解的是在这个事务中，`创建FlowFile`，`修改Attributes`，`写FlowFile内容`，`commit`和`rollback`与内容存储库和FlowFile存储库是一个怎么样的关联关系。

## StandardProcessSession

接下来看一下实现类`StandardProcessSession`

### 创建FlowFile

```java
@Override
public FlowFile create() {
    // 校验一下调度任务是否Terminate(正常的我们stop一个Processor，会等待当前任务执行完毕，但是可以直接执行Terminate终止任务)
    verifyTaskActive();
    // 我们说了很多遍的 attributes
    final Map<String, String> attrs = new HashMap<>();
    final String uuid = UUID.randomUUID().toString();
    attrs.put(CoreAttributes.FILENAME.key(), uuid);
    attrs.put(CoreAttributes.PATH.key(), DEFAULT_FLOWFILE_PATH);
    attrs.put(CoreAttributes.UUID.key(), uuid);
    // 新建一个FlowFile
    final FlowFileRecord fFile = new StandardFlowFileRecord.Builder().id(context.getNextFlowFileSequence())
        .addAttributes(attrs)
        .build();
    // StandardRepositoryRecord是FlowFile更高级层面的抽象，跟着FlowFile的更改
    final StandardRepositoryRecord record = new StandardRepositoryRecord(null);
    record.setWorking(fFile, attrs, false);
    // 存储当前会话拥有的一些FlowFile StandardRepositoryRecord
    records.put(fFile.getId(), record);
    createdFlowFiles.add(fFile.getAttribute(CoreAttributes.UUID.key()));
    return fFile;
}
```

简单读一下代码，创建FlowFile，只是创建了几个对象，此时存储库并未发生什么变化。

### 修改Attributes

```java
@Override
public FlowFile putAttribute(FlowFile flowFile, final String key, final String value) {
    ...
    // 创建FlowFile的时候就存储了当前会话拥有的FlowFile StandardRepositoryRecord 查出来对应的那个
    final StandardRepositoryRecord record = getRecord(flowFile);
    // 创建一个新的FlowFileRecord(在这里，我们应该意识到，自定义开始设置Attributes的时候，最好一次性的写Map)
    final FlowFileRecord newFile = new StandardFlowFileRecord.Builder().fromFlowFile(record.getCurrent()).addAttribute(key, value).build();
    record.setWorking(newFile, key, value, false);

    return newFile;
}

```

修改Attributes，也只是修改我们之前创建的FlowFile的Map信息(当前，FlowFileRecord是新创建了一个，而StandardRepositoryRecord还是原有的那个)

### 写FlowFile内容

```java
@Override
public FlowFile write(FlowFile source, final OutputStreamCallback writer) {
    ...
    final StandardRepositoryRecord record = getRecord(source);

    long writtenToFlowFile = 0L;
    // 看到ContentClaim，我们很熟悉了(content存储库原理有讲)
    ContentClaim newClaim = null;
    try {
        newClaim = claimCache.getContentClaim();
        claimLog.debug("Creating ContentClaim {} for 'write' for {}", newClaim, source);

        ensureNotAppending(newClaim);
        try (final OutputStream stream = claimCache.write(newClaim);
            // 包装一个现有的OutputStream，以便在调用 OutputStream.close()时，不会关闭基础OutputStream，
            // 但无法使用此OutputStream写数据。
            final OutputStream disableOnClose = new DisableOnCloseOutputStream(stream);
            final ByteCountingOutputStream countingOut = new ByteCountingOutputStream(disableOnClose)) {
            try {
                writeRecursionSet.add(source);
                // 包装OutputStream，以便如果引发任何IOException，则将其包装在FlowFileAccessException中。 
                // 这样做是为了将框架抛出的IOException与用户代码抛出的IOException隔离开来。 
                // 如果被框架抛出，通常表示与Content Repository通信存在问题（例如磁盘空间不足），并且会话回滚，以便可以再次处理FlowFile。
                final OutputStream ffaos = new FlowFileAccessOutputStream(countingOut, source);
                writer.process(createTaskTerminationStream(ffaos));
            } finally {
                writtenToFlowFile = countingOut.getBytesWritten();
                bytesWritten += countingOut.getBytesWritten();
            }
        } finally {
            writeRecursionSet.remove(source);
        }
    } ...

    removeTemporaryClaim(record);
    final FlowFileRecord newFile = new StandardFlowFileRecord.Builder()
        .fromFlowFile(record.getCurrent())
        .contentClaim(newClaim)
        .contentClaimOffset(Math.max(0, newClaim.getLength() - writtenToFlowFile))
        .size(writtenToFlowFile)
        .build();

    record.setWorking(newFile, true);
    return newFile;
}
```

`OutputStreamCallback writer`说白了就是我们底层给你一个OutputStream，你来实现这个接口，拿着这个OutputStream去写你的数据。(当然函数式编程很容易的)

由此可见(不深入跟踪代码，)，这里是将流文件内容`写进了内容存储库`了，我们的FlowFile已经有了对应的ContentClaim了。


### commit

```java
@Override
public synchronized void commit() {
    verifyTaskActive();
    // Checkpoint是个啥 说白了就是我commit的这个时间点，哪些FlowFile? 哪些事件？等等信息
    checkpoint(this.checkpoint != null); // If a checkpoint already exists, we need to copy the collection
    commit(this.checkpoint);
    ...
    this.checkpoint = null;
}

@SuppressWarnings({"unchecked", "rawtypes"})
protected void commit(final Checkpoint checkpoint) {
        ...
        // 更新Provenance存储库
        updateProvenanceRepo(checkpoint);

        final long flowFileRepoUpdateStart = System.nanoTime();
        final long updateProvenanceNanos = flowFileRepoUpdateStart - updateProvenanceStart;

        // 更新FlowFile存储库！！！(预写日志)
        try {
            final Collection<StandardRepositoryRecord> repoRecords = checkpoint.records.values();
            context.getFlowFileRepository().updateRepository((Collection) repoRecords);
        } catch (final IOException ioe) {
            // 如果我们无法提交会话，则也需要回退检查点，就像没有任何检查点被提交过。
            rollback(false, true);
            throw new ProcessException("FlowFile Repository failed to update", ioe);
        }
        ...
        // 事件存储库不落地 只是一个环形缓冲区 在内存里保存几分钟有数量限制的一些信息(默认5min，
        // 比如还有BulletinRepository保留预警消息的，ComponentStatusRepository存储和检索组件的历史状态信息的等等)
        updateEventRepository(checkpoint);
        ...
        // 将流文件传输到下游Connection的队列(如果有必要)。
        ...

        // 从磁盘上删除所有需要删除的文件。
        ...
        // 如果本次提交有修改Processor的state(如果此Processor支持state)
        // 更新本地state
        final StateManager stateManager = context.getStateManager();
        ...
        // 更新集群state(存储zookeeper上)
        ...
}
```

commit会话，中间的关键点就是更新FlowFile存储库！！！(预写日志)，更新成功了，那咱这Processor处理FlowFile干的事就成了。

### rollback

rollback有些琐碎了，就不跟进代码了，把所有的修改回退(我们有保存FlowFile的修改记录(比如说修改前的attribute)，我们有预写日志)：回退FlowFileRecord(保留了Original)，清理ContentClaim，把已写的FlowFile内存标记可删除(更新FlowFile存储库)等等。


## 总结

在代码设计层面，我们通过`ProcessSession`就可以各种得操作`FlowFile`，(我们这里只是简单得去总结，这样更容易理解)Attribute的修改在内存里，当然也会保留修改前最初的那个Attribute版本，新的FlowFile的内容会直接写到Content存储库里(修改旧的FlowFile内容也是Copy-On-Write)，当我们要commit以上操作时，会更新FlowFile存储库(预写日志，记录Attribute，Content Claim等等)，如果更新成功了，那么上面所做的一切可谓是`板上钉钉`了。如果更新失败(关机、磁盘满了等等，通常很大概率是重启NIFI)，比如说就是重启NIFI了，那么我们无需有任何的担心，我们可以从FlowFile存储库(预写日志)中恢复所有的FlowFile，而FlowFile内容因为Content存储库的不变性和Copy-On-Write机制，没有丢失任何数据。