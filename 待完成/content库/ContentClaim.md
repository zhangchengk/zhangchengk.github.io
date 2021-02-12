---
title: ContentClaim
date: 2020-07-01
categories: 
  -
tags: 
  -
author: Panda诚
location: BeiJing
publish: false
---


```java
/**
 * <p>
 * 对ResourceClaim的一部分的引用，该部分可能包含也可能不包含整个ResourceClaim。多个FlowFiles可以通过具有相同的内容声明来引用相同的内容。
 * </p>
 *
 * <p>
 * 必须是线程安全的
 * </p>
 */
public interface ContentClaim extends Comparable<ContentClaim> {

    /**
     * @return 该ContentClaim引用的ResourceClaim
     */
    ResourceClaim getResourceClaim();

    /**
     * @return 此声明内容开始的ResourceClaim中的偏移量
     */
    long getOffset();

    /**
     * @return 此ContentClaim的长度
     */
    long getLength();
}

```