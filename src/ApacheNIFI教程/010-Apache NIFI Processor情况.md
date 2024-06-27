---
title: Processor情况
date: 2020-06-30
category: ApacheNIFI教程
tag: NIFI
order: 10
---

以下是基于最新版Apache NIFI，依据所在Nar包分类的组件说明情况，组件包括：Processor，Controller Service，ReportingTask
<!-- more -->
## nifi-accumulo-nar

Apache Accumulo 是一个可靠的、可伸缩的、高性能的排序分布式的 Key-Value 存储解决方案 基于单元访问控制以及可定制的服务器端处理。使用 Google BigTable 设计思路 基于 Apache Hadoop、Zookeeper 和 Thrift 构建。

`PutAccumuloRecord`

`ScanAccumulo`

## nifi-accumulo-services-nar

AccumuloService

## nifi-ambari-nar

AmbariReportingTask

## nifi-amqp-nar

AMQP 即Advanced Message Queuing Protocol 一个提供统一消息服务的应用层标准高级消息队列协议 是应用层协议的一个开放标准 为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息 并不受客户端/中间件不同产品 不同的开发语言等条件的限制。Erlang中的实现有RabbitMQ等。

`PublishAMQP`

`ConsumeAMQP`

## nifi-atlas-nar

Apache Atlas 是一个可伸缩和可扩展的核心功能治理服务。企业可以利用它高效的管理 Hadoop 以及整个企业数据生态的集成。

ReportLineageToAtlas

## nifi-avro-nar

Avro（读音类似于[ævrə]）是Hadoop的一个子项目 由Hadoop的 创始人Doug Cutting（也是Lucene Nutch等项目的创始人）牵头开发。Avro是一个数据序列化系统 设计用于支持大 批量数据交换的应用。它的主要特点有：支持二进制序列化方式 可以便捷 快速地处理大量数据；动态语言友好 Avro提供的机制使动态语言可以方便地处理 Avro数据。

`ConvertAvroToJSON`

`ExtractAvroMetadata`

`SplitAvro`

## nifi-aws-nar

亚马逊AWS（Amazon Web Services (AWS) ）

`FetchS3Object`

`PutS3Object`

`DeleteS3Object`

`TagS3Object`

`ListS3`

`PutSNS`

`GetSQS`

`PutSQS`

`DeleteSQS`

`PutLambda`

`PutKinesisFirehose`

`GetDynamoDB`

`PutDynamoDB`

`DeleteDynamoDB`

`PutKinesisStream`

`PutCloudWatchMetric`

`InvokeAWSGatewayApi`



AWSCredentialsProviderControllerService

StandardS3EncryptionService

## nifi-azure-nar

Microsoft Azure是微软基于云计算的操作系统 原名“Windows Azure” 和Azure Services Platform一样 是微软“软件和服务”技术的名称。Microsoft Azure的主要目标是为开发者提供一个平台 帮助开发可运行在云服务器、数据中心、Web和PC上的应用程序。云计算的开发者能使用微软全球数据中心的储存、计算能力和网络基础服务。Azure服务平台包括了以下主要组件：Microsoft Azure Microsoft SQL数据库服务 Microsoft .Net服务 用于分享、储存和同步文件的Live服务 针对商业的Microsoft SharePoint和Microsoft Dynamics CRM服务。

`PutAzureEventHub`

`GetAzureEventHub`

`ConsumeAzureEventHub`

`FetchAzureBlobStorage`

`ListAzureBlobStorage`

`PutAzureBlobStorage`

`DeleteAzureBlobStorage`

`PutAzureQueueStorage`

`GetAzureQueueStorage`

`PutAzureDataLakeStorage`

`DeleteAzureDataLakeStorage`

`FetchAzureDataLakeStorage`



AzureStorageCredentialsControllerService

AzureStorageCredentialsControllerServiceLookup

## nifi-azure-reporting-task

AzureLogAnalyticsReportingTask

AzureLogAnalyticsProvenanceReportingTask

## nifi-beats-nar

