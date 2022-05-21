---
title: Contended
date: 2021-03-18
category: 技术汇总
author: 张诚
---

解决伪共享问题。

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.TYPE})
public @interface Contended {
    String value() default "";
}
```

## 原理及配置

基本上，当我们用这个注解注释一个字段时，Hotspot JVM将在注释字段周围添加一些填充。这样，它可以确保字段驻留在自己的Cache Line上。此外，如果我们用这个注解注释整个类，hotsopt jvm将在所有字段之前添加相同的填充。

@Contended注解旨在由JDK本身在内部使用。因此，默认情况下，它不会影响非内部对象的内存布局。这就是为什么我们的复制粘贴加法器的性能不如内置加法器的原因。

要删除此仅供内部使用的限制，我们可以在重新运行基准测试时使用-XX：-RestrictContended

默认情况下，@confered注释添加128字节的填充。这主要是因为在许多现代处理器中，缓存线的大小约为64/128字节。

但是，这个值可以通过-XX:conferedpaddingwidth调整标志进行配置。在编写本文时，此标志仅接受0到8192之间的值。

也可以通过-XX:-enableConflued调谐来禁用@contelled效果。当内存很贵，我们可以承受一点（有时甚至很多）性能损失时，这可能会被证明是有用的。

## Use Cases

### Thread

java.lang.Thread在java中，生成随机数是和线程有着关联。而且在很多情况下，多线程下产生随机数的操作是很常见的，JDK为了确保产生随机数的操作不会产生false sharing ,把产生随机数的三个相关值设为独占cache line。

```java
// 以下三个最初未初始化的字段仅由类java.util.concurrent.ThreadLocalRandom管理。这些字段用于在并发代码中构建高性能PRNGs，因此我们不会冒意外的错误共享的风险。因此，这些字段用@Contended隔离。

/** ThreadLocalRandom的当前种子 */
@sun.misc.Contended("tlr")
long threadLocalRandomSeed;

/** 探针哈希值；如果threadLocalRandomSeed初始化，则为非零 */
@sun.misc.Contended("tlr")
int threadLocalRandomProbe;

/** 从公共ThreadLocalRandom序列中分离出的次要种子 */
@sun.misc.Contended("tlr")
int threadLocalRandomSecondarySeed;
```

### ConcurrentHashMap

在并发条件下进行++操作。因为++这个操作并不是原子的，而且在连续的Atomic中，很容易产生伪共享（false sharing）。所以在其内部有专门的数据结构来保存long型的数据
```java
    /* ---------------- Counter support -------------- */

    /**
     * 填充计数的填充单元格。改编自LongAdder和Striped64。请参阅其内部文档以获取解释。
     */
    @sun.misc.Contended static final class CounterCell {
        volatile long value;
        CounterCell(long x) { value = x; }
    }
```

```java
    /**
     * 计数器单元格表。非空时，大小是2的幂。
     */
    private transient volatile CounterCell[] counterCells;
```