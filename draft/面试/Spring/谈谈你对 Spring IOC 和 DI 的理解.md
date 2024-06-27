---
title: 谈谈你对 Spring IOC 和 DI 的理解
date: 2023-07-27
category: 面试
---

首先，Spring IOC，全称控制反转（Inversion of Control）。

在传统的 Java 程序开发中，我们只能通过 new 关键字来创建对象，这种导致程 序中对象的依赖关系比较复杂，耦合度较高。 

而 IOC 的`主要作用是实现了对象的管理`，也就是我们把设计好的对象交给了 IOC 容器控制，然后在需要用到目标对象的时候，直接从容器中去获取。 有了 IOC 容器来管理 Bean 以后，相当于把对象的创建和查找依赖对象的控制 权交给了容器，这种设计理念使得对象与对象之间是一种松耦合状态，极大提升 了程序的灵活性以及功能的复用性。


然后，DI 表示依赖注入，也就是对于 IOC 容器中管理的 Bean，如果 Bean 之间 存在依赖关系，那么 IOC 容器需要自动实现依赖对象的实例注入，

通常有三种 方法来描述 Bean 之间的依赖关系。

接口注入 

setter 注入 

构造器注入

另外，为了更加灵活的实现 Bean 实例的依赖注入，Spring 还提供了@Resource 和@Autowired 这两个注解。 分别是根据 bean 的 id 和 bean 的类型来实现依赖注入。

## Spring IoC 的工作流程

Spring 里面很多方式去定义 Bean， 比如 XML 里面的`<bean>`标签、@Service、 @Component、@Repository、@Configuration 配置类中的@Bean 注解等等。 Spring 在启动的时候，会去解析这些 Bean 然后保存到 IOC 容器里面。

Spring IOC 的工作流程大致可以分为两个阶段

第一个阶段，就是 IOC 容器的初始化 这个阶段主要是根据程序中定义的 XML 或者注解等 Bean 的声明方式,通过解析和加载后生成 BeanDefinition，然后把 BeanDefinition 注册到 IOC 容 器。

通过注解或者 xml 声明的 bean 都会解析得到一个 BeanDefinition 实体，实体中 包含这个 bean 中定义的基本属性。

最后把这个 BeanDefinition 保存到一个 Map 集合里面，从而完成了 IOC 的初始 化。

IoC 容器的作用就是对这些注册的 Bean 的定义信息进行处理和维护，它 IoC 容 器控制反转的核心。

第二个阶段，完成 Bean 初始化及依赖注入 然后进入到第二个阶段，这个阶段会做两个事情

通过反射针对没有设置 lazy-init 属性的单例 bean 进行初始化。

完成 Bean 的依赖注入。

第三个阶段，Bean 的使用 

通常我们会通过@Autowired或者BeanFactory.getBean()从IOC容器中获取指 定的 bean 实例。 另外，针对设置 layy-init 属性以及非单例 bean 的实例化，是在每次获取 bean 对象的时候，调用 bean 的初始化方法来完成实例化的，并且 Spring IOC 容器 不会去管理这些 Bean