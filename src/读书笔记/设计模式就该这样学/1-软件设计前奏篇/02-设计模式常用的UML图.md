---
title: 设计模式常用的UML图
date: 2020-12-08
category: 1-软件设计前奏篇
tags: 
  - 设计模式就该这样学
author: Panda诚
location: BeiJing
---

## 2.1　类图

在UML 2.0的13种图中，类图（Class Diagrams）是使用频率最高的UML图之一。类图描述系统中的类，以及各个类之间的关系的静态视图，能够让我们在正确编写代码之前对系统有一个全面的认识。类图是一种模型类型，确切地说，是一种静态模型类型。类图表示类、接口和它们之间的协作关系，用于系统设计阶段。类图用3个矩形拼接表示，最上面的部分标识类的名称，中间的部分标识类的属性，最下面的部分标识类的方法，如下图所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_13.jpeg)

类与类之间的关系（即事物关系）有继承（泛化）关系、实现关系、组合关系、聚合关系、关联关系和依赖关系6种。下面我们来详细分析类关系的具体内容。

### 2.1.1　继承关系

在继承（Generalization，又叫作泛化）关系中，子类继承父类的所有功能，父类所具有的属性、方法，子类都应该有。除了与父类一致的信息，子类中还包括额外的信息。例如，公交车、出租车和小轿车都是汽车，它们都有名称，并且都能在路上行驶。其类图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_14.jpeg)

其代码结构如下。

```java
public class Car {
    private String name;
    public void run(){}
}
public class Bus extends Car {
}
public class Taxi extends Car {
}
```
### 2.1.2　实现关系

接口（包括抽象类）是方法的集合，在实现（Realization）关系中，类实现了接口，类中的方法实现了接口声明的所有方法。例如，汽车和轮船都是交通工具，而交通工具只是一个可移动工具的抽象概念，船和车实现了具体移动的功能。其类图如下。
 
![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_16.jpeg)

其代码结构如下。
```java
public interface Vehicle {
    void run();
}
public class Car implements Vehicle {
    private String name;
    public void run() {

    }
}
public class Ship implements Vehicle {
    private String name;
    public void run() {

    }
}
```

### 2.1.3　组合关系

组合（Combination）关系表示类之间整体与部分的关系，整体与部分有一致的生存期。一旦整体对象不存在，部分对象也将不存在，整体和部分是同生共死的关系。例如，人由头部和身体组成，两者不可分割，共同存在。其类图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_18.jpeg)

其代码结构如下。
```java
public class Human {
    private Head head;
    private Body body;

    public void setHead(Head head) {
        this.head = head;
    }

    public void setBody(Body body) {
        this.body = body;
    }

    public void display(){

    }
}
public class Head {
    private String name;
}
public class Body {
    private String name;
}
```

### 2.1.4　聚合关系

聚合（Aggregate）关系也表示类之间整体与部分的关系，成员对象是整体对象的一部分，但是成员对象可以脱离整体对象独立存在。例如，公交车司机和工作服、工作帽是整体与部分的关系，但是可以分开，没有共同的生命周期。工作服、工作帽可以穿、戴在别的司机身上，公交车司机也可以换别人的工作服、工作帽。其类图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_20.jpeg)

其代码结构如下。
```java
public class BusDriver {
    private Clothes clothes;
    private Hat hat;

    public void setClothes(Clothes clothes) {
        this.clothes = clothes;
    }

    public void setHat(Hat hat) {
        this.hat = hat;
    }

    public void show(){

    }
}
public class Clothes {
    private String name;
}
public class Hat {
    private String name;
}
```

### 2.1.5　关联关系

关联（Association）关系是类与类之间最常用的一种关系，表示一类对象与另一类对象之间有联系。组合、聚合也属于关联关系，只是关联关系的类间关系比其他两种关系要弱。关联关系有4种：双向关联、单向关联、自关联、多重性关联。例如汽车和司机，一辆汽车对应特定的司机，一个司机也可以开多辆车。其类图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_22.jpeg)

在多重性关联关系中，可以直接在关联直线上增加一个数字，表示与之对应的另一个类的对象的个数，具体含义如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_23.jpeg)

其代码结构如下。

```java
public class Car {
    private Driver driver;
    public void addDriver(Driver driver){
        this.driver = driver;
    }
}
public class Driver {
    private Car car;
    public void addCar(Car car){
        this.car = car;
    }
}
```
### 2.1.6　依赖关系

