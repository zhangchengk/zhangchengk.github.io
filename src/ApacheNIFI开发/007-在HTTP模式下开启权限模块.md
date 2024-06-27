---
title: HTTP模式下开启权限
date: 2020-12-31
category: ApacheNIFI开发
tag: NIFI
---

Apache NIFI是提供了一套完整的用户模块和权限模块的，但是前提是必需使用HTTPS。但是在我们日常的开发和运维过程中，为了更加方便，我们通常用HTTPS的域名直接映射到一个主机(尤其是在大的开发平台)，同时如果维护一个NIFI集群，还得每一台机器都要去配置HTTPS？确实想想就挺麻烦的。






