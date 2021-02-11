---
title: 为什么按位置读取JDBC ResultSet的速度比按名称读取的速度快
date: 2020-04-14
category: 数据库
tags: 
  - 数据库
author: 张诚
location: BeiJing  
---

为什么快？

`ResultSet`是一个接口，性能提升取决于实现该接口的JDBC驱动程序

这只是做了一些概括性的归纳，不一定适用于所有JDBC驱动程序，行值通常将存储在数组或列表中，因为这是最自然地从数据库服务器接收并匹配数据的方式。

因此，按索引检索值将是最简单的。它可能像这样简单（忽略实现JDBC驱动程序的一些更原始的细节）：

```java
public Object getObject(int index) throws SQLException {
    checkValidRow();
    checkValidIndex(index);
    return currentRow[index - 1];
}
```

这差不多快了。

另一方面，按列名称查找则需要更多工作。列名需要区分大小写，无论使用小写还是大写进行规范化，还是使用`TreeMap`不区分大小写的查找，都将产生额外的开销。 

一个简单的实现可能类似于：

```java
public Object getObject(String columnLabel) throws SQLException {
    return getObject(getIndexByLabel(columnLabel));
}

private int getIndexByLabel(String columnLabel) {
    Map<String, Integer> indexMap = createOrGetIndexMap();
    Integer columnIndex = indexMap.get(columnLabel.toLowerCase());
    if (columnIndex == null) {
        throw new SQLException("Column label " + columnLabel + " does not exist in the result set");
    }
    return columnIndex;
}

private Map<String, Integer> createOrGetIndexMap() throws SQLException {
    if (this.indexMap != null) {
        return this.indexMap;
    }
    ResultSetMetaData rsmd = getMetaData();
    Map<String, Integer> map = new HashMap<>(rsmd.getColumnCount());
    // reverse loop to ensure first occurrence of a column label is retained
    for (int idx = rsmd.getColumnCount(); idx > 0; idx--) {
        String label = rsmd.getColumnLabel(idx).toLowerCase();
        map.put(label, idx);
    }
    return this.indexMap = map;
}
```

另外需要使用数据库的API和可用的语句元数据，可能需要其他处理才能确定查询的实际列标签。这可能仅在实际需要时才确定成本（当按名称访问列标签时，或在检索结果集元数据时）。换句话说，`createOrGetIndexMap()`的成本可能会很高。 即使该消耗可以忽略不计（例如，语句从数据库服务器准备元数据包括列标签），将列标签映射到索引然后按索引检索的开销显然也比直接按索引检索的开销高。 
驱动程序甚至每次都可以遍历结果集元数据，并使用标签匹配的第一个；这可能比为具有少量列的结果集构建和访问哈希映射要便宜，但是成本仍然高于按索引直接访问。

正如我所说，这是一个笼统的概括，但是如果这种方法（按名称查找索引，然后按索引检索）不是大多数JDBC驱动程序的工作方式，我会感到惊讶，所以我觉得按索引查找通常会更快。

快速浏览一些驱动程序，源码原理其实就是如此：

*  Firebird（Jaybird，披露：我维护此驱动程序）
*  MySQL（MySQL Connector / J）
*  PostgreSQL 
*  Oracle 
*  HSQLDB 
*  SQL Server（用于SQL Server的Microsoft JDBC驱动程序）


原文:
Speaking as a JDBC driver maintainer (and, I admit, making some sweeping generalizations which not necessarily apply to all JDBC driver), row values will usually be stored in an array or list because that most naturally matches the way the data is received from the database server.

As a result, retrieving values by index will be the simplest. It might be as simple as something like (ignoring some of the nastier details of implementing a JDBC driver):
```java
public Object getObject(int index) throws SQLException {
    checkValidRow();
    checkValidIndex(index);
    return currentRow[index - 1];
}
```
This is about as fast as it gets.

On the other hand, looking up by column name is more work. Column names need to be treated case-insensitive, which has additional cost whether you normalize using lower or uppercase, or use a case-insensitive lookup using a TreeMap.

A simple implementation might be something like:
```java
public Object getObject(String columnLabel) throws SQLException {
    return getObject(getIndexByLabel(columnLabel));
}

private int getIndexByLabel(String columnLabel) {
    Map<String, Integer> indexMap = createOrGetIndexMap();
    Integer columnIndex = indexMap.get(columnLabel.toLowerCase());
    if (columnIndex == null) {
        throw new SQLException("Column label " + columnLabel + " does not exist in the result set");
    }
    return columnIndex;
}

private Map<String, Integer> createOrGetIndexMap() throws SQLException {
    if (this.indexMap != null) {
        return this.indexMap;
    }
    ResultSetMetaData rsmd = getMetaData();
    Map<String, Integer> map = new HashMap<>(rsmd.getColumnCount());
    // reverse loop to ensure first occurrence of a column label is retained
    for (int idx = rsmd.getColumnCount(); idx > 0; idx--) {
        String label = rsmd.getColumnLabel(idx).toLowerCase();
        map.put(label, idx);
    }
    return this.indexMap = map;
}
```
Depending on the API of the database and available statement metadata, it may require additional processing to determine the actual column labels of a query. Depending on the cost, this will likely only be determined when it is actually needed (when accessing column labels by name, or when retrieving result set metadata). In other words, the cost of createOrGetIndexMap() might be pretty high.

But even if that cost is negligible (eg the statement prepare metadata from the database server includes the column labels), the overhead of mapping the column label to index and then retrieving by index is obviously higher than directly retrieving by index.

Drivers could even just loop over the result set metadata each time and use the first whose label matches; this might be cheaper than building and accessing the hash map for result sets with a small number of columns, but the cost is still higher than direct access by index.

As I said, this is a sweeping generalization, but I would be surprised if this (lookup index by name, then retrieve by index) isn't how it works in the majority of JDBC drivers, which means that I expect that lookup by index will generally be quicker.

Taking a quick look at a number of drivers, this is the case for:

Firebird (Jaybird, disclosure: I maintain this driver)
MySQL (MySQL Connector/J)
PostgreSQL
Oracle
HSQLDB
SQL Server (Microsoft JDBC Driver for SQL Server)
I'm not aware of JDBC drivers where retrieval by column name would be equivalent in cost or even cheaper.

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/image/raw/master/wechat.jpg)