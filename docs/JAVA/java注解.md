---
title: java注解
date: 2020-04-09
category: Java  
---

注解，也叫元数据。一种代码级别的说明，在JDK1.5之后引入的特性，与类、接口、枚举同一层次。可以声明在包、类、字段、方法、局部变量、方法参数等前面，来对这些元素进行说明，注释等。

作用分类：  
1. 编写文档：通过代码里的标识的元数据生成文档【生成文档doc文档】  
2. 代码分析：通过代码里的标识的元数据对代码进行分析【使用反射】  
3. 编译检查：通过代码里的标识的元数据让编译器能过实现基本的编译检查【Override】

java提供了四个元注解，所谓元注解就是负责注解其他注解。

1. @Target ：规定注解所修饰的对象范围。  
    1. ElementType.CONSTRUCTIR;    构造器声明  
    2. ElementType.FIELD;     成员变量，对象，属性（包括enum实例) 
    3. ElementType.LOCAL_VARIABLE;    局部变量声明  
    4. ElementType.METHOD ; 方法声明  
    5. ElementType.PACKAGE; 包声明  
    6. ElementType.PARAMETER;参数声明  
    7. ElementType.TYPE; 类、接口（包括注解类型）或enum声明  
2. @Retention ： 表示注解的生命周期  
   1. RetentionPolicy.SOUREC: 在源文件中有效  
   2. RetentionPolicy.CLASS; 在class文件中有效  
   3. RetentionPolicy.RUNTIME;在运行时有效  
3. @Inherited : 标记注解，主要说明了一种继承性，意思是子类可以继承父类中的该注解（注意：只有当被贴上@Inherited标签的注解被用在类上的时候子类才能获得这个注解）。  
4. @Documented ： 用于描述其它类型的annotation应该被作为被标注的程序成员的公共API,因此可以被例如javadoc此类的工具文档化。