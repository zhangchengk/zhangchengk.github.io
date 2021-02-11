---
title: maven压缩解压使jar文件损坏
date: 2020-04-22
category: Maven
tags: 
  - Maven
author: 张诚
location: BeiJing
---

问题描述：在NIFI开源项目中，我想把自定义的Moudle和一些静态资源都打成一个zip包，然后解压到NIFI的安装包里，然后在启动的过程中
发现nar包(也是一种zip jar)文件顺坏了。最后在[stackoverflow](https://stackoverflow.com/questions/13928601/tar-gz-file-contains-corrupt-jar-files-after-maven-build/37213277#37213277)找到了解决方案、

压缩的配置和解压的配置去掉

```xml
<filtered>true</filtered>
```
filtered的意思是：是否在复制文件时过滤符号是否在复制文件时过滤符号。

我的问题是解压的时候 不知所云的copy了这一行，然后过滤符号导致了文件损坏。

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)
