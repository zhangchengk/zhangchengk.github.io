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
    includeCategory.add('技术汇总')
    includeCategory.add('其他')
    includeCategory.add('数据库')
    includeCategory.add('算法')
    includeCategory.add('ApacheNIFI')
    includeCategory.add('容器')
    includeCategory.add('Java')
    includeCategory.add('Spring')
    includeCategory.add('jolt')

var flagMap = new Map();
    flagMap.set('读书笔记', '📚')
        flagMap.set('阿里Java开发手册', '📔')
        flagMap.set('高效使用Java', '📕')
        flagMap.set('记忆宫殿', '📖')
        flagMap.set('设计模式就该这样学', '📗')
        flagMap.set('深入浅出Java多线程', '📘')
        flagMap.set('数据结构', '📙')
        flagMap.set('Java核心技术面试精讲', '📓')
        flagMap.set('LeetCode', '📃')
        flagMap.set('Spring源码深度解析', '📒')
        flagMap.set('antlr指南', '🗂')
    flagMap.set('技术汇总', '💼')
        flagMap.set('操作系统', '🖥')
    flagMap.set('其他', '🚬')
        flagMap.set('Linux', '📲')
        flagMap.set('Maven', '👁')
    flagMap.set('数据库', '💿️')
    flagMap.set('算法', '🧮')
    flagMap.set('ApacheNIFI', '💧')
        flagMap.set('ApacheNIFI教程', '🐡')
        flagMap.set('ApacheNIFI开发', '🐠')
    flagMap.set('容器', '🐳')
    flagMap.set('Java', '🍵')
        flagMap.set('IO', '🥢')
        flagMap.set('Java多线程', '🧶')
        flagMap.set('Java反射', '🏹')
        flagMap.set('Java规范', '⚪')
        flagMap.set('Jvm', '✌🏻')
    flagMap.set('Spring', '🍃')
        flagMap.set('Spring中文文档', '🌿')
        flagMap.set('SpringBoot', '🍀')


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
        let obj = {}
        obj.title = "🐼  " + category
        obj.children= walk(__dirname + '/' + category, category + '/').children
        sidebars.push(obj)
    })
    return sidebars
}

function resolveSideBarTest() {
    let sidebars = []
    includeCategory.forEach(function(category) {
        let obj = {}
        obj.title = "🐼  " + category
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
                let flag = flagMap.get(filename)
                if (flag) {
                    obj.title = flag + " " + filename
                } else {
                    obj.title = "🐾  " + filename
                }
                
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