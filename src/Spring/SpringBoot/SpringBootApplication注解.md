---
title: 2 SpringBootApplication注解
date: 2020-04-14
category: SpringBoot
tags: 
  - SpringBoot
author: Panda诚
location: BeiJing  
---

对于Java注解，我觉得他就像是一个约定，注释就是约定的内容，而且往往定义了注解的人会自己去实现这些约定。所以我认为在看涉及注解部分的代码时，先把注释大体看懂，后期如果去深究，可以去一点点找是在哪里实现了这个注解的约定。


```java
package org.springframework.boot.autoconfigure;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.context.TypeExcludeFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.core.annotation.AliasFor;
import org.springframework.data.repository.Repository;

/**
 *表示一个Configuration类，该类声明一个或多个Bean方法，并且还触发EnableAutoConfiguration自动配置和
 *ComponentScan组件扫描。这是一个方便的注释，相当于声明@Configuration，@EnableAutoConfiguration和@ComponentScan。
 * @since 1.2.0
 * */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {

	/**
	 * 排除特定的自动配置类，使其永远不会应用。
	 * @return 返回排除的类
	 */
	@AliasFor(annotation = EnableAutoConfiguration.class)
	Class<?>[] exclude() default {};

	/**
	 * 排除特定的自动配置类，使其永远不会应用。
	 * @return 返回排除的类名
	 * @since 1.3.0
	 */
	@AliasFor(annotation = EnableAutoConfiguration.class)
	String[] excludeName() default {};

	/**
	 * 用于扫描带注释的组件的基本包路径。
	 * 使用#scanBasePackageClasses作为基于字符串的软件包名称的类型安全替代。
	 * 注意：此设置仅是@ComponentScan的别名。
	 * 它对@Entity扫描或Spring Data {@link Repository}扫描没有影响。
	 * 对于这些，您应该添加{@link org.springframework.boot.autoconfigure.domain.EntityScan @EntityScan}
	 * 和{@code @Enable ... Repositories}注解。
	 * @return 返回要扫描的基本软件包名称
	 * @since 1.3.0
	 */
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
	String[] scanBasePackages() default {};

	/**
	 * {@link #scanBasePackages}的类型安全替代品，用于指定要扫描带注释的组件的软件包。
	 * 考虑在每个程序包中创建一个特殊的无操作标记类或接口，该类或接口除了被该属性引用外没有其他用途。
	 * 注意：此设置仅是{@link ComponentScan @ComponentScan}的别名。
	 * 它对{@code @Entity}扫描或Spring Data {@link Repository}扫描没有影响。
	 * 对于这些，您应该添加{@link org.springframework.boot.autoconfigure.domain.EntityScan @EntityScan}
	 * 和{@code @Enable ... Repositories}注解。
	 * */
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackageClasses")
	Class<?>[] scanBasePackageClasses() default {};

	/**
	 * 指定是否应代理{@link Bean @Bean}方法以执行bean生命周期行为，
	 * 例如即使在用户代码中直接{@code @Bean}方法调用的情况下，也可以返回共享的singleton bean实例。
	 * 此功能需要通过运行时生成的CGLIB子类来实现方法拦截，该子类具有局限性，
	 * 例如配置类及其方法不能被声明为{@code final}。
	 * 默认值为{@code true}，允许在配置类内进行“bean间引用”，以及对该配置的{@code @Bean}方法的外部调用，比如从另一个配置类。
	 * 如果不需要的话，因为此特定配置的每个{@code @Bean}方法都是自包含的，并且设计为供容器使用的普通工厂方法，请将此标志
	 * 切换为{@code false}，以避免CGLIB子类处理。
	 * 关闭bean方法拦截有效地处理{@code @Bean}方法就像在非{@code @Configuration}类上（也称为“ @Bean Lite模式”）
	 * 上声明时一样（请参阅{@link Bean @ Bean的javadoc}）。
	 * 因此，从行为上讲，它等同于删除{@code @Configuration}构造型
	 * */
	@AliasFor(annotation = Configuration.class)
	boolean proxyBeanMethods() default true;

}

```

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)