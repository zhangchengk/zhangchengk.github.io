---
title: Apache NIFI无状态模式举例
date: 2020-05-21
category: ApacheNIFI教程
tags: 
  - Apache NIFI
author: Panda诚
location: BeiJing
publish: false
---

首先，我们将从`NiFi Registry`直接在命令行中运行。然后，我们将从`YARN`运行！是的，你现在可以在Cloudera CDH/HDP/CDP YARN群集上运行Apache NiFi流！让我们利用你的数百个Hadoop节点。

## Stateless Examples

建立无状态的流程

首先要记住的是，我们希望将任何可能更改的参数作为可随JSON文件传递的参数。即使是下拉菜单，也很容易设置参数！你甚至会被提示从选择列表中选择一个参数。在参数可用之前，你需要将它们添加到参数列表中，并将该参数上下文分配给你的过程组。

处理器配置中的参数显示为＃{broker} 

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/1.png)

参数上下文已连接到进程组，控制器服务，...

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/2.png)

应用这些参数

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/3.png)

参数（eter）现在是属性的选项

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/4.png)

使用参数的弹出提示

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/5.png)

在参数上下文中编辑参数

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/6.png)

我们也可以在Controller Services中配置参数。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/7.png)

选择一个现有的参数。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/8.png)

将它们用于可以更改的任何内容，或者你​​不想对其进行硬编码的东西。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/9.png)
![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/10.png)

这是一个简单的两步Apache NiFi流程，可从Kafka读取并将输出发送到接收器（例如，文件）。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/11.png)

确保我们使用该参数上下文

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/12.png)

要构建JSON配置文件，你将需要Apache NiFi注册表中的存储区ID和流ID。你还将需要该注册表的URL。你可以使用类似于http：//tspann-mbp15-hw14277：18080的URL浏览该注册表。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/13.png)

我的命令：
```
/Users/tspann/Documents/nifi-1.10.0-SNAPSHOT/bin/nifi.sh stateless RunFromRegistry Continuous --file /Users/tspann/Documents/nifi-1.10.0-SNAPSHOT/logs/kafkaconsumer.json
```

RunFromRegistry [Once|Continuous] --file <File Name>

这是使用文件从命令行运行的基本用例。该流必须存在于参考Apache NiFi Registry中。

JSON配置文件（kafkaconsumer.json）

```json
{
  "registryUrl": "http://tspann-mbp15-hw14277:18080",
  "bucketId": "140b30f0-5a47-4747-9021-19d4fde7f993",
  "flowId": "0540e1fd-c7ca-46fb-9296-e37632021945",
  "ssl": {
    "keystoreFile": "",
    "keystorePass": "",
    "keyPass": "",
    "keystoreType": "",
    "truststoreFile": "/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home/lib/security/cacerts",
    "truststorePass": "changeit",
    "truststoreType": "JKS"
  },
  "parameters": {
    "broker" : "4.317.852.100:9092",
    "topic" : "iot",
    "group_id" : "nifi-stateless-kafka-consumer",
    "DestinationDirectory" : "/tmp/nifistateless/output2/",
    "output_dir": "/Users/tspann/Documents/nifi-1.10.0-SNAPSHOT/logs/output"
  }
}
```

Example Run

```
12:25:38.725 [main] DEBUG org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_0 - ConsumeKafka_2_0[id=e405df7f-87ca-305a-95a9-d25e3c5dbb56] Running ConsumeKafka_2_0.onTrigger with 0 FlowFiles
12:25:38.728 [main] DEBUG org.apache.kafka.clients.FetchSessionHandler - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Node 8 sent an incremental fetch response for session 1943199939 with 0 response partition(s), 10 implied partition(s)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-8 at offset 15 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-9 at offset 16 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-6 at offset 17 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-7 at offset 17 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-4 at offset 18 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-5 at offset 16 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-2 at offset 17 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-3 at offset 19 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-0 at offset 16 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Added READ_UNCOMMITTED fetch request for partition iot-1 at offset 20 to node ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.728 [main] DEBUG org.apache.kafka.clients.FetchSessionHandler - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Built incremental fetch (sessionId=1943199939, epoch=5) for node 8. Added 0 partition(s), altered 0 partition(s), removed 0 partition(s) out of 10 partition(s)
12:25:38.729 [main] DEBUG org.apache.kafka.clients.consumer.internals.Fetcher - [Consumer clientId=consumer-1, groupId=nifi-stateless-kafka-consumer] Sending READ_UNCOMMITTED IncrementalFetchRequest(toSend=(), toForget=(), implied=(iot-8, iot-9, iot-6, iot-7, iot-4, iot-5, iot-2, iot-3, iot-0, iot-1)) to broker ip-10-0-1-244.ec2.internal:9092 (id: 8 rack: null)
12:25:38.737 [main] DEBUG org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_0 - ConsumeKafka_2_0[id=e405df7f-87ca-305a-95a9-d25e3c5dbb56] Running ConsumeKafka_2_0.onTrigger with 0 FlowFiles

```

