import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as l,a as t}from"./app-CtKwaxkk.js";const a={},o=t('<p>NiFi使用预写日志来跟踪FlowFiles（即数据记录）在系统中流动时的变化。该预写日志跟踪FlowFiles本身的更改，例如FlowFile的属性（组成元数据的键/值对）及其状态，再比如FlowFile所属的Connection /Queue。</p><p>在这里，我们将描述用于实现此功能的实现细节和算法。</p><h2 id="什么是预写日志" tabindex="-1"><a class="header-anchor" href="#什么是预写日志"><span>什么是预写日志</span></a></h2><p>预写日志（WAL,Write Ahead Log）是关系型数据库中用于实现事务性和持久性的一系列技术，ARIES是WAL系列技术常用的算法。简单来说就是，做一个操作之前先讲这件事情记录下来。</p><h2 id="为什么要使用wal" tabindex="-1"><a class="header-anchor" href="#为什么要使用wal"><span>为什么要使用WAL</span></a></h2><p>可以为非内存型数据提升极高的效率，真正的执行操作可能数据量会比较大，操作比较繁琐，并且写数据不一定是顺序写，所以如果每一次操作都要等待结果flush到可靠存储（比如磁盘）中才执行下一步操作的话，效率就太低了。换一种思路，如果我们在做真正的操作之前，先将这件事记录下来，持久化到可靠存储中（因为日志一般很小，并且是顺序写，效率很高），然后再去执行真正的操作。</p><p>保证了数据的完整性，在硬盘数据不损坏的情况下，预写式日志允许存储系统在崩溃后能够在日志的指导下恢复到崩溃前的状态，避免数据丢失</p><h2 id="apache-nifi的-write-ahead-log-实现" tabindex="-1"><a class="header-anchor" href="#apache-nifi的-write-ahead-log-实现"><span>Apache NiFi的 Write-Ahead Log 实现</span></a></h2><h3 id="术语定义" tabindex="-1"><a class="header-anchor" href="#术语定义"><span>术语定义</span></a></h3><ul><li>SerDe: 序列化/反序列化记录以及更新记录的接口</li><li>TransactionID Generator: 是一个AtomicLong，用于在编写以编辑每个交易的日志或snapshot时指示交易ID</li></ul><h3 id="writing-to-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#writing-to-the-write-ahead-log"><span>Writing to the Write-Ahead Log</span></a></h3><ol><li>验证记录是否已恢复（&#39;restored flag&#39;设置为true）。如果不是，则抛出IllegalStateException</li><li>获取repo共享锁 (read lock)</li><li>声明一个当前未使用的分区 <ol><li>增加AtomicLong和mod的分区数 -&gt; partitionIndex</li><li>尝试声明（获得写锁定）partition [partitionIndex]。 如果不成功，返回？？？。</li></ol></li><li>如果没有用于编辑日志的输出流，创建输出流并编写SerDe类名称和版本</li><li>获取ID（增量AtomicLong）并写入编辑日志</li><li>将更新写入分区 <ol><li>序列化更新内容到record</li><li>如果有更多记录，则写入TransactionContinue标记；返回上一步，否则到下一步</li><li>写事务提交标记</li></ol></li><li>更新全局记录Map以保存最新版本的记录</li><li>释放分区声明</li><li>释放共享锁</li></ol><h3 id="checkpointing-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#checkpointing-the-write-ahead-log"><span>Checkpointing the Write-Ahead Log</span></a></h3><ol><li>获取互斥锁（写锁），是的任何分区无法被更新</li><li>创建.partial文件</li><li>编写SerDe类名称和版本</li><li>写入当前的最大事务ID</li><li>在全局记录Map中写入记录数</li><li>对于每个记录，序列化记录</li><li>关闭.partial文件的输出流</li><li>删除当前的&#39;snapshot&#39;文件</li><li>将.partial文件重命名为&#39;snapshot&#39;</li><li>清除所有分区/编辑日志： 对于每个分区： <ol><li>关闭文件输出流</li><li>创建新的输出流到文件，指明Truncate，而不是append。</li><li>编写SerDe类名称和版本</li></ol></li><li>释放写锁</li></ol><h3 id="restoring-from-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#restoring-from-the-write-ahead-log"><span>Restoring from the Write-Ahead Log</span></a></h3><ol><li>获取互斥锁（写锁），以便无法更新任何分区</li><li>从snapshot还原 <ol><li>检查snapshot和.partial文件 <ol><li>如果两个文件都不存在，则没有要还原的snapshot。移至4。</li><li>如果只有snapshot文件，我们在不创建snapshot的情况下向下面步骤继续执行。</li><li>如果.partial文件存在且snapshot存在，则在创建snapshot时会崩溃。所以要删除.partial文件。</li><li>如果只有.partial文件存在，我们在创建.partial文件并删除snapshot之后再将.partial文件重命名为snapshot。</li></ol></li><li>打开InputStream到snapshot文件</li><li>读取SerDe类名称和版本</li><li>读取最大事务ID</li><li>读取snapshot中的记录数</li><li>对于snapshot中的每个记录，反序列化记录并更新全局记录Map</li><li>通过设置为从snapshot读取的最大事务ID来更新TransactionID生成器（原子长）+ 1</li></ol></li><li>对于每个分区： <ol><li>阅读交易ID。</li><li>如果是EOF，请完成还原分区。</li><li>如果交易ID小于交易ID生成器的值，请读取该交易的数据并丢弃。转到 3-1</li></ol></li><li>确定哪个分区读取的最小事务ID大于或等于TransactionID生成器。</li><li>从分区还原事务（调用SerDe＃deserializeRecord，包括用于写入文件的SerDe的版本。这样，如果实现发生更改，我们仍然可以还原数据）。</li><li>检查还原是否成功 <ol><li>如果成功，请更新全局记录Map以反映已还原记录的新状态。         将TransactionID生成器更新为在第5步骤中恢复的事务的TransactionID+1。从编辑日志中读取下一个事务ID。</li><li>如果未成功（意外的EOF），则放弃事务并提醒EOF。</li></ol></li><li>重复4-6，直到所有分区都已还原。</li><li>如果有任何分区表明出现意外的EOF，则在更正此分区之前，我们无法写入该分区, 因此在允许任何更新之前执行Checkpoint. 这将导致编辑日志被删除。 如果无法检查点，则抛出IOException，指示还原失败。确保释放写锁定！</li><li>对于每个分区，打开输出流以进行追加。</li><li>将 &#39;restored&#39; 标志设置为true</li><li>释放写锁</li></ol><p>参考： https://blog.csdn.net/winwill2012/article/details/71719106 https://cwiki.apache.org/confluence/display/NIFI/NiFi%27s+Write-Ahead+Log+Implementation</p>',17),n=[o];function r(h,p){return l(),i("div",null,n)}const d=e(a,[["render",r],["__file","026-预写日志(WAL).html.vue"]]),g=JSON.parse('{"path":"/ApacheNIFI%E6%95%99%E7%A8%8B/026-%E9%A2%84%E5%86%99%E6%97%A5%E5%BF%97(WAL).html","title":"NiFi的Write-Ahead Log","lang":"zh-CN","frontmatter":{"title":"NiFi的Write-Ahead Log","date":"2020-05-21T00:00:00.000Z","category":"ApacheNIFI教程","tag":"NIFI","description":"NiFi使用预写日志来跟踪FlowFiles（即数据记录）在系统中流动时的变化。该预写日志跟踪FlowFiles本身的更改，例如FlowFile的属性（组成元数据的键/值对）及其状态，再比如FlowFile所属的Connection /Queue。 在这里，我们将描述用于实现此功能的实现细节和算法。 什么是预写日志 预写日志（WAL,Write Ahe...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/ApacheNIFI%E6%95%99%E7%A8%8B/026-%E9%A2%84%E5%86%99%E6%97%A5%E5%BF%97(WAL).html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"NiFi的Write-Ahead Log"}],["meta",{"property":"og:description","content":"NiFi使用预写日志来跟踪FlowFiles（即数据记录）在系统中流动时的变化。该预写日志跟踪FlowFiles本身的更改，例如FlowFile的属性（组成元数据的键/值对）及其状态，再比如FlowFile所属的Connection /Queue。 在这里，我们将描述用于实现此功能的实现细节和算法。 什么是预写日志 预写日志（WAL,Write Ahe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:tag","content":"NIFI"}],["meta",{"property":"article:published_time","content":"2020-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NiFi的Write-Ahead Log\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"什么是预写日志","slug":"什么是预写日志","link":"#什么是预写日志","children":[]},{"level":2,"title":"为什么要使用WAL","slug":"为什么要使用wal","link":"#为什么要使用wal","children":[]},{"level":2,"title":"Apache NiFi的 Write-Ahead Log 实现","slug":"apache-nifi的-write-ahead-log-实现","link":"#apache-nifi的-write-ahead-log-实现","children":[{"level":3,"title":"术语定义","slug":"术语定义","link":"#术语定义","children":[]},{"level":3,"title":"Writing to the Write-Ahead Log","slug":"writing-to-the-write-ahead-log","link":"#writing-to-the-write-ahead-log","children":[]},{"level":3,"title":"Checkpointing the Write-Ahead Log","slug":"checkpointing-the-write-ahead-log","link":"#checkpointing-the-write-ahead-log","children":[]},{"level":3,"title":"Restoring from the Write-Ahead Log","slug":"restoring-from-the-write-ahead-log","link":"#restoring-from-the-write-ahead-log","children":[]}]}],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":4.77,"words":1430},"filePathRelative":"ApacheNIFI教程/026-预写日志(WAL).md","localizedDate":"2020年5月21日","excerpt":"<p>NiFi使用预写日志来跟踪FlowFiles（即数据记录）在系统中流动时的变化。该预写日志跟踪FlowFiles本身的更改，例如FlowFile的属性（组成元数据的键/值对）及其状态，再比如FlowFile所属的Connection /Queue。</p>\\n<p>在这里，我们将描述用于实现此功能的实现细节和算法。</p>\\n<h2>什么是预写日志</h2>\\n<p>预写日志（WAL,Write Ahead Log）是关系型数据库中用于实现事务性和持久性的一系列技术，ARIES是WAL系列技术常用的算法。简单来说就是，做一个操作之前先讲这件事情记录下来。</p>\\n<h2>为什么要使用WAL</h2>","autoDesc":true}');export{d as comp,g as data};
