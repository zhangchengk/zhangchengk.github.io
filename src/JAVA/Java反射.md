---
title: java反射原理
date: 2020-07-05
category: Java
---

有了反射，我们的Java世界才变得更加多姿多彩。

## Java反射是什么

Java的反射（reflection）机制是指在程序的`运行状态`中，可以构造任意一个类的对象，可以了解任意一个对象所属的类，可以了解任意一个类的成员变量和方法，可以调用任意一个对象的属性和方法。`这种动态获取程序信息以及动态调用对象的功能称为Java语言的反射机制`。反射被视为动态语言的关键。

我理解的Java反射的原理就是获取Class对象然后使用java.lang.reflect里提供的方法操作Class对象，Class与java.lang.reflect构成了java的反射技术。

## 基础理论

1. A类 -> A.class字节码文件 -> 加载到JVM后的A字节码文件对象(Class对象)
2. A的Class对象 -> A的实例
3. Class是反射的基础
4. 当new一个新对象或者引用静态成员变量等时机时，JVM类加载器系统会将对应Class对象加载到JVM中，然后JVM根据Class对象创建实例对象或者提供静态变量的引用值。
5. 每个类，无论创建多少个实例，在JVM中都对应同一个Class对象(类被不同的类加载器加载除外)。

对于字节码文件的加载时机，《Java虚拟机规范》中并没有进行强制约束，这点可以交给虚拟机的具体实现来自由把握。但是对于初始化阶段，《Java虚拟机规范》则是严格规定了`有且只有`六种情况必须立即对类进行“初始化”（而加载、验证、准备自然需要在此之前开始）：

1. 遇到new、getstatic、putstatic或invokestatic这四条字节码指令时，如果类型没有进行过初始化，则需要先触发其初始化阶段。
    - 使用new关键字实例化对象的时候。
    - 读取或设置一个类型的静态字段（被final修饰、已在编译期把结果放入常量池的静态字段除外）的时候。
    - 调用一个类型的静态方法的时候。
2. 使用java.lang.reflect包的方法对类型进行反射调用的时候，如果类型没有进行过初始化，则需要先触发其初始化。
3. 当初始化类的时候，如果发现其父类还没有进行过初始化，则需要先触发其父类的初始化。
4. 当虚拟机启动时，用户需要指定一个要执行的主类（包含main()方法的那个类），虚拟机会先初始化这个主类。
5. 当使用JDK 7新加入的动态语言支持时，如果一个java.lang.invoke.MethodHandle实例最后的解析结果为REF_getStatic、REF_putStatic、REF_invokeStatic、REF_newInvokeSpecial四种类型的方法句柄，并且这个方法句柄对应的类没有进行过初始化，则需要先触发其初始化。
6. 当一个接口中定义了JDK 8新加入的默认方法（被default关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那该接口要在其之前被初始化。

这六种场景中的行为称为对一个类型进行`主动引用`。除此之外，所有引用类型的方式都不会触发初始化，称为`被动引用`。

被动引用不会导致初始化，但往往也是需要加载的，我们举一些例子：

1. 使用类加载器的loadClass()方法，不做类的初始化工作
2. 类型.class字面量
3. 子类访问父类的静态字段(不会导致子类初始化，会导致父类初始化)
4. 通过数组定义来引用类，不会触发此类的初始化
5. 常量在编译阶段会存入调用类的常量池中，本质上没有直接引用到定义常量的类，因此不会触发定义常量的类的初始化

对于HotSpot虚拟机来说，可通过-XX：+TraceClassLoading参数观察到类是否会加载。而初始化时执行的是`<clinit>()方法`，我们可以编写静态代码块来验证此类是否初始化了。

>`初始化阶段就是执行类构造器<clinit>()方法的过程`。`<clinit>()并不是程序员在Java代码中直接编写的方法，它是Javac编译器的自动生成物`。`<clinit>()方法`是由编译器自动收集类中的所有`类变量`的赋值动作和`静态语句块（static{}块）`中的语句`合并`产生的，`编译器收集的顺序是由语句在源文件中出现的顺序决定的`。

这里我们简单举例访问类型.class字面量引发此类被加载而没有引发初始化。

