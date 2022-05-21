---
title: 七 Commons IO 2.5-FileUtils
date: 2021-03-03
category: Java
author: 张诚
---

> 转自：http://blog.csdn.net/zhaoyanjun6/article/details/54972773  
> 本文出自[【赵彦军的博客】](http://blog.csdn.net/zhaoyanjun6/)

在上面的几篇文章中，介绍了IO的常规用法，今天介绍`Commons IO`框架的使用。

### Commons IO简介

Apache Commons IO是Apache基金会创建并维护的Java函数库。它提供了许多类使得开发者的常见任务变得简单，同时减少重复代码，这些代码可能遍布于每个独立的项目中，你却不得不重复的编写。这些类由经验丰富的开发者维护，对各种问题的边界条件考虑周到，并持续修复相关bug。最新版本2.5

下载地址：http://commons.apache.org/proper/commons-io/download_io.cgi

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjA5MTgwNzM2Njk1?x-oss-process=image/format,png)

### 福利

* Maven引用

```xml
<dependency>
  <groupId>org.apache.commons.io</groupId>
  <artifactId>commonsIO</artifactId>
  <version>2.5.0</version>
  <type>pom</type>
</dependency>
```

* Gradle引用

```xml
compile 'org.apache.commons.io:commonsIO:2.5.0'
```

* 1

### FileUtils 文件操作工具类

* 复制文件夹

```java
//复制文件夹（文件夹里面的文件内容也会复制），file1和file2平级。
//参数1：文件夹； 参数2：文件夹
void copyDirectory( file1 , file2 );  

//复制文件夹到另一个文件夹。 file1是file2的子文件夹.
//参数1：文件夹； 参数2：文件夹
void copyDirectoryToDirectory( file1 , file2 );

//复制文件夹，带有文件过滤功能
void copyDirectory(File srcDir, File destDir, FileFilter filter)
```

* 复制文件

```java
void copyFile(final File srcFile, final File destFile) //复制文件到另外一个文件

void long copyFile(final File input, final OutputStream output) //复制文件到输出流

void copyFileToDirectory( file1 , file2)  //复制文件到一个指定的目录

//把输入流里面的内容复制到指定文件
void copyInputStreamToFile( InputStream source, File destination)

//把URL 里面内容复制到文件。可以下载文件。
//参数1：URL资源 ； 参数2：目标文件
void copyURLToFile(final URL source, final File destination)

//把URL 里面内容复制到文件。可以下载文件。
//参数1：URL资源 ； 参数2：目标文件；参数3：http连接超时时间 ； 参数4：读取超时时间
void copyURLToFile(final URL source, final File destination,
                                     final int connectionTimeout, final int readTimeout)
```

#### 实战演练

* 复制文件夹

```java
package com.app;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class A1 {

	public static void main(String[] args) {
		String filePath1 = "F:/dd" ;
		File file1 = new File( filePath1 ) ;

		String filePath2 = "F:/ee" ;
		File file2 = new File( filePath2 ) ;

		try {
		    //复制文件夹
			FileUtils.copyDirectory( file1 , file2 );
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
```


* 复制文件

```java
String filePath1 = "F:/123.gif" ;
String filePath2 = "F:/abc.gif" ;

File file1 = new File( filePath1 ) ;
File file2 = new File( filePath2 ) ;

//复制文件		
FileUtils.copyFile( file1 , file2);
```

* 下载文件 `copyURLToFile(final URL source, final File destination)`

```java
package com.app;

import java.io.File;
import java.io.IOException;
import java.net.URL;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {
		String url = "http://imgsrc.baidu.com/baike/pic/item/7aec54e736d12f2ee289bffe4cc2d5628435689b.jpg" ;

		String filePath2 = "F:/abc.jpg" ;
		File file2 = new File( filePath2 ) ;

		try {

			//把服务器上图片下载到本地F盘的abc.jpg图片
			FileUtils.copyURLToFile( new URL( url ) , file2 );

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```

* 把字符串写入文件

```java
void writeStringToFile(final File file, final String data, final String encoding)

//参数1：需要写入的文件，如果文件不存在，将自动创建。  参数2：需要写入的内容
//参数3：编码格式     参数4：是否为追加模式（ ture: 追加模式，把字符串追加到原内容后面）
void writeStringToFile(final File file, final String data, final Charset encoding, final boolean
            append)
```

小例子

