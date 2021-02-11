---
title: ResourceClaimManager
date: 2020-07-01
categories: 
  -
tags: 
  -
author: 张诚
location: BeiJing
publish: false
---


```java
/**
 * 负责管理应用程序中使用的所有ResourceClaims
 */
public interface ResourceClaimManager {

    /**
     * 使用给定的id，container，section和损失容忍度创建一个新的Resource Claim。
     *
     * @param id of claim
     * @param container of claim
     * @param section of claim
     * @param lossTolerant of claim
     * @param writable whether or not the claim should be made writable
     * @return new claim
     */
    ResourceClaim newResourceClaim(String container, String section, String id, boolean lossTolerant, boolean writable);

    /**
     * 如果存在则返回具有给定id，container，section的ResourceClaim，，否则为null
     *
     * @param id of claim
     * @param container of claim
     * @param section of claim
     * @return the existing resource claim or <code>null</code> if none exists
     */
    ResourceClaim getResourceClaim(String container, String section, String id);


    /**
     * @param claim to obtain reference count for
     * @return the number of FlowFiles that hold a claim to a particular piece of FlowFile content
     */
    int getClaimantCount(ResourceClaim claim);

    /**
     * Decreases by 1 the count of how many FlowFiles hold a claim to a
     * particular piece of FlowFile content and returns the new count
     *
     * @param claim to decrement claimants on
     * @return new claimant count
     */
    int decrementClaimantCount(ResourceClaim claim);

    /**
     * Increases by 1 the count of how many FlowFiles hold a claim to a particular piece of FlowFile content and returns the new count
     *
     * @param claim to increment claims on
     * @return new claimant count
     */
    int incrementClaimantCount(ResourceClaim claim);

    /**
     * Increases by 1 the count of how many FlowFiles hold a claim to a
     * particular piece of FlowFile content and returns the new count.
     *
     * If it is known that the Content Claim whose count is being incremented is
     * a newly created ResourceClaim, this method should be called with a value
     * of {@code true} as the second argument, as it may allow the manager to
     * optimize its tasks, knowing that the Content Claim cannot be referenced
     * by any other component
     *
     * @param claim to increment
     * @param newClaim provides a hint that no other process can have access to this
     *            claim right now
     * @return new claim count
     */
    int incrementClaimantCount(ResourceClaim claim, boolean newClaim);

    /**
     * Indicates that the given ResourceClaim can now be destroyed by the
     * appropriate Content Repository. This should be done only after it is
     * guaranteed that the FlowFile Repository has been synchronized with its
     * underlying storage component. This way, we avoid the following sequence
     * of events:
     * <ul>
     * <li>FlowFile Repository is updated to indicate that FlowFile F no longer depends on ResourceClaim C</li>
     * <li>ResourceClaim C is no longer needed and is destroyed</li>
     * <li>The Operating System crashes or there is a power failure</li>
     * <li>Upon restart, the FlowFile Repository was not synchronized with its underlying storage mechanism and as such indicates that FlowFile F needs ResourceClaim C.</li>
     * <li>Since ResourceClaim C has already been destroyed, it is inaccessible, and FlowFile F's Content is not found, so the FlowFile is removed, resulting in data loss.</li>
     * </ul>
     *
     * <p>
     * Using this method of marking the ResourceClaim as destructable only when the FlowFile repository has been synced with the underlying storage mechanism, we can ensure that on restart, we will
     * not point to this unneeded claim. As such, it is now safe to destroy the contents.
     * </p>
     *
     * @param claim to mark as now destructable
     */
    void markDestructable(ResourceClaim claim);

    /**
     * Drains up to {@code maxElements} Content Claims from the internal queue
     * of destructable content claims to the given {@code destination} so that
     * they can be destroyed.
     *
     * @param destination to drain to
     * @param maxElements max items to drain
     */
    void drainDestructableClaims(Collection<ResourceClaim> destination, int maxElements);

    /**
     * Drains up to {@code maxElements} Content Claims from the internal queue
     * of destructable content claims to the given {@code destination} so that
     * they can be destroyed. If no ResourceClaim is ready to be destroyed at
     * this time, will wait up to the specified amount of time before returning.
     * If, after the specified amount of time, there is still no ResourceClaim
     * ready to be destroyed, the method will return without having added
     * anything to the given {@code destination}.
     *
     * @param destination to drain to
     * @param maxElements max items to drain
     * @param timeout maximum time to wait
     * @param unit unit of time to wait
     */
    void drainDestructableClaims(Collection<ResourceClaim> destination, int maxElements, long timeout, TimeUnit unit);

    /**
     * Clears the manager's memory of any and all ResourceClaims that it knows
     * about
     */
    void purge();

    /**
     * Freezes the Resource Claim so that it can no longer be written to
     *
     * @param claim the resource claim to freeze
     */
    void freeze(ResourceClaim claim);

    /**
     * Indicates whether or not the given Resource Claim is awaiting destruction
     * @param claim the resource claim
     * @return <code>true</code> if the Resource Claim is awaiting destruction, <code>false</code> otherwise
     */
    boolean isDestructable(ResourceClaim claim);
}
```