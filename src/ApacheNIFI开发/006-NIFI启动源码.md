---
title: NIFI启动源码解读
date: 2020-05-21
category: ApacheNIFI开发
tag: NIFI
order: 6
---

本文仅限于针对NIFI最常见的启动方式的分析，即使用以下命令启动。
```
nifi.sh start
```

本文是若干脚本解读和源码学习分析的导读和概括，每一步骤的详细研究需要到各个章节仔细研究。

## nifi.sh脚本

我们启动NIFI是使用的nifi.sh脚本，那么一切自然就是从这里开始的。整个脚本分为三部分，第一部分是确定NIFI各个路径 目录的确定，设置环境变量，第二部分是方法区。第三部分是脚本逻辑代码的入口，初略的根据传参不同区执行不同的方法。关于脚本的详细学习研究请看:[nifi.sh 脚本解读](./nifi-sh.md)

## RunNiFi.java

nifi.sh脚本start其实最后生成的命令就是执行RunNiFi.java的main方法，RunNiFi类主要是干一些查找文件，接受脚本指令，启动停止NIFI进程(主类 org.apache.nifi.NiFi)，自动重启NIFI，发送NIFI通知等等操作；关于RunNifi.java的详细研究请看:[RunNiFi源码.java](./RunNiFi源码.md)

## NiFi.java

在RunNiFi.java源码解读中有提到，最终RunNiFi进程在主程序中启动了新的进程NiFi,并循环监听NIFI进程的状态，直到NIFI进程不在运行，RunNiFi主程序才结束。关于Nifi.java的详细研究请看:[NiFi.java](./009-NiFi源码.md)

## JettyServer.java

在NiFi.java的构造方法里，使用反射构造了JettyServer,并调用了JettyServer的start方法。在JettyServer中发布了war包，启动了我们所看到的NIFI(画布、拖拽。。。)关于Nifi.java的详细研究请看:[JettyServer.java](./008-JettyServer源码.md)




