---
title: 深入浅出Java多线程
date: 2020-06-06
category: 深入浅出Java多线程
tags: 
  - 深入浅出Java多线程
author: 张诚
location: BeiJing
layout: Slide
reveal: 
    controlsLayout: 'edges'
    mouseWheel: true
    transitionSpeed: 'fast'
    hashOneBasedIndex: true
    hash: true
    history: true
---

@slidestart

笔者在读完市面上关于Java并发编程的资料后，感觉有些知识点不是很清晰，于是在RedSpider社区内展开了对Java并发编程原理的讨论。鉴于开源精神，我们决定将我们讨论之后的Java并发编程原理整理成书籍，分享给大家。

站在巨人的肩上，我们可以看得更远。本书内容的主要来源有博客、书籍、论文，对于一些已经叙述得很清晰的知识点我们直接引用在本书中；对于一些没有讲解清楚的知识点，我们加以画图或者编写Demo进行加工；而对于一些模棱两可的知识点，本书在查阅了大量资料的情况下，给出最合理的解释。

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.001.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.002.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.003.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.004.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.005.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.006.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.007.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.008.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.009.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.010.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.011.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.012.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.013.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.014.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.015.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.016.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.017.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.018.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.019.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.020.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.021.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.022.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.023.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.024.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.025.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.026.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.027.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.028.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.029.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.030.png)


---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.031.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.032.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.033.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.034.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.035.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.036.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.037.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.038.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.039.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.040.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.041.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.042.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.043.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.044.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.045.png)

---

![](https://zhangchengk.gitee.io/image/读书笔记/深入浅出Java多线程/p/p.046.png)

@slideend
