import cn.hutool.json.JSONObject
import cn.hutool.json.JSONUtil

def ff = session.get()
if(!ff) return
// ------------------------------
// 参数 流式 多schema  注意！！！不要用此脚本替换档案迁移的模板，会不兼容的！！
// ------------------------------
try {
   // #{table.regex.configs} 正则配置
   def processGroup = context.procNode.getProcessGroup();
   def parameterContext = processGroup.getParameterContext();
   JSONObject tableRegexConfigMap = null;
   if (parameterContext.getParameter("table.regex.configs") != null) {
       tableRegexConfigMap = JSONUtil.parseObj(parameterContext.getParameter("table.regex.configs").get().value);
   }
    // 来源数据库配置 #{src.db.config}
    JSONObject srcDb = JSONUtil.parseObj(srcDbConfig.value);
    // 目标库数据库配置 #{des.db.config}
    JSONObject desDb = JSONUtil.parseObj(desDbConfig.value);
    // 目标表的配置 #{des.table.configs}
    JSONObject desTableConfigMap = JSONUtil.parseObj(desTableConfigs.value);
    // 数据源ID和数据库连接池ID的映射 #{db.id.mapping}
    JSONObject dbIdAndServiceIdMap = JSONUtil.parseObj(dbIdMapping.value);
    // 目标表的新增字段 #{des.new.cols}
    JSONObject desNewCols = JSONUtil.parse(desNewColfigs.value);
    // 暂时不支持列映射 #{col.name.mapping}
    JSONObject colNameMappings = JSONUtil.parseObj(columnNameMapping.value);

    String srcSchemaTableName = ff.getAttribute("debezium.table.name");
    String[] schemaAndTableName = srcSchemaTableName.split("\\.");
    String srcSchemaName = schemaAndTableName[0];
    String srcTableName = schemaAndTableName[1];

    String desId = desDb.getObj("dbId", "").toString();
    String desDBCPServiceId = dbIdAndServiceIdMap.getObj(desId, "").toString();
    String desDbType = desDb.getObj("dbType", "").toString();
    String blnUseCopyFrom = String.valueOf(desDb.getObj("blnUseCopyFrom", "false"));
    String blnDesPartition = String.valueOf(desDb.getObj("blnDesPartition", "false"));
    // 与数据移动传参保持一致 使用的来源schema+来源表作为key
    String tableNameKey = srcSchemaName + "." + srcTableName;
    JSONObject desTableConfig = desTableConfigMap.getObj(tableNameKey);
    if (desTableConfig == null && tableRegexConfigMap != null) {
        // 获取tableRegexConfigMap所有的key,和tableNameKey进行正则匹配，符合的获取其value
        JSONObject tableRegexConfig = null;
        for (key in tableRegexConfigMap.keySet()) {
            if (tableNameKey.matches(key)) {
                tableRegexConfig = tableRegexConfigMap.getObj(key);
                break;
            }
        }
        if (tableRegexConfig != null) {
            desTableConfig = JSONUtil.parseObj(tableRegexConfig.toString());
        }
    }
    String desSchemaName = desTableConfig.getObj("desSchemaName", srcSchemaName).toString();
    String desTableName = desTableConfig.getObj("desTableName", srcTableName).toString();
    String desPartitionColName = desTableConfig.getObj("desPartitionColName", "").toString();
    String formula = desTableConfig.getObj("formula", "").toString();
    String desNewColConfig = desNewCols.getObj(tableNameKey, "").toString();

    def new_ff = session.clone(ff);
    new_ff = session.putAttribute(new_ff, "arg.src.schema", srcSchemaName);
    new_ff = session.putAttribute(new_ff, "arg.src.table", srcTableName);
    // 标注数据来自于数据移动cdc
    new_ff = session.putAttribute(new_ff, "data.source", "sync.cdc");

    new_ff = session.putAttribute(new_ff, "src.dbId", srcDb.getObj("dbId", "").toString());
    new_ff = session.putAttribute(new_ff, "arg.src.dbType", srcDb.getObj("dbType", "").toString());
    new_ff = session.putAttribute(new_ff, "arg.src.dbName", srcDb.getObj("dbName", "").toString());
    new_ff = session.putAttribute(new_ff, "des.dbId", desId);
    new_ff = session.putAttribute(new_ff, "arg.des.dbName", desDb.getObj("dbName", "").toString());

    new_ff = session.putAttribute(new_ff, "arg.des.dbId", desDBCPServiceId);
    new_ff = session.putAttribute(new_ff, "arg.des.dbType", desDbType);
    new_ff = session.putAttribute(new_ff, "arg.des.schema", desSchemaName);
    new_ff = session.putAttribute(new_ff, "arg.des.table", desTableName);
    new_ff = session.putAttribute(new_ff, "arg.des.newCols", desNewColConfig);
    if (Boolean.valueOf(blnDesPartition)) {
        // 如果是分区
        new_ff = session.putAttribute(new_ff, "arg.des.desPartitionValueColName", desPartitionColName);
        new_ff = session.putAttribute(new_ff, "arg.des.desPartitionColName", "dt");
        new_ff = session.putAttribute(new_ff, "arg.des.blnDesPartition", blnDesPartition);
    }
    new_ff = session.putAttribute(new_ff, "arg.des.formula", formula);
    new_ff = session.putAttribute(new_ff, "arg.des.blnUseCopyFrom", blnUseCopyFrom);

    session.transfer(new_ff, REL_SUCCESS);
    session.remove(ff)
} catch (Exception e) {
    log.error(e.getMessage(), e);
    session.transfer(ff, REL_FAILURE);
}
