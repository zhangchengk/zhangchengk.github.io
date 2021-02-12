---
title: ResourceClaim
date: 2020-06-24
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
 * 表示ContentRepository可以提供的资源
 */
public interface ResourceClaim extends Comparable<ResourceClaim> {

    /**
     * @return 此声明的唯一标识符
     */
    String getId();

    /**
     * @return 存放此声明的容器标识符
     */
    String getContainer();

    /**
     * @return 存放此声明的容器的section
     */
    String getSection();

    /**
     * @return 指示声明是否可以容忍损失。如果可以，我们将尝试保留内容，但不会为此付出很多性能
     */
    boolean isLossTolerant();

    /**
     * @return true如果资源声明可以仍被写入, false 如果资源声明将不再被写入
     */
    boolean isWritable();

    /**
     * 指示是否正在使用资源声明。如果资源声明是可写的，或者至少一个内容声明仍引用该资源声明​​，则认为该资源声明​​正在使用中
     */
    boolean isInUse();

    /**
     * 提供ResourceClaim对象的自然顺序。默认情况下，它们按ID，容器，容器的section排序
     */
    @Override
    default int compareTo(final ResourceClaim other) {
        final int idComparison = getId().compareTo(other.getId());
        if (idComparison != 0) {
            return idComparison;
        }

        final int containerComparison = getContainer().compareTo(other.getContainer());
        if (containerComparison != 0) {
            return containerComparison;
        }

        return getSection().compareTo(other.getSection());
    }
}
```

```java
public class StandardResourceClaim implements ResourceClaim, Comparable<ResourceClaim> {
    private final ResourceClaimManager claimManager;
    private final String id;
    private final String container;
    private final String section;
    private final boolean lossTolerant;
    private final int hashCode;
    private volatile boolean writable = true;

    public StandardResourceClaim(final ResourceClaimManager claimManager, final String container, final String section, final String id, final boolean lossTolerant) {
        this.claimManager = claimManager;
        this.container = container.intern();
        this.section = section.intern();
        this.id = id;
        this.lossTolerant = lossTolerant;

        hashCode = 17 + 19 * id.hashCode() + 19 * container.hashCode() + 19 * section.hashCode();
    }

    @Override
    public boolean isLossTolerant() {
        return lossTolerant;
    }

    /**
     * @return the unique identifier for this claim
     */
    @Override
    public String getId() {
        return id;
    }

    /**
     * @return the container identifier in which this claim is held
     */
    @Override
    public String getContainer() {
        return container;
    }

    /**
     * @return the section within a given container the claim is held
     */
    @Override
    public String getSection() {
        return section;
    }

    @Override
    public boolean equals(final Object other) {
        if (this == other) {
            return true;
        }

        if (other == null) {
            return false;
        }
        if (hashCode != other.hashCode()) {
            // We check hash code before instanceof because instanceof is fairly expensive and for
            // StandardResourceClaim, calling hashCode() simply returns a pre-calculated value.
            return false;
        }

        if (!(other instanceof ResourceClaim)) {
            return false;
        }
        final ResourceClaim otherClaim = (ResourceClaim) other;
        return id.equals(otherClaim.getId()) && container.equals(otherClaim.getContainer()) && section.equals(otherClaim.getSection());
    }

    @Override
    public int hashCode() {
        return hashCode;
    }

    @Override
    public String toString() {
        return "StandardResourceClaim[id=" + id + ", container=" + container + ", section=" + section + "]";
    }

    @Override
    public boolean isWritable() {
        return writable;
    }

    /**
     * 冻结资源声明，以便其不再被写入
     */
    void freeze() {
        this.writable = false;
    }

    @Override
    public boolean isInUse() {
        return isWritable() || claimManager.getClaimantCount(this) > 0;
    }
```