---
title: HikariCP文档简译
date: 2021-05-31
category:  HikariCP
author: 张诚
---

快速、简单、可靠。 HikariCP是一个"zero-overhead"的JDBC连接池应用。该库大约为130Kb，非常轻巧。

## Down the Rabbit Hole

这里我们进行一些设计说明，当您使用像我们这样的基准时，必须解决一定程度的怀疑。如果您考虑性能和连接池，您可能会认为pool是性能方程式中最重要的部分。与其他 JDBC 操作相比，getConnection() 操作的数量很少。通过优化包装了Connection，Statement等的代理，可以大大提高性能。

### 🧠 We're in your bytecodez

为了使 HikariCP 尽可能快，我们进行了字节码级工程，甚至更高。我们拿出了我们知道的每一个技巧来帮助 JIT 帮助您。我们研究了编译器的字节码输出，甚至 JIT 的汇编输出，以将关键例程限制为小于 JIT 内联阈值。我们扁平化继承层次结构，隐藏成员变量，消除强制转换。

### 🔬 Micro-optimizations

HikariCP 包含许多单独的微优化，它们几乎无法衡量，但结合起来可以提高整体性能。其中一些优化是在数百万次调用中分摊的几分之一毫秒内衡量的。

#### ArrayList

一项重要的（性能方面的）优化是在ConnectionProxy 中消除使用 `ArrayList<Statement>` 实例跟踪打开的 Statement。当一个 Statement 关闭时，它必须从这个集合中移除，当 Connection 关闭时，它必须迭代集合并关闭所有打开的 Statement 实例，最后必须清除集合。 Java ArrayList 明智地用于通用用途，在每次 get(int index) 调用时执行范围检查。但是，因为我们可以提供关于范围的保证，所以这个检查仅仅是开销。

此外，remove(Object) 实现执行从头到尾的扫描，但是 JDBC 编程中的常见模式是在使用后立即关闭 Statements，或以相反的打开顺序。对于这些情况，从尾部开始的扫描性能会更好。因此，`ArrayList<Statement>` 被替换为自定义类 `FastList`，它消除了范围检查并执行从尾部到头部的移除扫描。

#### ConcurrentBag

HikariCP 包含一个名为 _ConcurrentBag_ 的自定义无锁集合。这个想法是从 C# .NET ConcurrentBag 类借来的，但内部实现却大不相同。 _ConcurrentBag_ 提供...

* A lock-free design
* ThreadLocal caching
* Queue-stealing
* Direct hand-off optimizations

