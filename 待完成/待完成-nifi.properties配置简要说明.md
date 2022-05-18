---
title: nifi.properties配置简要说明
date: 2020-06-09
category: Apache NIFI
tags: 
  - Apache NIFI
author: Panda诚
location: BeiJing
publish: false
---
```properties
# 核心配置 #

#流程的存储文件是哪个
nifi.flow.configuration.file=./conf/flow.xml.gz
#开启flow.xml的归档
nifi.flow.configuration.archive.enabled=true
#归档目录
nifi.flow.configuration.archive.dir=./conf/archive/
#归档文件最长保留时间
nifi.flow.configuration.archive.max.time=30 days
#归档目录最大空间
nifi.flow.configuration.archive.max.storage=500 MB
#归档文件最大数量
nifi.flow.configuration.archive.max.count=
#自动恢复设置
nifi.flowcontroller.autoResumeState=true
#NIFI正常stop时间上线(正常关闭时合理执行完任务关闭所有资源等等) 否则直接kill
nifi.flowcontroller.graceful.shutdown.period=10 sec
#？？？
nifi.flowservice.writedelay.interval=500 ms
#惩罚时间 看源码就经常看到context.yield 有些组件发生了异常，系统不希望他频繁的调度又报异常 就会惩罚这个组件30秒 
nifi.administrative.yield.duration=30 sec
# If a component has no work to do (is "bored"), how long should we wait before checking again for work?
nifi.bored.yield.duration=10 millis
# 背压流文件数量(队列背压 达到背压条件 队列上游组件就停止处理数据)
nifi.queue.backpressure.count=1000
#背压流文件大小
nifi.queue.backpressure.size=1 GB
#权限认证的配置文件
nifi.authorizer.configuration.file=./conf/authorizers.xml
nifi.login.identity.provider.configuration.file=./conf/login-identity-providers.xml
#模板的文件目录 
nifi.templates.directory=./conf/templates
#？？？
nifi.ui.banner.text=
#前端自动刷新时间间隔
nifi.ui.autorefresh.interval=30 sec
#lib 目录
nifi.nar.library.directory=./lib
#nar解压后目录
nifi.nar.working.directory=./work/nar/
#文档doc目录
nifi.documentation.working.directory=./work/docs/components

####################
# State 管理       #
####################
#state管理配置文件
nifi.state.management.configuration.file=./conf/state-management.xml
# The ID of the local state provider
nifi.state.management.provider.local=local-provider
# The ID of the cluster-wide state provider. This will be ignored if NiFi is not clustered but must be populated if running in a cluster.
nifi.state.management.provider.cluster=zk-provider
# Specifies whether or not this instance of NiFi should run an embedded ZooKeeper server
nifi.state.management.embedded.zookeeper.start=false
# Properties file that provides the ZooKeeper properties to use if <nifi.state.management.embedded.zookeeper.start> is set to true
nifi.state.management.embedded.zookeeper.properties=./conf/zookeeper.properties


# H2 Settings
nifi.database.directory=./database_repository
nifi.h2.url.append=;LOCK_TIMEOUT=25000;WRITE_DELAY=0;AUTO_SERVER=FALSE

# FlowFile Repository
nifi.flowfile.repository.implementation=org.apache.nifi.controller.repository.WriteAheadFlowFileRepository
nifi.flowfile.repository.wal.implementation=org.apache.nifi.wali.SequentialAccessWriteAheadLog
nifi.flowfile.repository.directory=./flowfile_repository
nifi.flowfile.repository.partitions=256
nifi.flowfile.repository.checkpoint.interval=5 mins
nifi.flowfile.repository.always.sync=false

nifi.swap.manager.implementation=org.apache.nifi.controller.FileSystemSwapManager
nifi.queue.swap.threshold=20000
nifi.swap.in.period=5 sec
nifi.swap.in.threads=10
nifi.swap.out.period=5 sec
nifi.swap.out.threads=40

# Content Repository
nifi.content.repository.implementation=org.apache.nifi.controller.repository.FileSystemRepository
nifi.content.claim.max.appendable.size=1 MB
nifi.content.claim.max.flow.files=100
nifi.content.repository.directory.default=./content_repository
nifi.content.repository.archive.max.retention.period=12 hours
nifi.content.repository.archive.max.usage.percentage=50%
nifi.content.repository.archive.enabled=true
nifi.content.repository.always.sync=false
nifi.content.viewer.url=../nifi-content-viewer/

# Provenance Repository Properties
nifi.provenance.repository.implementation=org.apache.nifi.provenance.WriteAheadProvenanceRepository
nifi.provenance.repository.debug.frequency=1_000_000
nifi.provenance.repository.encryption.key.provider.implementation=
nifi.provenance.repository.encryption.key.provider.location=
nifi.provenance.repository.encryption.key.id=
nifi.provenance.repository.encryption.key=

# Persistent Provenance Repository Properties
nifi.provenance.repository.directory.default=./provenance_repository
nifi.provenance.repository.max.storage.time=24 hours
nifi.provenance.repository.max.storage.size=1 GB
nifi.provenance.repository.rollover.time=30 secs
nifi.provenance.repository.rollover.size=100 MB
nifi.provenance.repository.query.threads=2
nifi.provenance.repository.index.threads=2
nifi.provenance.repository.compress.on.rollover=true
nifi.provenance.repository.always.sync=false
# Comma-separated list of fields. Fields that are not indexed will not be searchable. Valid fields are:
# EventType, FlowFileUUID, Filename, TransitURI, ProcessorID, AlternateIdentifierURI, Relationship, Details
nifi.provenance.repository.indexed.fields=EventType, FlowFileUUID, Filename, ProcessorID, Relationship
# FlowFile Attributes that should be indexed and made searchable.  Some examples to consider are filename, uuid, mime.type
nifi.provenance.repository.indexed.attributes=
# Large values for the shard size will result in more Java heap usage when searching the Provenance Repository
# but should provide better performance
nifi.provenance.repository.index.shard.size=500 MB
# Indicates the maximum length that a FlowFile attribute can be when retrieving a Provenance Event from
# the repository. If the length of any attribute exceeds this value, it will be truncated when the event is retrieved.
nifi.provenance.repository.max.attribute.length=65536
nifi.provenance.repository.concurrent.merge.threads=2


# Volatile Provenance Respository Properties
nifi.provenance.repository.buffer.size=100000

# Component Status Repository
nifi.components.status.repository.implementation=org.apache.nifi.controller.status.history.VolatileComponentStatusRepository
nifi.components.status.repository.buffer.size=1440
nifi.components.status.snapshot.frequency=1 min

# Site to Site properties
nifi.remote.input.host=
nifi.remote.input.secure=false
nifi.remote.input.socket.port=
nifi.remote.input.http.enabled=true
nifi.remote.input.http.transaction.ttl=30 sec
nifi.remote.contents.cache.expiration=30 secs

# web properties #
nifi.web.war.directory=./lib
nifi.web.http.host=
nifi.web.http.port=9080
nifi.web.http.network.interface.default=
nifi.web.https.host=
nifi.web.https.port=
nifi.web.https.network.interface.default=
nifi.web.jetty.working.directory=./work/jetty
nifi.web.jetty.threads=1000
nifi.web.max.header.size=16 KB
nifi.web.proxy.context.path=
nifi.web.proxy.host=

# security properties #
nifi.sensitive.props.key=
nifi.sensitive.props.key.protected=
nifi.sensitive.props.algorithm=PBEWITHMD5AND256BITAES-CBC-OPENSSL
nifi.sensitive.props.provider=BC
nifi.sensitive.props.additional.keys=

nifi.security.keystore=
nifi.security.keystoreType=
nifi.security.keystorePasswd=
nifi.security.keyPasswd=
nifi.security.truststore=
nifi.security.truststoreType=
nifi.security.truststorePasswd=
nifi.security.user.authorizer=managed-authorizer
nifi.security.user.login.identity.provider=
nifi.security.ocsp.responder.url=
nifi.security.ocsp.responder.certificate=

# OpenId Connect SSO Properties #
nifi.security.user.oidc.discovery.url=
nifi.security.user.oidc.connect.timeout=5 secs
nifi.security.user.oidc.read.timeout=5 secs
nifi.security.user.oidc.client.id=
nifi.security.user.oidc.client.secret=
nifi.security.user.oidc.preferred.jwsalgorithm=

# Apache Knox SSO Properties #
nifi.security.user.knox.url=
nifi.security.user.knox.publicKey=
nifi.security.user.knox.cookieName=hadoop-jwt
nifi.security.user.knox.audiences=

# Identity Mapping Properties #
# These properties allow normalizing user identities such that identities coming from different identity providers
# (certificates, LDAP, Kerberos) can be treated the same internally in NiFi. The following example demonstrates normalizing
# DNs from certificates and principals from Kerberos into a common identity string:
#
# nifi.security.identity.mapping.pattern.dn=^CN=(.*?), OU=(.*?), O=(.*?), L=(.*?), ST=(.*?), C=(.*?)$
# nifi.security.identity.mapping.value.dn=$1@$2
# nifi.security.identity.mapping.transform.dn=NONE
# nifi.security.identity.mapping.pattern.kerb=^(.*?)/instance@(.*?)$
# nifi.security.identity.mapping.value.kerb=$1@$2
# nifi.security.identity.mapping.transform.kerb=UPPER

# Group Mapping Properties #
# These properties allow normalizing group names coming from external sources like LDAP. The following example
# lowercases any group name.
#
# nifi.security.group.mapping.pattern.anygroup=^(.*)$
# nifi.security.group.mapping.value.anygroup=$1
# nifi.security.group.mapping.transform.anygroup=LOWER

# cluster common properties (all nodes must have same values) #
nifi.cluster.protocol.heartbeat.interval=5 sec
nifi.cluster.protocol.is.secure=false

# cluster node properties (only configure for cluster nodes) #
nifi.cluster.is.node=false
nifi.cluster.node.address=
nifi.cluster.node.protocol.port=
nifi.cluster.node.protocol.threads=10
nifi.cluster.node.protocol.max.threads=50
nifi.cluster.node.event.history.size=25
nifi.cluster.node.connection.timeout=100 sec
nifi.cluster.node.read.timeout=100 sec
nifi.cluster.node.max.concurrent.requests=100
nifi.cluster.firewall.file=
nifi.cluster.flow.election.max.wait.time=5 mins
nifi.cluster.flow.election.max.candidates=

# cluster load balancing properties #
nifi.cluster.load.balance.host=
nifi.cluster.load.balance.port=6342
nifi.cluster.load.balance.connections.per.node=4
nifi.cluster.load.balance.max.thread.count=8
nifi.cluster.load.balance.comms.timeout=30 sec

# zookeeper properties, used for cluster management #
nifi.zookeeper.connect.string=
nifi.zookeeper.connect.timeout=30 secs
nifi.zookeeper.session.timeout=30 secs
nifi.zookeeper.root.node=/nifi

# Zookeeper properties for the authentication scheme used when creating acls on znodes used for cluster management
# Values supported for nifi.zookeeper.auth.type are "default", which will apply world/anyone rights on znodes
# and "sasl" which will give rights to the sasl/kerberos identity used to authenticate the nifi node
# The identity is determined using the value in nifi.kerberos.service.principal and the removeHostFromPrincipal
# and removeRealmFromPrincipal values (which should align with the kerberos.removeHostFromPrincipal and kerberos.removeRealmFromPrincipal
# values configured on the zookeeper server).
nifi.zookeeper.auth.type=
nifi.zookeeper.kerberos.removeHostFromPrincipal=
nifi.zookeeper.kerberos.removeRealmFromPrincipal=

# kerberos #
nifi.kerberos.krb5.file=

# kerberos service principal #
nifi.kerberos.service.principal=
nifi.kerberos.service.keytab.location=

# kerberos spnego principal #
nifi.kerberos.spnego.principal=
nifi.kerberos.spnego.keytab.location=
nifi.kerberos.spnego.authentication.expiration=12 hours

# external properties files for variable registry
# supports a comma delimited list of file locations
nifi.variable.registry.properties=
```

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk.github.io/raw/master/img/wechat.jpg)