const fs = require('fs')
/* 
![](https://gitee.com/zhangchengk/image/raw/master/
1. fs.stat  检测是文件还是目录(目录 文件是否存在) 
2. fs.mkdir  创建目录 （创建之前先判断是否存在） 
3. fs.writeFile  写入文件(文件不存在就创建,但不能创建目录) 
4. fs.appendFile 写入追加文件 
5.fs.readFile 读取文件 
6.fs.readdir 读取目录 
7.fs.rename 重命名 
8. fs.rmdir  删除目录 
9. fs.unlink 删除文件 
*/
let includeCategory = new Set()
    includeCategory.add('读书笔记')
    includeCategory.add('算法')
    includeCategory.add('Java')
    includeCategory.add('Spring')
    includeCategory.add('ApacheNIFI')
    includeCategory.add('数据库')
    // includeCategory.add('Hadoop')
    // includeCategory.add('Hive')
    // includeCategory.add('Impala')
    includeCategory.add('Docker')


let ignoreFileNameSet  = new Set()
    ignoreFileNameSet.add('.vuepress')
    ignoreFileNameSet.add('Readme.md')
    ignoreFileNameSet.add('readme.md')
    ignoreFileNameSet.add('intro.md')
    ignoreFileNameSet.add('qq.md')
    ignoreFileNameSet.add('wechat.md')
    ignoreFileNameSet.add('sidebar.js')
    ignoreFileNameSet.add('待完成')
    ignoreFileNameSet.add('.DS_Store')
    ignoreFileNameSet.add('img')
    ignoreFileNameSet.add('about')
    ignoreFileNameSet.add('jolt')

// console.log(__dirname)
let test = resolveSideBarTest()
console.log(JSON.stringify(test, null, "\t"))

module.exports = function resolveSideBar() {
    let sidebars = []
    includeCategory.forEach(function(category) {
        console.log(category)
        let obj = {}
        obj.title = category
        obj.children= walk(__dirname + '/' + category, category + '/').children
        sidebars.push(obj)
    })
    return sidebars
}

function resolveSideBarTest() {
    let sidebars = []
    includeCategory.forEach(function(category) {
        console.log(category)
        let obj = {}
        obj.title = category
        obj.children= walk(__dirname + '/' + category, category + '/').children
        sidebars.push(obj)
    })
    return sidebars
}

function walk(dir, sidebarDir) {
    let returnValue = {
        children : [],
        hasArticle : false
    }
    fs.readdirSync(dir).forEach(function(filename){
        if (!ignoreFileNameSet.has(filename)){
            var path = dir+"/"+filename
            var stat = fs.statSync(path)
            if (stat && stat.isDirectory()) {
                let obj = {}
                obj.title = filename
                let result = walk(path, sidebarDir + filename + '/')
                obj.children = result.children
                returnValue.children.push(obj)
            }
        }
    })
    fs.readdirSync(dir).forEach(function(filename){
        if (!ignoreFileNameSet.has(filename)){
            var path = dir+"/"+filename
            var stat = fs.statSync(path)
            if (stat && stat.isFile()) {
                returnValue.children.push(sidebarDir + filename)
                returnValue.hasArticle = true
            }
        }
    })
    return returnValue
    }