---
title: 从硬件层面理解memory barrier
date: 2021-03-18
category: 技术汇总
author: 张诚
---

## cache架构

<!-- ![](./img/cache.jpg) -->

现代cpu的速度远超内存的速度。为了应对这种超过两个数量级的速度悬殊，引入了多级cache。数据以`cache lines`的形式在cpus的cache和内存之间传输，`cache line`是定长的block，大小通常在16～256bytes。

<!-- ![](./img/cachelines.jpg) -->

对于给定的cpu，第一次访问某个数据item时会经历一次`cache miss`，需要从内存中读取放入cpu的cache中，再次访问时将从cache中找到。当cpu cache满了之后，新的数据将会淘汰cache中的数据，然而大多数caches即使未满，也可能被强制淘汰旧的数据，原因在于cache的硬件实现，如图所示，这个cache由定长hash桶(也叫`sets`)组成的`hashtable`实现，十六个`sets`和两个`ways`共组成32个`lines`，每个包含一个256字节的`cache line`。