依赖（Dependency）关系是一种“使用”关系，特定事物的改变有可能会影响到使用该事物的其他事物，当需要表示一个事物使用另一个事物时，使用依赖关系。在大多数情况下，依赖关系体现在某个类的方法使用另一个类的对象作为参数。例如，汽车依赖汽油，如果没有汽油，则汽车将无法行驶。其类图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_25.jpeg)

其代码结构如下。

```java
public class Car {
    public void beforeRun(Oil oil){

    }
}
public class Oil {
    private String type;
}
```
在这6种类关系中，组合、聚合和关联的代码结构一样，可以从关系的强弱来理解，各类关系从强到弱依次是：继承＞实现＞组合＞聚合＞关联＞依赖。下面我们用一张完整的类图，将前面描述的所有类与类之间的关系串联起来。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_27.jpeg)

UML类图是面向对象设计的辅助工具，但并非是必须工具，所以我们把它作为架构师软技能来讲解。

### 2.1.7　类关系记忆技巧

类关系记忆技巧总结如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_28.jpeg)

注：UML的标准类关系图中，没有实心箭头（有些Java编程的IDE自带类生成工具可能出现实心箭头，主要目的是降低理解难度）。

下面用一个经典案例来加深和巩固对类图的理解。下图是《大话设计模式》一书中对动物衍生关系描述的类图。这个图非常有技术含量也非常经典，大家可以好好理解一下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_29.jpeg)


## 2.2 时序图

时序图（Sequence Diagrams）描述对象之间消息的发送顺序，强调时间顺序。时序图是一个二维图，横轴表示对象，纵轴表示时间，消息在各对象之间横向传递，按照时间顺序纵向排列。用箭头表示消息，用竖虚线表示对象生命线。

### 2.2.1　时序图的作用

- 展示对象之间交互的顺序。将交互行为建模为消息传递，通过描述消息如何在对象间发送和接收来动态展示对象之间的交互。
- 相对于其他UML图，时序图更强调交互的时间顺序。
- 可以直观地描述并发进程。

### 2.2.2　时序图组成元素

时序图组成元素主要包括角色（Actor）、对象（Object）、生命线（Lifeline）、控制焦点（Focus of Control）和消息（Message），其具体解释如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_30.jpeg)

### 2.2.3　时序图组合片段

组合片段（Combined Fragments）用来解决交互执行的条件和方式，它允许在时序图中直接表示逻辑组件，用于通过指定条件或子进程的应用区域，为任何生命线的任何部分定义特殊条件和子进程。组合片段共有13种，名称及含义如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_31.jpeg)

常用组合片段举例如下。

**1.抉择（Alt）**

抉择用来指明在两个或更多消息序列之间的互斥的选择，相当于经典的if...else。抉择在任何场合下只发生一个序列。可以在每个片段中都设置一个临界来指示该片段可以运行的条件。else的临界指示其他任何临界都不为true时应运行的片段。如果所有临界都为false并且没有else，则不执行任何片段，如下图所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_32.jpeg)

**2.选项（Opt）**

包含一个可能发生或不发生的序列，如下图所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_33.jpeg)

**3.循环（Loop）**

片段重复一定次数，可以在临界中指示片段重复的条件，如下图所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_34.jpeg)

**4.并行（Par）**

并行处理，片段中的事件可以并行交错，Par相当于多线程，如下图所示。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_35.jpeg)


### 2.2.4　时序图画法及应用实践

时序图的绘制步骤可简单总结如下。
- 划清边界，识别交互的语境。
- 将所要绘制的交互场景中的角色及对象梳理出来。
- 从触发整个交互的某个消息开始，在生命线之间从上到下依次画出所有消息，并注明每个消息的特性（如参数等）。假设有如下一段代码。

```java
public class Test {
    public static void main(String[] args) {
        Client client = new Client();
        client.work();
    }

    static class Device {
        void write(String str){
            //...
        }
    }

    static class Server {
        private Device device;
        public void open(){
            //...
        }
        public void print(String str){
            device.write(str);
            //...
        }
        public void close(){
            //...
        }
    }

    static class Client {
        private Server server;
        public void work(){
            server.open();
            server.print("hello");
            server.close();
        }
    }
}

```
上面代码执行对应的时序图如下。

![](https://gitee.com/zhangchengk/img/raw/master/设计模式就该这样学/epub_33114758_37.jpeg)
