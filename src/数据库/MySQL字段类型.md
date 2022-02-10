---
title: MySQL字段类型
date: 2022-02-09
category: 数据库
tags: 
  - 数据库
author: 张诚
location: BeiJing
---

>基于8.0版本

MySQL支持多种数据类型：数字类型，日期和时间类型，字符类型，空间类型和JSON类型。

在进行具体介绍数据类型前，先介绍下用到的约束信息：

- 对于整数类型，`M`表示最大的显示宽度。对于浮点类型和定点类型，`M`表示可存储的数字位数的总数。对于字符串类型，`M`表示最大长度。
- `D`作用于浮点类型和定点类型，表示小数点后的位数。`D`最大值是30，`D`的值不能大于`M-2`。
- `fsp`作用于`TIME` `DATETIME` `TIMESTAMP`，表示秒的精度，也就是秒那部分数值小数点后的位数。`fsp`的范围为`0-6`，默认值是`0`(不同于标准SQL的默认值6)。

> 计算机用二进制存储数据，而每个bit只可能是`0`或`1`，是没有小数点的，所以为了存储带小数的实数，就出现了定点数和浮点数。
>浮点数：`实数以指数形式存放在存储单元中。类似于科学计数法a×10^n`。把存储字长分成3部分，分别表示`符号位(0代表正，1代表为负)`，`指数`和`尾数位`。
>定点数：`约定小数点隐含在某一个固定的位置。`把存储字长分成若干部分， 例如32位字长，分为三个部分：用1位来表达正负位，0为正，1为负。再划出4位来表示整数部分。剩下的27位表示小数部分。固定的小数点位置决定了固定位数的整数部分和小数部分，不利于同时表达特别大或特别小的数。

## 数字类型

MySQL支持标准SQL数字类型。包括精确数字类型：`INTEGER`, `SMALLINT`，`DECIMAL`，`NUMERIC`，近似数字类型：`FLOAT`， `REAL`，`DOUBLE PRECISION`。

`INT`是`INTEGER`的同义关键词。`DEC`和`FIXED`是`DECIMAL`的同义关键词。`DOUBLE`是`DOUBLE PRECISION`的同义关键词。

除非开启`REAL_AS_FLOAT`模式，否则默认认为`REAL`是`DOUBLE PRECISION`的同义关键词。

`BIT`类型存储位数值，`MyISAM`，`MEMORY`，`InnoDB`，`NDB`支持`BIT`。

整数类型。`M`表示最大的显示宽度(最大值为255)。注意显示宽度与存储值的范围时无关的。对于浮点类型和定点类型，`M`表示可存储的数字位数的总数。

`MySQL 8.0.17`开始不建议使用整数的显示宽度这个属性了，未来的版本可能不支持这个属性。

如果在定义一个数字类型列时指定了`ZEROFILL`，MySQL会为这个列自动的加上`UNSIGNED`属性。`MySQL 8.0.17`开始不建议使用数字类型的`ZEROFILL`属性了，未来的版本可能不支持这个属性。(可以使用其他方式来替代，比如LPAD() 函数去做填充零)。

数字类型支持`UNSIGNED`和`SIGNED`属性，但默认都是有符号的，所以可以不显示的使用`SIGNED`。`MySQL 8.0.17`开始不建议使用`FLOAT` `DOUBLE` `DECIMAL`的`UNSIGNED`属性，未来的版本可能不支持这个属性。(可以使用约束来替代)。

`SERIAL`等同于`BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE.`。

对于整数类型列定义来说，`SERIAL DEFAULT VALUE`等同于`NOT NULL AUTO_INCREMENT UNIQUE`。