使用libbeat的输出来监听兼容libbeat的客户端(例如filebeats, metricbeats等)发送的消息。

`ListenBeats`

## nifi-cassandra-nar

Cassandra是一套开源分布式NoSQL数据库系统。它最初由Facebook开发 用于储存收件箱等简单格式数据 集GoogleBigTable的数据模型与Amazon Dynamo的完全分布式的架构于一身Facebook于2008将 Cassandra 开源 此后 由于Cassandra良好的可扩展性 被Digg、Twitter等知名Web 2.0网站所采纳 成为了一种流行的分布式结构化数据存储方案。

`QueryCassandra`

`PutCassandraQL`

`PutCassandraRecord`

## nifi-cassandra-services-nar

CassandraSessionProvider

## nifi-ccda-nar

从经过整合的CDA格式的流文件中提取信息 并将单个属性作为流文件属性提供。

`ExtractCCDAAttributes`

## nifi-cdc-mysql-nar

`CaptureChangeMySQL`

## nifi-confluent-platform-nar

Confluent是用来管理和组织不同数据源的流媒体平台 可以实时地把不同源和位置的数据集成到一个中心的事件流平台。而且还强调了这个平台很可靠、性能很高 总之就是很好用 很强大。

ConfluentSchemaRegistry

使用Confluent Schema Registry 服务 从Confluent Schema Registry 中查询schema信息


## nifi-couchbase-nar

CouchBase是一款开源的 分布式的nosql数据库 主要用于分布式缓存和数据存储领域。能够通过manage cache提供快速的亚毫米级别的k-v存储操作 并且提供快速的查询和其功能强大的能够指定SQL-like查询的查询引擎。

`GetCouchbaseKey`

`PutCouchbaseKey`



CouchbaseClusterService

CouchbaseMapCacheClient

CouchbaseKeyValueLookupService

CouchbaseRecordLookupService

## nifi-cybersecurity-nar

`FuzzyHashContent`

`CompareFuzzyHash`

## nifi-datadog-nar

Datadog 是 SaaS 监测工具 付费 针对 DevOps 团队 从你的 app 或者其他各种工具获取数据并提供数据可视化功能。它把从你基础设备和软件采集的数据统一处理并存储。允许你创建仪表盘和搜索访问你提供的数据。他们目前提供数据的聚合和展示而不是提供数据分析。

DataDogReportingTask

## nifi-druid-nar

Apache Druid是一个实时分析型数据库 旨在对大型数据集进行快速的查询分析（"OLAP"查询)。Druid最常被当做数据库来用以支持实时摄取、高性能查询和高稳定运行的应用场景 同时 Druid也通常被用来助力分析型应用的图形化界面 或者当做需要快速聚合的高并发后端API Druid最适合应用于面向事件类型的数据。

`PutDruidRecord`

DruidTranquilityController

## nifi-easyrules-nar

EasyRule是一个规则引擎

EasyRulesEngineService

EasyRulesEngineProvider

## nifi-elasticsearch-nar

`FetchElasticsearch`

`PutElasticsearch`

`FetchElasticsearchHttp`

`PutElasticsearchHttp`

`PutElasticsearchHttpRecord`

`QueryElasticsearchHttp`

`ScrollElasticsearchHttp`

## nifi-elasticsearch-restapi-nar

`DeleteByQueryElasticsearch`

`JsonQueryElasticsearch`

`PutElasticsearchRecord`

## nifi-elasticsearch-client-service-nar

ElasticSearchLookupService

ElasticSearchStringLookupService

ElasticSearchClientServiceImpl

## nifi-elasticsearch-5-nar

`FetchElasticsearch5`

`PutElasticsearch5`

`DeleteElasticsearch5`

## nifi-email-nar

`ExtractTNEFAttachments`

`ExtractEmailAttachments`

`ExtractEmailHeaders`

`ListenSMTP`

`ConsumeIMAP`

`ConsumePOP3`

`ConsumeEWS`

## nifi-enrich-nar

查IP 域名解析

`GeoEnrichIP`

`GeoEnrichIPRecord`

`ISPEnrichIP`

`QueryDNS`

