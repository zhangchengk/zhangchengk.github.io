---
title: Java 官方提供了哪几种线程池，分别有 什么特点？
date: 2023-07-27
category: 面试
---

JDK 中幕刃提供了 5 中不同线程池的创建方式，下面我分别说一下每一种线程 池以及它的特点。

## newCachedThreadPool

是一种可以缓存的线程池，它可以用来处理大量短期 的突发流量。

它的特点有三个，最大线程数是 Integer.MaxValue，线程存活时间是 60 秒，阻 塞队列用的是 SynchronousQueue，这是一种不存才任何元素的阻塞队列，也就 是每提交一个任务给到线程池，都会分配一个工作线程来处理，由于最大线程数 没有限制。所以它可以处理大量的任务，另外每个工作线程又可以存活 60s，使得这些工作 线程可以缓存起来应对更多任务的处理。

## newFixedThreadPool

是一种固定线程数量的线程池。

它的特点是核心线程和最大线程数量都是一个固定的值 如果任务比较多工作线程处理不过来，就会加入到阻塞队列里面等待。

## newSingleThreadExecutor

只有一个工作线程的线程池。

并且线程数量无法动态更改，因此可以保证所有的任务都按照 FIFO 的方式顺序 执行

## newScheduledThreadPool

具有延迟执行功能的线程池

可以用它来实现定时调度

## newWorkStealingPool

Java8 里面新加入的一个线程池,它内部会构建一个 ForkJoinPool，利用工作窃取的算法并行处理请求。

这些线程都是通过工具类 Executors 来构建的，线程池的最终实现类是 ThreadPoolExecutor。