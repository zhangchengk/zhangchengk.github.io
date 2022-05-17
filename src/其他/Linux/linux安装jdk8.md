---
title: linux安装jdk8
date: 2020-04-08
category: Linux
tags: 
  - Linux
author: Panda诚
location: BeiJing  
---

# 1.下载jdk8

官网的就不说了，这里推荐华为云镜像 :https://mirrors.huaweicloud.com/java/jdk/

![](https://gitee.com/zhangchengk/img/raw/master/linux/1.png)

# 2.源码包解压

使用xftp将jdk源码包，上传到/usr/local（软件一般安装到这个目录）

使用解压命令解压

```
[root@localhost local]# tar -zxvf jdk-8u181-linux-x64.tar.gz
```

顺手删掉jdk源码包

```
[root@localhost local]# rm -f jdk-8u181-linux-x64.tar.gz
```

# 3.配置jdk环境变量

/etc/profile文件的改变会涉及到系统的环境，也就是有关Linux环境变量的东西

所以，我们要将jdk配置到/etc/profile，才可以在任何一个目录访问jdk

```
[root@localhost local]# vim /etc/profile
```

按i进入编辑，在profile文件尾部添加如下内容

```shell
export JAVA_HOME=/usr/local/jdk1.8.0_181  #jdk安装目录 
export JRE_HOME=${JAVA_HOME}/jre 
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH 
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin 
export PATH=$PATH:${JAVA_PATH}
```
Esc --> :wq

保存并退出编辑

通过命令source /etc/profile让profile文件立即生效

```
[root@localhost local]# source /etc/profile
```

# 4.测试是否安装成功

```
[root@localhost local]# javac
```

# 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)