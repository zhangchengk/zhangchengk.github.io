---
title: Controller Services是守护进程
date: 2020-06-30
category: ApacheNIFI教程
tag: NIFI
order: 15
---

今天只是扯扯淡，顺便记录一下我突然想到的一个low疑问。

## 有趣的对话

今天又某同事兴奋地跟我说，他的组件设置了100个并发。

我问他：“服务器什么配置，这么牛逼，能开到100个并发”

某：“没看”
<!-- more -->
我：“... 几核？”

某：“8核的吧”

我：“8核的。。。。就算这台服务器只跑了NIFI，那么NIFI的线程池数最多也就配置到32，刨去NIFI的主线程、守护线程不计，最多同一时刻也就一共16个线程在CPU里，并发开到100有啥意义？而且它开到100了，其他组件很容易拿不到资源的啊”

某：“这。。。32咋算的”

我：“一核最多2个线程，8核是16个，再来16个等待的，就是32了。”

。。。

所有官方推荐配置线程数为 核数 乘以 2到4倍

相关文章：[了解Apache NiFi最大线程池和处理器并发任务设置](./012-理解maxThread设置.md)  [深入解析Apache NIFI的调度策略](./016-NIFI调度.md)

## 疑问

然后不知怎的，我突然想到一个好玩的问题：

说一个Processor可以设置并发数，调度的时候是分配一个线程去执行任务，那么Controller Service呢？还有我们知道，Controller Service是可以多个组件公用的，Controller Service在哪里？怎么被调用的？Controller Service需要分配线程去执行嘛？

其实很简单的，没有那么复杂。

首先十分明确的一点是：Controller Service是无法设置并发数的，Controller Service是被调用的。

然后我们重点看一下Controller Service存到了哪里

create一个Controller Service的时候会调用StandardFlowManager.java的createControllerService

```java
public ControllerServiceNode createControllerService(final String type, final String id, final BundleCoordinate bundleCoordinate, final Set<URL> additionalUrls, final boolean firstTimeAdded,final boolean registerLogObserver) {
        ...
        final ControllerServiceProvider controllerServiceProvider = flowController.getControllerServiceProvider();

        final ControllerServiceNode serviceNode = new ExtensionBuilder()
            .identifier(id)
            .type(type)
            .bundleCoordinate(bundleCoordinate)
            .controllerServiceProvider(flowController.getControllerServiceProvider())
            .processScheduler(processScheduler)
            .nodeTypeProvider(flowController)
            .validationTrigger(flowController.getValidationTrigger())
            .reloadComponent(flowController.getReloadComponent())
            .variableRegistry(flowController.getVariableRegistry())
            .addClasspathUrls(additionalUrls)
            .kerberosConfig(flowController.createKerberosConfig(nifiProperties))
            .stateManagerProvider(flowController.getStateManagerProvider())
            .extensionManager(extensionManager)
            .buildControllerService();
        ...
        controllerServiceProvider.onControllerServiceAdded(serviceNode);

        return serviceNode;
    }
```

```java

    private final ConcurrentMap<String, ControllerServiceNode> serviceCache = new ConcurrentHashMap<>();

    @Override
    public void onControllerServiceAdded(final ControllerServiceNode serviceNode) {
        serviceCache.putIfAbsent(serviceNode.getIdentifier(), serviceNode);
    }
```

看到没，Controller Service就是存到了一个Map里，任意一个线程执行Processor调度时，谁要用谁就去Map了查一下然后调用就行了。

所以说如果一个Processor支持并发，那么这个Processor用的Controller Service那得是线程安全的。

然后先前在[Apache NIFI入门(读完即入门)](./003-NIFI入门.md)一文中我们说过

>Controller Services是守护进程(daemons)。它们在后台运行，并提供配置，资源和参数供处理器执行。

我们可以回顾一下daemon是什么意思

>在Java中有两类线程：User Thread(用户线程)、Daemon Thread(守护线程) 用个比较通俗的比如，任何一个守护线程都是整个JVM中所有非守护线程的保姆.只要当前JVM实例中尚存在任何一个非守护线程没有结束，守护线程就全部工作；只有当最后一个非守护线程结束时，守护线程随着JVM一同结束工作。Daemon的作用是为其他线程的运行提供便利服务，守护线程最典型的应用就是 GC (垃圾回收器)，它就是一个很称职的守护者。User和Daemon两者几乎没有区别，唯一的不同之处就在于虚拟机的离开：如果 User Thread已经全部退出运行了，只剩下Daemon Thread存在了，虚拟机也就退出了。 因为没有了被守护者，Daemon也就没有工作可做了，也就没有继续运行程序的必要了。

我们在Controller Service里用的最多的可能就是数据库连接池服务了吧，而数据库连接池本身就也包含着很多守护线程，监控连接个数、超时时间、状态等等。

如果Controller Service里有后台运行的线程，那么它(们)应该是守护线程(否则JVM怎么退出)(咱们这里不排除因为Processor等组件调用Controller Service而产生一些非守护线程，但如果有，那么这些非守护线程一定是会随着调度前后而退出的)。

到这里我们知道运行的NIFI里还有很多我们不易计数的守护线程，所以回到最开始的NIFI配置线程池线程数的问题，如果是8核服务器我们配置了8或者16，及时服务器只运行的NIFI，我们也千万不能天真的认为线程池里这8或者16个就可以肆意的遨游在CPU里了。