---
title: wait 和 sleep 是否会触发锁的释放以及 CPU 资源的释放
date: 2023-07-27
category: 面试
---

Object.wait()方法，会释放锁资源以及 CPU 资源。

 Thread.sleep()方法，不会释放锁资源，但是会释放 CPU 资源。

首先，wait()方法是让一个线程进入到阻塞状态，而这个方法必须要写在一个 Synchronized 同步代码块里面。

因为 wait/notify 是基于共享内存来实现线程通信的工具，这个通信涉及到条件的 竞争，所以在调用这两个方法之前必须要竞争锁资源。

当线程调用 wait 方法的时候，表示当前线程的工作处理完了，意味着让其他竞 争同一个共享资源的线程有机会去执行。

但前提是其他线程需要竞争到锁资源，所以 wait 方法必须要释放锁，否则就会 导致死锁的问题。

然后，Thread.sleep()方法，只是让一个线程单纯进入睡眠状态，这个方法并没 有强制要求加 synchronized 同步锁。

而且从它的功能和语义来说，也没有这个必要。 当然，如果是在一个 Synchronized 同步代码块里面调用这个 Thread.sleep，也 并不会触发锁的释放。 最后，凡是让线程进入阻塞状态的方法，操作系统都会重新调度实现 CPU 时间 片切换，这样设计的目的是提升 CPU 的利用率。