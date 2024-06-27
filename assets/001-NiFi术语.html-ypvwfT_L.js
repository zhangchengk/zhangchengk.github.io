import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,f as r,b as e,a as l,o as s}from"./app-CtKwaxkk.js";const t={},a=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview"},[e("span",null,"Overview")])],-1),n=e("p",null,"NiFi的新贡献者经常会遇到相同的问题：我应该从哪里开始？当您查看类似NiFi的项目时，可以想象到有很多活动部件，因此了解所有这些部件如何组合在一起本身就变得令人生畏。本文档旨在对构成NiFi的组件以及这些组件如何装配在一起进行非常高级的描述。无意于详细介绍任何这些组件。还有其他一些文件（以后还会有更多文件）对这些单个组件中的某些组件的设计进行更深入的研究。本文档的目的是帮助不熟悉NiFi的开发人员加快使用某些术语的速度，并了解组成平台的不同组件之间如何进行交互。",-1),p=l('<h2 id="flowfile" tabindex="-1"><a class="header-anchor" href="#flowfile"><span>FlowFile</span></a></h2><p>我们将从FlowFile开始讨论。这是NiFi提供的围绕单个数据的抽象。 FlowFile可以表示结构化数据，例如JSON或XML消息，也可以表示非结构化数据，例如图像。 FlowFile由两部分组成：内容和属性。内容只是字节流，可以表示任何类型的数据。但是，内容本身未存储在FlowFile中。相反，FlowFile只是存储对内容的引用，该引用位于Content Repository中。仅通过能够与Content Repository本身进行通信的Process Session来访问内容。属性是与数据关联的键值对。这些属性与数据一起提供了上下文，这允许在不解析内容的情况下有效地路由和推理数据。</p><h2 id="processor" tabindex="-1"><a class="header-anchor" href="#processor"><span>Processor</span></a></h2><p>这是NiFi中最常用的组件，并且往往是新手最容易进入的组件。处理器是负责将数据引入系统，将数据推出到其他系统或执行某种扩充的组件。 ，提取，转换，拆分，合并或路由特定数据的逻辑。开发人员指南中讨论了处理器的通用设计模式。</p><p>Processor是扩展点，其API不会从一个次要版本的NiFi更改为另一个，但可能会随着新的主要版本的NiFi更改。</p><h2 id="processor-node" tabindex="-1"><a class="header-anchor" href="#processor-node"><span>Processor Node</span></a></h2><p>处理器节点本质上是处理器周围的包装器，并维护有关处理器本身的状态。除其他事项外，处理器节点负责维护有关处理器在图形上的位置的状态，处理器的已配置属性和设置，其调度状态以及用于描述处理器的注释。</p><p>通过将这些信息从处理器本身中抽象出来，我们可以确保处理器无法更改不应更改的内容，例如属性的配置值，因为允许处理器更改此信息可能会导致混乱。另外，由于状态信息由框架自动管理，因此它使我们能够简化创建处理器所需的代码。</p><h2 id="reporting-task" tabindex="-1"><a class="header-anchor" href="#reporting-task"><span>Reporting Task</span></a></h2><p>报告任务是NiFi扩展点，它能够报告和分析NiFi的内部指标，以便将信息提供给外部资源或将状态信息报告为直接出现在NiFi用户界面中的公告。与处理器不同，报告任务无权访问单个FlowFiles。而是，“报告任务”可以访问所有“来源事件”，公告和图形中针对组件显示的度量标准，例如FlowFiles输入，读取的字节数和写入的字节数。</p><p>报告任务是一个扩展点，它的API不会从一个次要版本的NiFi更改为另一个版本，但可能会随着新的主要版本的NiFi更改。</p><h2 id="controller-service" tabindex="-1"><a class="header-anchor" href="#controller-service"><span>Controller Service</span></a></h2><p>Controller Service是一种机制，它允许状态或资源在流中的多个组件之间共享。例如，SSLContextService允许用户仅配置一次SSL信息，然后配置任意数量的资源以使用该配置。其他Controller Services用于共享配置。例如，如果需要加载非常大的数据集，通常使用Controller Service加载数据集是有意义的。这使多个处理器可以使用此数据集，而不必多次加载该数据集。</p><p>Controller Service是扩展点，其API不会从一个次要版本的NiFi更改为另一个版本，但可能会随着新的主要版本的NiFi更改。</p><h2 id="process-session" tabindex="-1"><a class="header-anchor" href="#process-session"><span>Process Session</span></a></h2><p>进程会话（通常简称为“会话”）为处理器提供对FlowFiles的访问，并提供跨处理器执行的任务的事务行为。该会话提供get（）方法，用于获取对排队等待处理器的FlowFiles的访问，从FlowFile的内容读取和写入，从流程中添加和删除FlowFiles，在FlowFile中添加和删除属性的方法，以及将FlowFile路由到特定关系。此外，该会话还提供对ProvenanceReporter的访问，处理器可使用该ProvenanceReporter发出Provenance事件。</p><p>一旦处理器完成其任务，处理器就可以提交或回滚会话。如果处理器回滚该会话，则在该会话期间访问的FlowFiles将全部恢复为以前的状态。添加到流中的所有FlowFile将被销毁。从流中删除的所有FlowFile都将在与它相同的队列中重新排队。任何经过修改的FlowFile的内容和属性都将恢复为其先前的值，并且FlowFiles将全部重新排队到从中提取的FlowFile队列中。此外，任何来源事件都将被丢弃。</p><p>如果处理者选择提交该会话，则该会话负责使用相关信息来更新FlowFile存储库和源存储库。然后，会话将把FlowFiles添加到处理器的出站队列（如果将FlowFile转移到已建立了多个连接的关系，则将根据需要进行克隆）。</p><h2 id="process-context" tabindex="-1"><a class="header-anchor" href="#process-context"><span>Process Context</span></a></h2><p>进程上下文提供了处理器与其关联的处理器节点之间的桥梁。它提供有关处理器当前配置的信息，以及“屈服”能力或向框架发出信号，表明它无法在短时间内执行任何工作，因此框架不应浪费资源调度处理器跑步。进程上下文还提供用于访问可用控制器服务的机制，以便处理器能够利用共享逻辑或共享资源。</p><h2 id="flowfile-repository" tabindex="-1"><a class="header-anchor" href="#flowfile-repository"><span>FlowFile Repository</span></a></h2><p>FlowFile存储库负责存储FlowFiles的属性和状态，例如创建时间和FlowFile所属的FlowFile队列。默认实现是WriteAheadFlowFileRepository，它将信息保存到定期“检查点”的预写日志中。这允许极高的事务处理速率，因为它写入的文件是“仅追加的”，因此OutputStreams可以保持打开状态。存储库将定期检查点，这意味着它将开始写入新的预写日志，在该时间点写出所有FlowFiles的状态，并删除旧的预写日志。这样可以防止预写日志无限期增长。有关此存储库的设计和实现的更多信息，请参阅“ NiFi预写日志实现”页面。</p><p>注意：虽然FlowFile存储库是可插入的，但它被视为“私有API”，其接口可能会在次要版本的NiFi之间更改。因此，不建议在NiFi代码库之外开发实现。</p><h2 id="content-repository" tabindex="-1"><a class="header-anchor" href="#content-repository"><span>Content Repository</span></a></h2><p>内容存储库负责存储FlowFiles的内容，并提供用于读取FlowFile内容的机制。这种抽象使FlowFiles的内容可以基于基础存储机制独立且有效地进行存储。默认实现是FileSystemRepository，它将所有数据持久存储到基础文件系统中。</p><p>注意：虽然内容存储库是可插入的，但它被视为“私有API”，其接口可能会在次要版本的NiFi之间更改。因此，不建议在NiFi代码库之外开发实现。</p><h2 id="provenance-repository" tabindex="-1"><a class="header-anchor" href="#provenance-repository"><span>Provenance Repository</span></a></h2><p>来源存储库负责存储，检索和查询所有数据来源事件。每次接收，路由，克隆，分叉，修改，发送或丢弃FlowFile时，都会生成一个详细说明此信息的出处事件。该事件包含有关事件类型是什么，涉及到哪些FlowFile，事件发生时FlowFile的属性，事件的详细信息以及事件发生之前和之后指向FlowFile内容的指针的信息（这使用户可以了解特定事件如何修改FlowFile）。</p><p>来源存储库允许在遍历系统的每个FlowFile上存储该信息，并提供了一种组装FlowFile的“谱系视图”的机制，从而可以精确地显示如何处理FlowFile的图形表示形式。为了确定要查看的谱系，存储库提供了一种机制，用户可以通过该机制搜索事件和关联的FlowFile属性。</p><p>默认实现是PersistentProvenanceRepository。该存储库立即将所有数据存储到磁盘支持的预写日志中，并定期“翻转”数据，建立索引并压缩数据。搜索功能由嵌入式Lucene引擎提供。有关如何设计和实现此存储库的更多信息，请参见持久性源存储库设计页面。</p><p>注意：尽管Provenance Repository是可插入的，但它被视为“私有API”，其接口可能会在次要版本的NiFi之间更改。因此，不建议在NiFi代码库之外开发实现。</p><h2 id="process-scheduler" tabindex="-1"><a class="header-anchor" href="#process-scheduler"><span>Process Scheduler</span></a></h2><p>为了调用“处理器”或“报告任务”，需要对其进行安排。该责任属于流程计划程序。除了调度处理器和报告任务，调度程序还负责调度框架任务以定期运行，并维护每个组件的调度状态以及当前活动线程的数量。 Process Scheduler能够检查特定的组件，以确定要使用的调度策略（Cron驱动，计时器驱动或事件驱动），以及调度频率。</p><h2 id="flowfile-queue" tabindex="-1"><a class="header-anchor" href="#flowfile-queue"><span>FlowFile Queue</span></a></h2><p>尽管听起来很简单，但是FlowFile Queue负责实现相当多的逻辑。除了为要从中提取另一个组件的FlowFiles排队之外，FlowFile Queue还必须能够按照用户的优先级排序规则对数据进行优先级排序。队列保持有关FlowFile数量以及这些FlowFiles数据大小的状态，并且必须保持有关“进行中” FlowFiles数量的状态-已从队列中拉出但尚未从系统中删除的那些。或转移到另一个队列。</p><p>当NiFi实例具有大量活动FlowFiles时，与这些FlowFiles相关联的属性可能会给JVM的堆造成很大负担。为了缓解此问题，框架可以选择“交换”一些FlowFiles，将属性写入磁盘，并在队列变得非常大时将其从JVM的堆中删除，然后再“交换”这些FlowFiles。在此过程中，FlowFile队列还负责跟踪FlowFile的数量和FlowFiles内容的大小，以便可以向用户报告准确的数量。</p><p>最后，FlowFile队列还负责维护有关反压和FlowFile到期的状态。背压是一种机制，用户可以通过该机制配置流，以在给定组件的输出队列太满时临时停止调度该组件以使其运行。通过这样做，我们能够使流在短时间内停止接受传入的数据，或者以不同的方式路由数据。这为我们提供了防止资源耗尽的能力。在群集环境中，这还允许由于一个或另一个原因而处于下降状态的特定节点避免摄取数据，从而使群集中更有能力的其他节点可以处理工作负载。</p><p>FlowFile Expiration是一种机制，通过该机制最终可以从系统中清除数据，因为它不再有价值。可以将其视为流量的泄压阀。例如，在没有足够带宽将所有数据发送到其所需目的地的环境中使用此功能。在这种情况下，该节点最终将耗尽资源。为了避免这种情况，用户可以将队列配置为使达到一定期限的数据过期。例如，用户可以指示应清除一小时前的数据。然后，此功能与对数据进行优先级排序的功能相结合，以便始终始终首先发送最重要的数据，而次要的数据最终会过期。</p><h2 id="flowfile-prioritizer" tabindex="-1"><a class="header-anchor" href="#flowfile-prioritizer"><span>FlowFile Prioritizer</span></a></h2><p>NiFi的核心租户是数据优先级。用户应具有按特定时间对特定数据流有意义的顺序对数据进行优先级排序的能力。这对于对时间敏感的数据尤其重要，当在数据采集速率超过可以输出数据的速率的环境中处理数据时，这一点尤其重要。在这样的环境中，重要的是能够以一种方式发送数据，即首先发送最重要的数据，而在带宽允许的情况下发送次要的数据，或者最终将其老化。</p><p>该租户是通过FlowFile Prioritizers的用户实现的。 FlowFile Queue负责确保按照用户选择的方式对数据进行排序。这是通过将FlowFile Prioritizers应用于队列来完成的。 FlowFile Prioritizer可以访问所有FlowFile信息，但不能访问它指向的数据。然后，Prioritizer可以比较两个FlowFile，以确定应该首先使哪个可用。</p><p>Prioritizer是一个扩展点，其API不会从一个次要版本的NiFi更改为另一个版本，但可能会随着新的主要版本的NiFi更改。</p><h2 id="flow-controller" tabindex="-1"><a class="header-anchor" href="#flow-controller"><span>Flow Controller</span></a></h2><p>为了使NiFi的用户界面能够显示其提供的大量信息，它必须具有收集信息的位置。流控制器可以看作是Web层与NiFi节点的后端组件之间的桥梁。它主要负责流程的初始化，流程中组件的创建以及这些组件之间的协调。从更一般的意义上讲，流控制器负责维护系统范围的状态。这包括流程本身的状态，并负责协调NiFi集群中的连接和参与。</p><h2 id="cluster-manager" tabindex="-1"><a class="header-anchor" href="#cluster-manager"><span>Cluster Manager</span></a></h2><p>流控制器负责维护特定节点的系统范围状态，而集群管理器负责维护整个集群的系统范围状态。这包括诸如集群中的哪些节点以及这些节点的状态之类的信息。此外，群集管理器还负责充当Web层和群集状态之间的桥梁。这包括将来自用户的请求复制到群集中的所有节点，并合并他们的响应。</p><p>NiFi实例将创建集群管理器或流控制器，但不会两者都创建。创建哪个组件由nifi.properties文件中的配置驱动。</p><h2 id="authority-provider" tabindex="-1"><a class="header-anchor" href="#authority-provider"><span>Authority Provider</span></a></h2><p>配置NiFi后，可以将其配置为在安全模式下运行，使用SSL访问Web端点，或者在非安全模式下运行，在该模式下所有端点都可以匿名访问。如果以安全模式运行，则授权提供者负责确定哪些用户有权执行哪些操作。它通过提供允许给定用户拥有的权限或角色列表来实现此目的。请注意，它并不表示用户实际具有哪些角色，而仅表示允许用户具有哪些角色。具有角色ADMIN的NiFi用户随后可以将这些角色中的每个角色授予给定用户。这样，可以使用中央授权服务来指示允许给定用户具有哪些角色，但是例如仅由于允许用户被授予ADMIN角色，并不意味着该用户应该具有ADMIN特定实例的角色。</p><p>定义的每个端点还必须定义授权哪些角色访问该端点。用户只有在具有指定角色之一的情况下，用户才能访问端点。</p><p>授权提供者是扩展点，它的API不会从一个次要版本的NiFi更改为另一个版本，但可能会随着新的主要版本的NiFi更改。</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources"><span>*-Resources</span></a></h2><p>NiFi的用户界面仅显示可通过NiFi RESTful API获得的信息。这是通过访问*-Resource类中定义的不同端点来完成的。例如，ProcessorResource类负责定义用于与流中的不同处理器进行交互的端点，包括添加和删除处理器。 ProvenanceResource类负责定义用于与Provenance资源库进行交互的端点，例如执行查询。</p><p>所有的资源组件都可以在nifi-web-api模块的org.apache.nifi.web.api包中找到。</p><h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap"><span>Bootstrap</span></a></h2><p>为了使组织能够依靠NiFi以自动方式处理其数据流，组织需要能够依靠NiFi处理意外情况，并能够以易于使用的方式启动和关闭，一致的方式。 Bootstrap模块负责实现这些目标。 Bootstrap允许用户依靠bootstrap.properties文件中提供的配置轻松配置如何启动NiFi JVM。这使应用程序可以在启用远程调试，指定的最小和最大堆大小以及其他重要的JVM选项的情况下轻松启动。</p><p>一旦启动了NIFi应用程序，引导程序将负责监视NiFi并根据需要重新启动服务，以确保应用程序继续提供可靠的数据流。</p><h2 id="narclassloader" tabindex="-1"><a class="header-anchor" href="#narclassloader"><span>NarClassLoader</span></a></h2><p>在像NiFi这样的容器化环境中，重要的是要允许不同的扩展点具有任意依赖关系，而这些依赖关系不会影响其他不相关的扩展点。在Java中，执行此操作的机制是ClassLoader。 NiFi定义了自己的ClassLoader实现，即NarClassLoader。每个NiFi存档（NAR）都有自己的NarClassLoader，负责加载该NAR中定义的类。此外，它负责提供本机库隔离，以便例如Processor可以依赖未与其他组件共享的本机库。这是通过将这些本机库放在NAR的本机目录中来完成的。</p><p>有关NiFi存档及其使用方式的详细信息，请参阅《开发人员指南》中的“ NiFi存档（NAR）”部分。</p>',60);function c(F,h){return s(),o("div",null,[a,n,r(" more "),p])}const u=i(t,[["render",c],["__file","001-NiFi术语.html.vue"]]),N=JSON.parse('{"path":"/ApacheNIFI%E6%95%99%E7%A8%8B/001-NiFi%E6%9C%AF%E8%AF%AD.html","title":"NIFI术语","lang":"zh-CN","frontmatter":{"title":"NIFI术语","date":"2020-05-21T00:00:00.000Z","category":"ApacheNIFI教程","tag":"NIFI","description":"Overview NiFi的新贡献者经常会遇到相同的问题：我应该从哪里开始？当您查看类似NiFi的项目时，可以想象到有很多活动部件，因此了解所有这些部件如何组合在一起本身就变得令人生畏。本文档旨在对构成NiFi的组件以及这些组件如何装配在一起进行非常高级的描述。无意于详细介绍任何这些组件。还有其他一些文件（以后还会有更多文件）对这些单个组件中的某些组件...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/ApacheNIFI%E6%95%99%E7%A8%8B/001-NiFi%E6%9C%AF%E8%AF%AD.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"NIFI术语"}],["meta",{"property":"og:description","content":"Overview NiFi的新贡献者经常会遇到相同的问题：我应该从哪里开始？当您查看类似NiFi的项目时，可以想象到有很多活动部件，因此了解所有这些部件如何组合在一起本身就变得令人生畏。本文档旨在对构成NiFi的组件以及这些组件如何装配在一起进行非常高级的描述。无意于详细介绍任何这些组件。还有其他一些文件（以后还会有更多文件）对这些单个组件中的某些组件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:tag","content":"NIFI"}],["meta",{"property":"article:published_time","content":"2020-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NIFI术语\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"FlowFile","slug":"flowfile","link":"#flowfile","children":[]},{"level":2,"title":"Processor","slug":"processor","link":"#processor","children":[]},{"level":2,"title":"Processor Node","slug":"processor-node","link":"#processor-node","children":[]},{"level":2,"title":"Reporting Task","slug":"reporting-task","link":"#reporting-task","children":[]},{"level":2,"title":"Controller Service","slug":"controller-service","link":"#controller-service","children":[]},{"level":2,"title":"Process Session","slug":"process-session","link":"#process-session","children":[]},{"level":2,"title":"Process Context","slug":"process-context","link":"#process-context","children":[]},{"level":2,"title":"FlowFile Repository","slug":"flowfile-repository","link":"#flowfile-repository","children":[]},{"level":2,"title":"Content Repository","slug":"content-repository","link":"#content-repository","children":[]},{"level":2,"title":"Provenance Repository","slug":"provenance-repository","link":"#provenance-repository","children":[]},{"level":2,"title":"Process Scheduler","slug":"process-scheduler","link":"#process-scheduler","children":[]},{"level":2,"title":"FlowFile Queue","slug":"flowfile-queue","link":"#flowfile-queue","children":[]},{"level":2,"title":"FlowFile Prioritizer","slug":"flowfile-prioritizer","link":"#flowfile-prioritizer","children":[]},{"level":2,"title":"Flow Controller","slug":"flow-controller","link":"#flow-controller","children":[]},{"level":2,"title":"Cluster Manager","slug":"cluster-manager","link":"#cluster-manager","children":[]},{"level":2,"title":"Authority Provider","slug":"authority-provider","link":"#authority-provider","children":[]},{"level":2,"title":"*-Resources","slug":"resources","link":"#resources","children":[]},{"level":2,"title":"Bootstrap","slug":"bootstrap","link":"#bootstrap","children":[]},{"level":2,"title":"NarClassLoader","slug":"narclassloader","link":"#narclassloader","children":[]}],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":15.13,"words":4540},"filePathRelative":"ApacheNIFI教程/001-NiFi术语.md","localizedDate":"2020年5月21日","excerpt":"<h2>Overview</h2>\\n<p>NiFi的新贡献者经常会遇到相同的问题：我应该从哪里开始？当您查看类似NiFi的项目时，可以想象到有很多活动部件，因此了解所有这些部件如何组合在一起本身就变得令人生畏。本文档旨在对构成NiFi的组件以及这些组件如何装配在一起进行非常高级的描述。无意于详细介绍任何这些组件。还有其他一些文件（以后还会有更多文件）对这些单个组件中的某些组件的设计进行更深入的研究。本文档的目的是帮助不熟悉NiFi的开发人员加快使用某些术语的速度，并了解组成平台的不同组件之间如何进行交互。</p>\\n","autoDesc":true}');export{u as comp,N as data};
