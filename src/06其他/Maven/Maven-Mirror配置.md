---
title: Maven Mirror 高级配置
date: 2020-04-15
category: Maven
tags: 
  - Maven
author: 张诚
location: BeiJing
---

用mirror强制项目只使用一个仓库，To achieve this, set `mirrorOf` to `*`.

```xml
<settings>
  ...
  <mirrors>
    <mirror>
      <id>internal-repository</id>
      <name>Maven Repository Manager running on repo.mycompany.com</name>
      <url>http://repo.mycompany.com/proxy</url>
      <mirrorOf>*</mirrorOf>
    </mirror>
  </mirrors>
  ...
</settings>
```

# Mirror高级用法

A single mirror can handle multiple repositories when used in conjunction with a repository manager.

The syntax as of Maven 2.0.9:

* `*` matches all repo ids.
* `external:*` matches all repositories except those using localhost or file based repositories. This is used in conjunction with a repository manager when you want to exclude redirecting repositories that are defined for Integration Testing.
* multiple repositories may be specified using a comma as the delimiter
* an exclamation mark may be used in conjunction with one of the above wildcards to exclude a repository id

Be careful not to include extra whitespace around identifiers or wildcards in comma separated lists. For example, a mirror with `<mirrorOf`> set to `!repo1, *` will not mirror anything while `!repo1,*` will mirror everything but `repo1`.

The position of wildcards within a comma separated list of repository identifiers is not important as the wildcards defer to further processing and explicit includes or excludes stop the processing, overruling any wildcard match.

When you use the advanced syntax and configure multiple mirrors, keep in mind that their declaration order matters. When Maven looks for a mirror of some repository, it first checks for a mirror whose `<mirrorOf>` exactly matches the repository identifier. If no direct match is found, Maven picks the first mirror declaration that matches according to the rules above (if any). Hence, you may influence match order by changing the order of the definitions in the `settings.xml`

Examples:

* `*` = everything
* `external:*` = everything not on the localhost and not file based.
* `repo,repo1` = repo or repo1
* `*,!repo1` = everything except repo1

**Note:** This feature is only available in Maven 2.0.9+.

```xml
<settings>
  ...
  <mirrors>
    <mirror>
      <id>internal-repository</id>
      <name>Maven Repository Manager running on repo.mycompany.com</name>
      <url>http://repo.mycompany.com/proxy</url>
      <mirrorOf>external:*,!foo</mirrorOf>
    </mirror>
    <mirror>
      <id>foo-repository</id>
      <name>Foo</name>
      <url>http://repo.mycompany.com/foo</url>
      <mirrorOf>foo</mirrorOf>
    </mirror>
  </mirrors>
  ...
</settings>
```


## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)