`QueryWhois`

## nifi-evtx-nar

Windows Event Log file (evtx)

`ParseEvtx`

## nifi-flume-nar

`ExecuteFlumeSource`

`ExecuteFlumeSink`

## nifi-gcp-nar

Google Cloud Bucket Google Cloud PubSub  Google BigQuery table

GCPCredentialsControllerService

`PutGCSObject`

`FetchGCSObject`

`DeleteGCSObject`

`ListGCSBucket`

`PublishGCPubSub`

`ConsumeGCPubSub`

`PutBigQueryBatch`

`PutBigQueryStreaming`

## nifi-graph-nar

`ExecuteGraphQuery`

## nifi-neo4j-cypher-service-nar

Neo4JCypherClientService

## nifi-other-graph-services-nar

GremlinClientService

OpenCypherClientService

## nifi-groovyx-nar

`ExecuteGroovyScript`

## nifi-grcp-nar

远程过程调用(RPC)

`InvokeGRPC`

`ListenGRPC`

## nifi-hadoop-nar

`CreateHadoopSequenceFile`

`FetchHDFS`

`GetHDFS`

`GetHDFSSequenceFile`

`GetHDFSEvents`

`ListHDFS`

`PutHDFS`

`DeleteHDFS`

`MoveHDFS`

`GetHDFSFileInfo`

## nifi-hbase-nar

`DeleteHBaseCells`

`DeleteHBaseRow`

`GetHBase`

`PutHBaseCell`

`PutHBaseJSON`

`PutHBaseRecord`

`FetchHBaseRow`

`ScanHBase`

## nifi-hive-nar

hive 1.2.1

HiveConnectionPool

`ConvertAvroToORC`

`SelectHiveQL`

`PutHiveQL`

`PutHiveStreaming`

## nifi-hive_1_1-nar

hive 1.1.1

Hive_1_1ConnectionPool

`SelectHive_1_1QL`

`PutHive_1_1QL`

## nifi-hive3-nar

hive 3.1.2

dbcp.hive.Hive3ConnectionPool

`SelectHive3QL`

`PutHive3QL`

`PutHive3Streaming`

`PutORC`

## nifi-hl7-nar

(Health Level 7)格式数据

`ExtractHL7Attributes`

`RouteHL7`

## nifi-html-nar

`GetHTMLElement`

`ModifyHTMLElement`

`PutHTMLElement`

## nifi-ignite-nar

Apache Ignite是一个支持水平扩展和容错的分布式内存计算平台 面向数据密集型应用 可以在TB级的数据上以内存级的速度构建实时应用。

`PutIgniteCache`

`GetIgniteCache`

## nifi-influxdb-nar

InfluxDB是一个用于存储和分析时间序列数据的开源数据库。

`PutInfluxDB`

`ExecuteInfluxDBQuery`


## nifi-jms-processors-nar

JMS即Java消息服务（Java Message Service）应用程序接口 是一个Java平台中关于面向消息中间件（MOM）的API 用于在两个应用程序之间 或分布式系统中发送消息 进行异步通信。Java消息服务是一个与具体平台无关的API 绝大多数MOM提供商都对JMS提供支持。

`PublishJMS`

`ConsumeJMS`

JMSConnectionFactoryProvider

JndiJmsConnectionFactoryProvider

## nifi-jolt-record-nar

Java Jolt 处理json

`JoltTransformRecord`

## nifi-kafka-0-8-nar

`GetKafka`

`PutKafka`

## nifi-kafka-0-9-nar

`PublishKafka`

`ConsumeKafka`

## nifi-kafka-0-10-nar

`PublishKafka_0_10`

`PublishKafkaRecord_0_10`

`ConsumeKafka_0_10`

`ConsumeKafkaRecord_0_10`

## nifi-kafka-0-11-nar

`PublishKafka_0_11`

`PublishKafkaRecord_0_11`

`ConsumeKafka_0_11`

`ConsumeKafkaRecord_0_11`

## nifi-kafka-1-0-nar

`PublishKafka_1_0`

`PublishKafkaRecord_1_0`

