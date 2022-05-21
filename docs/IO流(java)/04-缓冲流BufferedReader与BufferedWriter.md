---
title: 四 缓冲流BufferedReader与BufferedWriter
date: 2021-03-03
category: Java
author: 张诚
---



> 转自：http://blog.csdn.net/zhaoyanjun6/article/details/54911237  
> 本文出自[【赵彦军的博客】](http://blog.csdn.net/zhaoyanjun6/)

* 类的继承关系

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

**`BufferedReader`**

* 构造函数

```java
BufferedReader(Reader in, int sz) //创建一个使用指定大小输入缓冲区的缓冲字符输入流。 

BufferedReader(Reader in) //创建一个使用默认大小输入缓冲区的缓冲字符输入流。
```
* 方法

```java
int  read()  //读取单个字符。
int  read(char[] cbuf, int off, int len)  //将字符读入数组的某一部分。
String  readLine()  //读取一个文本行。
boolean	 ready()  //判断此流是否已准备好被读取。
void  reset()  //将流重置到最新的标记。
long  skip(long n)  //跳过字符。
void  close() //关闭该流并释放与之关联的所有资源。
void  mark(int readAheadLimit) //标记流中的当前位置。
boolean  markSupported() //判断此流是否支持 mark() 操作（它一定支持）。
```

**`BufferedWriter`**

* 构造函数

```java
BufferedWriter(Writer out, int sz) //创建一个使用给定大小输出缓冲区的新缓冲字符输出流。

BufferedWriter(Writer out) //建一个使用默认大小输出缓冲区的缓冲字符输出流。
```

* 方法

```java
void  close()  // 关闭此流，但要先刷新它。
void  flush()  //刷新该流的缓冲。
void  newLine() //写入一个行分隔符。
void  write(char[] cbuf, int off, int len) //写入字符数组的某一部分。
void  write(int c) //写入单个字符。
void  write(String s, int off, int len) //写入字符串的某一部分。
```

**实战演练**  
复制F盘里面的一个txt文本

```java
package com.app;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;

public class A4 {
	public static void main(String[] args) {

		String filePath = "F:/123.txt" ;
		String filePath2 = "F:/abc.txt" ;

		File file = new File( filePath ) ;
		File file2 = new File( filePath2 ) ;
		copyFile( file , file2 );
	}

	private static void copyFile( File oldFile , File newFile ){
		Reader reader = null ;
		BufferedReader bufferedReader = null ;

		Writer writer = null ;
		BufferedWriter bufferedWriter  = null ;
		try {
			reader = new FileReader( oldFile ) ;
			bufferedReader = new BufferedReader( reader ) ;

			writer = new FileWriter( newFile ) ;
			bufferedWriter = new BufferedWriter( writer ) ;

			String result = null ; //每次读取一行的内容
			while (  (result = bufferedReader.readLine() ) != null ){
				bufferedWriter.write( result );  //把内容写入文件
				bufferedWriter.newLine();  //换行，result 是一行数据，所以没写一行就要换行 
			}

			bufferedWriter.flush();  //强制把数组内容写入文件

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}finally {
			try {
				bufferedWriter.close();  //关闭输出流
			} catch (IOException e) {
				e.printStackTrace();
			}

			try {
				bufferedReader.close();  //关闭输入流
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
```

运行结果：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA3MTU0MTQ1MTQ5?x-oss-process=image/format,png)