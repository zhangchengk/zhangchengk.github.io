---
title: maven打包重命名jar
date: 2020-04-22
category: Maven
tags: 
  - Maven
author: Panda诚
location: BeiJing
---
在实际的maven构建war项目中，希望通过依赖引入的jar包名称可以定制，具体的为第三方的用完整名称(名称-版本-分类.扩展名)，而自己的项目打出来的jar希望使用短名称(名称.扩展名)。由于jar包的下载如果是通过dependency的方式引入，可以通过maven-dependency-plugin进行重命名。具体的使用方法如下：

1. 对需要能够重命名的dependency设定scope为provided;

2. 使用maven-dependency-plugin插件进行jar重命名：

```xml
<plugin>
   <artifactId>maven-dependency-plugin</artifactId>
   <executions>
      <execution>
         <phase>process-sources</phase>
         <goals>
            <goal>copy</goal>
         </goals>
         <configuration>
            <artifactItems>
			   <artifactItem>
			      <groupId>**</groupId>
				  <artifactId>***</artifactId>
				  <version>***</version>
				  <type>jar</type>
				  <outputDirectory>${project.build.directory}/${project.build.finalName}/WEB-INF/lib</outputDirectory>
				  <destFileName>basic.jar</destFileName>
			    </artifactItem>
				.....
			</artifactItems>
		 </configuration>
		</execution>
	</executions>
</plugin>
```

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)