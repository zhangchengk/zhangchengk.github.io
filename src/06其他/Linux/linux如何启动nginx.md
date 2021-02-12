---
title: linux如何启动nginx
date: 2020-04-08
category: Linux
tags: 
  - Linux
  - nginx
author: 张诚
location: BeiJing  
---

第一次启动：

在nginx安装目录下的sbin目录下执行：./nginx -c /usr/local/nginx/nginx/conf/nginx.conf

其中/usr/local/nginx/nginx/conf/nginx.conf是你自己的nginx.conf路径。

重新平滑启动：

在nginx安装目录下的sbin目录下执行： ./nginx -s reload


## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)