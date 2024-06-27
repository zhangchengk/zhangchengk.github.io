---
title: SimpleDateFormat 是线程安全的吗
date: 2023-07-27
category: 面试
---

SimpleDateFormat 不是线程安全的， SimpleDateFormat 类内部有一个 Calendar 对象引用, 它用来储存和这个 SimpleDateFormat 相关的日期信息。

 当我们把 SimpleDateFormat 作为多个线程的共享资源来使用的时候。 意味着多个线程会共享 SimpleDateFormat 里面的 Calendar 引用， 多个线程对于同一个 Calendar 的操作，会出现数据脏读现象导致一些不可预料 的错误。 

在实际应用中，我认为有 4 种方法可以解决这个问题。

第一种，把 SimpleDateFormat 定义成局部变量，每个线程调用的时候都创建一 个新的实例。

第二种，使用 ThreadLocal 工具，把 SimpleDateFormat 变成线程私有的

第三种，加同步锁，在同一时刻只允许一个线程操作 SimpleDateFormat

第四种，在 Java8 里面引入了一些线程安全的日期 API，比如 LocalDateTimer、 DateTimeFormatter 等。