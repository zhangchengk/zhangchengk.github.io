---
title: 五 转换流InputStreamReader与OutputStreamWriter
date: 2021-03-03
category: Java
author: 张诚
order: 5
---



> 转自：http://blog.csdn.net/zhaoyanjun6/article/details/54923506  
> 本文出自[【赵彦军的博客】](http://blog.csdn.net/zhaoyanjun6/)

### 类的继承关系

```
Reader
|__ BufferedReader、StringReader、InputStreamReader
                                      |__ FileReader
```

```
Writer
|__ BufferedWriter、StringWriter、OutputStreamWriter
                                      |__ FileWriter
```

### `InputStreamReader`简介

`InputStreamReader` 是字符流`Reader`的子类，是字节流通向字符流的桥梁。你可以在构造器重指定编码的方式，如果不指定的话将采用底层操作系统的默认编码方式，例如 GBK 等。要启用从字节到字符的有效转换，可以提前从底层流读取更多的字节，使其超过满足当前读取操作所需的字节。一次只读一个字符。

* `InputStreamReader`构造函数

```java
InputStreamReader(Inputstream  in) //创建一个使用默认字符集的 InputStreamReader。

InputStreamReader(Inputstream  in，Charset cs) //创建使用给定字符集的 InputStreamReader。

InputStreamReader(InputStream in, CharsetDecoder dec) //创建使用给定字符集解码器的 InputStreamReader。

InputStreamReader(InputStream in, String charsetName)  //创建使用指定字符集的 InputStreamReader。
```

* 一般方法

```java
void  close() // 关闭该流并释放与之关联的所有资源。

String	getEncoding() //返回此流使用的字符编码的名称。

int	 read()  //读取单个字符。

int	 read(char[] cbuf, int offset, int length) //将字符读入数组中的某一部分。

boolean  ready() //判断此流是否已经准备好用于读取。
```

### `OutputStreamWriter`简介

`OutputStreamWriter` 是字符流`Writer`的子类，是字符流通向字节流的桥梁。每次调用 `write()`方法都会导致在给定字符（或字符集）上调用编码转换器。在写入底层输出流之前，得到的这些字节将在缓冲区中累积。一次只写一个字符。

* `OutputStreamWriter`构造函数

```java
OutputStreamWriter(OutputStream out) //创建使用默认字符编码的 OutputStreamWriter

OutputStreamWriter(OutputStream out, String charsetName) //创建使用指定字符集的 OutputStreamWriter。

OutputStreamWriter(OutputStream out, Charset cs) //创建使用给定字符集的 OutputStreamWriter。

OutputStreamWriter(OutputStream out, CharsetEncoder enc) //创建使用给定字符集编码器的 OutputStreamWriter。
```


* 一般方法

```java
void  write(int c)   //写入的字符长度

void  write(char cbuf[])  //写入的字符数组

void  write(String str)  //写入的字符串

void  write(String str, int off, int len)  //应该写入的字符串，开始写入的索引位置，写入的长度

void  close() //关闭该流并释放与之关联的所有资源。
```

### 需要注意的事项

`InputStreamReader`、`OutputStreamWriter`实现从字节流到字符流之间的转换，使得流的处理效率得到提升，但是如果我们想要达到最大的效率，我们应该考虑使用缓冲字符流包装转换流的思路来解决问题。比如：

```java
BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
```

* 1

### 实战演练，复制文本

```java
package com.app;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class A5 {

	public static void main(String[] args) {
		String filePath = "F:/123.txt" ;
		String filePath2 = "F:/abc.txt" ;
		File file = new File( filePath ) ;
		File file2 = new File( filePath2 ) ;
		copyFile( file , file2 );

	}

	private static void copyFile( File oldFile , File newFile ){
		InputStream inputStream = null ;
		InputStreamReader inputStreamReader = null ;

		OutputStream outputStream = null ;
		OutputStreamWriter outputStreamWriter = null ;

		try {
			inputStream = new FileInputStream( oldFile ) ; //创建输入流
			inputStreamReader = new InputStreamReader( inputStream ) ; //创建转换输入流

			outputStream = new FileOutputStream( newFile ) ; //创建输出流
			outputStreamWriter = new OutputStreamWriter( outputStream ) ; //创建转换输出流

			int result = 0 ;

			while( (result = inputStreamReader.read()) != -1){  //一次只读一个字符
				outputStreamWriter.write( result ); //一次只写一个字符
			}

			outputStreamWriter.flush();  //强制把缓冲写入文件

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}finally{

			if ( outputStreamWriter != null) {
				try {
					outputStreamWriter.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

			if ( inputStreamReader != null ) {
				try {
					inputStreamReader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}
}
```

效果图：

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA4MTAwNjU2NDAx?x-oss-process=image/format,png)
