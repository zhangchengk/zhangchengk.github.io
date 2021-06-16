import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def ff = session.get()
if(!ff) return

// ------------------------------
// 参数
// ------------------------------
String srcSchema  = para_src_schema.value;
String srcTables  = para_src_tables.value;
String desSchema  = para_des_schema.value;
String desTables  = para_des_tables.value;

// 分区参数 如果是字符串 NULL，则表示上游未配置对应的分区设置
String srcPartCols = para_src_part_cols.value;
String desPartCol  = para_des_part_col.value;
String desPartVal  = para_des_part_val.evaluateAttributeExpressions().getValue();

List<String> srcTableList   = srcTables.split(',')
List<String> desTableList   = desTables.split(',')
List<String> srcPartColList = srcPartCols.split(',')
// ------------------------------
// 校验
// ------------------------------
if( srcTableList.size() != desTableList.size() ){
    log.error("来源表,目的表 长度必须一致");
    return;
}

session.remove(ff)

for(int k = 0;k < srcTableList.size();k++){
    //log.info(srcSchema + " " + desSchema + " " + srcTableList.get(k) + " " + desTableList.get(k));
    def new_ff = session.create()
    new_ff = session.putAttribute(new_ff,"arg.src.schema", srcSchema)
    new_ff = session.putAttribute(new_ff,"arg.des.schema", desSchema)
    new_ff = session.putAttribute(new_ff,"arg.src.table", srcTableList.get(k))
    new_ff = session.putAttribute(new_ff,"arg.des.table", desTableList.get(k))

    if (!"NULL".equals(srcPartCols) && srcPartColList.size() > k) {
        new_ff = session.putAttribute(new_ff,"arg.src.part.col", srcPartColList.get(k))
    }
    if (!"NULL".equals(desPartCol)) {
        new_ff = session.putAttribute(new_ff,"arg.des.part.col", desPartCol)
    }
    new_ff = session.putAttribute(new_ff,"arg.des.part.val", desPartVal)
    session.transfer(new_ff, REL_SUCCESS)
}