```java
package com.app;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {
		String mes = "下班了" ;

		String filePath2 = "F:/abc.xml" ;
		File file2 = new File( filePath2 ) ;

		try {
			FileUtils.writeStringToFile( file2 , mes , "UTF-8" , true ); 
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```

* 把字节数组写入文件

```java
//File:目标文件
//byte[]： 字节数组
//boolean append ： 是否为追加模式
//final int off: 数组开始写入的位置 ; final int len ：写入的长度

void writeByteArrayToFile(final File file, final byte[] data)

void writeByteArrayToFile(final File file, final byte[] data, final boolean append)

void writeByteArrayToFile(final File file, final byte[] data, final int off, final int len)

void writeByteArrayToFile(final File file, final byte[] data, final int off, final int len,
                                            final boolean append)
```

小例子

```java
package com.app;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {
		String mes = "哈哈，下班了" ;

		String filePath2 = "F:/abc.txt" ;
		File file2 = new File( filePath2 ) ;

		try {
			byte[] mesArray = mes.getBytes() ;
			FileUtils.writeByteArrayToFile( file2 , mesArray );
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```

* 把集合里面的内容写入文件

```java
//File file: 目标文件
//Collection<?> lines: 内容集合
//boolean append : 是否为追加模式
//String encoding : 编码方式，比如"UTF-8" 
//String lineEnding : 每一行以什么结尾
void writeLines(final File file, final Collection<?> lines)

void writeLines(final File file, final Collection<?> lines, final boolean append)

void writeLines(final File file, final String encoding, final Collection<?> lines)

void writeLines(final File file, final String encoding, final Collection<?> lines,
                                  final boolean append)

void writeLines(final File file, final String encoding, final Collection<?> lines,
                                  final String lineEnding)

void writeLines(final File file, final String encoding, final Collection<?> lines,
                                  final String lineEnding, final boolean append)

void writeLines(final File file, final Collection<?> lines, final String lineEnding)

void writeLines(final File file, final Collection<?> lines, final String lineEnding,
                                  final boolean append)
```

小例子1

```java
package com.app;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		ArrayList<String> list = new ArrayList<>() ;

		String mes = "哈哈，下班了" ;
		String mes2 = "回家，回家" ;

		list.add( mes ) ;  //第一行数据
		list.add( mes2 ) ; //第二行数据

		String filePath2 = "F:/abc.txt" ;
		File file2 = new File( filePath2 ) ;

		try {
			FileUtils.writeLines( file2 , list );
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```


结果：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjEwMTM0MDQ3MTU2?x-oss-process=image/format,png)

小例子2

```java
package com.app;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		ArrayList<String> list = new ArrayList<>() ;

		String mes = "哈哈，下班了" ;
		String mes2 = "回家，回家" ;

		list.add( mes ) ;
		list.add( mes2 ) ;

		String filePath2 = "F:/abc.txt" ;
		File file2 = new File( filePath2 ) ;

		try {
			//每一行以。结尾
			FileUtils.writeLines( file2 , list, "。");
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```

结果：

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjEwMTM0ODA4MTk2?x-oss-process=image/format,png)

* 往文件里面写内容

```java
/**
* 参数解释
* File file：目标文件
* CharSequence data ： 要写入的内容
* Charset encoding；String encoding ： 编码格式
* boolean append：是否为追加模式
*/

void write(final File file, final CharSequence data, final Charset encoding)

void write(final File file, final CharSequence data, final String encoding)

void write(final File file, final CharSequence data, final Charset encoding, final boolean append)

void write(final File file, final CharSequence data, final String encoding, final boolean append)
```
小例子

```java
package com.app;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		String mes = "哈哈，下班了" ;

		String filePath2 = "F:/abc.txt" ;
		File file2 = new File( filePath2 ) ;

		try {
			FileUtils.write( file2 , mes , "utf-8" ,true );
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```
* 文件移动

```java
//文件夹移动，文件夹在内的所有文件都将移动 
void moveDirectory(final File srcDir, final File destDir)

//文件夹移动到另外一个文件内部。boolean createDestDir：如果destDir文件夹不存在，是否要创建一个
void moveDirectoryToDirectory(final File src, final File destDir, final boolean createDestDir)

//移动文件
void moveFile(final File srcFile, final File destFile)

//把文件移动到另外一个文件内部。boolean createDestDir：如果destDir文件夹不存在，是否要创建一个
void moveFileToDirectory(final File srcFile, final File destDir, final boolean createDestDir)

//移动文件或者目录到指定的文件夹内。
//boolean createDestDir：如果destDir文件夹不存在，是否要创建一个
void moveToDirectory(final File src, final File destDir, final boolean createDestDir)
```

