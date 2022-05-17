---
title: Spring中的FactoryBean
date: 2020-06-16
category: Spring源码深度解析
tags: 
  - Spring源码深度解析
author: Panda诚
location: BeiJing
publish: false
---

在看FactoryBean之前我们先简单回顾一下简单定义一个bean的实际操作过程。

## 新建测试Spring项目

![](https://gitee.com/zhangchengk/img/raw/master/Spring源码深度解析/4/1.png)

我编译的源码是5.1.15，并install到本地仓库

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
		 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>org.example</groupId>
	<artifactId>mySpring</artifactId>
	<version>1.0-SNAPSHOT</version>
	<dependencies>
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.13</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-beans</artifactId>
			<version>5.1.15.BUILD-SNAPSHOT</version>
		</dependency>
	</dependencies>
</project>
```
新建一个bean
```java
package com.myspring.service.impl;

public class MyTestBean {

	public String testStr = "testStr";
	public String getTestStr() {
		return testStr;
	}
	public void setTestStr(String testStr) {
		this.testStr = testStr;
	}
}

```
这么看来bean并没有任何特之处，的确，Spring目的就是让我们的bean能成为纯粹的 POJO ，这也是spring所追求的.接下来看看配置文件beanFactoryTest.xml：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

	<bean id="myTestBean" class="com.myspring.service.impl.MyTestBean"></bean>
</beans>
```
新建一个测试类，点击运行
```java
package com.myspring.test;

import com.myspring.service.impl.MyTestBean;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class BeanFactoryTest {

	@Test
	public void test() {
		BeanFactory bf = new XmlBeanFactory(new ClassPathResource("beanFactoryTest.xml"));
		MyTestBean myTestBean = (MyTestBean)bf.getBean("myTestBean");
		Assert.assertEquals("testStr",myTestBean.getTestStr());
	}

}

```

![](https://gitee.com/zhangchengk/img/raw/master/Spring源码深度解析/4/2.png)

直接使用BeanFactory作为容器对于Spring的使用来说并不多见，甚至是甚少使用，因为在企业级的应用中大多数都会使用的是ApplicationContext。

一般情况下，Spring通过反射机制利用bean的class属性指定实现类来实例化bean(就像上面例子一样)。在某些情况下，实例化bean过程比较复杂，如果按照传统的方式，则需要在`<bean>`中提供大量的配置信息，配置方式的灵活性是受限的，这时采用编码的方式可能会得到一个简单的方案。

## FactoryBean

Spring为此提供了一个org.Springframework.bean.factory.FactoryBean的工厂类接口，用户可以通过实现该接口定制实例化bean的逻辑。依旧是上面那个例子，我们改装一下。