`ConsumeKafka_1_0`

`ConsumeKafkaRecord_1_0`

## nifi-kafka-2-0-nar

`PublishKafka_2_0`

`PublishKafkaRecord_2_0`

`ConsumeKafka_2_0`

`ConsumeKafkaRecord_2_0`

## nifi-kerberos-credentials-service-nar

KeytabCredentialsService

## nifi-kite-nar

`StoreInKiteDataset`

`ConvertCSVToAvro`

`ConvertJSONToAvro`

`ConvertAvroSchema`

`InferAvroSchema`

## nifi-kudu-nar

`PutKudu`

KuduLookupService

## nifi-language-translation-nar

Yandex翻译

`YandexTranslate`

## nifi-lookup-services-nar 

IPLookupService

CSVRecordLookupService

DatabaseRecordLookupService

PropertiesFileLookupService

RestLookupService

SimpleKeyValueLookupService

SimpleCsvFileLookupService

SimpleDatabaseLookupService

XMLFileLookupService

DistributedMapCacheLookupService

## nifi-lumberjack-nar 

`ListenLumberjack` 

## nifi-media-nar 

`ExtractImageMetadata`

`ResizeImage`

`ExtractMediaMetadata`

## nifi-metrics-reporting-nar	

MetricsReportingTask

GraphiteMetricReporterService

## nifi-mongodb-nar 

`DeleteMongo` 

`GetMongo` 

`GetMongoRecord` 

`RunMongoAggregation` 

`PutMongo` 

`PutMongoRecord` 

`DeleteGridFS` 

`FetchGridFS` 

`PutGridFS`

## nifi-mongodb-services-nar 

MongoDBLookupService

MongoDBControllerService

## nifi-mongodb-client-service-api-nar  

MongoDBLookupService 

MongoDBControllerService

## nifi-mqtt-nar 

mqtt 消息队列

`PublishMQTT`

`ConsumeMQTT`

## nifi-network-processors-nar 

输入netflowv5, 输出json

`ParseNetflowv5`

## nifi-parquet-nar 

ParquetRecordSetWriter

ParquetReader

`PutParquet` 

`FetchParquet` 

`ConvertAvroToParquet`

## nifi-poi-nar 

`ConvertExcelToCSVProcessor`

## nifi-prometheus-nar

PrometheusReportingTask

## nifi-proxy-configuration-nar 

StandardProxyConfigurationService

## nifi-record-serialization-services-nar 

AvroReader 

AvroRecordSetWriter
 
JsonTreeReader 

JsonPathReader 

JsonRecordSetWriter 

CSVReader 

CSVRecordSetWriter 

GrokReader 

FreeFormTextRecordSetWriter 

SyslogReader 

Syslog5424Reader 

XMLReader 

XMLRecordSetWriter 

VolatileSchemaCache

## nifi-redis-nar

RedisConnectionPoolService

RedisDistributedMapCacheClientService

## nifi-registry-nar 

AvroSchemaRegistry

## nifi-rethinkdb-nar 

`PutRethinkDB`

`GetRethinkDB`

`DeleteRethinkDB`

## nifi-riemann-nar

`PutRiemann`:监控系统

## nifi-scripting-nar	

ScriptedReader 

ScriptedRecordSetWriter 

ScriptedLookupService 

SimpleScriptedLookupService 

`InvokeScriptedProcessor` 

`ExecuteScript` 

ScriptedReportingTask

## nifi-site-to-site-reporting-nar

SiteToSiteProvenanceReportingTask

SiteToSiteBulletinReportingTask 

SiteToSiteStatusReportingTask 

SiteToSiteMetricsReportingTask

## nifi-slack-nar

聊天发消息 slack

`PutSlack`

`PostSlack`

## nifi-snmp-nar 

`GetSNMP`

`SetSNMP`

## nifi-social-media-nar 

`GetTwitter`

## nifi-solr-nar

Apache Solr 搜索 基于Lucene的全文搜索服务器

`PutSolrContentStream`

`PutSolrRecord`

`GetSolr`

`QuerySolr`

