---
title: maven打包去除版本号
date: 2020-04-22
category: Maven
---

* Maven打包后，jar或war文件名里带有版本号信息，如cloud-0.0.1-SNAPSHOT.war等。
* 如果想要去掉版本号，打开项目pom.xml文件，在`<build>  </build>`标签内加入如下内容：

```xml
<build>
  <!-- 产生的构件的文件名，默认值是${artifactId}-${version}。 -->  
        <finalName>projectname</finalName>
</build>
```




