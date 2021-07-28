## 安装LogMiner工具

一般来说以上都默认包含`LogMiner`分析包，无需再安装 。如果不能确认，可以 `DBA` 身份登录系统，查看系统中是否存在运行 `LogMiner` 所需要的 `dbms_logmnr`、 `dbms_logmnr_d` 包，如果没有需要安装 `LogMiner` 工具，必须首先要运行下面这样两个脚本：`$ORACLE_HOME/rdbms/admin/dbmslm.sql`  `$ORACLE_HOME/rdbms/admin/dbmslmd.sql` 。这两个脚本必须均以 `DBA` 用户身份运行。

## 2 归档模式

此套方案不要求Oracle为存档模式，但建议Oracle开启归档模式，如果不开启归档模式，那么实时分析采集的是线上日志的数据，如果同步流程停止或者其他因素导致还没有被采集分析的日志被覆写，这样就会丢失部分数据。

**查看当前是否是存档模式** 

```sql
SQL> archive log list;
数据库日志模式             非存档模式     //目前不是归档模式
自动存档             禁用
存档终点            USE_DB_RECOVERY_FILE_DEST
最早的联机日志序列     27711
当前日志序列  
```

开启归档模式首先关闭数据库，然后启动数据库至mount状态
```sql
SQL> shutdown immediate;
SQL> startup mount;
ORACLE 例程已经启动。
 
Total System Global Area 1.0737E+10 bytes
Fixed Size                  2038632 bytes
Variable Size            5486150808 bytes
Database Buffers         5234491392 bytes
Redo Buffers               14737408 bytes
```

修改归档位置及启用归档模式

```sql
SQL> alter system set log_archive_dest_1='location=/arp/oraarp/archive';
  
SQL> alter database archivelog;
SQL> alter database open;
SQL> archive log list;
数据库日志模式            存档模式    
自动存档             启用
存档终点            /arp/oraarp/archive  //归档目录位置已修改为/arp/oraarp/archive
最早的联机日志序列     27712
下一个存档日志序列   27714
当前日志序列           27714
```

更加具体详细的配置和说明可以参考对应版本的Oracle官方文档。

## 3 附加日志

必须打开附加日志，执行以下语句

```sql
alter database add supplemental log data;
alter database add supplemental log data (primary key,unique index) columns;
```

## 4.修改重做日志组个数及文件大小

这个配置参考实际业务环境，再决定是否修改。下面只做一个示例(具体版本以官方文档为准)：

Oracle更改redo log大小 or 增加redo log组的影响：

* redo log的大小可以影响 DBWR 和 checkpoint ；
* arger redo log files provide better performance. Undersized logfiles increase checkpoint activity and reduce performance. (大的log file可以提供更好的性能，小的logfile 会增加checkpoint 和降低性能)
* A rough guide is to switch log files at most once every 20 minutes.（推荐日志切换的时间不要超多20分钟）.

查看redolog

```sql
select * from v$log ;
```

status 有几个值分别是：

1.  unused（还没有使用过）
2.  current（正在使用）
3.  active（Log isactive but is not the current log. It is needed for crash recovery）
4.  inactive（Log is nolonger needed for instance recovery）  


查看日志文件

```sql
select` `* ``from` `v$logfile ;
```

由于ORACLE并没有提供类似RESIZE的参数来重新调整REDO LOG FILE的大小，因此只能先把这个文件删除了，然后再重建。又由于ORACLE要求最少有两组日志文件在用，所以不能直接删除，必须要创建中间过渡的REDO LOG日志组。

1、创建3个新的日志组

```sql
ALTER DATABASE ADD LOGFILE GROUP4('/usr/oracle/app/oradata/orcl/redo04a.log','/usr/oracle/app/oradata/orcl/redo04b.log') SIZE 2048M;
 
ALTER DATABASE ADD LOGFILE GROUP5('/usr/oracle/app/oradata/orcl/redo05a.log','/usr/oracle/app/oradata/orcl/redo05b.log') SIZE 2048M;
 
ALTER DATABASE ADD LOGFILE GROUP6('/usr/oracle/app/oradata/orcl/redo06a.log','/usr/oracle/app/oradata/orcl/redo06b.log') SIZE 2048M;
```

2、切换当前日志到新的日志组

```sql
alter system switch logfile;
alter system switch logfile;
alter system switch logfile;
```

3、删除旧的日志组

```sql
alter database drop logfile group 1;
 
alter database drop logfile group 2;
 
alter database drop logfile group 3;
```

查看日志组的状态看一下哪个是当前组，哪个是inactive状态的。删除掉inactive的那个组。如果状态为current和active 在删除的时候会报错

4、操作系统下删除原日志组1、2、3中的文件

5、重建日志组1、2、3

## 5. dba权限用户

同步流程数据库用户需要拥有DBA权限，比如 ：

```sql
GRANT CONNECT, RESOURCE,DBA TO LOGMINER;
```