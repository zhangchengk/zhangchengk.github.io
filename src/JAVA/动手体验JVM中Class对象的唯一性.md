---
title: 动手体验JVM中Class对象的唯一性
date: 2020-07-10
category: Java
---

## 概述

本文不深究理论，不深究原理，从我们开发使用者的角度，动手实践，去体验一下JVM中，Class对象的唯一性与类加载器的关系。

## 引入

我们通常说：每个类，无论创建多少个实例，在JVM中都对应同一个Class对象。

其实这么说还是挺别扭的，首先是先有的Class对象，然后才有的类的实例。而且这么说其实也并不严谨，假如说我们有一个类的两个实例对象，而这两个实例对象在内存里对应的的class信息是由两个不同的类加载器加载的，也就是说这个时候这两个实例对应的就是两个不同的Class对象。Class对象的唯一性的确定因素之一就是加载它的类加载器。

下面我们从4个章节去体验一下Class对象的唯一性与类加载器之间的关系。

## 1、默认类加载器下体验

首先创建一个Java bean

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

新建一个测试类，在单元测试中添加测试

```java
@Test
public void test(){
    MyTestBean myTestBean1 = new MyTestBean();
    MyTestBean myTestBean2 = new MyTestBean();
    //两个实例肯定是不等的
    System.out.print("myTestBean1与myTestBean2是否相等：");
    System.out.println(myTestBean1 == myTestBean2);
    Assert.assertNotEquals(myTestBean1,myTestBean2);

    Class c1 = myTestBean1.getClass();
    Class c2 = myTestBean2.getClass();

    System.out.print("加载c1的类加载器:");
    System.out.println(c1.getClassLoader());
    System.out.print("加载c2的类加载器:");
    System.out.println(c2.getClassLoader());

    System.out.print("c1与c2是否相等：");
    System.out.println(c1 == c2);
    Assert.assertEquals(c1,c2);
}
```

运行结果如下：

```properties
myTestBean1与myTestBean2是否相等：false
加载c1的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
加载c2的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
c1与c2是否相等：true
```

没什么可说的，这是我们最常用、最常见的形式了，隐式的使用类加载器加载class文件生成Class对象，c1和c2的类加载器是同一个，c1=c2即myTestBean1与myTestBean2对应的是同一个Class对象，此时MyTestBean的Class对象在JVM中是唯一的。

## 2、指定URLClassLoader类加载器体验

这里我们就使用URLClassLoader吧，然后这里我们把MyTestBean.class拷贝到一个新的目录下`/Users/zhangcheng/test/com/myspring/service/impl/`

新建一个测试类，在单元测试中添加测试

```java
@Test
public void test() throws MalformedURLException, ClassNotFoundException, IllegalAccessException, InstantiationException {
    ClassLoader currentClassLoader = Thread.currentThread().getContextClassLoader();
    System.out.print("当前线程的类加载器:");
    System.out.println(currentClassLoader);
    URL[] urls = new URL[1];
    urls[0] = new URL("file:///Users/zhangcheng/test/");
    URLClassLoader urlClassLoader1 = new URLClassLoader(urls);
    System.out.print("urlClassLoader1的父 类加载器:");
    System.out.println(urlClassLoader1.getParent());
    URLClassLoader urlClassLoader2 = new URLClassLoader(urls);
    System.out.print("urlClassLoader2的父 类加载器:");
    System.out.println(urlClassLoader2.getParent());
    Object myTestBean1 = urlClassLoader1.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    Object myTestBean2 = urlClassLoader2.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    //两个实例肯定是不等的
    System.out.print("myTestBean1与myTestBean2是否相等：");
    System.out.println(myTestBean1 == myTestBean2);
    Assert.assertNotEquals(myTestBean1,myTestBean2);
    Class c1 = myTestBean1.getClass();
    Class c2 = myTestBean2.getClass();
    System.out.print("加载c1的类加载器:");
    System.out.println(c1.getClassLoader());
    System.out.print("加载c2的类加载器:");
    System.out.println(c2.getClassLoader());

    System.out.print("c1与c2是否相等：");
    System.out.println(c1 == c2);
    Assert.assertEquals(c1,c2);
}
```

运行结果如下：

```properties
当前线程的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
urlClassLoader1的父 类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
urlClassLoader2的父 类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
myTestBean1与myTestBean2是否相等：false
加载c1的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
加载c2的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
c1与c2是否相等：true
```

我C？什么情况？为啥都是AppClassLoader？？我们不是指定的`file:///Users/zhangcheng/test/`URL了嘛？不应该是AppClassLoader啊！！

