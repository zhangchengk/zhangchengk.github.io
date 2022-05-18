---
title: Http下接入NIFI的权限功能-待完成
date: 2020-06-09
category: ApacheNIFI教程
tags: 
  - Apache NIFI
author: Panda诚
location: BeiJing
publish: false
---

## 前言

NIFI提供了一套的用户认证权限认证的功能，但这些都是使用HTTPS的前提下。对于我们来说，如果没有正版的证书(貌似毕业后这几年就没有做过一个真正的HTTPS服务)，而自定义的证书还要在浏览器里导入，平时本地开发也麻烦，所以我的需求是在HTTP下，也能使用NIFI的用户验证，权限验证的功能。

## NIFI开启HTTPS后，是怎么触发的用户验证权限验证的功能？

正常的思路是用一个LDAP，安装NIFI官方文档说明，搭起来NIFI的HTTPS模式，然后远程DEBUG，看看是怎么进入的ldap-provider，怎么就开始了用户认证 权限认证的。

但我比较懒搭这些东西了。。。。直接分析源码

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)