```java
package com.myspring.service.impl;
public class A {
    static {
        System.out.println("初始化A类");
    }
}
```
```java
package com.myspring.service.impl;
public class ClassLoadTest {
    public static void main(String args[]){
        System.out.println("===================");
        System.out.println("===================");
        Class c1 = A.class;
        System.out.println("===================");
        System.out.println("===================");
    }
}
```

编译后，在相应的目录(比如target/classes)下执行如下命令

```properties
java -XX:+TraceClassLoading -cp . com.myspring.service.impl.ClassLoadTest
```

输出结果如下

```properties
......省略
[Loaded java.security.BasicPermissionCollection from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
[Loaded com.myspring.service.impl.ClassLoadTest from file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/]
[Loaded sun.launcher.LauncherHelper$FXHelper from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
[Loaded java.lang.Class$MethodArray from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
[Loaded java.lang.Void from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
===================
===================
[Loaded com.myspring.service.impl.A from file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/]
===================
===================
[Loaded java.lang.Shutdown from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
[Loaded java.lang.Shutdown$Lock from /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar]
```

看控制台输出可以看到，只加载了A类型，而没有初始化它。


## 如何获取一个Class对象

我们先新建一个Java Bean，作为要获取的CLass对象的类型。

```java
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

### 对象.getClass()

`new` 一个MyTestBean实例对象，通过对象.getClass()获得Class对象
```java
@Test
public void test(){
    MyTestBean myTestBean1 = new MyTestBean();
    Class c1 = myTestBean1.getClass();
    System.out.print("获得的Class对象:");
    System.out.println(c1);

}
```
```properties
获得的Class对象:class com.myspring.service.impl.MyTestBean
```

### 类型.class字面量

```java
@Test
public void test(){
    Class c1 = MyTestBean.class;
    System.out.print("获得的Class对象:");
    System.out.println(c1);

}
```
```properties
获得的Class对象:class com.myspring.service.impl.MyTestBean
```

### Class类的forName方法

```java
@Test
public void test() throws ClassNotFoundException {
    Class c1 = Class.forName("com.myspring.service.impl.MyTestBean");
    System.out.print("获得的Class对象:");
    System.out.println(c1);

}
```
```properties
获得的Class对象:class com.myspring.service.impl.MyTestBean
```

### 类加载器的loadClass方法

这是反射里基本上不会用到的获取Class对象的方法。

```java
@Test
public void test() throws ClassNotFoundException {
    Class c1 = this.getClass().getClassLoader().loadClass("com.myspring.service.impl.MyTestBean");
    System.out.print("获得的Class对象:");
    System.out.println(c1);
}
```
```properties
获得的Class对象:class com.myspring.service.impl.MyTestBean
```
## 如何操作一个Class对象

想要掌握反射技术，我们至少还要了解 `Class``Constructor` `Method` `Field`四个类及其常用方法

### Class类的常用方法

最好的教材就是源码，以下方法是从源码摘取出来，需要重点学习和关注的。

```java
/**
* 使用给定的字符串名称返回与类或接口关联的Class对象。 调用此方法等效于：Class.forName(className, true, currentLoader)currentLoader表示当前类的定义类加载器。
* 调用forName“X”）会导致初始化名为X的类。
* @param      className   所需类的完全限定名称。
* @return     具有指定名称的类的Class对象。
* ......
*/
public static Class<?> forName(String className) throws ClassNotFoundException {
Class<?> caller = Reflection.getCallerClass();
return forName0(className, true, ClassLoader.getClassLoader(caller), caller);
}
/**
* 使用给定的类加载器返回与具有给定字符串名称的类或接口关联的Class对象。
* 给定类或接口的完全限定名称（采用getName返回的相同格式），此方法尝试查找，加载和链接该类或接口。指定的类加载器用于加载类或接口。  
* 如果参数loader为null，则通过引导类加载器加载该类。仅当initialize参数为true且之前尚未初始化时，才初始化该类。
* 如果name表示原始类型或void，则将尝试在名称为name的未命名包中定位用户定义的类。 因此，该方法不能用于获取表示原始类型或void的任何Class对象。
* 如果name表示数组类，则该数组类的组件类型已加载但未初始化。
* 请注意，此方法会引发与加载，链接或初始化有关的错误
* 请注意，此方法不会检查其调用者是否可以访问所请求的类。
* 如果loader为null，并且存在安全管理器，并且调用方的类加载器不为null，则此方法使用RuntimePermission(“getClassLoader”)权限，以确保可以访问引导程序类加载器。
* @param initialize 如果true，则将初始化该类。
* @param loader     类加载器
* @return           代表所需类的类对象
* @exception LinkageError ExceptionInInitializerError ClassNotFoundException
*/
public static Class<?> forName(String name, boolean initialize, ClassLoader loader) throws ClassNotFoundException{
......
return forName0(name, initialize, loader, caller);
}
/**
* 创建此Class对象表示的类的新实例。就像通过带有空参数列表的new表达式实例化该类一样。如果尚未初始化该类，则将其初始化。
* 请注意，此方法传播由null构造函数引发的任何异常，包括已检查的异常。使用此方法有效地绕过了编译时异常检查，否则该检查将由编译器执行。
* (java.lang.reflect.Constructor)Constructor.newInstance方法通过将构造函数抛出的所有异常包装在java.lang.reflect.InvocationTargetException中从而避免了此问题。
* @return  该对象表示的类的新分配实例。
* @throws  IllegalAccessException  如果该类或其无效构造函数不可访问。
* @throws  InstantiationException  如果此Class表示抽象类，接口，数组类，原始类型或void；或如果类没有空构造函数；或者或实例化由于其他原因而失败。
* @throws  ExceptionInInitializerError 如果此方法引发的初始化失败。
* @throws  SecurityException 如果存在安全管理器，并且调用者的类加载器与当前类的调用者的类加载器不同，并且调用SecurityManager#checkPackageAccess拒绝访问此类的程序包。
*/
public T newInstance() throws InstantiationException, IllegalAccessException{
......
if (cachedConstructor == null) {
    if (this == Class.class) {
        throw new IllegalAccessException("Can not call newInstance() on the Class for java.lang.Class");
    }
    try {
        Class<?>[] empty = {};
        final Constructor<T> c = getConstructor0(empty, Member.DECLARED);
        .......
        cachedConstructor = c;
    } catch (NoSuchMethodException e) {
        throw (InstantiationException)new InstantiationException(getName()).initCause(e);
    }
}
Constructor<T> tmpConstructor = cachedConstructor;
// 安全性检查（与java.lang.reflect.Constructor中的相同）
......
// 运行构造函数
try {
    return tmpConstructor.newInstance((Object[])null);
} catch (InvocationTargetException e) {
    ......
}
}
/**
* 返回一个包含Class对象的数组，这些对象表示此Class对象表示的类的所有public类和接口成员。这包括从超类继承的public类和接口成员，以及由该类声明的公共类和接口成员。如果此Class对象没有public成员类或接口，则此方法返回长度为0的数组。如果此Class对象表示原始类型，数组类或void，则此方法还返回长度为0的数组。
*/
public Class<?>[] getClasses() {......}
/**
* 返回一组Class对象的数组，这些对象反映了声明为该Class对象表示的类的成员的所有类和接口。这包括public, protected, default (package) access,private类和接口，但不包括继承的类和接口。如果类未声明任何类或接口作为成员，或者此Class对象表示原始类型，数组类或void，则此方法返回长度为0的数组。
*/
public Class<?>[] getDeclaredClasses() throws SecurityException {......}
/**
* 返回一个包含Field对象的数组，这些对象反映了此Class对象表示的类或接口的所有可访问public字段。
* 如果此Class对象表示没有可访问的public字段的类或接口，则此方法返回长度为0的数组。
* 如果此Class对象表示一个类，则此方法返回该类及其所有超类的public字段。
* 如果此对象表示一个接口，则此方法返回该接口及其所有超级接口的字段。
* 如果此Class对象表示数组类型，原始类型或void，则此方法返回长度为0的数组。
* 返回数组中的元素未排序，并且没有任何特定顺序。
*/
public Field[] getFields() throws SecurityException {......}
/**
* 返回Field对象的数组，该数组反映由这个class对象表示的类或接口声明的所有字段。这包括public、protected、default（package）access和private字段，但不包括继承的字段。
* 如果这个Class对象表示没有声明字段的类或接口，则此方法返回长度为0的数组。
* 如果这个Class对象表示数组类型、基元类型或void，则此方法返回长度为0的数组。
* 返回数组中的元素没有排序，并且没有任何特定的顺序。
*/
public Field[] getDeclaredFields() throws SecurityException {......}
/**
* 返回一个Field对象，该对象反映由这个class对象表示的类或接口的指定public成员字段。name参数是一个String，指定所需字段的简单名称。
* 要反射的场由下面的算法确定。设C为该对象表示的类或接口：
* 1.如果C用指定的名称声明了一个public字段，则该字段就是要反映的字段。
* 2.如果在上面的步骤1中找不到任何字段，则此算法递归地应用于C的每个直接上接口。直接上接口按声明的顺序进行搜索。
* 3.如果在上面的步骤1和2中找不到字段，并且C有超类S，则此算法将在S上递归调用。如果C没有超类，则抛出NoSuchFieldException。
* 如果这个Class对象表示数组类型，则此方法找不到数组类型的length字段。
*/
public Field getField(String name) throws NoSuchFieldException, SecurityException {......}
/**
* 返回一个Field对象，该对象反映此Class对象表示的类或接口的指定声明字段。name参数是一个String，它指定所需字段的简单名称。
* 如果此Class对象表示数组类型，则此方法找不到数组类型的length字段。
*/
public Field getDeclaredField(String name)throws NoSuchFieldException, SecurityException {......}
/**
* 返回一个数组，该数组包含Method对象，这些对象反映由该class对象表示的类或接口的所有public方法，包括由类或接口声明的方法以及从超类和超接口继承的那些方法。
* 如果这个Class对象表示一个类型，该类型具有多个具有相同名称和参数类型但返回类型不同的public方法，则返回的数组对这些每个方法都有一个Method对象。
* 如果这个Class对象表示一个具有类初始化方法<clinit>的类型，则返回的数组没有与之(<clint>)相应的method对象。
* 如果这个Class对象表示数组类型，那么返回的数组对于数组类型从object继承的每个public方法都有一个Method对象。它不包含clone()的Method对象。
* 如果这个Class对象表示接口，则返回的数组不包含object隐式声明的任何方法。因此，如果此接口或其任何一个超接口中没有显式声明方法，则返回的数组的长度为0。（请注意，表示类的Class对象始终具有从object继承的public方法。）
* 如果这个Class对象表示基元类型或void，则返回的数组的长度为0。
* 在此class对象表示的类或接口的上层接口中声明的静态方法不被视为类或接口的成员。
* 返回数组中的元素没有排序，并且没有任何特定的顺序。
*/
public Method[] getMethods() throws SecurityException {......}
/**
* 返回一个数组，该数组包含Method对象，这些对象反映由该class对象表示的类或接口的所有已声明方法，包括public, protected, default (package) access, and private方法，但不包括继承的方法。
* 如果这个Class对象表示一个类型，该类型具有多个声明的方法，这些方法具有相同的名称和参数类型，但返回类型不同，则返回的数组对这些方法每个都有一个Method对象。
* 如果这个Class对象表示一个具有类初始化方法<clinit>的类型，则返回的数组没有与之(<clint>)相应的method对象。
* 如果这个Class对象表示没有声明方法的类或接口，则返回的数组的长度为0。
* 如果此Class对象表示数组类型，原始类型或void，则返回的数组长度为0。
* 返回数组中的元素没有排序，并且没有任何特定的顺序。
*/
public Method[] getDeclaredMethods() throws SecurityException {......}
/**
* 返回一个Method对象，该对象反映由该class对象表示的类或接口的指定public成员方法。name参数是一个String，指定所需方法的简单名称。parameterTypes参数是一个Class对象的数组，这些对象按声明的顺序标识方法的形式参数类型。如果parameterTypes是null，则将其视为空数组。
* 如果name是“<init>}”或“<clinit>}”，则引发NoSuchMethodException。否则，要反映的方法由下面的算法确定。设C为该对象表示的类或接口：
* 1. C搜索匹配方法，如下所述。如果找到匹配的方法，它将被反映出来。
* 2. 如果在步骤1中未找到匹配方法，则：
* 2.1如果C是Object以外的类，那么这个算法将在C的超类上递归调用.
* 2.2如果C是类Object，或者C是接口，那么将搜索C的上层接口（如果有）以查找匹配的方法。如果找到任何这样的方法，它就会被反映出来。
*
* 要在类或接口C中查找匹配的方法，请执行以下操作：如果C声明了一个具有指定名称和完全相同形式参数类型的public方法，则该方法就是所反映的方法。如果在C中发现了不止一个这样的方法，并且其中一个方法的返回类型比其他任何方法都更具体，则会反映该方法；否则任意选择其中一个方法。
* 请注意，一个类中可能有多个匹配的方法，因为尽管Java语言禁止一个类声明具有相同签名但返回类型不同的多个方法，而Java虚拟机是不禁止的，这增加了虚拟机的灵活性，可用于实现各种语言功能。
* 如果这个Class对象表示数组类型，则此方法找不到clone方法。
* 在此class对象表示的类或接口的上层接口中声明的静态方法不被视为类或接口的成员。
*/
public Method getMethod(String name, Class<?>... parameterTypes)throws NoSuchMethodException, SecurityException {......}
/**
* 返回一个Method对象，该对象反映此Class对象表示的类或接口的指定声明方法。name参数是一个String，用于指定所需方法的简单名称，而parameterTypes参数是一个Class对象的数组，这些对象标识该方法的形式参数类型，按声明的顺序。如果在一个类中声明了一个以上具有相同参数类型的方法，并且其中一个方法的返回类型比其他方法更具体，则返回该方法。否则，可以选择其中一种方法。如果名称是“ <init>”或“ <clinit>”，则会引发{@code NoSuchMethodException}。
* 如果此{@code Class}对象表示数组类型，则此方法找不到{@code clone（）}方法。
*/
public Method getDeclaredMethod(String name, Class<?>... parameterTypes)throws NoSuchMethodException, SecurityException {......}
/**
* 返回一个数组，其中包含Constructor对象，这些对象反映由这个class对象表示的类的所有public构造函数。如果类没有public构造函数，或者类是数组类，或者类反映基元类型或void，则返回长度为0的数组。
* 请注意，虽然此方法返回Constructor<T>对象的数组（即该类中的构造函数数组），但该方法的返回类型是Constructor<？>[]而不是Constructor<T>[]。这种信息较少的返回类型是必需的，因为从该方法返回后，可以修改数组以保存不同类的Constructor对象，这将违反Constructor<T>[]的类型保证。
*/
public Constructor<?>[] getConstructors() throws SecurityException {......}
/**
* 返回Constructor对象的数组，该数组反映由这个class对象表示的类声明的所有构造函数。它们是public、protected、default（package）access和private构造函数。
* 返回的数组中的元素没有排序，并且没有任何特定的顺序。
* 如果类具有默认构造函数，则它将包含在返回的数组中。
* 如果class对象表示接口、基元类型、数组类或void，则此方法返回长度为0的数组。
*/
public Constructor<?>[] getDeclaredConstructors() throws SecurityException {......}
/**
* 返回一个Constructor对象，该对象反映由这个class对象表示的类的指定public构造函数。parameterTypes参数是一个Class对象的数组，这些对象按声明的顺序标识构造函数的形式参数类型。
* 如果这个Class对象表示在非静态上下文中声明的内部类，则形式参数类型包括显式封闭实例作为第一个参数。
* 要反映的构造函数是由这个class对象表示的类的public构造函数，该对象的形式参数类型与parameterTypes指定的参数类型匹配。
*/
public Constructor<T> getConstructor(Class<?>... parameterTypes)throws NoSuchMethodException, SecurityException {......}
/**
* 返回一个Constructor对象，该对象反映此Class对象表示的类或接口的指定构造函数。parameterTypes参数是Class对象的数组，这些对象按声明的顺序标识构造函数的形式参数类型。
* 如果此Class对象表示在非静态上下文中声明的内部类，则形式参数类型包括显式的封闭实例作为第一个参数。
*/
public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes)throws NoSuchMethodException, SecurityException {......}
```

通过上面的代码注解，我们总结一下Class类

- forName方法可以根据类的完全限定名称获取Class对象。会加载和连接，根据`initialize`参数决定是否初始化。(我们常用的不指定initialize就是默认初始化)
- newInstance 创建此Class对象表示的类的新实例 内部实现是调用的Constructor.newInstance方法
- getClasses 获取在此Class对象对应的类型中声明的public类或接口成员的Class对象数组,包括从超类继承的public类和接口成员
- getDeclaredClasses 获取在此Class对象对应的类型中声明的类或接口成员的Class对象数组,包括public, protected, default (package) access,private类和接口，但不包括继承的类和接口
- getFields 获取此Class对象表示的类或接口的所有可访问public字段Field数组 包括继承的
- getDeclaredFields 获取此Class对象表示的类或接口的所有 public、protected、default（package）access和private字段Field数组 不包括继承的
- getField 获取此Class对象表示的类或接口的指定的可访问public字段Field对象 会递归向父类、父接口查
- getDeclaredField 获取此Class对象表示的类或接口的指定的public、protected、default（package）access和private字段Field对象 不包括继承的
- getMethods 获取该class对象表示的类或接口的所有public方法Method数组 包括继承的
- getDeclaredMethods 获取该class对象表示的类或接口的public, protected, default (package) access,private方法Method数组 不包括继承的
- getMethod 获取该class对象表示的类或接口的指定的public方法Method数组 会递归向父类、父接口查
- getDeclaredMethod 获取该class对象表示的类或接口的指定的public方法Method数组 不包括继承的
- getConstructors 获取这个class对象表示的类的所有public构造函数Constructor数组
- getDeclaredConstructors 获取这个class对象表示的类的所有public、protected、default（package）access和private 构造函数Constructor数组
- getConstructor 获取这个class对象表示的类的指定的public构造函数Constructor对象
- getDeclaredConstructor 获取这个class对象表示的类的指定的public、protected、default（package）access和private 构造函数Constructor对象



### Constructor类的常用方法

```java
/**
* 使用此Constructor对象表示的构造函数，使用指定的初始化参数创建和初始化构造函数的声明类的新实例。各个参数将自动解包以匹配原始形式参数，并且原始参数和引用参数都必须根据需要进行方法调用转换。
* 如果基础构造函数所需的形式参数数量为0，则提供的initargs数组的长度可以为0或为null。
* 如果构造函数的声明类是非静态上下文中的内部类，则构造函数的第一个参数必须是封闭实例
* 如果所需的访问和参数检查成功，并且实例化将继续，则构造函数的声明类（如果尚未初始化）将被初始化。
* 如果构造函数正常完成，则返回新创建并初始化的实例。
* @param initargs 作为参数传递给构造函数调用的对象数组；基元类型的值包装在适当类型的包装对象中（例如float->java.lang.Float}）
* @return 通过调用一个新的构造函数来表示这个对象
*/
public T newInstance(Object ... initargs)
```

### Method的常用方法

```java
/**
* 在具有指定参数的指定对象上调用此method对象表示的基础方法。单个参数会自动展开以匹配原始形式参数，并且基本参数和引用参数都会根据需要进行方法调用转换。
* 如果基础方法是静态的，那么指定的obj参数将被忽略,可以为null。
* 如果基础方法所需的形式参数数为0，则提供的args数组的长度可能为0或null。
* 如果基础方法是一个实例方法，则使用Java语言规范第二版第15.12.4.4节中所述的动态方法查找来调用它；特别是，将根据目标对象的运行时类型进行重写。
* 如果基础方法是静态的，则声明该方法的类在尚未初始化的情况下被初始化。
* 如果方法正常完成，它返回的值将返回给invoke的调用方；如果该值具有基元类型，则首先将其适当地包装在对象中。但是，如果值的类型为基元类型的数组，返回一个基元类型的数组。如果基础方法返回类型为void，则调用返回null。
* @param obj  从中调用基础方法的对象
* @param args 用于方法调用的参数
* @return 使用参数args在obj上分派此对象表示的方法的结果
*/
public Object invoke(Object obj, Object... args)
```

### Field的常用方法

Filed里主要是一些get set方法，比如set(Object obj, Object value) setBoolean(Object obj, boolean z) get(Object obj) getBoolean(Object obj)等等，obj是实例对象。


## 总结

我们先获取到类型A的Class对象，通过Class对象的newInstance方法可以得到A的实例。通过Class对象可以获取到Constructor对象，进一步可以使用Constructor对象来得到A的实例。通过Class对象可以获取到Method对象，通过Method的invoke方法我们可以调用一些方法。通过Class对象可以获取到Field对象，我们可以对这个实例的一些字段进行赋值取值操作。这样我们就基本掌握了反射的使用方法了。