其实是这样的：类加载器有一个委托加载机制，某个特定的类加载器在接到加载类的请求时，首先将加载任务委托给父 类加载器(`注意：不是父类`)，依次递归，如果父 类加载器可以完成类加载任务，就成功返回；只有当父 类加载器无法完成此加载任务时，才自己去加载。而`new URLClassLoader(urls)`没有指定父 类加载器但默认指定了AppClassLoader为父 类加载器。由上面的测试结果看，AppClassLoader是能够加载到`com.myspring.service.impl.MyTestBean`的，但是我们没有指定`file:///Users/zhangcheng/test/`这个URL给它啊！那就说明AppClassLoader的URLs里也有`com.myspring.service.impl.MyTestBean`！！！怎么去验证？把它打印出来就行了

在上面的测试中加一行，打印出urlClassLoader1的父 类加载的所有URL
```java
Arrays.asList(((URLClassLoader)urlClassLoader1.getParent()).getURLs()).forEach(System.out::println);
```

结果

```properties
...省略
file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/test-classes/
file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/
...省略
```

我们看到了什么？这NM不是我们这个测试项目build的后的class文件的目录嘛！！所以在此次的测试中，myTestBean1与myTestBean2的两个实例对应的Class对象是同一个，是由AppClassLoader加载`file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/`目录下的MyTestBean.class文件，而不是我们指定的那两个URLClassLoader去加载`file:///Users/zhangcheng/test/`目下的MyTestBean.class文件。

此时MyTestBean的Class对象在JVM中是唯一的。

那么怎么指定它使用URLClassLoader去加载`file:///Users/zhangcheng/test/`目下的MyTestBean.class文件呢？


## 3、再次指定URLClassLoader类加载器体验

测试类基本不变，我们删除`file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/`目录下的MyTestBean.class,再次进行测试

```java
@Test
public void test() throws MalformedURLException, ClassNotFoundException, IllegalAccessException, InstantiationException {
    ClassLoader currentClassLoader = Thread.currentThread().getContextClassLoader();
    System.out.print("当前线程的类加载器:");
    System.out.println(currentClassLoader);
    URL[] urls = new URL[1];
    urls[0] = new URL("file:///Users/zhangcheng/test/");
    URLClassLoader urlClassLoader1 = new URLClassLoader(urls);
    System.out.print("urlClassLoader1的父 类加载器:");
    System.out.println(urlClassLoader1.getParent());
    URLClassLoader urlClassLoader2 = new URLClassLoader(urls);
    System.out.print("urlClassLoader2的父 类加载器:");
    System.out.println(urlClassLoader2.getParent());
    Object myTestBean1 = urlClassLoader1.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    Object myTestBean2 = urlClassLoader2.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    //两个实例肯定是不等的
    System.out.print("myTestBean1与myTestBean2是否相等：");
    System.out.println(myTestBean1 == myTestBean2);
    Assert.assertNotEquals(myTestBean1,myTestBean2);
    Class c1 = myTestBean1.getClass();
    Class c2 = myTestBean2.getClass();
    System.out.print("加载c1的类加载器:");
    System.out.println(c1.getClassLoader());
    System.out.print("加载c2的类加载器:");
    System.out.println(c2.getClassLoader());

    System.out.print("c1与c2是否相等：");
    System.out.println(c1 == c2);
    Assert.assertNotEquals(c1,c2);
}
```

运行结果如下：

```properties
当前线程的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
urlClassLoader1的父 类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
urlClassLoader2的父 类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
myTestBean1与myTestBean2是否相等：false
加载c1的类加载器:java.net.URLClassLoader@dcf3e99
加载c2的类加载器:java.net.URLClassLoader@7dc5e7b4
c1与c2是否相等：false
```

这下就对了吧！这里myTestBean1与myTestBean2的两个实例对应的Class对象就不是同一个了！两个Class对象是由两个不同的类加载器URLClassLoader去加载`file:///Users/zhangcheng/test/`目下的MyTestBean.class文件得到的。

同一个MyTestBean.class文件，由两个不同的类加载器加载，得到的就是两个不同的Class对象，此时MyTestBean的Class对象在JVM中是不唯一的。


## 4、指定自定义类加载器体验

首先我们自定义一个类加载器MyClassLoader，它不完全符合委派机制，它可以指定一些类直接自己先加载，不需要委托给父 类加载器加载；

这里我们不用像第3节那样删除`file:/Users/zhangcheng/IdeaProjects/SpringSourceCode/Spring-Framework/mySpring/target/classes/`目录下的MyTestBean.class文件，直接运行就可以了。

