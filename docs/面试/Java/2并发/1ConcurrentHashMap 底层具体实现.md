---
title: ConcurrentHashMap底层具体实现
date: 2023-07-27
category: 面试
---

关键字： `红黑树` `锁的粒度` 

## ConcurrentHashMap 的整体架构

这个是 ConcurrentHashMap 在 JDK1.8 中的存储结构，它是由数组、单向链表、 红黑树组成。

当我们初始化一个 ConcurrentHashMap 实例时，默认会初始化一个长度为 16 的数组。由于 ConcurrentHashMap 它的核心仍然是 hash 表，所以必然会存在 hash 冲突问题

ConcurrentHashMap 采用`链式寻址法`来解决 hash 冲突。

当 hash 冲 突 比 较 多 的 时 候 ， 会 造 成 链 表 长 度 较 长 ， 这 种 情 况 会 使 得 ConcurrentHashMap 中数据元素的查询复杂度变成 O(~n~)。因此在 JDK1.8 中， 引入了`红黑树`的机制。

当数组长度大于 64 并且链表长度大于等于 8 的时候，单项链表就会转换为红黑 树。

另外，随着 ConcurrentHashMap 的动态扩容，一旦链表长度小于 8，红黑树会 退化成单向链表。

## ConcurrentHashMap 的基本功能

ConcurrentHashMap 本质上是一个 HashMap，因此功能和 HashMap 一样，但 是 ConcurrentHashMap 在 HashMap 的基础上，提供了并发安全的实现。

并发安全的主要实现是通过对指定的 Node 节点加锁，来保证数据更新的安全性。

## ConcurrentHashMap 在性能方面做的优化

如果在并发性能和数据安全性之间做好平衡，在很多地方都有类似的设计，比如 cpu 的三级缓存、mysql 的 buffer_pool、Synchronized 的锁升级等等。

ConcurrentHashMap 也做了类似的优化，主要体现在以下几个方面： 在 JDK1.8 中，ConcurrentHashMap `锁的粒度是数组中的某一个节点`，而在 JDK1.7，锁定的是 Segment，锁的范围要更大，因此性能上会更低。

`引入红黑树`，降低了数据查询的时间复杂度，红黑树的时间复杂度是 O(~logn~)。

当数组长度不够时，ConcurrentHashMap 需要对数组进行扩容，在扩容的实现 上，ConcurrentHashMap 引入了`多线程并发扩容`的机制，简单来说就是多个线 程对原始数组进行分片后，每个线程负责一个分片的数据迁移，从而提升了扩容 过程中数据迁移的效率。

ConcurrentHashMap 中有一个 size()方法来获取总的元素个数，而在多线程并 发场景中，在保证原子性的前提下来实现元素个数的累加，性能是非常低的。 ConcurrentHashMap 在这个方面的优化主要体现在两个点：

当线程竞争不激烈时，直接采用 `CAS 来实现元素个数的原子递增`。

如果线程竞争激烈，使用一个数组来维护元素个数，如果要增加总的元素个数， 则直接从数组中随机选择一个，再通过 CAS 实现原子递增。它的核心思想是引 入了数组来实现对并发更新的负载。 
？？

## 原子方法



