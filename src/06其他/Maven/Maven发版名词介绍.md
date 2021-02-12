---
title: Maven发版名词介绍
date: 2020-04-15
category: Maven
tags: 
  - Maven
author: 张诚
location: BeiJing
---

版本名称    | 介绍  | 说明                   
------- | --- | ---------------------
alpha   | 内测版 | 内部测试版本               
beta    | 公测版 | Beta阶段会一直加入新的功能      
RC      | 候选版 | 几乎就不会加入新的功能了，而主要着重于除错
Release | 正式版 | 稳定版本                 

RC=Release Candidate,含义 是"发布候选版"，它不是最终的版本，而是最终版(RTM=Release To Manufacture)之前的最后一个版本。

Maven的Snapshot版本与Release版本

1.  Snapshot版本代表不稳定、尚处于开发中的版本
2.  Release版本则代表稳定的版本
3.  什么情况下该用SNAPSHOT?  

    协同开发时，如果A依赖构件B，由于B会更新，B应该使用SNAPSHOT来标识自己。这种做法的必要性可以反证如下：  

    a.如果B不用SNAPSHOT，而是每次更新后都使用一个稳定的版本，那版本号就会升得太快，每天一升甚至每个小时一升，这就是对版本号的滥用。  

    b.如果B不用SNAPSHOT, 但一直使用一个单一的Release版本号，那当B更新后，A可能并不会接受到更新。因为A所使用的repository一般不会频繁更新release版本的缓存（即本地repository)，所以B以不换版本号的方式更新后，A在拿B时发现本地已有这个版本，就不会去远程Repository下载最新的B

4.  不用Release版本，在所有地方都用SNAPSHOT版本行不行？  

    不行。正式环境中不得使用snapshot版本的库。 比如说，今天你依赖某个snapshot版本的第三方库成功构建了自己的应用，明天再构建时可能就会失败，因为今晚第三方可能已经更新了它的snapshot库。你再次构建时，Maven会去远程repository下载snapshot的最新版本，你构建时用的库就是新的jar文件了，这时正确性就很难保证了。引自飞天奔月

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)