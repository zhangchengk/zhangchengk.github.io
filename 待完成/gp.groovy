import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import org.apache.commons.lang3.StringUtils
import org.apache.nifi.flowfile.FlowFile;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
/**
* 自动为数据添加分区字段及分区值的组件
*/ 
FlowFile flowFile = session.get()
if(!flowFile) return

// 一般分区字段名称为dt
String desPartCol  = flowFile.getAttribute("arg.des.part.col");
// 指定来源表的某个字段值作为分区值
String srcPartCol  = flowFile.getAttribute("arg.src.part.col");
if (StringUtils.isAllEmpty( desPartCol, srcPartCol)) {
   // 认为不分区
   session.transfer(flowFile, REL_SUCCESS);
   return;         
}
// 如果未指定来源数据字段值作为分区值，则使用默认值，值一般是前一天日期
// (默认上游都是传有此值的) 
String desPartVal  = flowFile.getAttribute("arg.des.part.val");

FlowFile original = flowFile;
Map<String, String> originalAttributes = flowFile.getAttributes();
try {
    flowFile = session.write(flowFile, new StreamCallback() {
        public void process(InputStream in, OutputStream out) throws IOException {
            try (def reader = RecordReader.readerFactory.createRecordReader(originalAttributes, in, original.getSize(), getLogger())) {
                Record firstRecord = reader.nextRecord();
                if (firstRecord == null) {
                    session.remove(flowFile)
                    return;
                }
                // 更新当前数据集的schema
                List<RecordField> fields = firstRecord.getSchema().getFields();
                RecordField partitionField = new RecordField("", RecordFieldType.STRING.getDataType());
                fields.add(partitionField);
                RecordSchema writeSchema = new SimpleRecordSchema(fields);
                writeSchema = writerFactory.getSchema(originalAttributes, writeSchema);
                // 尝试增加第一条数据的分区值 并确定使用的是dt默认值还是来源数据值
                boolean useDefaultPvalue = false;
                if (StringUtils.isEmpty(srcPartCol)) {
                    useDefaultPvalue = true;
                } else {
                    try {
                      String pValue = formatter.format(LocalDateTime.ofInstant(Instant.ofEpochMilli(firstRecord.getAsLong(srcPartCol)), ZoneId.systemDefault()));
                      firstRecord.setValue(srcPartCol,pValue);
                    } catch (IllegalTypeConversionException e) {
                      // 转换失败 非Long型的
                      useDefaultPvalue = true;
                      firstRecord.setValue(srcPartCol,desPartVal);
                     }
                }

                try (def writer = RecordWriter.writerFactory.createWriter(getLogger(), writeSchema, out, originalAttributes)) {
                    writer.beginRecordSet();
                    writer.write(firstRecord);
                    Record record;
                    long count = 1L;
                    while ((record = reader.nextRecord()) != null) {
                        if (useDefaultPvalue) {
                            record.setValue(srcPartCol,desPartVal);
                        } else {
                            try {
                                String pValue = formatter.format(LocalDateTime.ofInstant(Instant.ofEpochMilli(record.getAsLong(srcPartCol)), ZoneId.systemDefault()));
                                record.setValue(srcPartCol,pValue);
                            } catch (IllegalTypeConversionException e) {
                                // 转换失败 非Long型的
                                useDefaultPvalue = true;
                                record.setValue(srcPartCol,desPartVal);
                             }
                        }
                        writer.write(record);
                    }
                    WriteResult writeResult = writer.finishRecordSet();
                    attributes.put("record.count", String.valueOf(writeResult.getRecordCount()));
                    attributes.put(CoreAttributes.MIME_TYPE.key(), writer.getMimeType());
                    attributes.putAll(writeResult.getAttributes());
                    recordCount.set(writeResult.getRecordCount());
                }
            } catch (SchemaNotFoundException e) {
                throw new ProcessException(e.getLocalizedMessage(), e);
            } catch (MalformedRecordException e) {
                throw new ProcessException("Could not parse incoming data", e);
            }
        }
    });
} catch (Exception e) {
    getLogger().error("Failed to process {}; will route to failure", new Object[] {flowFile, e});
    session.transfer(flowFile, REL_FAILURE);
    return;
}
session.transfer(flowFile, REL_SUCCESS)