Example Output

```
cat output/247361879273711.statelessFlowFile
{"id":"20191105113853_350b493f-9308-4eb2-b71f-6bcdbaf5d6c1_Timer-Driven Process Thread-13","te":"0.5343","diskusage":"0.2647115097153814.3 MB","memory":57,"cpu":132.87,"host":"192.168.1.249/tspann-MBP15-HW14277","temperature":"72","macaddress":"dd73eadf-1ac1-4f76-aecb-14be86ce46ce","end":"48400221819907","systemtime":"11/05/2019 11:38:53"}

```

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/14.png)

在此示例中，我们还可以运行一次以发送一条Kafka消息。

![](https://github.com/zhangchengk/image/raw/master/待完成/Stateless举例/15.png)

命令
```
/Users/tspann/Documents/nifi-1.10.0-SNAPSHOT/bin/nifi.sh stateless 
RunFromRegistry Once --file /Users/tspann/Documents/nifi-1.10.0-SNAPSHOT/logs/
kafka.json


```
配置文件

```json
{
  "registryUrl": "http://tspann-mbp15-hw14277:18080",
  "bucketId": "140b30f0-5a47-4747-9021-19d4fde7f993",
  "flowId": "402814a2-fb7a-4b19-a641-9f4bb191ed67",
  "flowVersion": "1",
  "ssl": {
    "keystoreFile": "",
    "keystorePass": "",
    "keyPass": "",
    "keystoreType": "",
    "truststoreFile": "/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home/lib/security/cacerts",
    "truststorePass": "changeit",
    "truststoreType": "JKS"
  },
  "parameters": {
    "broker" : "3.218.152.236:9092"
  }
}

```
Example Output

```
12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.network.Selector - [Producer clientId=producer-1] Created socket with SO_RCVBUF = 33304, SO_SNDBUF = 131768, SO_TIMEOUT = 0 to node 8 12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Completed connection to node 8. Fetching API versions. 12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Initiating API versions fetch from node 8. 12:32:37.732 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Recorded API versions for node 8: (Produce(0): 0 to 7 [usable: 6], Fetch(1): 0 to 10 [usable: 8], ListOffsets(2): 0 to 5 [usable: 3], Metadata(3): 0 to 7 [usable: 6], LeaderAndIsr(4): 0 to 2 [usable: 1], StopReplica(5): 0 to 1 [usable: 0], UpdateMetadata(6): 0 to 5 [usable: 4], ControlledShutdown(7): 0 to 2 [usable: 1], OffsetCommit(8): 0 to 6 [usable: 4], OffsetFetch(9): 0 to 5 [usable: 4], FindCoordinator(10): 0 to 2 [usable: 2], JoinGroup(11): 0 to 4 [usable: 3], Heartbeat(12): 0 to 2 [usable: 2], LeaveGroup(13): 0 to 2 [usable: 2], SyncGroup(14): 0 to 2 [usable: 2], DescribeGroups(15): 0 to 2 [usable: 2], ListGroups(16): 0 to 2 [usable: 2], SaslHandshake(17): 0 to 1 [usable: 1], ApiVersions(18): 0 to 2 [usable: 2], CreateTopics(19): 0 to 3 [usable: 3], DeleteTopics(20): 0 to 3 [usable: 2], DeleteRecords(21): 0 to 1 [usable: 1], InitProducerId(22): 0 to 1 [usable: 1], OffsetForLeaderEpoch(23): 0 to 2 [usable: 1], AddPartitionsToTxn(24): 0 to 1 [usable: 1], AddOffsetsToTxn(25): 0 to 1 [usable: 1], EndTxn(26): 0 to 1 [usable: 1], WriteTxnMarkers(27): 0 [usable: 0], TxnOffsetCommit(28): 0 to 2 [usable: 1], DescribeAcls(29): 0 to 1 [usable: 1], CreateAcls(30): 0 to 1 [usable: 1], DeleteAcls(31): 0 to 1 [usable: 1], DescribeConfigs(32): 0 to 2 [usable: 2], AlterConfigs(33): 0 to 1 [usable: 1], AlterReplicaLogDirs(34): 0 to 1 [usable: 1], DescribeLogDirs(35): 0 to 1 [usable: 1], SaslAuthenticate(36): 0 to 1 [usable: 0], CreatePartitions(37): 0 to 1 [usable: 1], CreateDelegationToken(38): 0 to 1 [usable: 1], RenewDelegationToken(39): 0 to 1 [usable: 1], ExpireDelegationToken(40): 0 to 1 [usable: 1], DescribeDelegationToken(41): 0 to 1 [usable: 1], DeleteGroups(42): 0 to 1 [usable: 1], UNKNOWN(43): 0) 12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.records-per-batch 12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.bytes 12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.compression-rate 12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.record-retries 12:32:37.740 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.record-errors 12:32:37.745 [main] DEBUG org.apache.nifi.parameter.ExpressionLanguageAwareParameterParser - For input iot found 0 Parameter references: [] 12:32:37.745 [main] DEBUG org.apache.nifi.parameter.ExpressionLanguageAwareParameterParser - For input iot found 0 Parameter references: [] Flow Succeeded 12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.network.Selector - [Producer clientId=producer-1] Created socket with SO_RCVBUF = 33304, SO_SNDBUF = 131768, SO_TIMEOUT = 0 to node 8
12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Completed connection to node 8. Fetching API versions.
12:32:37.717 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Initiating API versions fetch from node 8.
12:32:37.732 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.clients.NetworkClient - [Producer clientId=producer-1] Recorded API versions for node 8: (Produce(0): 0 to 7 [usable: 6], Fetch(1): 0 to 10 [usable: 8], ListOffsets(2): 0 to 5 [usable: 3], Metadata(3): 0 to 7 [usable: 6], LeaderAndIsr(4): 0 to 2 [usable: 1], StopReplica(5): 0 to 1 [usable: 0], UpdateMetadata(6): 0 to 5 [usable: 4], ControlledShutdown(7): 0 to 2 [usable: 1], OffsetCommit(8): 0 to 6 [usable: 4], OffsetFetch(9): 0 to 5 [usable: 4], FindCoordinator(10): 0 to 2 [usable: 2], JoinGroup(11): 0 to 4 [usable: 3], Heartbeat(12): 0 to 2 [usable: 2], LeaveGroup(13): 0 to 2 [usable: 2], SyncGroup(14): 0 to 2 [usable: 2], DescribeGroups(15): 0 to 2 [usable: 2], ListGroups(16): 0 to 2 [usable: 2], SaslHandshake(17): 0 to 1 [usable: 1], ApiVersions(18): 0 to 2 [usable: 2], CreateTopics(19): 0 to 3 [usable: 3], DeleteTopics(20): 0 to 3 [usable: 2], DeleteRecords(21): 0 to 1 [usable: 1], InitProducerId(22): 0 to 1 [usable: 1], OffsetForLeaderEpoch(23): 0 to 2 [usable: 1], AddPartitionsToTxn(24): 0 to 1 [usable: 1], AddOffsetsToTxn(25): 0 to 1 [usable: 1], EndTxn(26): 0 to 1 [usable: 1], WriteTxnMarkers(27): 0 [usable: 0], TxnOffsetCommit(28): 0 to 2 [usable: 1], DescribeAcls(29): 0 to 1 [usable: 1], CreateAcls(30): 0 to 1 [usable: 1], DeleteAcls(31): 0 to 1 [usable: 1], DescribeConfigs(32): 0 to 2 [usable: 2], AlterConfigs(33): 0 to 1 [usable: 1], AlterReplicaLogDirs(34): 0 to 1 [usable: 1], DescribeLogDirs(35): 0 to 1 [usable: 1], SaslAuthenticate(36): 0 to 1 [usable: 0], CreatePartitions(37): 0 to 1 [usable: 1], CreateDelegationToken(38): 0 to 1 [usable: 1], RenewDelegationToken(39): 0 to 1 [usable: 1], ExpireDelegationToken(40): 0 to 1 [usable: 1], DescribeDelegationToken(41): 0 to 1 [usable: 1], DeleteGroups(42): 0 to 1 [usable: 1], UNKNOWN(43): 0)
12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.records-per-batch
12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.bytes
12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.compression-rate
12:32:37.739 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.record-retries
12:32:37.740 [kafka-producer-network-thread | producer-1] DEBUG org.apache.kafka.common.metrics.Metrics - Added sensor with name topic.iot.record-errors
12:32:37.745 [main] DEBUG org.apache.nifi.parameter.ExpressionLanguageAwareParameterParser - For input iot found 0 Parameter references: []
12:32:37.745 [main] DEBUG org.apache.nifi.parameter.ExpressionLanguageAwareParameterParser - For input iot found 0 Parameter references: []
Flow Succeeded
```