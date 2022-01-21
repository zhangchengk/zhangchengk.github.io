---
title: 安装yum
date: 2022-01-14
category: Linux
tags: 
  - Linux
author: 张诚
location: BeiJing
---


## 1、删除原有的yum

```powershell
rpm -aq|grep yum|xargs rpm -e --nodeps
```

## 2、根据系统版本，下载安装包

在浏览器中打开 http://mirrors.163.com/centos/7/os/x86_64/Packages/ ，找到以下四个文件：

* yum-*.rpm
* yum-metadata-parser-*.rpm
* yum-plugin-fastestmirror-*.rpm
* python-iniparse-*.rpm

```powershell
wget http://mirrors.163.com/centos/7/os/x86_64/Packages/...
```

## 3、安装yum

```powershell
rpm -ivh http://mirrors.163.com/centos/7/os/x86_64/Packages/python-iniparse-0.4-9.el7.noarch.rpm
rpm -ivh ...
```

> 安装包相互有依赖，安装时需要注意顺序：
> 1. 安装python-iniparse
> 2. 安装yum-metadata-parser
> 3. yum和yum-plugin-fastestmirror一起安装

## 4、运行makecache 生成缓存

命令：`yum makecache`

## 5、运行yum clean all

命令：`yum clean all`

## 6、更新yum文件

命令：`yum update`