---
title: java内存dump文件导出与查看
date: 2020-04-08
category: JVM
tags: 
  - JVM
author: Panda诚
location: BeiJing  
---

生成dump文件的命令：
jmap -dump:format=b,file=20170307.dump 16048
file后面的是自定义的文件名，最后的数字是进程的pid

使用jvisualvm来分析dump文件：
jvisualvm是JDK自带的Java性能分析工具，在JDK的bin目录下，文件名就叫jvisualvm.exe。
jvisualvm可以监控本地、远程的java进程，实时查看进程的cpu、堆、线程等参数，对java进程生成dump文件，并对dump文件进行分析。
像我这种从服务器上dump下来文件也可以直接扔给jvisualvm来分析。
使用方式：直接双击打开jvisualvm.exe，点击文件->装入，在文件类型那一栏选择堆，选择要分析的dump文件，打开。