## nifi-ssl-context-service-nar 

StandardSSLContextService

StandardRestrictedSSLContextService

## nifi-livy-nar 

ExecuteSparkInteractive

nifi-livy-controller-service-api-nar 

LivySessionController

## nifi-splunk-nar 

托管的日志文件管理工具

`GetSplunk`

`PutSplunk`

## nifi-spring-nar 

`SpringContextProcessor`

## nifi-standard-nar

 `AttributesToCSV`

 `AttributesToJSON`

 `Base64EncodeContent`

 `CalculateRecordStats`

 `CompressContent`

 `ControlRate`

 `ConvertCharacterSet`

 `ConvertJSONToSQL`

 `ConvertRecord`

 `CountText`

 `CryptographicHashAttribute`

 `CryptographicHashContent`

 `DebugFlow`

 `DetectDuplicate`

 `DistributeLoad`

 `DuplicateFlowFile`

 `EncryptContent`

 `EnforceOrder`

 `EvaluateJsonPath`

 `EvaluateXPath`

 `EvaluateXQuery`

 `ExecuteProcess`

 `ExecuteSQL`

 `ExecuteSQLRecord`

 `ExecuteStreamCommand`

 `ExtractGrok`

 `ExtractText`

 `FetchDistributedMapCache`

 `FetchFile`

 `FetchFTP`

 `FetchSFTP`

 `FlattenJson`

 `ForkRecord`

 `GenerateFlowFile`

 `GenerateTableFetch`

 `GetFile`

 `GetFTP`

 `GetHTTP`

 `GetJMSQueue`

 `GetJMSTopic`

 `GetSFTP`

 `HandleHttpRequest`

 `HandleHttpResponse`

 `HashAttribute`

 `HashContent`

 `IdentifyMimeType`

 `InvokeHTTP`

 `JoltTransformJSON`

 `ListDatabaseTables`

 `ListenHTTP`

 `ListenRELP`

 `ListenSyslog`

 `ListenTCP`

 `ListenTCPRecord`

 `ListenUDP`

 `ListenUDPRecord`

 `ListFile`

 `ListFTP`

 `ListSFTP`

 `LogAttribute`

 `LogMessage`

 `LookupAttribute`

 `LookupRecord`

 `MergeContent`

 `MergeRecord`

 `ModifyBytes`

 `MonitorActivity`

 `Notify`

 `ParseCEF`

 `ParseSyslog`

 `ParseSyslog5424`

 `PartitionRecord`

 `PostHTTP`

 `PutDatabaseRecord`

 `PutDistributedMapCache`

 `PutEmail`

 `PutFile`

 `PutFTP`

 `PutJMS`

 `PutRecord`

 `PutSFTP`

 `PutSQL`

 `PutSyslog`

 `PutTCP`

 `PutUDP`

 `QueryDatabaseTable`

 `QueryDatabaseTableRecord`

 `QueryRecord`

 `ReplaceText`

 `ReplaceTextWithMapping`

 `RetryFlowFile`

 `RouteOnAttribute`

 `RouteOnContent`

 `RouteText`

 `ScanAttribute`

 `ScanContent`

 `SegmentContent`

 `SplitContent`

 `SplitJson`

 `SplitRecord`

 `SplitText`

 `SplitXml`

 `TailFile`

 `TransformXml`

 `UnpackContent`

 `UpdateCounter`

 `UpdateRecord`

 `ValidateCsv`

 `ValidateRecord`

 `ValidateXml`

 `Wait`

## nifi-stateful-analysis-nar 

计算组件每个流的Expression Language expression的聚合值 存在state里

`AttributeRollingWindow`

## nifi-tcp-nar 

`GetTCP`

## nifi-update-attribute-nar 

`UpdateAttribute`

## nifi-websocket-processors-nar 

`ListenWebSocket`

`ConnectWebSocket`

`PutWebSocket`

## nifi-websocket-services-jetty-nar 

JettyWebSocketServer

JettyWebSocketClient

## nifi-windows-event-log-nar 

`ConsumeWindowsEventLog`
