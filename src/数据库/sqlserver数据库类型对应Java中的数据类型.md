---
title: sqlserver数据库类型对应Java中的数据类型
date: 2020-04-01
category: 数据库
tags: 
  - 数据库
author: 张诚
location: BeiJing  
---

下表列出了基本 SQL Server、JDBC 和 Java 编程语言数据类型之间的默认映射：

SQL Server 类型              | JDBC 类型 (java.sql.Types)                | Java 语言类型                   
-------------------------- | --------------------------------------- | ----------------------------
bigint                     | BIGINT                                  | long                        
timestamp<br/>binary          | BINARY                                  | byte[]                      
bit                        | BIT                                     | boolean                     
char                       | CHAR                                    | String                      
decimal<br/>money<br/>smallmoney | DECIMAL                                 | java.math.BigDecimal        
float                      | DOUBLE                                  | double                      
int                        | INTEGER                                 | int                         
image<br/>varbinary(max)      | LONGVARBINARY                           | byte[]                      
varchar(max)<br/>text         | LONGVARCHAR                             | String                      
nchar                      | CHAR<br/>NCHAR (Java SE 6.0)               | String                      
nvarchar                   | VARCHAR<br/>NVARCHAR (Java SE 6.0)         | String                      
nvarchar(max)<br/>ntext       | LONGVARCHAR<br/>LONGNVARCHAR (Java SE 6.0) | String                      
numeric                    | NUMERIC                                 | java.math.BigDecimal        
real                       | REAL                                    | float                       
smallint                   | SMALLINT                                | short                       
datetime<br/>smalldatetime    | TIMESTAMP                               | java.sql.Timestamp          
varbinary<br/>udt             | VARBINARY                               | byte[]                      
varchar                    | VARCHAR                                 | String                      
tinyint                    | TINYINT                                 | short                       
uniqueidentifier           | CHAR                                    | String                      
xml                        | LONGVARCHAR<br/>SQLXML (Java SE 6.0)       | String<br/>SQLXML              
time                       | TIME (1)                                | java.sql.Time (1)           
date                       | DATE                                    | java.sql.Date               
datetime2                  | TIMESTAMP                               | java.sql.Timestamp          
datetimeoffset (2)         | microsoft.sql.Types.DATETIMEOFFSET      | microsoft.sql.DateTimeOffset

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/image/raw/master/wechat.jpg)