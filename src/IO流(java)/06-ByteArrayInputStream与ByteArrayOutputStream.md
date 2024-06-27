---
title: 六 ByteArrayInputStream与ByteArrayOutputStream
date: 2021-03-03
category: Java
author: 张诚
---

> 转自：http://blog.csdn.net/zhaoyanjun6/article/details/54946762  
> 本文出自[【赵彦军的博客】](http://blog.csdn.net/zhaoyanjun6/)

### 类的继承关系

```
InputStream
|__ ByteArrayInputStream
```

```
OutputStream
|__ ByteArrayOutputStream
```

`ByteArrayInputStream` 可以将字节数组转化为输入流 。  
`ByteArrayOutputStream`可以捕获内存缓冲区的数据，转换成字节数组。

### `ByteArrayInputStream`

* 构造函数

```java
public ByteArrayInputStream(byte buf[])

public ByteArrayInputStream(byte buf[], int offset, int length)
```

* 一般方法

```java
void  close() // 关闭该流并释放与之关联的所有资源。

String	getEncoding() //返回此流使用的字符编码的名称。

int	 read()  //读取单个字符。

int	 read(char[] cbuf, int offset, int length) //将字符读入数组中的某一部分。

boolean  ready() //判断此流是否已经准备好用于读取。
```

### `ByteArrayOutputStream`

* 构造函数

```java
public ByteArrayOutputStream()

public ByteArrayOutputStream(int size)
```

* 一般方法

```java
void write(int b)

void write(byte b[], int off, int len)

void writeTo(OutputStream out)

byte toByteArray()[]

void close()
```

#### **练习1**

字节流`ByteArrayInputStream`的读写过程测试

```java
package com.app;
import java.io.ByteArrayInputStream;
import java.io.IOException;

public class A7 {

	public static void main(String[] args) {

		String mes = "hello,world" ;
		byte[] b = mes.getBytes() ;

		ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream( b ) ;
		int result = -1  ;

		while( ( result = byteArrayInputStream.read() ) != -1){
			System.out.println( (char) result );
		}

		try {
			byteArrayInputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
```

效果：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA5MTQxNjQxMzYw?x-oss-process=image/format,png)

#### **练习2**

将`ByteArrayOutputStream`读出的字节流用`FileOutputStream`写入文件

```java
package com.app;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class A6 {

	public static void main(String[] args) {

		String mes = "你好,world" ;
		byte[] b = mes.getBytes() ;

		ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream() ;
		try {
			byteArrayOutputStream.write( b );

			FileOutputStream fileOutputStream = new FileOutputStream( new File( "F:/123.txt" ) ) ;

			byteArrayOutputStream.writeTo( fileOutputStream ) ;

			fileOutputStream.flush();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				byteArrayOutputStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

}
```

效果：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA5MTQxMzU1MjM1?x-oss-process=image/format,png)