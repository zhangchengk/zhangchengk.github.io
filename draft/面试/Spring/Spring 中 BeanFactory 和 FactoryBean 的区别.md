---
title: Spring 中 BeanFactory 和 FactoryBean 的区别
date: 2023-07-27
category: 面试
---

首先，Spring 里面的核心功能是 IOC 容器，所谓 IOC 容器呢，本质上就是一个 Bean 的容器或者是一个 Bean 的工厂。 

它能够根据 xml 里面声明的 Bean 配置进行 bean 的加载和初始化，然后 `BeanFactory` 来生产我们需要的各种各样的 Bean。 所以我对 BeanFactory 的理解了有两个。

- BeanFactory 是所有 Spring Bean 容器的顶级接口，它为 Spring 的容器定义了 一套规范，并提供像 getBean 这样的方法从容器中获取指定的 Bean 实例。BeanFactory 在产生 Bean 的同时，还提供了解决 Bean 之间的依赖注入的能力， 也就是所谓的 DI。

- FactoryBean 是一个工厂 Bean，它是一个接口，主要的功能是动态生成某一个 类型的 Bean 的实例，也就是说，我们可以自定义一个 Bean 并且加载到 IOC 容 器里面。它里面有一个重要的方法叫 getObject()，这个方法里面就是用来实现动态构建 Bean 的过程。 Spring Cloud 里 面 的 OpenFeign 组 件 ， 客 户 端 的 代 理 类 ， 就 是 使 用 了 FactoryBean 来实现的。

