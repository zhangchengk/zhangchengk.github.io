---
title: SpringBoot源码搭建
date: 2020-04-14
category: SpringBoot
tags: 
  - SpringBoot
author: 张诚
location: BeiJing  
---

源码的搭建还是很简单的  使用码云急速下载源码

```
git clone -b master git@gitee.com:mirrors/spring-boot.git
```

最新的master分支是gradle，把Git分支切到2.2x，然后使用maven clean install

![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/1.png)

![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/2.png)

期间有可能遇到一些maven构建时的问题(我是没遇到什么问题)，得自行解决(都可以解决的，别人都可以顺顺利利的构建成功)

![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/3.png)

我这边是不到2分钟就构建完了
![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/4.png)

在spring-boot-project下面新建一个子moudle：spring-boot-example

![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/5.png)

pom.xml(其中设置了disable.check)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
		 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-parent</artifactId>
		<version>${revision}</version>
		<relativePath>../spring-boot-parent</relativePath>
	</parent>
	<properties>
		<main.basedir>${basedir}/../..</main.basedir>
		<disable.checks>true</disable.checks>
	</properties>
	<scm>
		<url>${git.url}</url>
		<connection>${git.connection}</connection>
		<developerConnection>${git.developerConnection}</developerConnection>
	</scm>
	<modelVersion>4.0.0</modelVersion>
	<artifactId>spring-boot-example</artifactId>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-autoconfigure</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
	</dependencies>
</project>
```

测试的代码也是从网上摘录的

Application.java

```java
package org.springframework.boot.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	public static void main(String[] args) {
		System.out.println("http://localhost:6011/web/test");
		SpringApplication.run(Application.class, args);	}
}
```

WebController.java

```java
package org.springframework.boot.example;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/web", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
@ResponseBody
public class WebController {

	@GetMapping(value = "/test")
	public List test() {
		List list = new ArrayList();
		list.add("这是测试");
		return list;
	}
}

```

application.yml

```
server:
  port: 6011

spring:
  application:
    name: spring-boot-example

```

运行Application

![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/6.png)

访问网页
![](https://gitee.com/zhangchengk/image/raw/master/Spring/SpringBoot/SpringBoot源码搭建/7.png)

OK 成功了。

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/image/raw/master/wechat.jpg)