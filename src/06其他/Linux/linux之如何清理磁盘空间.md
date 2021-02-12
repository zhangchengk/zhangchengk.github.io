---
title: linux之如何清理磁盘空间
date: 2020-04-13
category: Linux
tags: 
  - Linux
author: Panda诚
location: BeiJing  
---
首先查询磁盘空间占用情况
```
df -ah
```
1.查询磁盘空间占用情况
```
df -h
```
2.进入根目录，查询大文件与目录
```
cd /
du -sh * | sort -n
```
查看上GB的目录并且排序,可以用这个命令
```
du -h --max-depth=1 |grep 'G' |sort
```
3 然后不断执行上面的过程，进入大文件目录，定位大文件并删除
4.如果删除大文件，df -h查看磁盘空间并没有释放，那么就是被删除的文件关联的进程还在执行，那么需要我们将相关进程kill掉或重启，可以用这个命令来查看进程
```
lsof |grep delete
```


## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)