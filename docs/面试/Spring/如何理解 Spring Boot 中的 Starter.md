---
title: 如何理解 Spring Boot 中的 Starter
date: 2023-07-27
category: 面试
---




Starter 是 Spring Boot 的四大核心功能特性之一，除此之外，Spring Boot 还有 自动装配、Actuator 监控等特性。

Spring Boot 里面的这些特性，都是为了让开发者在开发基于 Spring 生态下的企 业级应用时，只需要关心业务逻辑， 减少对配置和外部环境的依赖。

其中，Starter 是启动依赖，它的主要作用有几个。

Starter 组件以功能为纬度，来维护对应的 jar 包的版本依赖， 使得开发者可以不需要去关心这些版本冲突这种容易出错的细节。

Starter 组件会把对应功能的所有 jar 包依赖全部导入进来，避免了开发者自己去 引入依赖带来的麻烦。

Starter 内部集成了自动装配的机制，也就说在程序中依赖对应的 starter 组件以 后，这个组件自动会集成到 Spring 生态下，并且对于相关 Bean 的管理，也是基于 自动装配机制来完成。

依赖 Starter 组件后，这个组件对应的功能所需要维护的外部化配置，会自动集 成到 Spring Boot 里面， 我们只需要在 application.properties 文件里面进行维护就行了，比如 Redis 这个 starter，只需要在 application.properties文件里面添加 redis 的连接信息就可以直接使用了。

在我看来，Starter组件几乎完美的体现了Spring Boot里面约定优于配置的理念

## 约定优于配置，你的理解 是什么

首先，约定优于配置是一种软件设计的范式，它的核心思想是减少软件开发人员 对于配置项的维护，从而让开发人员更加聚焦在业务逻辑上。 

Spring Boot 就是约定优于配置这一理念下的产物，它类似于 Spring 框架下的一 个脚手架，通过 Spring Boot，我们可以快速开发基于 Spring 生态下的应用程序。 基于传统的 Spring 框架开发 web 应用，我们需要做很多和业务开发无关并且只 需要做一次的配置，比如 管理 jar 包依赖 web.xml 维护 Dispatch-Servlet.xml 配置项维护 应用部署到 Web 容器 第三方组件集成到 Spring IOC 容器中的配置项维护 

而在 Spring Boot 中，我们不需要再去做这些繁琐的配置，Spring Boot 已经自 动帮我们完成了，这就是约定由于配置思想的体现。 

Spring Boot 约定由于配置的体现有很多，

比如 Spring Boot Starter 启动依赖，它能帮我们管理所有 jar 包版本 

如果当前应用依赖了spring mvc相关的jar，那么Spring Boot会自动内置Tomcat 容器来运行 web 应用，我们不需要再去单独做应用部署。 

Spring Boot 的自动装配机制的实现中，通过扫描约定路径下的 spring.factories 文件来识别配置类，实现 Bean 的自动装配。 默认加载的配置文件 application.properties 等等。 

总的来说，约定优于配置是一个比较常见的软件设计思想，它的核心本质都是为 了`更高效以及更便捷的实现软件系统的开发和维护`。