- `BIT[(M)]` 位值类型，`M`代表bit的数量，范围是1-64，缺省则默认为1。
- `TINYINT[(M)] [UNSIGNED] [ZEROFILL]` 小整数，有符号的范围为`-128 ~ 127`，无符号范围为`0~255`。
- `BOOL, BOOLEAN` 是`TINYINT(1)`的同义词。0表示false，否则表示为true。
- `SMALLINT[(M)] [UNSIGNED] [ZEROFILL]` 小整数，有符号的范围时`-32768 ~ 32767`，无符号范围为`0~65535`。
- `MEDIUMINT[(M)] [UNSIGNED] [ZEROFILL]` 中等大小的整数，有符号的范围时`-8388608 ~ 8388607`，无符号范围为`0~16777215`。
- `INT[(M)] [UNSIGNED] [ZEROFILL]`正常大小的整数，有符号的范围时`-2147483648 ~ 2147483647`，无符号范围为`0~4294967295`。等价于`INTEGER[(M)] [UNSIGNED] [ZEROFILL]`。
- `BIGINT[(M)] [UNSIGNED] [ZEROFILL]` 大整数，有符号的范围时`-9223372036854775808 ~ 9223372036854775807`，无符号范围为`0~18446744073709551615`。
- `DECIMAL[(M[,D])] [UNSIGNED] [ZEROFILL]` 定点数，`M`表示可存储的数字位数的总数，`D`表示小数点后的位数。对于负数来说，符号`-`不计在`M`中。如果`D`是0，表示没有小数部分。对于`DECIMAL`，`M`的最大值是65，`D`的最大值是30。`M`缺省默认值是10，`D`缺省默认值是0。等价于`DEC[(M[,D])] [UNSIGNED] [ZEROFILL], NUMERIC[(M[,D])] [UNSIGNED] [ZEROFILL], FIXED[(M[,D])] [UNSIGNED] [ZEROFILL]`。
- `FLOAT[(M,D)] [UNSIGNED] [ZEROFILL]` 单精度浮点数，范围`-3.402823466E+38 ~ -1.175494351E-38`，`0`，`1.175494351E-38 ~ 3.402823466E+38`。这些是基于IEEE标准的理论范围，实际范围因为硬件和软件可能会稍微小些。`FLOAT(M,D)`是不标准的MySQL扩展，在`MySQL 8.0.17`不建议使用这个语法，未来版本可能不支持。
- `FLOAT(p) [UNSIGNED] [ZEROFILL]` 浮点数类型，`p`表示在bits的精度，如果`p`范围是`0~24`，MySQL则将使用缺省了`M`和`D`的`FLOAT`，如果`p`范围是`25~53`则将使用缺省了`M`和`D`的`DOUBLE`。`FLOAT(p)`语法是来兼容ODBC标准的。
- `DOUBLE[(M,D)] [UNSIGNED] [ZEROFILL]` 双精度浮点数，范围为`-1.7976931348623157E+308 ~ -2.2250738585072014E-308`，`0`，`2.2250738585072014E-308 ~ 1.7976931348623157E+308`。这些是基于IEEE标准的理论范围，实际范围因为硬件和软件可能会稍微小些。`DOUBLE(M,D)`是不标准的MySQL扩展，在`MySQL 8.0.17`不建议使用这个语法，未来版本可能不支持。等同于`DOUBLE PRECISION[(M,D)] [UNSIGNED] [ZEROFILL]，REAL[(M,D)] [UNSIGNED] [ZEROFILL](REAL_AS_FLOAT启用除外)`

**整数类型范围**
Type        | Storage (Bytes) | Minimum Value Signed | Minimum Value Unsigned | Maximum Value Signed | Maximum Value Unsigned
----------- | --------------- | -------------------- | ------------------------------------------------------------------------------------- | -------------------- | ----------------------
`TINYINT`   | 1               | `-128`               | `0`                                                                                   | `127`                | `255`                 
`SMALLINT`  | 2               | `-32768`             | `0`                                                                                   | `32767`              | `65535`               
`MEDIUMINT` | 3               | `-8388608`           | `0`                                                                                   | `8388607`            | `16777215`            
`INT`       | 4               | `-2147483648`        | `0`                                                                                   | `2147483647`         | `4294967295`          
`BIGINT`    | 8               | `-2<sup>63</sup>`    | `0`                                                                                   | `2<sup>63</sup>-1`   | `2<sup>64</sup>-1`    

>定点类型`DECIMAL` `NUMERIC` 用于存储精确值。这些类型用于保存重要的带准确精度的值，比如说钱。在MySQL中，`NUMERIC`是`DECIMAL`实现的，`DECIMAL`是用二进制存储的。
>对于一个`DECIMAL`列的声明，通常要指定精度(precision)和刻度(scale)，比如
>```sql
>salary DECIMAL(5,2)
>```
>这个例子中，5是精度(precision)，2是刻度(scale)。精度(precision)表示存储数据的位数，刻度(scale)表示小数点后的位数，所以`DECIMAL(5,2)`能存储的范围是`-999.99~999.99`。`DECIMAL(M)`的语法等价于`DECIMAL(M,0)`，同样的`DECIMAL`的语法等价于`DECIMAL(10,0)`。如果刻度(scale)是0，则没有小数。

>浮点类型 `FLOAT`和`DOUBLE`表示近似的数值。MySQL使用4个byte表示单精度，8个byte表示双精度。