```java
public class MyClassLoader extends ClassLoader {
    //用于读取.Class文件的路径
    private String swapPath;
    //用于标记这些name的类是先由自身加载的
    private Set<String> useMyClassLoaderLoad;

    public MyClassLoader(String swapPath, Set<String> useMyClassLoaderLoad) {
        this.swapPath = swapPath;
        this.useMyClassLoaderLoad = useMyClassLoaderLoad;
    }

    @Override
    public Class<?> loadClass(String name) throws ClassNotFoundException {
        Class<?> c = findLoadedClass(name);
        if (c == null && useMyClassLoaderLoad.contains(name)) {
            //特殊的类让我自己加载
            c = findClass(name);
            if (c != null) {
                return c;
            }
        }
        return super.loadClass(name);
    }

    @Override
    protected Class<?> findClass(String name) {
        //根据文件系统路径加载class文件，并返回byte数组
        byte[] classBytes = getClassByte(name);
        //调用ClassLoader提供的方法，将二进制数组转换成Class类的实例
        return defineClass(name, classBytes, 0, classBytes.length);
    }

    private byte[] getClassByte(String name) {
        String className = name.substring(name.lastIndexOf('.') + 1, name.length()) + ".class";
        try {
            FileInputStream fileInputStream = new FileInputStream(swapPath + className);
            byte[] buffer = new byte[1024];
            int length = 0;
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            while ((length = fileInputStream.read(buffer)) > 0) {
                byteArrayOutputStream.write(buffer, 0, length);
            }
            return byteArrayOutputStream.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new byte[]{};
    }
}
```

新建测试类添加测试

```java
@Test
public void test() throws ClassNotFoundException, IllegalAccessException, InstantiationException {
    ClassLoader currentClassLoader = Thread.currentThread().getContextClassLoader();
    System.out.print("当前线程的类加载器:");
    System.out.println(currentClassLoader);

    String classPath = "/Users/zhangcheng/test/com/myspring/service/impl/";
    Set<String> stringSet = new HashSet<>();
    stringSet.add("com.myspring.service.impl.MyTestBean");

    ClassLoader classLoader1 = new MyClassLoader(classPath, stringSet);
    ClassLoader classLoader2 = new MyClassLoader(classPath, stringSet);

    Object myTestBean1 = classLoader1.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    Object myTestBean2 = classLoader2.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
    //两个实例肯定是不等的
    System.out.print("myTestBean1与myTestBean2是否相等：");
    System.out.println(myTestBean1 == myTestBean2);
    Assert.assertNotEquals(myTestBean1, myTestBean2);
    Class c1 = myTestBean1.getClass();
    Class c2 = myTestBean2.getClass();
    System.out.print("加载c1的类加载器:");
    System.out.println(c1.getClassLoader());
    System.out.print("加载c2的类加载器:");
    System.out.println(c2.getClassLoader());

    System.out.print("c1与c2是否相等：");
    System.out.println(c1 == c2);
    Assert.assertNotEquals(c1, c2);
}

```

运行结果：
```properties
当前线程的类加载器:sun.misc.Launcher$AppClassLoader@18b4aac2
myTestBean1与myTestBean2是否相等：false
加载c1的类加载器:com.myspring.test.MyClassLoader@6d9c638
加载c2的类加载器:com.myspring.test.MyClassLoader@1ee0005
c1与c2是否相等：false
```

看到没，通过这种方式，我们使用了两个不同的类加载器去加载了同一个class文件，得到了两个不同的Class对象，此时MyTestBean的Class对象在JVM中是不唯一的。


第4节里有一个细节

```java
Object myTestBean1 = classLoader1.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
Object myTestBean2 = classLoader2.loadClass("com.myspring.service.impl.MyTestBean").newInstance();
```

我并没有将他们强转为MyTestBean,为什么呢？假如我们在上面测试类修改一下为`MyTestBean myTestBean1 = (MyTestBean)classLoader1.loadClass("com.myspring.service.impl.MyTestBean").newInstance()`，运行后发现报异常了。

```properties
java.lang.ClassCastException: com.myspring.service.impl.MyTestBean cannot be cast to com.myspring.service.impl.MyTestBean
```
这是因为强转`(MyTestBean)`中的MyTestBean的Class对象是由当前测试类的类加载器加载的(隐式加载)，而`classLoader1.loadClass("com.myspring.service.impl.MyTestBean")`得到的这个Class对象是由classLoader1加载得来的，Class对象都不一样，这是两个不同的类，所以强转会报异常。


## 总结

在第1节和第2节我们看到，两个实例myTestBean1和myTestBean2对应的class对象是相同的，这样有一个好处就是可以避免类的重复加载。

而在第3节通过指定父 类加载器没有的URL，第4节自定义类加载器打破委托机制，两个实例myTestBean1和myTestBean2对应的class对象是不相同的，这样有一个好处就是资源隔离，比如说我就是有两个类都叫MyTestBean，虽然包名、名字等等什么一样，但是他们内部的实现机制就是不一样，这时候就可以使用类似于第3节第4节的方式来做资源隔离。

其实对于任意一个Class对象，都需要由它的类加载器和这个类本身一同确定其在就Java虚拟机中的唯一性，也就是说，即使两个Class对象来源于同一个class文件，只要加载它们的类加载器不同，那这两个Class对象就必定不相等。





