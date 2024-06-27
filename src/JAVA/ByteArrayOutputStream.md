---
title: ByteArrayOutputStream
date: 2021-03-02
category: Java
---

## 什么是Java ByteArrayOutputStream

ByteArrayOutputStream 对byte类型数据进行写入的类 相当于一个中间缓冲层，将类写入到文件等其他outputStream。它是对字节进行操作，属于内存操作流

```java
public class ByteArrayOutputStream extends OutputStream {
}
```

## 成员和方法

```java
protected byte buf[];
//数据存储的地方
protected int count;
//计数器  表示数据的个数
```

ByteArrayOutputStream的构造方法有两个；

```java
//创建一个新的 byte 数组输出流。缓冲区的容量最初是 32 字节，如有必要可增加其大小
public ByteArrayOutputStream() {
    this(32);
}
//创建一个新的 byte 数组输出流，它具有指定大小的缓冲区容量（以字节为单位）
public ByteArrayOutputStream(int size) {
    if (size < 0) {
        throw new IllegalArgumentException("Negative initial size: "
                                            + size);
    }
    buf = new byte[size];
}
```

ByteArrayOutputStream中有write()方法：

```java
//将指定的int类型的数据写入此 byte 数组输出流
public  void write(int b){
        ensureCapacity(count + 1);
        buf[count] = (byte) b;
        count += 1;
}
 
/**将指定 byte 数组中从偏移量 
    off 开始的 
    len 个字节写入此 byte 数组输出流。*/
public  void write(byte b[], int off, int len){
        if ((off < 0) || (off > b.length) || (len < 0) ||
            ((off + len) - b.length > 0)) {
            throw new IndexOutOfBoundsException();
        }
        ensureCapacity(count + len);
        System.arraycopy(b, off, buf, count, len);
        count += len;
}
```

其他方法

```java
/**将此 byte 数组输出流的全部内容写入到指定的输出流参数中，
这与使用out.write(buf, 0, count) 调用该输出流的 write 方法效果一样*/
public synchronized void writeTo(OutputStream out) throws IOException {
    out.write(buf, 0, count);
}
```

```java
/**将此 byte 数组输出流的 
    count 字段重置为零，从而丢弃输出流中目前已累积的所有输出。通过重新使用已分配的缓冲区空间，
    可以再次使用该输出流*/
public synchronized void reset() {
    count = 0;
}
```

```java
//创建一个新分配的 byte 数组。其大小是此输出流的当前大小，并且缓冲区的有效内容已复制到该数组中。
public synchronized byte toByteArray()[] {
    return Arrays.copyOf(buf, count);
}
```

## 扩容方式

ByteArrayOutputStream是byte类型的属猪进行自动扩容的。当写入长度大于数组原有长度时，就会自动调用grow()方法, buf数组是动态增长的 先扩容为2倍，如果size还是不够 就让数组f的sieze等于minCapacity

```java
//扩容方法：
private void ensureCapacity(int minCapacity) {
    // overflow-conscious code
    if (minCapacity - buf.length > 0)
        grow(minCapacity);
}

//grow方法：
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = buf.length;
    int newCapacity = oldCapacity << 1;
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    buf = Arrays.copyOf(buf, newCapacity);
}
```