>BIT[(M)]` 位值类型，`M`代表bit的数量，范围是1-64，缺省则默认为1。可以使用 ```b'value'```的方式来指定值，比如```b'111'```表示7。

## 日期和时间类型

时间类型有`DATE`，`TIME`，`DATETIME`，`TIMESTAMP`，`YEAR`。

- `DATE` 范围是`'1000-01-01' ~ '9999-12-31'`，格式是`'YYYY-MM-DD'`。
- `DATETIME[(fsp)]` 范围是`'1000-01-01 00:00:00.000000' ~ '9999-12-31 23:59:59.999999'`，格式是`'YYYY-MM-DD hh:mm:ss[.fraction]'`。fsp范围为0~6。
- `TIMESTAMP[(fsp)]` 范围是`'1970-01-01 00:00:01.000000' UTC ~ '2038-01-19 03:14:07.999999' UTC`。`TIMESTAMP`是存储的epoch('1970-01-01 00:00:00' UTC)秒数，它无法表示'1970-01-01 00:00:00'，因为'1970-01-01 00:00:00'是0秒，而对于`TIMESTAMP`，0是'0000-00-00 00:00:00'。
- `TIME[(fsp)]` 范围是`'-838:59:59.000000' ~ '838:59:59.000000'`，格式是`'hh:mm:ss[.fraction]'`。
- `YEAR[(4)]` 范围是`1901 ~ 2155`，0值是`0000`。

## 字符类型

字符类型有`CHAR`，`VARCHAR`，`BINARY`，`VARBINARY`，`BLOB`，`TEXT`，`ENUM`，`SET`。对于`CHAR`，`VARCHAR`，`TEXT`，MySQL以字符为单位计量长度。对于`BINARY`，`VARBINARY`，`BLOB`，MySQL以byte为单位计量长度。

- `[NATIONAL] CHAR[(M)] [CHARACTER SET charset_name] [COLLATE collation_name]` 固定长度的字符类型，右填充空格。`M`表示字符长度，范围是`0~255`，缺省值为1。
>除非启用了PAD_CHAR_TO_FULL_LENGTH SQL模式，否则在检索CHAR值时将删除尾部的空格。
>CHAR BYTE是BINARY的别名。
- `[NATIONAL] VARCHAR(M) [CHARACTER SET charset_name] [COLLATE collation_name]` 变长的字符类型，`M`表示`字节长度`，范围是`0~65535`。有效长度还由`maximum row size(65,535 bytes)`和字符集决定，比如说utf8字符集，一个字符最大需要三个字节，如果存储的都是3字节，那么最多的字符是21844。
>MySQL中utf8实际上是utf8mb3的别名，即maximum of three bytes per character最大只支持3个字节，5.5.3之后增加了utf8mb4字符编码，mb4即 maximum of four bytes。简单说 utf8mb4 是 utf8 的超集并完全兼容utf8，能够用四个字节存储更多的字符。
>MySQL遵循标准SQL，检索VARCHAR时不会删除尾部的空格。
>VARCHAR 是`CHARACTER VARYING`的简写。
>`NATIONAL VARCHAR`是标准SQL语法，指示列应使用一些预先确定的字符集，MySQL中这个字符集是utf8。
- `BINARY[(M)]` BINARY类型类似于CHAR类型，但存储的是二进制字节串而不是非二进制字符串。可选长度M表示以字节为单位的列长度。如果省略，M默认值为1。
- `VARBINARY(M)` VARBINARY类型类似于VARCHAR类型，但存储的是二进制字节串而不是非二进制字符串。M表示以字节为单位的最大列长。
- `TINYBLOB` 字节长度最大为255的BLOB。
- `TINYTEXT [CHARACTER SET charset_name] [COLLATE collation_name]` 字符长度最大为255的TEXT。
- `BLOB[(M)]` 字节长度最大为65535的BLOB。
- `TEXT[(M)] [CHARACTER SET charset_name] [COLLATE collation_name]` 字符长度最大为65535的TEXT。
- `MEDIUMBLOB` 字节长度最大为16,777,215的BLOB。
- `MEDIUMTEXT [CHARACTER SET charset_name] [COLLATE collation_name]` 字符长度最大为16,777,215的TEXT。
- `LONGBLOB` 字节长度最大为4,294,967,295(4GB)的BLOB。
- `LONGTEXT [CHARACTER SET charset_name] [COLLATE collation_name]` 字符长度最大为4,294,967,295(4GB)的TEXT。
- `ENUM('value1','value2',...) [CHARACTER SET charset_name] [COLLATE collation_name]` 枚举类型，必须从指定的枚举集合里选取一个值进行存储。存储NULL或者''会报错。枚举集合最多可以支持65535个不同的元素，每个元素字符长度小于等于255，字节长度小于等于1020。
- `SET('value1','value2',...) [CHARACTER SET charset_name] [COLLATE collation_name]` 集合类型，可以从指定的集合里选取0个值或者多个值进行存储，一个Set集合中最多可以有64个不同的元素，每个元素字符长度小于等于255，字节长度小于等于1020。

## 空间类型

`GEOMETRY` `POINT` `LINESTRING` `POLYGON` `MULTIPOINT` `MULTILINESTRING` `MULTIPOLYGON` `GEOMETRYCOLLECTION`

## JSON类型

MySQL支持由rfc7159定义的原生JSON数据类型，可以有效地访问JSON (JavaScript对象符号)文档中的数据。与将JSON格式的字符串存储在字符串列中相比，JSON数据类型提供了以下优点:

- 自动验证JSON文档存储在JSON列。无效文档会产生错误。
- 优化的存储格式。存储在JSON列中的JSON文档被转换为一种内部格式，允许对文档元素进行快速读取访问。当稍后服务器必须读取以这种二进制格式存储的JSON值时，不需要从文本表示中解析该值。二进制格式的结构使服务器能够通过键或数组索引直接查找子对象或嵌套值，而不必读取文档中它们之前或之后的所有值。

## 全字段建表SQL

```sql
CREATE TABLE `test` (
  `c_bit` bit(1) DEFAULT b'0',
  `c_bit_m` bit(10) DEFAULT b'1',
  `c_tinyint` tinyint(127) DEFAULT '1',
  `c_bool` tinyint(1) DEFAULT '1',
  `c_smallint` smallint(6) DEFAULT '1',
  `c_mediumint` mediumint(9) DEFAULT '1',
  `c_int` int(11) NOT NULL AUTO_INCREMENT,
  `c_bigint` bigint(20) DEFAULT '1',
  `c_decimal` decimal(10,5) DEFAULT '1.10000',
  `c_float` float(10,5) DEFAULT '1.10000',
  `c_double` double(10,5) DEFAULT '1.10000',
  `c_date` date DEFAULT '2022-02-10',
  `c_datetime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `c_timestamp` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `c_time` time(6) DEFAULT '13:55:02.000000',
  `c_year` year(4) DEFAULT '2022',
  `c_char` char(5) DEFAULT 'abcde',
  `c_varchar` varchar(255) DEFAULT 'abcde',
  `c_binary` binary(5) DEFAULT 'abcde',
  `c_varbinary` varbinary(255) DEFAULT 'abcde',
  `c_tinyblob` tinyblob,
  `c_tinytext` tinytext,
  `c_blob` blob,
  `c_text` text,
  `c_mediumblob` mediumblob,
  `c_mediumtext` mediumtext,
  `c_longblob` longblob,
  `c_longtext` longtext,
  `c_enum` enum('a','b','c') DEFAULT 'c',
  `c_set` set('a','b','c') DEFAULT 'b',
  `c_geometry` geometry DEFAULT NULL,
  `c_point` point DEFAULT NULL,
  `c_linestring` linestring DEFAULT NULL,
  `c_polygon` polygon DEFAULT NULL,
  `c_multipoint` multipoint DEFAULT NULL,
  `c_multilinestring` multilinestring DEFAULT NULL,
  `c_multipolygon` multipolygon DEFAULT NULL,
  `c_geometrycollection` geometrycollection DEFAULT NULL,
  `c_json` json DEFAULT NULL,
  PRIMARY KEY (`c_int`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```

插入测试数据(有默认值的就不用管了)
```sql
INSERT INTO `zc`.`test` (
	`c_tinyblob`,
	`c_tinytext`,
	`c_blob`,
	`c_text`,
	`c_mediumblob`,
	`c_mediumtext`,
	`c_longblob`,
	`c_longtext`,
	`c_enum`,
	`c_set`,
	`c_geometry`,
	`c_point`,
	`c_linestring`,
	`c_polygon`,
	`c_multipoint`,
	`c_multilinestring`,
	`c_multipolygon`,
	`c_geometrycollection`,
	`c_json` 
)
VALUES
	(
		0x307833303339,
		'12345',
		0x307833303339,
		'12345',
		0x307833303339,
		'12345',
		0x307833303339,
		'12345',
		'c',
		'b',
		ST_GeomFromText ( 'POINT(1 1)' ),
		ST_GeomFromText ( 'POINT(1 1)' ),
		ST_GeomFromText ( 'LINESTRING(2 1, 6 6)' ),
		ST_GeomFromText ( 'POLYGON((0 5, 2 5, 2 7, 0 7, 0 5))' ),
		ST_GeomFromText ( 'MULTIPOINT(1 1)' ),
		ST_GeomFromText ( 'MULTILINESTRING((2 1, 6 6))' ),
		ST_GeomFromText ( 'MULTIPOLYGON(((0 5, 2 5, 2 7, 0 7, 0 5)))' ),
		ST_GeomFromText ( 'MULTIPOINT(1 1)' ),
	'{\"id\": 1}' 
	);
```

参考：
- https://dev.mysql.com/doc/refman/8.0/en/data-types.html
- https://zhuanlan.zhihu.com/p/159332687
- http://idber.github.io/2019/05/10-MySQL%E7%9A%84%E4%BC%AAutf8%E5%AD%97%E7%AC%A6%E9%9B%86.html
