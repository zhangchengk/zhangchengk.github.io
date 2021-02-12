---
title: ProvenanceRepository
date: 2020-07-01
categories: 
  -
tags: 
  -
author: Panda诚
location: BeiJing
publish: false
---

```java
public interface ProvenanceRepository extends ProvenanceEventRepository {

    /**
     * Performs any initialization needed. This should be called only by the
     * framework.
     *
     * @param eventReporter to report to
     * @param authorizer the authorizer to use for authorizing individual events
     * @param resourceFactory the resource factory to use for generating Provenance Resource objects for authorization purposes
     * @param identifierLookup a mechanism for looking up identifiers in the flow
     * @throws java.io.IOException if unable to initialize
     */
    void initialize(EventReporter eventReporter, Authorizer authorizer, ProvenanceAuthorizableFactory resourceFactory, IdentifierLookup identifierLookup) throws IOException;


    /**
     * Retrieves the Provenance Event with the given ID. The event will be returned only
     * if the given user is authorized to access the event.
     * Otherwise, an AccessDeniedException will be thrown.
     * If the component for the event no longer exists, ResourceNotFoundException will be thrown.
     *
     * @param id to lookup
     * @param user The NiFi user that the event should be authorized against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     * @return the Provenance Event Record with the given ID, if it exists, or
     *         {@code null} otherwise
     * @throws IOException if failure while retrieving event
     */
    ProvenanceEventRecord getEvent(long id, NiFiUser user) throws IOException;

    /**
     * Returns a List of all <code>ProvenanceEventRecord</code>s in the
     * repository starting with the given ID. The first ID in the repository
     * will always be 0 or higher. Each event that is found will be authorized
     * against the given NiFiUser. If the user does not have authorization for
     * the event, the event will not be returned.
     *
     * @param firstRecordId id of the first record to retrieve
     * @param maxRecords    maximum number of records to retrieve
     * @param user          The NiFi user that the events should be authorized against.
     *                      It can be {@code null} if called by NiFi components internally
     *                      where authorization is not required.
     * @return records
     * @throws java.io.IOException if error reading from repository
     */
    List<ProvenanceEventRecord> getEvents(long firstRecordId, final int maxRecords, NiFiUser user) throws IOException;

    /**
     * @return the {@link ProvenanceEventRepository} backing this ProvenanceRepository
     */
    ProvenanceEventRepository getProvenanceEventRepository();

    /**
     * Submits an asynchronous request to process the given query, returning an
     * identifier that can be used to fetch the results at a later time
     *
     * @param query to submit
     * @param user The NiFi User to authorize the events against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     *
     * @return an identifier that can be used to fetch the results at a later
     *         time
     */
    QuerySubmission submitQuery(Query query, NiFiUser user);

    /**
     * @param queryIdentifier of the query
     * @param user The user who is retrieving the query.
     *             It can be {@code null} if the request was made by NiFi components internally where authorization is not required.
     *             If the queried user and the retrieved user do not match, AccessDeniedException will be thrown.
     *
     * @return the QueryResult associated with the given identifier, if the
     *         query has finished processing. If the query has not yet finished running,
     *         returns <code>null</code>
     */
    QuerySubmission retrieveQuerySubmission(String queryIdentifier, NiFiUser user);

    /**
     * Submits a Lineage Computation to be completed and returns the
     * AsynchronousLineageResult that indicates the status of the request and
     * the results, if the computation is complete. If the given user does not
     * have authorization to view one of the events in the lineage, a placeholder
     * event will be used instead that provides none of the event details except
     * for the identifier of the component that emitted the Provenance Event. It is
     * necessary to include this node in the lineage view so that the lineage makes
     * sense, rather than showing disconnected graphs when the user is not authorized
     * for all components' provenance events.
     *
     * @param flowFileUuid the UUID of the FlowFile for which the Lineage should
     *            be calculated
     * @param user The NiFi User to authorize the events against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     *
     * @return a {@link ComputeLineageSubmission} object that can be used to
     *         check if the computing is complete and if so get the results
     */
    ComputeLineageSubmission submitLineageComputation(String flowFileUuid, NiFiUser user);

    /**
     * Submits a Lineage Computation to be completed and returns the
     * AsynchronousLineageResult that indicates the status of the request and
     * the results, if the computation is complete. If the given user does not
     * have authorization to view one of the events in the lineage, a placeholder
     * event will be used instead that provides none of the event details except
     * for the identifier of the component that emitted the Provenance Event. It is
     * necessary to include this node in the lineage view so that the lineage makes
     * sense, rather than showing disconnected graphs when the user is not authorized
     * for all components' provenance events.
     *
     * This method is preferred to {@link #submitLineageComputation(String, NiFiUser)} because
     * it is much more efficient, but the former may be used if a particular Event ID is not
     * available.
     *
     * @param eventId the numeric ID of the event that the lineage is for
     * @param user The NiFi User to authorize the events against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     *
     * @return a {@link ComputeLineageSubmission} object that can be used to
     *         check if the computing is complete and if so get the results
     */
    ComputeLineageSubmission submitLineageComputation(long eventId, NiFiUser user);

    /**
     * @param lineageIdentifier identifier of lineage to compute
     * @param user The user who is retrieving the lineage submission.
     *             It can be {@code null} if the request was made by NiFi components internally where authorization is not required.
     *             If the queried user and the retrieved user do not match, AccessDeniedException will be thrown.
     *
     * @return the {@link ComputeLineageSubmission} associated with the given
     *         identifier
     */
    ComputeLineageSubmission retrieveLineageSubmission(String lineageIdentifier, NiFiUser user);

    /**
     * Submits a request to expand the parents of the event with the given id. If the given user
     * is not authorized to access any event, a placeholder will be used instead that contains only
     * the ID of the component that emitted the event.
     *
     * @param eventId the one-up id of the Event to expand
     * @param user The NiFi user to authorize events against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     * @return a submission which can be checked for status
     *
     * @throws IllegalArgumentException if the given identifier identifies a
     *             Provenance Event that has a Type that is not expandable or if the
     *             identifier cannot be found
     */
    ComputeLineageSubmission submitExpandParents(long eventId, NiFiUser user);

    /**
     * Submits a request to expand the children of the event with the given id. If the given user
     * is not authorized to access any event, a placeholder will be used instead that contains only
     * the ID of the component that emitted the event.
     *
     * @param eventId the one-up id of the Event
     * @param user The NiFi user to authorize events against.
     *             It can be {@code null} if called by NiFi components internally where authorization is not required.
     *
     * @return a submission which can be checked for status
     *
     * @throws IllegalArgumentException if the given identifier identifies a
     *             Provenance Event that has a Type that is not expandable or if the
     *             identifier cannot be found
     */
    ComputeLineageSubmission submitExpandChildren(long eventId, NiFiUser user);

    /**
     * @return a list of all fields that can be searched via the
     * {@link ProvenanceRepository#submitQuery(Query, NiFiUser)} method
     */
    List<SearchableField> getSearchableFields();

    /**
     * @return a list of all FlowFile attributes that can be searched via the
     * {@link ProvenanceRepository#submitQuery(Query, NiFiUser)} method
     */
    List<SearchableField> getSearchableAttributes();

    /**
     * @return the names of all Containers that exist for this Provenance
     * Repository
     */
    Set<String> getContainerNames();

    /**
     * @param containerName name of container to check capacity on
     * @return the maximum number of bytes that can be stored in the storage
     * mechanism that backs the container with the given name
     * @throws java.io.IOException if unable to check capacity
     * @throws IllegalArgumentException if no container exists with the given
     * name
     */
    long getContainerCapacity(String containerName) throws IOException;

    /**
     * Returns the name of the FileStore that the given container is stored on, or <code>null</code>
     * if not applicable or unable to determine the file store name
     *
     * @param containerName the name of the container
     * @return the name of the FileStore
     */
    String getContainerFileStoreName(String containerName);

    /**
     * @param containerName to check space on
     * @return the number of bytes available to be used used by the storage
     * mechanism that backs the container with the given name
     * @throws java.io.IOException if unable to check space
     * @throws IllegalArgumentException if no container exists with the given
     * name
     */
    long getContainerUsableSpace(String containerName) throws IOException;
}
```

ProvenanceRepository接口实现类

![](https://gitee.com/zhangchengk/image/raw/master/待完成/ProvenanceRepository/3.png)

VolatileProvenanceRepository:存储内存中

MockProvenanceRepository：测试用

PersistentProvenanceRepository：废弃

WriteAheadProvenanceRepository：预写日志

EncryptedWriteAheadProvenanceRepository：加密预写日志

```properties
# Provenance Repository Properties
nifi.provenance.repository.implementation=org.apache.nifi.provenance.WriteAheadProvenanceRepository
nifi.provenance.repository.debug.frequency=1_000_000
nifi.provenance.repository.encryption.key.provider.implementation=
nifi.provenance.repository.encryption.key.provider.location=
nifi.provenance.repository.encryption.key.id=
nifi.provenance.repository.encryption.key=

# Persistent Provenance Repository Properties
nifi.provenance.repository.directory.default=./provenance_repository
nifi.provenance.repository.max.storage.time=30 days
nifi.provenance.repository.max.storage.size=10 GB
nifi.provenance.repository.rollover.time=10 mins
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
```