---
title: clean-compile-build-install-package区别
date: 2020-04-14
category: Maven
tags: 
  - Maven
author: Panda诚
location: BeiJing  
---

clean： 执行该命令会删除项目路径下的target文件，但是不会删除本地的maven仓库已经生成的jar文件

compile：编译命令，只编译选定的目标，不管之前是否已经编译过，会在你的项目路径下生成一个target目录，在该目录中包含一个classes文件夹，里面全是生成的class文件及字节码文件。

package：这个命令会在你的项目路径下一个target目录，并且拥有compile命令的功能进行编译，同时会在target目录下生成项目的jar/war文件。如果a项目依赖于b项目，打包b项目时，只会打包到b项目下target下，编译a项目时就会报错，因为找不到所依赖的b项目，说明a项目在本地仓库是没有找到它所依赖的b项目，这时就用到install命令了

install：该命令包含了package命令功能，不但会在项目路径下生成class文件和jar包，同时会在你的本地maven仓库生成jar文件，供其他项目使用（如果没有设置过maven本地仓库，一般在用户/.m2目录下。如果a项目依赖于b项目，那么install b项目时，会在本地仓库同时生成pom文件和jar文件，解决了上面打包package出错的问题）

build：功能类似compile，只是只对整个项目进行编译

build和compile的区别


Compile：只编译选定的目标，不管之前是否已经编译过。
Build：是对整个工程进行彻底的重新编译，而不管是否已经编译过。Build过程往往会生成发布包，这个具体要看对IDE的配置了，Build在实际中应用很少，因为开发时候基本上不用，发布生产时候一般都用ANT等工具来发布。Build因为要全部编译，还要执行打包等额外工 作，因此时间较长

打包过程

法一：clean，package（如果报错，很可能就是jar依赖的问题，一般此问题都出现在第一次打包的情况，就用法二）
法二：clean，install