* 清空和删除文件夹

```java
//删除一个文件夹，包括文件夹和文件夹里面所有的文件
void deleteDirectory(final File directory)

//清空一个文件夹里面的所有的内容
void cleanDirectory(final File directory)

//删除一个文件，会抛出异常
//如果file是文件夹，就删除文件夹及文件夹里面所有的内容。如果file是文件，就删除。
//如果某个文件/文件夹由于某些原因无法被删除，会抛出异常
void forceDelete(final File file)  

//删除一个文件，没有任何异常抛出
//如果file是文件夹，就删除文件夹及文件夹里面所有的内容。如果file是文件，就删除。
//如果某个文件/文件夹由于某些原因无法被删除，不会抛出任何异常
boolean deleteQuietly(final File file)
```
* 创建文件夹

```java
//创建一个文件夹，如果由于某些原因导致不能创建，则抛出异常
//一次可以创建单级或者多级目录
void forceMkdir(final File directory)

//创建文件的父级目录
void forceMkdirParent(final File file)
```

小例子1

```java
package com.app;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		String filePath = "F:/123/abc/abc.txt" ;
		File file = new File( filePath ) ;

		try {
			//一次可以创建单级或者多级目录
			FileUtils.forceMkdir(file);
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```


效果图：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjEwMTU0NzU5OTcx?x-oss-process=image/format,png)

小例子1

```java
package com.app;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		String filePath = "F:/123/abc/abc.txt" ;
		File file = new File( filePath ) ;

		try {
		//创建文件的父级目录
		FileUtils.forceMkdirParent(file);
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```

效果：  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjEwMTU0NTQ1MjA1?x-oss-process=image/format,png)

* 文件获取输入/输出流

```java
//获取输入流
FileInputStream openInputStream(final File file)

//获取输出流
FileOutputStream openOutputStream(final File file)
```

* 读取文件

```java
//把文件读取到字节数组里面
byte[] readFileToByteArray(final File file)

//把文件读取成字符串 ；Charset encoding：编码格式
String readFileToString(final File file, final Charset encoding)

//把文件读取成字符串 ；String encoding：编码格式
String readFileToString(final File file, final String encoding)

//把文件读取成字符串集合 ；Charset encoding：编码格式
List<String> readLines(final File file, final Charset encoding)

//把文件读取成字符串集合 ；String encoding：编码格式
List<String> readLines(final File file, final String encoding)
```
* 测试两个文件的修改时间那个比较新/老

```java
//判断file文件的修改是否比reference文件新
boolean isFileNewer(final File file, final File reference) 

//判断file文件的修改是否比 date日期新
boolean isFileNewer(final File file, final Date date)

//判断file文件的修改是否比 timeMillis 毫秒值新
boolean isFileNewer(final File file, final long timeMillis) 

//判断file文件的修改是否比reference文件老
boolean isFileOlder(final File file, final File reference)

//判断file文件的修改是否比 date日期老
boolean isFileOlder(final File file, final Date date)

//判断file文件的修改是否比 timeMillis 毫秒值老
boolean isFileOlder(final File file, final long timeMillis)
```
* 其他

```java
//判断文件夹内是否包含某个文件或者文件夹
boolean directoryContains(final File directory, final File child)

//获取文件或者文件夹的大小
long sizeOf(final File file) 

//获取临时目录文件
File getTempDirectory()

//获取临时目录路径
String getTempDirectoryPath() 

//获取用户目录文件  
File getUserDirectory()

//获取用户目录路径  
static String getUserDirectoryPath()

//如果不存在,新建文件或者创建单级目录或者多级目录    
//如果存在,修改文件修改时间   
void touch(final File file)

//比较两个文件内容是否相同
boolean contentEquals(final File file1, final File file2)
```
小例子

```java
package com.app;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class A8 {

	public static void main(String[] args) {

		String filePath = "F:/123" ;
		File file = new File( filePath ) ;

		File child = new File("F:/123/abc/123.txt") ;

		try {
			boolean hasChild = FileUtils.directoryContains( file , child) ;
			System.out.println( hasChild );
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
}
```


效果图  
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMjEwMTYwMjI5MzIy?x-oss-process=image/format,png)