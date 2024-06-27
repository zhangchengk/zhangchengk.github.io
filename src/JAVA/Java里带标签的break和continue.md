---
title: Java里带标签的break和continue
date: 2020-04-14
category: Java  
---

break和continue是老生常谈的东西，break是终止这层循环，包括之后的本层循环，continue是终止本次循环的语句，继续之后的本层循环。

在只有一层循环的时候，带标签和不带标签是没有区别的，以下都用break做试验。

```java
public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
        System.out.println("i = " + i);
        if (i == 3) {
            break;
        }
    }
    tag:
    for (int j = 0; j < 10; j++) {
        System.out.println("j = " + j);
        if (j == 3) {
            break tag;
        }
    }
}
```
输出是
```
i = 0
i = 1
i = 2
i = 3
j = 0
j = 1
j = 2
j = 3
```
同时我的IDE也智能地提示这个是一个不必要的标签。

但对于两层及以上的嵌套循环，标签就有用了，先看不带标签的
```java
public static void main(String[] args) {
    for (int i = 0; i < 3; i++) {
        System.out.println("i = " + i);
        for (int j = 0; i < 3; j++) {
            System.out.println("j = " + j);
            if (j == 1) {
                break;
            }
        }
    }
}
```
输出是
```
i = 0
j = 0
j = 1
i = 1
j = 0
j = 1
i = 2
j = 0
j = 1
```
可见，这个break只是终止了本层的循环，对于它上层的无能为力，再看带tag的
```java
public static void main(String[] args) {
    tag:
    for (int i = 0; i < 3; i++) {
        System.out.println("i = " + i);
        for (int j = 0; i < 3; j++) {
            System.out.println("j = " + j);
            if (j == 1) {
                break tag;
            }
        }
    }
}
```
输出为
```
i = 0
j = 0
j = 1
```
总结一下，带标签的break和continu影响的范围是紧接着标签后的那个整体的语句块。