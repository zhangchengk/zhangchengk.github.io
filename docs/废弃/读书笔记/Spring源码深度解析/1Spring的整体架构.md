---
title: Spring 整体架构
date: 2020-06-11
category: Spring源码深度解析
---

## Spring 整体架构图

Spring 框架是 个分层架构，它包含一系列的功能要素，并被分为大约 20 模块

![](./img/1/1.png)

这些模块被总结为以下几部分

## Core Container

Core Container（核心容器）包含有 Core、Beans、Context、Expressio Language 模块。Core和Beans模块是框架的基础部分，提供IoC（转控制）和依赖注入特性。这里的基础
概念是BeanFactory，它提供对 Factory 模式的经典实现来消除对程序性单例模式的需要，并真正地允许你从程序逻辑中分离出依赖关系和配置

- Core模决主要包含Spring框架基本的核心工具类，Spring的其他组件都要用到这个包里的类，Core模块是其他组件的基本核心，当然你也可以在自己的应用系统中使用这些工具类。

- Beans模块是所有应用都要用到的，它包含访问配置文件、创建和管理bean以及进行Inversion of Control/Dependency Injection (IoC/DI）操作相关的所有类。

- Context模块构建于Core、Beans模块基础之上，提供了一种类似于JNDI注册器的框架式的对象访问方法。Context模块继承了Beans的特性，为Spring核心提供了大量扩展，添加了对国际化（例如资源绑定）、事件传播、资源加载和对Context透明创建的支持。Context模块同时也支持J2EE的一些特性， 例如EJB 、JMX和基础的远程处理。ApplicationContext接口是Context模块的关键

- Expression Language模块提供了强大的表达式语言，用于在运行时查询和操纵对象。它是JSP2.1规范中定义的`unifed expression languag`的扩展。该语言支持设直/获取属性的值，属性的分配，方法的调用，访问数组上下文（ accessiong the context of arrays ）、容器和索引器、逻辑和算术运算符、命名变量以及从Sprit屯的IoC容器中根据名称检索对象。它也支持list投影、选择和一般的list聚合。

>**国际化**（internationalization）是设计和制造容易适应不同区域要求的产品的一种方式。 它要求从产品中抽离所有地域语言，国家/地区和文化相关的元素。 换言之，应用程序的功能和代码设计考虑在不同地区运行的需要，其代码简化了不同本地版本的生产。 开发这样的程序的过程，就称为国际化。通常我们用到的就是产品里的语言国际化。

>**JNDI**(Java Naming and Directory Interface,Java命名和目录接口)是SUN公司提供的一种标准的Java命名系统接口，JNDI提供统一的客户端API，通过不同的访问提供者接口JNDI服务供应接口(SPI)的实现，由管理者将JNDI API映射为特定的命名服务和目录系统，使得Java应用程序可以和这些命名服务和目录服务之间进行交互。目录服务是命名服务的一种自然扩展。两者之间的关键差别是目录服务中对象不但可以有名称还可以有属性（例如，用户有email地址），而命名服务中对象没有属性

>**JMS**即Java消息服务（Java Message Service）应用程序接口，是一个Java平台中关于面向消息中间件（MOM）的API，用于在两个应用程序之间，或分布式系统中发送消息，进行异步通信。Java消息服务是一个与具体平台无关的API，绝大多数MOM提供商都对JMS提供支持。

>**投影**（Projection）运算是指将对象转换为一种新形式的操作，该形式通常只包含那些将随后使用的属性。通过使用投影，您可以构建依据每个对象生成的新类型。

## Data Access/Integration

Data Access/Integration层包含JDBC、ORM、OXM、JMS和Transaction模块。

- JDBC模块提供了一个JDBC抽象层，它可以消除冗长的JDBC编码和解析数据库厂商特有的错误代码，这个模块包含了Spring JDBC数据访问进行封装的所有类。

- ORM模块为流行的对象－关系映射API，如JPA、JDO、Hibernate、iBatis等，提供了一个交互层。利用ORM封装包，可以混合使用所有Spring提供的特性进行O/R映射，如前边提到的简单声明性事务管理。

- OXM模块提供了一个对Object/XML映射实现的抽象层，Object/XML映射实现包括JAXB、Castor、XMLBeans、JiBX、XStream。

- JMS ( Java Messaging Service ）模块主要包含了一些制造和消费消息的特性。

- Transaction模块支持编程和声明性的事务管理，这些事务类必须实现特定的接口，并且对所有的POJO都适用

>对象关系映射（Object Relational Mapping，简称ORM）是通过使用描述对象和数据库之间映射的元数据，将面向对象语言程序中的对象自动持久化到关系数据库中。本质上就是将数据从一种形式转换到另外一种形式。 
>POJO（Plain Ordinary Java Object）简单的Java对象，实际就是普通JavaBeans，是为了避免和EJB混淆所创造的简称。使用POJO名称是为了避免和EJB混淆起来, 而且简称比较直接. 其中有一些属性及其getter setter方法的类,没有业务逻辑，有时可以作为VO(value -object)或dto(Data Transform Object)来使用.当然,如果你有一个简单的运算属性也是可以的,但不允许有业务方法,也不能携带有connection之类的方法。
>POJO 和JavaBean是我们常见的两个关键字，一般容易混淆，POJO全称是Plain Ordinary Java Object / Pure Old Java Object，中文可以翻译成：普通Java类，具有一部分getter/setter方法的那种类就可以称作POJO，但是JavaBean则比 POJO复杂很多， Java Bean 是可复用的组件，对 Java Bean 并没有严格的规范，理论上讲，任何一个 Java 类都可以是一个 Bean 。但通常情况下，由于 Java Bean 是被容器所创建（如 Tomcat) 的，所以 Java Bean 应具有一个无参的构造器，另外，通常 Java Bean 还要实现 Serializable 接口用于实现 Bean 的持久性。 Java Bean 是不能被跨进程访问的。JavaBean是一种组件技术，就好像你做了一个扳子，而这个扳子会在很多地方被拿去用，这个扳子也提供多种功能(你可以拿这个扳子扳、锤、撬等等)，而这个扳子就是一个组件。一般在web应用程序中建立一个数据库的映射对象时，我们只能称它为POJO。POJO(Plain Old Java Object)这个名字用来强调它是一个普通java对象，而不是一个特殊的对象，其主要用来指代那些没有遵从特定的Java对象模型、约定或框架（如EJB）的Java对象。理想地讲，一个POJO是一个不受任何限制的Java对象（除了Java语言规范）

## Web

Web上下文模块建立在应用程序上下文模块之上，为基于Web的应用程序提供了上下文 所以，Spring框架支持与Jakarta Struts的集成。Web模块还简化了处理大部分请求以及将请求参数绑定
域对象的工作。Web层包含Web、Web-Servlet、Web-Stuts和Web-Porlet模块，具体说明如下

- Web模块：提供了基础的面向Web的集成特性。例如，多文件上传、使用servlet listeners初始化IoC容器以及一个面向Web的应用上下文，它还包含Spring远程支持中Web的相关部分。

- Web-Servlet模块web.servlet.jar ：该模块包含Spring model-view-controller ( MVC) 实现,Spring MVC框架使得模型范围内的代码和web forms之间能够清楚地分离开来，并与Spring框架的其他特性集成在一起。

- Web-Struts模块：该模块提供了对Struts的支持，使得类在Spring应用中能够与一个典型的Struts Web层集成在一起 注意，该支持在 Spring 3.0 中已被弃用。

- Web-Porlet模块：提供了用于Portlet境和Web-Servlet模块的MVC的实现

## AOP

AOP模块提供了一个符合AOP联盟标准的面向切面编程的实现，它让你可以定义例如方法拦截器和切点，从而将逻辑代码分开，降低它们之间的调合性,利用source-level的元数据功能，还可以将各种行为信息合并到你的代码中，这有点像.Net技术中的attribute概念。

通过配置管理特性，Spring AOP模块直接将面向切面的编程功能集成到了Spring框架中，所以可以很容易地使Spring框架管理的任何对象支持AOP。Spring AOP模块为基于Spring的应用程序中的对象提供了事务管理服务，通过使用Spring AOP，不用依赖EJB组件，就可以将声明性事务管理集成到应用程序中。

- Aspects模块提供了对AspectJ的集成支持。

- Instrumentation模块提供了class instrumentation支持和classloader实现，使得可以在特定的应用服务器上使用。


## TEST

Test模块支持使用JUnit、TestNG对Spring组件进行测试。