...导致高度并发，极低的延迟，并最大限度地减少 [false-sharing](http://en.wikipedia.org/wiki/False_sharing) 的发生。

#### Invocation: invokevirtual vs invokestatic

为了为 Connection、Statement 和 ResultSet 实例生成代理，HikariCP 最初使用一个单例工厂，在 ConnectionProxy 的情况下保存在静态字段 (PROXY_FACTORY) 中。

有十几种类似于以下的方法：

```java
public final PreparedStatement prepareStatement(String sql, String[] columnNames) throws SQLException {
    return PROXY_FACTORY.getProxyPreparedStatement(this, delegate.prepareStatement(sql, columnNames));
}
```

使用原始单例工厂，生成的字节码如下所示：

```java
    public final java.sql.PreparedStatement prepareStatement(java.lang.String, java.lang.String[]) throws java.sql.SQLException;
    flags: ACC_PRIVATE, ACC_FINAL
    Code:
      stack=5, locals=3, args_size=3
         0: getstatic     #59                 // Field PROXY_FACTORY:Lcom/zaxxer/hikari/proxy/ProxyFactory;
         3: aload_0
         4: aload_0
         5: getfield      #3                  // Field delegate:Ljava/sql/Connection;
         8: aload_1
         9: aload_2
        10: invokeinterface #74,  3           // InterfaceMethod java/sql/Connection.prepareStatement:(Ljava/lang/String;[Ljava/lang/String;)Ljava/sql/PreparedStatement;
        15: invokevirtual #69                 // Method com/zaxxer/hikari/proxy/ProxyFactory.getProxyPreparedStatement:(Lcom/zaxxer/hikari/proxy/ConnectionProxy;Ljava/sql/PreparedStatement;)Ljava/sql/PreparedStatement;
        18: return
```

您可以看到，首先有一个 getstatic 调用来获取静态字段 PROXY_FACTORY 的值，以及（最后）对 ProxyFactory 实例上的 getProxyPreparedStatement() 的 invokevirtual 调用。

我们消除了单例工厂（由 Javassist 生成）并用具有静态方法的 final 类（其主体由 Javassist 生成）取而代之。 Java代码变成了：
```java
public final PreparedStatement prepareStatement(String sql, String[] columnNames) throws SQLException
{
    return ProxyFactory.getProxyPreparedStatement(this, delegate.prepareStatement(sql, columnNames));
}
```

其中 getProxyPreparedStatement() 是 ProxyFactory 类中定义的静态方法。产生的字节码为：
```java
    private final java.sql.PreparedStatement prepareStatement(java.lang.String, java.lang.String[]) throws java.sql.SQLException;
    flags: ACC_PRIVATE, ACC_FINAL
    Code:
      stack=4, locals=3, args_size=3
         0: aload_0
         1: aload_0
         2: getfield      #3                  // Field delegate:Ljava/sql/Connection;
         5: aload_1
         6: aload_2
         7: invokeinterface #72,  3           // InterfaceMethod java/sql/Connection.prepareStatement:(Ljava/lang/String;[Ljava/lang/String;)Ljava/sql/PreparedStatement;
        12: invokestatic  #67                 // Method com/zaxxer/hikari/proxy/ProxyFactory.getProxyPreparedStatement:(Lcom/zaxxer/hikari/proxy/ConnectionProxy;Ljava/sql/PreparedStatement;)Ljava/sql/PreparedStatement;
        15: areturn
```

这里有三点需要注意：

* `getstatic` 调用消失了。
* `invokevirtual` 调用被替换为更容易被 JVM 优化的 `invokestatic` 调用。
* 最后，乍一看可能没有注意到堆栈大小从 5 个元素减少到 4 个元素。这是因为在 `invokevirtual` 的情况下，栈上有一个 ProxyFactory 实例的隐式传递（即 `this`），并且当 `getProxyPreparedStatement() 时，栈中还有一个额外的（看不见的）_pop_ `被称为。

总体而言，此更改消除了静态字段访问，堆栈中的推入和弹出操作，并使调用更容易为 JIT 优化，因为 _callsite_ 保证不会改变。

### ¯\_(ツ)_/¯ Yeah, but still...

In our benchmark, we are obviously running against a stub JDBC driver implementation, so the JIT is doing a lot of inlining. However, the same inlining at the stub-level is occurring for other pools in the benchmark. So, no inherent advantage to us.

But inlining is certainly a big part of the equation even when real drivers are in use, which brings us to another topic...

#### ⏱ Scheduler quanta

Some [light reading](http://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/5_CPU_Scheduling.html).

TL;DR Obviously, when you're running 400 threads "at once", you aren't really running them "at once" unless you have 400 cores. The operating system, using N CPU cores, switches between your threads giving each a small "slice" of time to run called a quantum.

With a lot of threads running, as in many applications, when your time-slice runs out (as a thread) it may be a "long time" before the scheduler gives you a chance to run again. It is therefore crucial that a thread get as much as possible done during its time-slice, and avoid locks that force it to give up that time-slice, otherwise there is a performance penalty to be paid. And not a small one.

Which brings us to...

#### 🐌 CPU Cache-line Invalidation
Another big hit incurred when you can't get your work done in a quanta is CPU cache-line invalidation. If your thread is preempted by the scheduler, when it does get a chance to run again all of the data it was frequently accessing is likely no longer in the core's L1 or core-pair L2 cache. Even more likely because you have no control over which core you will be scheduled on next.