---
title: Spring Retry
date: 2022-02-16
category: Spring学习随笔
tags: 
  - Spring学习随笔
author: 张诚
location: BeiJing
---

- https://www.baeldung.com/spring-retry
- 

## 概览

`Spring Retry`提供了自动重新调用失败操作的能力。当错误可能是暂时的(比如短暂的网络故障时)，这很有帮助。

在本教程中，我们将看到使用[Spring Retry](https://github.com/spring-projects/spring-retry)的各种方法:注解、RetryTemplate和回调。

## Maven 依赖

```xml
<dependency>
    <groupId>org.springframework.retry</groupId>
    <artifactId>spring-retry</artifactId>
    <version>1.3.0</version>
</dependency>
```
当然我们还需要aop的依赖
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>5.3.14</version>
</dependency>
```

## 启用Spring Retry

要在应用程序中启用`Spring Retry`，我们需要在`@Configuration`类中添加`@EnableRetry`注解:

```java
@Configuration
@EnableRetry
public class AppConfig { ... }

```

## 使用Spring Retry


