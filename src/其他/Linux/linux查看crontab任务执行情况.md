---
title: linux查看crontab任务执行情况
date: 2020-06-17
category: Linux
tags: 
  - Linux
author: 张诚
location: BeiJing
---

crontab命令的功能是在一定的时间间隔调度一些命令的执行。查看其执行情况，可以使用查看其执行日志的方式。

查看已经执行过的任务，看 /var/log/cron这个文件就可以，可以用tail -f /var/log/cron观察