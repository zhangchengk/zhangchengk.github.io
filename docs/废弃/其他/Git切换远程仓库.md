---
title: Git切换远程仓库
date: 2020-04-16
category: 其他
---

使用以下命令 重置url
```
 git remote set-url [--push] <name> <newurl> [<oldurl>]
```

使用以下查看修改效果

```
git remote -v
```

推送代码和所有提交记录到新的远的仓库
```
git push -u origin --all
git push -u origin --tag
```





