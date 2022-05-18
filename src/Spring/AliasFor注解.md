---
title: AliasFor注解
date: 2020-04-14
category: Spring
tags: 
  - Spring
author: Panda诚
location: BeiJing  
---
在Spring的众多注解中，经常会发现很多注解的不同属性起着相同的作用，比如@RequestMapping的value属性和path属性，这就需要做一些基本的限制，比如value和path的值不能冲突，比如任意设置value或者设置path属性的值，都能够通过另一个属性来获取值等等。为了统一处理这些情况，Spring创建了@AliasFor标签。

```java
package org.springframework.core.annotation;

import java.lang.annotation.Annotation;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
/**
 * @AliasFor 是一个注解，用于为注解属性声明别名。
 * 使用场景:
 *
 * 1、注解中的显式别名:在单个注解中，可以在一对属性上声明 @AliasFor，以表示它们是彼此可互换的别名。
 * 2、元直接中属性的显式别名:如果 @AliasFor的 #annotation属性设置为与声明它的注解是不同的，则 #attribute
 * 被解释为元数据中属性的别名-annotation（即显式元注解属性覆盖）。这样，就可以精确地控制在注解层次结构中哪些属性被覆盖。
 * 实际上，使用 @AliasFor，甚至可以为元注解的 value属性声明别名。
 * 3、注解中的隐式别名:如果注解中的一个或多个属性被声明为相同的元注解属性的属性覆盖（直接或传递），
 * 则这些属性将被视为一组隐式别名，彼此之间的行为类似注解中显式别名的行为。
 *
 *使用要求
 * 像Java中的任何注解一样，仅使用 @AliasFor本身不会强制使用别名语义。
 * 为了强制实施别名语义，必须通过 MergedAnnotations加载注解。
 * 
 *  * 要求：
 *  * 1 注解中的显示别名
 *  * 组成别名对的每个属性都应使用 @AliasFor进行注解，并且#attribute或#value必须引用另一个属性。
 *  * 从Spring Framework 5.2.1开始，从技术上讲，可以仅对别名对中的一个属性进行注解；
 *  * 但是，建议使用带别名的对儿 对这两个属性进行注解，以获取更好的文档并与Spring Framework的早期版本兼容。
 *  * 别名属性必须声明相同的返回类型。
 *  * 别名属性必须声明一个默认值。
 *  * 别名属性必须声明相同的默认值。
 *  * 
 *  * 2 元注解中属性的显式别名
 *  *  作为元注解中的属性别名的属性必须使用 @AliasFor进行注解，而{@link #attribute}必须引用元注解中的属性。
 *  *  别名属性必须声明相同的返回类型。
 *  *  #annotation必须引用元注解。
 *  *  引用的元注解必须为声明 @AliasFor的注解类上的meta-present
 *  *  
 *  * 3 注解中的隐式别名
 *  * 属于一组隐式别名的每个属性都必须用{@code @AliasFor}注解，
 *  * 并且{@link #attribute}必须在同一元注解中引用同一属性（直接或通过其他显式传递）元注解属性在注解层次结构中覆盖
 *  * 别名属性必须声明相同的返回类型。
 *  * 别名属性必须声明默认值。
 *  * 别名属性必须声明相同的默认值。
 *  * {@ link #annotation}必须引用适当的元注解。
 * * 所引用的元注解必须为<声明{@code @AliasFor}的注解类上的 meta-present
 * 
 * @author Sam Brannen
 * @since 4.2
 * @see MergedAnnotations
 * @see SynthesizedAnnotation
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
public @interface AliasFor {

	/**
	 * Alias for {@link #attribute}.
	 * <p>Intended to be used instead of {@link #attribute} when {@link #annotation}
	 * is not declared &mdash; for example: {@code @AliasFor("value")} instead of
	 * {@code @AliasFor(attribute = "value")}.
	 */
	@AliasFor("attribute")
	String value() default "";

	/**
	 * The name of the attribute that <em>this</em> attribute is an alias for.
	 * @see #value
	 */
	@AliasFor("value")
	String attribute() default "";

	/**
	 * The type of annotation in which the aliased {@link #attribute} is declared.
	 * <p>Defaults to {@link Annotation}, implying that the aliased attribute is
	 * declared in the same annotation as <em>this</em> attribute.
	 */
	Class<? extends Annotation> annotation() default Annotation.class;

}

```

举例说明：

1. 在同一个注解内显示使用
```java
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface ContextConfiguration {
    @AliasFor("locations")
    String[] value() default {};

    @AliasFor("value")
    String[] locations() default {};
    //...
}
```
在同一个注解中成对使用即可，比如示例代码中，value和locations就是互为别名。但是要注意一点，@AliasFor标签有一些使用限制，但是这应该能想到的，比如要求互为别名的属性属性值类型，默认值，都是相同的，互为别名的注解必须成对出现，比如value属性添加了@AliasFor("locations")，那么locations属性就必须添加@AliasFor("value")，另外还有一点，互为别名的属性必须定义默认值。

那么如果违反了别名的定义，在使用过程中就会报错

2. 显示的覆盖元注解中的属性

3. 在一个注解中隐式声明别名

4. 别名的传递


## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)