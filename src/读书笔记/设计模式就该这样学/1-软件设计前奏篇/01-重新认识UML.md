---
title: 重新认识UML
date: 2020-12-08
category: 1-软件设计前奏篇
tags: 
  - 设计模式就该这样学
author: Panda诚
location: BeiJing
---
## 1.1　UML的定义

统一建模语言（Unified Modeling Language，UML）是一种为面向对象系统的产品进行说明、可视化和编制文档的标准语言，是非专利的第三代建模和规约语言。UML是一种面向对象设计的建模工具，是在开发阶段说明、可视化、构建和书写一个面向对象软件密集系统的制品的开放方法，但独立于任何具体的程序设计语言。

## 1.2　UML应用场景

UML最佳的应用是工程实践，在对大规模、复杂系统进行建模方面，特别是在软件架构层次，已经被验证有效。UML模型大多以图表的方式表现出来。一份典型的建模图表通常包含几个块或框、连接线和作为模型附加信息的文本。这些虽简单却非常重要，在UML规则中相互联系和扩展。UML的目标是以面向对象图的方式来描述任何类型的系统，具有很宽的应用领域。其中最常用的是建立软件系统的模型，但它同样可以用于描述非软件领域的系统，如机械系统、企业机构或业务过程，以及处理复杂数据的信息系统、具有实时要求的工业系统或工业过程等。总之，UML可以对任何具有静态结构和动态行为的系统进行建模，而且适用于从需求规格描述直至系统完成后的测试和维护等系统开发的各个阶段。

## 1.3　UML基本构件简介

UML建模的核心是模型，模型是现实的简化、真实系统的抽象。UML提供了系统的设计蓝图。当给软件系统建模时，需要采用通用的符号语言，这种描述模型所使用的语言被称为建模语言。在UML中，所有的描述由事物、关系和图这些构件组成。下图完整地描述了所有构件的关系。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_5.jpeg)

### 1.3.1　事物

事物是抽象化的最终结果，分为结构事物、行为事物、分组事物和注释事物。

**1.结构事物**

结构事物是模型中的静态部分，用以呈现概念或实体的表现元素，如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_6.jpeg)
**2.行为事物**

行为事物指UML模型中的动态部分，如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_7.jpeg)

**3.分组事物**

目前只有一种分组事物，即包。包纯粹是概念上的，只存在于开发阶段，结构事物、行为事物甚至分组事物都有可能放在一个包中，如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_8.jpeg)
**4.注释事物**

注释事物是解释UML模型元素的部分，如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_9.jpeg)

### 1.3.2　关系

UML将事物之间的联系归纳为6种，并用对应的图形类表示，如下表所示。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_10.jpeg)
![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_11.jpeg)
### 1.3.3　图

UML 2.0一共有13种图（UML 1.5定义了9种，UML 2.0增加了4种），分别是类图、对象图、构件图、部署图、活动图、状态图、用例图、时序图、协作图9种，以及包图、组合结构图、时间图、交互概览图4种。

![](https://gitee.com/zhangchengk/img/raw/master/img//Users/zhangcheng/vscodeProjects/image/设计模式就该这样学/epub_33114758_12.jpeg)
