---
title: 深入了解Java锁
date: 2021-01-26
category: Java
---

继[打印Java对象头](./打印Java对象头.md)，我们再深入探索一下Java锁。无锁状态我们就不说了，下面我们一一打印偏向锁、轻量锁，重量锁的对象头。

## 打印偏向锁

修改代码：
```java
public static void main(String[] args) throws InterruptedException {
    Thread.sleep(5000);
    A a = new A();
    synchronized (a){
        System.out.println(ClassLayout.parseInstance(a).toPrintable());
    }
}
```
输出结果：
```properties
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           05 10 80 72 (00000101 00010000 10000000 01110010) (1920995333)
      4     4           (object header)                           ca 7f 00 00 (11001010 01111111 00000000 00000000) (32714)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total
```
`00000101`表明是偏向锁。

## 打印轻量锁
修改代码：
```java
public static void main(String[] args) throws InterruptedException {
    Thread.sleep(5000);
    A a = new A();
    Thread thread1= new Thread(() -> {
        synchronized (a){
            System.out.println("thread1 locking");
            System.out.println(ClassLayout.parseInstance(a).toPrintable()); 
        }
    });
    thread1.start();
    thread1.join();
    Thread.sleep(10000);
    synchronized (a){
        System.out.println("main locking");
        System.out.println(ClassLayout.parseInstance(a).toPrintable());
    }
}
```
输出结果：
```properties
thread1 locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           05 58 94 86 (00000101 01011000 10010100 10000110) (-2037098491)
      4     4           (object header)                           db 7f 00 00 (11011011 01111111 00000000 00000000) (32731)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total

main locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           88 d9 69 0e (10001000 11011001 01101001 00001110) (241817992)
      4     4           (object header)                           00 70 00 00 (00000000 01110000 00000000 00000000) (28672)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total
```
`00000101`表示这是偏向锁，`10001000`后两位`00`表示这是轻量锁。

>我们可以看到，此时锁发生了升级，由偏向锁升级到了轻量锁。

修改代码：假设thread1不存在了，再启动thread2，观察实例a是什么锁。
```java
public static void main(String[] args) throws InterruptedException {
    Thread.sleep(5000);
    A a = new A();
    Thread thread1 = new Thread(() -> {
        synchronized (a) {
            System.out.println("thread1 locking");
            System.out.println(ClassLayout.parseInstance(a).toPrintable());
        }
    });
    thread1.start();
    thread1.join();
    long thread1Id = thread1.getId();
    System.out.println(thread1.getState());
    // 添加一段代码  有概率会在thread1不存在了再继续往下执行
    boolean isThread1NotOut = true;
    while (isThread1NotOut) {
        int activeThreadNum = Thread.currentThread().getThreadGroup().activeCount();
        Thread[] currentThreads = new Thread[activeThreadNum];
        Thread.currentThread().getThreadGroup().enumerate(currentThreads);
        boolean findThread1 = false;
        for (Thread thread : currentThreads) {
            if (thread.getId() == thread1Id) {
                findThread1 = true;
                break;
            }
        }
        isThread1NotOut = findThread1;
    }
    Thread thread2 = new Thread(() -> {
        synchronized (a) {
            System.out.println("thread2 locking");
            System.out.println(ClassLayout.parseInstance(a).toPrintable()); 
        }
    });
    thread2.start();
    thread2.join();
}
```
输出结果(有时候的结果如下，很难知道什么时候线程thread1会不存在)：
```properties
thread1 locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           05 80 84 9b (00000101 10000000 10000100 10011011) (-1685815291)
      4     4           (object header)                           f0 7f 00 00 (11110000 01111111 00000000 00000000) (32752)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total

TERMINATED
thread2 locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           05 80 84 9b (00000101 10000000 10000100 10011011) (-1685815291)
      4     4           (object header)                           f0 7f 00 00 (11110000 01111111 00000000 00000000) (32752)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total
```
`00000101`可以看到thread1与thread2运行中，a都是偏向锁，并没有升级。当然升级为轻量锁的概率还是很大的。

>所以我们反推，一个线程在第一次进入同步块时，会在对象头和栈帧中的锁记录里存储锁的偏向的线程ID。当下次该线程进入这个同步块时，会去检查锁的Mark Word里面是不是放的自己的线程ID。如果是，表明该线程已经获得了锁，以后该线程在进入和退出同步块时不需要花费CAS操作来加锁和解锁 ；如果不是，就代表有另一个线程来竞争这个偏向锁。这个时候会尝试使用CAS来替换Mark Word里面的线程ID为新线程的ID，这个时候要分两种情况：
>* 成功，表示之前的线程不存在了， Mark Word里面的线程ID为新线程的ID，锁不会升级，仍然为偏向锁；
>* 失败，表示之前的线程仍然存在，那么暂停之前的线程，设置偏向锁标识为0，并设置锁标志位为00，升级为轻量级锁，会按照轻量级锁的方式进行竞争锁。
## 打印重量锁

修改代码：
```java
public static void main(String[] args) throws InterruptedException {
    Thread.sleep(5000);
    A a = new A();
    Thread thread1 = new Thread(() -> {
        synchronized (a) {
            System.out.println("thread1 locking");
            System.out.println(ClassLayout.parseInstance(a).toPrintable()); //偏向锁
            try {
                //让线程晚点儿死亡，造成锁的竞争
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    });
    Thread thread2 = new Thread(() -> {
        synchronized (a) {
            System.out.println("thread2 locking");
            System.out.println(ClassLayout.parseInstance(a).toPrintable()); //偏向锁
            try {
                //让线程晚点儿死亡，造成锁的竞争
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    });
    thread1.start();
    thread2.start();
}
```
输出结果：
```properties
thread1 locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           0a c8 00 d8 (00001010 11001000 00000000 11011000) (-671037430)
      4     4           (object header)                           cc 7f 00 00 (11001100 01111111 00000000 00000000) (32716)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total

thread2 locking
A object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           0a c8 00 d8 (00001010 11001000 00000000 11011000) (-671037430)
      4     4           (object header)                           cc 7f 00 00 (11001100 01111111 00000000 00000000) (32716)
      8     4           (object header)                           93 c2 00 f8 (10010011 11000010 00000000 11111000) (-134167917)
     12     1   boolean A.flag                                    false
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total
```
`00001010`表明这个a已经升级为重量锁。




