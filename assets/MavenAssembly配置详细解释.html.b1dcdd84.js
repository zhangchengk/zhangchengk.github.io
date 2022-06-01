import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.20fe4298.js";const e={},l=t(`<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>assembly</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/ASSEMBLY/2.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u7684\u6807\u8BC6\u3002\u8FD9\u662F\u6765\u81EA\u6B64\u9879\u76EE\u7684\u7279\u5B9A\u6587\u4EF6\u7EC4\u5408\u7684\u7B26\u53F7\u540D\u79F0\u3002\u6B64\u5916\uFF0C\u9664\u4E86\u7528\u4E8E\u901A\u8FC7\u5C06\u751F\u6210\u7684\u5F52\u6863\u7684\u503C\u9644\u52A0\u5230\u7EC4\u5408\u5305\u4EE5\u660E\u786E\u547D\u540D\u7EC4\u5408\u5305\u4E4B\u5916\uFF0C\u8BE5ID\u5728\u90E8\u7F72\u65F6\u7528\u4F5C\u5DE5\u4EF6\u7684\u5206\u7C7B\u5668\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--string--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        (\u8BB8\u591A\uFF09 \u6307\u5B9A\u7A0B\u5E8F\u96C6\u7684\u683C\u5F0F\u3002\u901A\u8FC7\u76EE\u6807\u53C2\u6570\u800C\u4E0D\u662F\u5728\u8FD9\u91CC\u6307\u5B9A\u683C\u5F0F\u901A\u5E38\u4F1A\u66F4\u597D\u3002\u4F8B\u5982\uFF0C\u5141\u8BB8\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u4E0D\u540C\u7C7B\u578B\u7684\u6863\u6848\u3002
        \u53EF\u4EE5\u63D0\u4F9B\u591A\u79CD\u683C\u5F0F\uFF0C\u88C5\u914D\u4F53\u63D2\u4EF6\u5C06\u751F\u6210\u6BCF\u79CD\u6240\u9700\u683C\u5F0F\u7684\u6863\u6848\u3002\u90E8\u7F72\u9879\u76EE\u65F6\uFF0C\u6240\u6709\u6307\u5B9A\u7684\u6587\u4EF6\u683C\u5F0F\u4E5F\u5C06\u88AB\u90E8\u7F72\u3002
        \u901A\u8FC7\u5728&lt;format&gt;\u5B50\u5143\u7D20\u4E2D\u63D0\u4F9B\u4EE5\u4E0B\u503C\u4E4B\u4E00\u6765\u6307\u5B9A\u683C\u5F0F\uFF1A
        \u201Czip\u201D - \u521B\u5EFA\u4E00\u4E2AZIP\u6587\u4EF6\u683C\u5F0F
        \u201Ctar\u201D - \u521B\u5EFA\u4E00\u4E2ATAR\u683C\u5F0F
        \u201Ctar.gz\u201D\u6216\u201Ctgz\u201D - \u521B\u5EFA\u4E00\u4E2Agzip&#39;d TAR\u683C\u5F0F
        \u201Ctar.bz2\u201D\u6216\u201Ctbz2\u201D - \u521B\u5EFA\u4E00\u4E2Abzip&#39;d TAR\u683C\u5F0F
        \u201Ctar.snappy\u201D - \u521B\u5EFA\u4E00\u4E2A\u7075\u6D3B\u7684TAR\u683C\u5F0F
        \u201Ctar.xz\u201D\u6216\u201Ctxz\u201D - \u521B\u5EFA\u4E00\u4E2Axz&#39;d TAR\u683C\u5F0F
        \u201Cjar\u201D - \u521B\u5EFA\u4E00\u4E2AJAR\u683C\u5F0F
        \u201Cdir\u201D - \u521B\u5EFA\u5206\u89E3\u7684\u76EE\u5F55\u683C\u5F0F
        \u201Cwar\u201D - \u521B\u5EFA\u4E00\u4E2AWAR\u683C\u5F0F
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>formats</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5728\u6700\u7EC8\u5F52\u6863\u4E2D\u5305\u542B\u4E00\u4E2A\u57FA\u672C\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u6B63\u5728\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u201Cyour-app\u201D\u7684\u7A0B\u5E8F\u96C6\uFF0C\u5219\u5C06includeBaseDirectory\u8BBE\u7F6E\u4E3Atrue\u5C06\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u6B64\u57FA\u672C\u76EE\u5F55\u7684\u5F52\u6863\u6587\u4EF6\u3002
        \u5982\u679C\u6B64\u9009\u9879\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5219\u521B\u5EFA\u7684\u5B58\u6863\u5C06\u5176\u5185\u5BB9\u89E3\u538B\u7F29\u5230\u5F53\u524D\u76EE\u5F55\u3002
        \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--boolean--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeBaseDirectory</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u8BBE\u7F6E\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u5F52\u6863\u7684\u57FA\u672C\u76EE\u5F55\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5E76\u4E14includeBaseDirectory == true\uFF0C\u5219\u5C06\u4F7F\u7528$ {project.build.finalName}\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
    --&gt;</span>
    <span class="token comment">&lt;!--string--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baseDirectory</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5728\u6700\u7EC8\u6863\u6848\u4E2D\u5305\u542B\u4E00\u4E2A\u7F51\u7AD9\u76EE\u5F55\u3002\u9879\u76EE\u7684\u7AD9\u70B9\u76EE\u5F55\u4F4D\u7F6E\u7531Assembly Plugin\u7684siteDirectory\u53C2\u6570\u786E\u5B9A\u3002
        \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--boolean--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeSiteDirectory</span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u4ECE\u5E38\u89C4\u5F52\u6863\u6D41\u4E2D\u8FC7\u6EE4\u5404\u79CD\u5BB9\u5668\u63CF\u8FF0\u7B26\u7684\u7EC4\u4EF6\u96C6\u5408\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C06\u5B83\u4EEC\u805A\u5408\u7136\u540E\u6DFB\u52A0\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;ContainerDescriptorHandlerConfig&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerDescriptorHandlers</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u914D\u7F6E\u6587\u4EF6\u5934\u90E8\u7684\u8FC7\u6EE4\u5668\uFF0C\u4EE5\u542F\u7528\u5404\u79CD\u7C7B\u578B\u7684\u63CF\u8FF0\u7B26\u7247\u6BB5\uFF08\u5982components.xml\uFF0Cweb.xml\u7B49\uFF09\u7684\u805A\u5408\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerDescriptorHandler</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5904\u7406\u7A0B\u5E8F\u7684plexus\u89D2\u8272\u63D0\u793A\uFF0C\u7528\u4E8E\u4ECE\u5BB9\u5668\u4E2D\u67E5\u627E\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlerName</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5904\u7406\u7A0B\u5E8F\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--DOM--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerDescriptorHandler</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerDescriptorHandlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u6A21\u5757\u6587\u4EF6\u3002moduleSet\u662F\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;moduleSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u7684\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;ModuleSet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>moduleSets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            moduleSet\u8868\u793A\u4E00\u4E2A\u6216\u591A\u4E2A\u5728\u9879\u76EE\u7684pom.xml\u4E2D\u5B58\u5728\u7684&lt;module&gt;\u9879\u76EE\u3002\u8FD9\u4F7F\u60A8\u53EF\u4EE5\u5305\u542B\u5C5E\u4E8E\u9879\u76EE&lt;modules&gt;\u7684\u6E90\u4EE3\u7801\u6216\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002
            \u6CE8\u610F\uFF1A\u4ECE\u547D\u4EE4\u884C\u4F7F\u7528&lt;moduleSets&gt;\u65F6\uFF0C\u9700\u8981\u5148\u901A\u8FC7\u201Cmvn package assembly\uFF1Aassembly\u201D\u6765\u4F20\u9012\u5305\u9636\u6BB5\u3002\u8FD9\u4E2Abug\u8BA1\u5212\u7531Maven 2.1\u89E3\u51B3\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>moduleSet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u8BE5\u63D2\u4EF6\u5C06\u5305\u542B\u5F53\u524D\u53CD\u5E94\u5806\u4E2D\u7684\u6240\u6709\u9879\u76EE\uFF0C\u4EE5\u4FBF\u5728\u6B64ModuleSet\u4E2D\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u4E9B\u5C06\u88AB \u7EB3\u5165/\u6392\u9664(includes/excludes) \u89C4\u5219\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useAllReactorProjects</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5219\u8BE5\u63D2\u4EF6\u5C06\u4ECE\u8BE5ModuleSet\u4E2D\u6392\u9664\u5B50\u6A21\u5757\u7684\u5904\u7406\u3002\u5426\u5219\uFF0C\u5B83\u5C06\u5904\u7406\u6240\u6709\u5B50\u6A21\u5757\uFF0C\u6BCF\u4E2A\u5B50\u6A21\u5757\u90FD\u8981\u9075\u5B88\u5305\u542B/\u6392\u9664\u89C4\u5219\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeSubModules</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u5305\u542B\u7684\u9879\u76EE\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u9879\u76EE\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5F53\u5B58\u5728\u8FD9\u4E2A\u65F6\uFF0C\u63D2\u4EF6\u5C06\u5728\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u8FD9\u4E2A\u96C6\u5408\u4E2D\u5305\u542B\u7684\u6A21\u5757\u7684\u6E90\u6587\u4EF6\u3002
                \u5305\u542B\u7528\u4E8E\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u9879\u76EE\u6A21\u5757\u7684\u6E90\u6587\u4EF6\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--ModuleSources--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sources</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u6BCF\u4E2A\u5305\u542B\u6A21\u5757\u7684\u54EA\u4E9B\u6587\u4EF6\u7EC4\u3002fileSet\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;fileSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;FileSet&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSets</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        fileSet\u5141\u8BB8\u5C06\u6587\u4EF6\u7EC4\u5305\u542B\u5230\u7A0B\u5E8F\u96C6\u4E2D\u3002
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSet</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u6216\u76F8\u5BF9\u4F4D\u7F6E\u3002\u4F8B\u5982\uFF0C\u201Csrc / main / bin\u201D\u4F1A\u9009\u62E9\u5B9A\u4E49\u8FD9\u4E2A\u4F9D\u8D56\u5173\u7CFB\u7684\u9879\u76EE\u7684\u8FD9\u4E2A\u5B50\u76EE\u5F55\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u6B64\u6587\u4EF6\u96C6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\uFF1A
                            \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                            \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                            \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                            \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                            \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                            \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u662F\u5426\u5728\u590D\u5236\u6587\u4EF6\u65F6\u8FC7\u6EE4\u7B26\u53F7\uFF0C\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSet</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSets</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u6A21\u5757\u7684finalName\u662F\u5426\u5E94\u8BE5\u6DFB\u52A0\u5230\u5E94\u7528\u4E8E\u5B83\u7684\u4EFB\u4F55fileSets\u7684outputDirectory\u503C\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeModuleDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u662F\u5426\u5E94\u4ECE\u5E94\u7528\u4E8E\u8BE5\u6A21\u5757\u7684\u6587\u4EF6\u96C6\u4E2D\u6392\u9664\u5F53\u524D\u6A21\u5757\u4E0B\u65B9\u7684\u5B50\u6A21\u5757\u76EE\u5F55\u3002\u5982\u679C\u4EC5\u4EC5\u610F\u5473\u7740\u590D\u5236\u4E0E\u6B64ModuleSet\u5339\u914D\u7684\u786E\u5207\u6A21\u5757\u5217\u8868\u7684\u6E90\uFF0C\u5FFD\u7565\uFF08\u6216\u5355\u72EC\u5904\u7406\uFF09\u5F53\u524D\u76EE\u5F55\u4E0B\u76EE\u5F55\u4E2D\u5B58\u5728\u7684\u6A21\u5757\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5F88\u6709\u7528\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludeSubModuleDirectories</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u6A21\u5757\u57FA\u672C\u76EE\u5F55\u7684\u6620\u5C04\u6A21\u5F0F\u3002\u6CE8\u610F\uFF1A\u53EA\u6709\u5728includeModuleDirectory == true\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u4F7F\u7528\u6B64\u5B57\u6BB5\u3002
                    \u7F3A\u7701\u503C\u662F\u5728 2.2-beta-1\u4E2D\u662F$ {artifactId}\uFF0C\u4EE5\u53CA\u540E\u7EED\u7248\u672C\u4E2D\u662F$ {module.artifactId}\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1A$ {module.artifactId}\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectoryMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sources</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u5982\u679C\u5B58\u5728\uFF0C\u63D2\u4EF6\u5C06\u5728\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u6765\u81EA\u8BE5\u7EC4\u7684\u6240\u5305\u542B\u6A21\u5757\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002
                    \u5305\u542B\u7528\u4E8E\u5C06\u9879\u76EE\u6A21\u5757\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--ModuleBinaries--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>binaries</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                    \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                    \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                    \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                    \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u65F6\uFF0CattachmentClassifier\u5C06\u4F7F\u6C47\u7F16\u5668\u67E5\u770B\u9644\u52A0\u5230\u6A21\u5757\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u662F\u4E3B\u5DE5\u7A0B\u5DE5\u4EF6\u3002\u5982\u679C\u80FD\u591F\u627E\u5230\u4E0E\u6307\u5B9A\u5206\u7C7B\u7B26\u5339\u914D\u7684\u9644\u4EF6\uFF0C\u5219\u4F1A\u4F7F\u7528\u5B83; \u5426\u5219\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attachmentClassifier</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u63D2\u4EF6\u5C06\u5305\u542B\u8FD9\u91CC\u5305\u542B\u7684\u9879\u76EE\u6A21\u5757\u7684\u76F4\u63A5\u548C\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\u3002\u5426\u5219\uFF0C\u5B83\u5C06\u53EA\u5305\u542B\u6A21\u5757\u5305\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeDependencies</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--List&lt;DependencySet&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u4F9D\u8D56\u5173\u7CFB\u96C6\u5141\u8BB8\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u548C\u6392\u9664\u9879\u76EE\u4F9D\u8D56\u5173\u7CFB\u3002
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                            --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                            \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                            \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                            \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                            \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5982\u679C\u6307\u5B9A\u4E3Atrue\uFF0C\u90A3\u4E48\u5728\u7A0B\u5E8F\u96C6\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u4EFB\u4F55\u7528\u4E8E\u8FC7\u6EE4\u5B9E\u9645\u6784\u4EF6\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u90FD\u5C06\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\uFF0C\u5E76\u663E\u793A\u9519\u8BEF\u3002\u8FD9\u662F\u4E3A\u4E86\u5F3A\u8C03\u8FC7\u65F6\u7684\u5305\u542B\u6216\u6392\u9664\uFF0C\u6216\u8005\u8868\u793A\u7A0B\u5E8F\u96C6\u63CF\u8FF0\u7B26\u914D\u7F6E\u4E0D\u6B63\u786E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useStrictFiltering</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E3A\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u4F9D\u8D56\u9879\u8BBE\u7F6E\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u4ECE2.2-beta-2\u5F00\u59CB\uFF1B 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1A$ {artifact.artifactId} - $ {artifact.version} $ {dashClassifier\uFF1F}\u3002$ {artifact.extension}\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4F9D\u8D56\u5173\u7CFB\u5C06\u88AB\u5305\u542B\u4E3A\u6863\u6848\uFF08jar\uFF09\u3002\u53EA\u80FD\u89E3\u538Bjar\uFF0Czip\uFF0Ctar.gz\u548Ctar.bz\u538B\u7F29\u6587\u4EF6\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                        --&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            --&gt;</span>
                            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            --&gt;</span>
                            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--boolean--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                                \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                                \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                                \u201C crlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                            --&gt;</span>
                            <span class="token comment">&lt;!--string--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--boolean--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--string--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E3A\u6B64dependencySet\u8BBE\u7F6E\u4F9D\u8D56\u9879\u8303\u56F4\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5DE5\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectArtifact</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u9644\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectAttachments</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u662F\u5426\u5C06\u4F20\u9012\u4F9D\u8D56\u9879\u5305\u542B\u5728\u5F53\u524D\u4F9D\u8D56\u9879\u96C6\u7684\u5904\u7406\u4E2D\u3002\u5982\u679C\u4E3Atrue\uFF0C\u90A3\u4E48include / excludes / useTransitiveFiltering\u5C06\u5E94\u7528\u4E8E\u4F20\u9012\u4F9D\u8D56\u9879\u6784\u4EF6\u4EE5\u53CA\u4E3B\u9879\u76EE\u4F9D\u8D56\u9879\u6784\u4EF6\u3002
                            \u5982\u679C\u4E3Afalse\uFF0C\u5219useTransitiveFiltering\u65E0\u610F\u4E49\uFF0C\u5E76\u4E14\u5305\u542B/\u6392\u9664\u4EC5\u5F71\u54CD\u9879\u76EE\u7684\u76F4\u63A5\u4F9D\u8D56\u5173\u7CFB\u3002
                            \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u662F\u771F\u7684\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveDependencies</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u6B64\u4F9D\u8D56\u9879\u96C6\u4E2D\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u662F\u5426\u5C06\u5E94\u7528\u4E8E\u7ED9\u5B9A\u5DE5\u4EF6\u7684\u4F20\u9012\u8DEF\u5F84\u3002
                            \u5982\u679C\u4E3A\u771F\uFF0C\u5E76\u4E14\u5F53\u524D\u5DE5\u4EF6\u662F\u7531\u5305\u542B\u6216\u6392\u9664\u6A21\u5F0F\u5339\u914D\u7684\u53E6\u4E00\u4E2A\u5DE5\u4EF6\u5F15\u5165\u7684\u4F20\u9012\u4F9D\u8D56\u6027\uFF0C\u5219\u5F53\u524D\u5DE5\u4EF6\u5177\u6709\u4E0E\u5176\u76F8\u540C\u7684\u5305\u542B/\u6392\u9664\u903B\u8F91\u3002
                            \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6B64\u503C\u4E3Afalse\uFF0C\u4EE5\u4FDD\u6301\u4E0E2.1\u7248\u7684\u5411\u540E\u517C\u5BB9\u6027\u3002\u8FD9\u610F\u5473\u7740\u5305\u542B/\u6392\u9664\u4EC5\u4EC5\u76F4\u63A5\u5E94\u7528\u4E8E\u5F53\u524D\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u5E94\u7528\u4E8E\u4F20\u5165\u7684\u5DE5\u4EF6\u3002\uFF08\u4ECE2.2-beta-1\uFF09
                            \u9ED8\u8BA4\u503C\u4E3A\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveFiltering</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u6A21\u5757\u5305\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u5F53\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u6A21\u5757\u5305\u5C06\u4F5C\u4E3A\u5F52\u6863\uFF08jar\uFF09\u5305\u542B\u5728\u5185\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                        \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--boolean--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                        \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                        \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                        \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                        \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                        \u201C crlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                        \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--boolean--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u975EUNPACKED\u4F9D\u8D56\u5173\u7CFB\u7684\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u7531\u4E8E2.2-beta-2; 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u6CE8\u610F\uFF1A\u5982\u679CdependencySet\u6307\u5B9Aunpack == true\uFF0C\u5219outputFileNameMapping\u5C06\u4E0D\u8981\u4F7F\u7528; \u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528outputDirectory\u3002\u6709\u5173\u53EF\u7528\u4E8EoutputFileNameMapping\u53C2\u6570\u7684\u6761\u76EE\u7684\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u63D2\u4EF6FAQ\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1A$ {module.artifactId} - $ {module.version} $ {dashClassifier\uFF1F}\u3002$ {module.extension}\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>binaries</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>moduleSet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>moduleSets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u6587\u4EF6\u7EC4\u3002fileSet\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;fileSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;FileSet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            fileSet\u5141\u8BB8\u5C06\u6587\u4EF6\u7EC4\u5305\u542B\u5230\u7A0B\u5E8F\u96C6\u4E2D\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u6216\u76F8\u5BF9\u4F4D\u7F6E\u3002\u4F8B\u5982\uFF0C\u201Csrc / main / bin\u201D\u4F1A\u9009\u62E9\u5B9A\u4E49\u8FD9\u4E2A\u4F9D\u8D56\u5173\u7CFB\u7684\u9879\u76EE\u7684\u8FD9\u4E2A\u5B50\u76EE\u5F55\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6B64\u6587\u4EF6\u96C6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\uFF1A
                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u662F\u5426\u5728\u590D\u5236\u6587\u4EF6\u65F6\u8FC7\u6EE4\u7B26\u53F7\uFF0C\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u5355\u4E2A\u6587\u4EF6\u3002\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;file&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u6587\u4EF6\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;FileItem&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>files</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u4E00\u4E2A\u6587\u4EF6\u5141\u8BB8\u5355\u4E2A\u6587\u4EF6\u5305\u542B\u9009\u9879\u6765\u66F4\u6539\u4E0D\u53D7fileSets\u652F\u6301\u7684\u76EE\u6807\u6587\u4EF6\u540D\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u6587\u4EF6\u7684\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5728outputDirectory\u4E2D\u8BBE\u7F6E\u76EE\u6807\u6587\u4EF6\u540D\u3002\u9ED8\u8BA4\u662F\u4E0E\u6E90\u6587\u4EF6\u76F8\u540C\u7684\u540D\u79F0\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>destName</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A\u516B\u5366\u4EF7\u503C\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6B64\u6587\u4EF6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\u662F\uFF1A
                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u662F\u5426\u786E\u5B9A\u6587\u4EF6\u662F\u5426\u88AB\u8FC7\u6EE4\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>files</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--List&lt;DependencySet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u4F9D\u8D56\u5173\u7CFB\u96C6\u5141\u8BB8\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u548C\u6392\u9664\u9879\u76EE\u4F9D\u8D56\u5173\u7CFB\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u6307\u5B9A\u4E3Atrue\uFF0C\u90A3\u4E48\u5728\u7A0B\u5E8F\u96C6\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u4EFB\u4F55\u7528\u4E8E\u8FC7\u6EE4\u5B9E\u9645\u6784\u4EF6\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u90FD\u5C06\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\uFF0C\u5E76\u663E\u793A\u9519\u8BEF\u3002\u8FD9\u662F\u4E3A\u4E86\u5F3A\u8C03\u8FC7\u65F6\u7684\u5305\u542B\u6216\u6392\u9664\uFF0C\u6216\u8005\u8868\u793A\u7A0B\u5E8F\u96C6\u63CF\u8FF0\u7B26\u914D\u7F6E\u4E0D\u6B63\u786E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useStrictFiltering</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E3A\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u4F9D\u8D56\u9879\u8BBE\u7F6E\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u4ECE2.2-beta-2\u5F00\u59CB\uFF1B 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1A$ {artifact.artifactId} - $ {artifact.version} $ {dashClassifier\uFF1F}\u3002$ {artifact.extension}\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4F9D\u8D56\u5173\u7CFB\u5C06\u88AB\u5305\u542B\u4E3A\u6863\u6848\uFF08jar\uFF09\u3002\u53EA\u80FD\u89E3\u538Bjar\uFF0Czip\uFF0Ctar.gz\u548Ctar.bz\u538B\u7F29\u6587\u4EF6\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
            --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                    \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                    \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                    \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                    \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                    \u201Ccrlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E3A\u6B64dependencySet\u8BBE\u7F6E\u4F9D\u8D56\u9879\u8303\u56F4\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5DE5\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectArtifact</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u9644\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectAttachments</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u662F\u5426\u5C06\u4F20\u9012\u4F9D\u8D56\u9879\u5305\u542B\u5728\u5F53\u524D\u4F9D\u8D56\u9879\u96C6\u7684\u5904\u7406\u4E2D\u3002\u5982\u679C\u4E3Atrue\uFF0C\u90A3\u4E48include / excludes / useTransitiveFiltering\u5C06\u5E94\u7528\u4E8E\u4F20\u9012\u4F9D\u8D56\u9879\u6784\u4EF6\u4EE5\u53CA\u4E3B\u9879\u76EE\u4F9D\u8D56\u9879\u6784\u4EF6\u3002
                \u5982\u679C\u4E3Afalse\uFF0C\u5219useTransitiveFiltering\u65E0\u610F\u4E49\uFF0C\u5E76\u4E14\u5305\u542B/\u6392\u9664\u4EC5\u5F71\u54CD\u9879\u76EE\u7684\u76F4\u63A5\u4F9D\u8D56\u5173\u7CFB\u3002
                \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u662F\u771F\u7684\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveDependencies</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u6B64\u4F9D\u8D56\u9879\u96C6\u4E2D\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u662F\u5426\u5C06\u5E94\u7528\u4E8E\u7ED9\u5B9A\u5DE5\u4EF6\u7684\u4F20\u9012\u8DEF\u5F84\u3002
                \u5982\u679C\u4E3A\u771F\uFF0C\u5E76\u4E14\u5F53\u524D\u5DE5\u4EF6\u662F\u7531\u5305\u542B\u6216\u6392\u9664\u6A21\u5F0F\u5339\u914D\u7684\u53E6\u4E00\u4E2A\u5DE5\u4EF6\u5F15\u5165\u7684\u4F20\u9012\u4F9D\u8D56\u6027\uFF0C\u5219\u5F53\u524D\u5DE5\u4EF6\u5177\u6709\u4E0E\u5176\u76F8\u540C\u7684\u5305\u542B/\u6392\u9664\u903B\u8F91\u3002
                \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6B64\u503C\u4E3Afalse\uFF0C\u4EE5\u4FDD\u6301\u4E0E2.1\u7248\u7684\u5411\u540E\u517C\u5BB9\u6027\u3002\u8FD9\u610F\u5473\u7740\u5305\u542B/\u6392\u9664\u4EC5\u4EC5\u76F4\u63A5\u5E94\u7528\u4E8E\u5F53\u524D\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u5E94\u7528\u4E8E\u4F20\u5165\u7684\u5DE5\u4EF6\u3002\uFF08\u4ECE2.2-beta-1\uFF09
                \u9ED8\u8BA4\u503C\u4E3A\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveFiltering</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5B9A\u4E49\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684Maven\u4ED3\u5E93\u3002\u53EF\u7528\u4E8E\u5B58\u50A8\u5E93\u4E2D\u7684\u5DE5\u4EF6\u662F\u9879\u76EE\u7684\u4F9D\u8D56\u5DE5\u4EF6\u3002\u521B\u5EFA\u7684\u5B58\u50A8\u5E93\u5305\u542B\u6240\u9700\u7684\u5143\u6570\u636E\u6761\u76EE\uFF0C\u5E76\u4E14\u8FD8\u5305\u542Bsha1\u548Cmd5\u6821\u9A8C\u548C\u3002\u8FD9\u5BF9\u521B\u5EFA\u5C06\u88AB\u90E8\u7F72\u5230\u5185\u90E8\u5B58\u50A8\u5E93\u7684\u6863\u6848\u5F88\u6709\u7528\u3002
        \u6CE8\u610F\uFF1A\u76EE\u524D\uFF0C\u53EA\u6709\u6765\u81EA\u4E2D\u592E\u5B58\u50A8\u5E93\u7684\u5DE5\u4EF6\u624D\u88AB\u5141\u8BB8\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;Repository&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u5305\u542B\u7684\u9879\u76EE\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u9879\u76EE\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u89E6\u53D1\u521B\u5EFA\u5B58\u50A8\u5E93\u5143\u6570\u636E\uFF0C\u8FD9\u5C06\u5141\u8BB8\u5B58\u50A8\u5E93\u7528\u4F5C\u529F\u80FD\u6027\u8FDC\u7A0B\u5B58\u50A8\u5E93\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeMetadata</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u8981\u5C06\u4E00\u7EC4\u5DE5\u4EF6\u4E0E\u6307\u5B9A\u7684\u7248\u672C\u5BF9\u9F50\u3002groupVersionAlignment\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;groupVersionAlignment&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
                \u5141\u8BB8\u4E00\u7EC4\u5DE5\u4EF6\u4E0E\u6307\u5B9A\u7684\u7248\u672C\u5BF9\u9F50\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;GroupVersionAlignment&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupVersionAlignments</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupVersionAlignment</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u8981\u4E3A\u5176\u5BF9\u9F50\u7248\u672C\u7684\u5DE5\u4EF6\u7684groupId\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u60A8\u60F3\u8981\u5C06\u8BE5\u7EC4\u5BF9\u9F50\u7684\u7248\u672C\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u8981\u6392\u9664\u7684\u6784\u4EF6\u7684artifactIds\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002\u6392\u9664\u662F\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;exclude&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u7684\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupVersionAlignment</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupVersionAlignments</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u6307\u5B9A\u6B64\u5B58\u50A8\u5E93\u4E2D\u5305\u542B\u7684\u5DE5\u4EF6\u7684\u8303\u56F4\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u5171\u4EAB\u7EC4\u4EF6xml\u6587\u4EF6\u4F4D\u7F6E\u3002\u6307\u5B9A\u7684\u4F4D\u7F6E\u5FC5\u987B\u76F8\u5BF9\u4E8E\u63CF\u8FF0\u7B26\u7684\u57FA\u672C\u4F4D\u7F6E\u3002
        \u5982\u679C\u63CF\u8FF0\u7B26\u662F\u901A\u8FC7\u7C7B\u8DEF\u5F84\u4E2D\u7684&lt;descriptorRef /&gt;\u5143\u7D20\u627E\u5230\u7684\uFF0C\u90A3\u4E48\u5B83\u6307\u5B9A\u7684\u4EFB\u4F55\u7EC4\u4EF6\u4E5F\u5C06\u5728\u7C7B\u8DEF\u5F84\u4E2D\u627E\u5230\u3002
        \u5982\u679C\u901A\u8FC7\u8DEF\u5F84\u540D\u901A\u8FC7&lt;descriptor /&gt;\u5143\u7D20\u627E\u5230\uFF0C\u5219\u6B64\u5904\u7684\u503C\u5C06\u88AB\u89E3\u91CA\u4E3A\u76F8\u5BF9\u4E8E\u9879\u76EEbasedir\u7684\u8DEF\u5F84\u3002
        \u5F53\u627E\u5230\u591A\u4E2AcomponentDescriptors\u65F6\uFF0C\u5B83\u4EEC\u7684\u5185\u5BB9\u88AB\u5408\u5E76\u3002\u68C0\u67E5 \u63CF\u8FF0\u7B26\u7EC4\u4EF6 \u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002
        componentDescriptor\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;componentDescriptor&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>componentDescriptors</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>assembly</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>assembly</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/ASSEMBLY/2.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u7684\u6807\u8BC6\u3002\u8FD9\u662F\u6765\u81EA\u6B64\u9879\u76EE\u7684\u7279\u5B9A\u6587\u4EF6\u7EC4\u5408\u7684\u7B26\u53F7\u540D\u79F0\u3002\u6B64\u5916\uFF0C\u9664\u4E86\u7528\u4E8E\u901A\u8FC7\u5C06\u751F\u6210\u7684\u5F52\u6863\u7684\u503C\u9644\u52A0\u5230\u7EC4\u5408\u5305\u4EE5\u660E\u786E\u547D\u540D\u7EC4\u5408\u5305\u4E4B\u5916\uFF0C\u8BE5ID\u5728\u90E8\u7F72\u65F6\u7528\u4F5C\u5DE5\u4EF6\u7684\u5206\u7C7B\u5668\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--string--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        (\u8BB8\u591A\uFF09 \u6307\u5B9A\u7A0B\u5E8F\u96C6\u7684\u683C\u5F0F\u3002\u901A\u8FC7\u76EE\u6807\u53C2\u6570\u800C\u4E0D\u662F\u5728\u8FD9\u91CC\u6307\u5B9A\u683C\u5F0F\u901A\u5E38\u4F1A\u66F4\u597D\u3002\u4F8B\u5982\uFF0C\u5141\u8BB8\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u4E0D\u540C\u7C7B\u578B\u7684\u6863\u6848\u3002
        \u53EF\u4EE5\u63D0\u4F9B\u591A\u79CD\u683C\u5F0F\uFF0C\u88C5\u914D\u4F53\u63D2\u4EF6\u5C06\u751F\u6210\u6BCF\u79CD\u6240\u9700\u683C\u5F0F\u7684\u6863\u6848\u3002\u90E8\u7F72\u9879\u76EE\u65F6\uFF0C\u6240\u6709\u6307\u5B9A\u7684\u6587\u4EF6\u683C\u5F0F\u4E5F\u5C06\u88AB\u90E8\u7F72\u3002
        \u901A\u8FC7\u5728&lt;format&gt;\u5B50\u5143\u7D20\u4E2D\u63D0\u4F9B\u4EE5\u4E0B\u503C\u4E4B\u4E00\u6765\u6307\u5B9A\u683C\u5F0F\uFF1A
        \u201Czip\u201D - \u521B\u5EFA\u4E00\u4E2AZIP\u6587\u4EF6\u683C\u5F0F
        \u201Ctar\u201D - \u521B\u5EFA\u4E00\u4E2ATAR\u683C\u5F0F
        \u201Ctar.gz\u201D\u6216\u201Ctgz\u201D - \u521B\u5EFA\u4E00\u4E2Agzip&#39;d TAR\u683C\u5F0F
        \u201Ctar.bz2\u201D\u6216\u201Ctbz2\u201D - \u521B\u5EFA\u4E00\u4E2Abzip&#39;d TAR\u683C\u5F0F
        \u201Ctar.snappy\u201D - \u521B\u5EFA\u4E00\u4E2A\u7075\u6D3B\u7684TAR\u683C\u5F0F
        \u201Ctar.xz\u201D\u6216\u201Ctxz\u201D - \u521B\u5EFA\u4E00\u4E2Axz&#39;d TAR\u683C\u5F0F
        \u201Cjar\u201D - \u521B\u5EFA\u4E00\u4E2AJAR\u683C\u5F0F
        \u201Cdir\u201D - \u521B\u5EFA\u5206\u89E3\u7684\u76EE\u5F55\u683C\u5F0F
        \u201C\u6218\u4E89\u201D - \u521B\u5EFA\u4E00\u4E2AWAR\u683C\u5F0F
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>formats</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5728\u6700\u7EC8\u5F52\u6863\u4E2D\u5305\u542B\u4E00\u4E2A\u57FA\u672C\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u6B63\u5728\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u201Cyour-app\u201D\u7684\u7A0B\u5E8F\u96C6\uFF0C\u5219\u5C06includeBaseDirectory\u8BBE\u7F6E\u4E3Atrue\u5C06\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u6B64\u57FA\u672C\u76EE\u5F55\u7684\u5F52\u6863\u6587\u4EF6\u3002
        \u5982\u679C\u6B64\u9009\u9879\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5219\u521B\u5EFA\u7684\u5B58\u6863\u5C06\u5176\u5185\u5BB9\u89E3\u538B\u7F29\u5230\u5F53\u524D\u76EE\u5F55\u3002
        \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--boolean--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeBaseDirectory</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u8BBE\u7F6E\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u5F52\u6863\u7684\u57FA\u672C\u76EE\u5F55\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5E76\u4E14includeBaseDirectory == true\uFF0C\u5219\u5C06\u4F7F\u7528$ {project.build.finalName}\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
    --&gt;</span>
    <span class="token comment">&lt;!--string--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baseDirectory</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5728\u6700\u7EC8\u6863\u6848\u4E2D\u5305\u542B\u4E00\u4E2A\u7F51\u7AD9\u76EE\u5F55\u3002\u9879\u76EE\u7684\u7AD9\u70B9\u76EE\u5F55\u4F4D\u7F6E\u7531Assembly Plugin\u7684siteDirectory\u53C2\u6570\u786E\u5B9A\u3002
        \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--boolean--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeSiteDirectory</span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u4ECE\u5E38\u89C4\u5F52\u6863\u6D41\u4E2D\u8FC7\u6EE4\u5404\u79CD\u5BB9\u5668\u63CF\u8FF0\u7B26\u7684\u7EC4\u4EF6\u96C6\u5408\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C06\u5B83\u4EEC\u805A\u5408\u7136\u540E\u6DFB\u52A0\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;ContainerDescriptorHandlerConfig&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerDescriptorHandlers</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u914D\u7F6E\u6587\u4EF6\u5934\u90E8\u7684\u8FC7\u6EE4\u5668\uFF0C\u4EE5\u542F\u7528\u5404\u79CD\u7C7B\u578B\u7684\u63CF\u8FF0\u7B26\u7247\u6BB5\uFF08\u5982components.xml\uFF0Cweb.xml\u7B49\uFF09\u7684\u805A\u5408\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerDescriptorHandler</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5904\u7406\u7A0B\u5E8F\u7684plexus\u89D2\u8272\u63D0\u793A\uFF0C\u7528\u4E8E\u4ECE\u5BB9\u5668\u4E2D\u67E5\u627E\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlerName</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5904\u7406\u7A0B\u5E8F\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--DOM--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerDescriptorHandler</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerDescriptorHandlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u6A21\u5757\u6587\u4EF6\u3002moduleSet\u662F\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;moduleSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u7684\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;ModuleSet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>moduleSets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            moduleSet\u8868\u793A\u4E00\u4E2A\u6216\u591A\u4E2A\u5728\u9879\u76EE\u7684pom.xml\u4E2D\u5B58\u5728\u7684&lt;module&gt;\u9879\u76EE\u3002\u8FD9\u4F7F\u60A8\u53EF\u4EE5\u5305\u542B\u5C5E\u4E8E\u9879\u76EE&lt;modules&gt;\u7684\u6E90\u4EE3\u7801\u6216\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002
            \u6CE8\u610F\uFF1A\u4ECE\u547D\u4EE4\u884C\u4F7F\u7528&lt;moduleSets&gt;\u65F6\uFF0C\u9700\u8981\u5148\u901A\u8FC7\u201Cmvn package assembly\uFF1Aassembly\u201D\u6765\u4F20\u9012\u5305\u9636\u6BB5\u3002\u8FD9\u4E2Abug\u8BA1\u5212\u7531Maven 2.1\u89E3\u51B3\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>moduleSet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u8BE5\u63D2\u4EF6\u5C06\u5305\u542B\u5F53\u524D\u53CD\u5E94\u5806\u4E2D\u7684\u6240\u6709\u9879\u76EE\uFF0C\u4EE5\u4FBF\u5728\u6B64ModuleSet\u4E2D\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u4E9B\u5C06\u88AB \u7EB3\u5165/\u6392\u9664(includes/excludes) \u89C4\u5219\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useAllReactorProjects</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5219\u8BE5\u63D2\u4EF6\u5C06\u4ECE\u8BE5ModuleSet\u4E2D\u6392\u9664\u5B50\u6A21\u5757\u7684\u5904\u7406\u3002\u5426\u5219\uFF0C\u5B83\u5C06\u5904\u7406\u6240\u6709\u5B50\u6A21\u5757\uFF0C\u6BCF\u4E2A\u5B50\u6A21\u5757\u90FD\u8981\u9075\u5B88\u5305\u542B/\u6392\u9664\u89C4\u5219\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeSubModules</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u5305\u542B\u7684\u9879\u76EE\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u9879\u76EE\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5F53\u5B58\u5728\u8FD9\u4E2A\u65F6\uFF0C\u63D2\u4EF6\u5C06\u5728\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u8FD9\u4E2A\u96C6\u5408\u4E2D\u5305\u542B\u7684\u6A21\u5757\u7684\u6E90\u6587\u4EF6\u3002
                \u5305\u542B\u7528\u4E8E\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u9879\u76EE\u6A21\u5757\u7684\u6E90\u6587\u4EF6\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--ModuleSources--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sources</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u6BCF\u4E2A\u5305\u542B\u6A21\u5757\u7684\u54EA\u4E9B\u6587\u4EF6\u7EC4\u3002fileSet\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;fileSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;FileSet&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSets</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        fileSet\u5141\u8BB8\u5C06\u6587\u4EF6\u7EC4\u5305\u542B\u5230\u7A0B\u5E8F\u96C6\u4E2D\u3002
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSet</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u6216\u76F8\u5BF9\u4F4D\u7F6E\u3002\u4F8B\u5982\uFF0C\u201Csrc / main / bin\u201D\u4F1A\u9009\u62E9\u5B9A\u4E49\u8FD9\u4E2A\u4F9D\u8D56\u5173\u7CFB\u7684\u9879\u76EE\u7684\u8FD9\u4E2A\u5B50\u76EE\u5F55\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u8BBE\u7F6E\u6B64\u6587\u4EF6\u96C6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\uFF1A
                            \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                            \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                            \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                            \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                            \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                            \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u662F\u5426\u5728\u590D\u5236\u6587\u4EF6\u65F6\u8FC7\u6EE4\u7B26\u53F7\uFF0C\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSet</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSets</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u6A21\u5757\u7684finalName\u662F\u5426\u5E94\u8BE5\u6DFB\u52A0\u5230\u5E94\u7528\u4E8E\u5B83\u7684\u4EFB\u4F55fileSets\u7684outputDirectory\u503C\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeModuleDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u662F\u5426\u5E94\u4ECE\u5E94\u7528\u4E8E\u8BE5\u6A21\u5757\u7684\u6587\u4EF6\u96C6\u4E2D\u6392\u9664\u5F53\u524D\u6A21\u5757\u4E0B\u65B9\u7684\u5B50\u6A21\u5757\u76EE\u5F55\u3002\u5982\u679C\u4EC5\u4EC5\u610F\u5473\u7740\u590D\u5236\u4E0E\u6B64ModuleSet\u5339\u914D\u7684\u786E\u5207\u6A21\u5757\u5217\u8868\u7684\u6E90\uFF0C\u5FFD\u7565\uFF08\u6216\u5355\u72EC\u5904\u7406\uFF09\u5F53\u524D\u76EE\u5F55\u4E0B\u76EE\u5F55\u4E2D\u5B58\u5728\u7684\u6A21\u5757\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5F88\u6709\u7528\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludeSubModuleDirectories</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u6A21\u5757\u57FA\u672C\u76EE\u5F55\u7684\u6620\u5C04\u6A21\u5F0F\u3002\u6CE8\u610F\uFF1A\u53EA\u6709\u5728includeModuleDirectory == true\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u4F7F\u7528\u6B64\u5B57\u6BB5\u3002
                    \u7F3A\u7701\u503C\u662F\u5728 2.2-beta-1\u4E2D\u662F$ {artifactId}\uFF0C\u4EE5\u53CA\u540E\u7EED\u7248\u672C\u4E2D\u662F$ {module.artifactId}\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1A$ {module.artifactId}\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectoryMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sources</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u5982\u679C\u5B58\u5728\uFF0C\u63D2\u4EF6\u5C06\u5728\u751F\u6210\u7684\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u6765\u81EA\u8BE5\u7EC4\u7684\u6240\u5305\u542B\u6A21\u5757\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002
                    \u5305\u542B\u7528\u4E8E\u5C06\u9879\u76EE\u6A21\u5757\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u914D\u7F6E\u9009\u9879\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--ModuleBinaries--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>binaries</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                    \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                    \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                    \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                    \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u6307\u5B9A\u65F6\uFF0CattachmentClassifier\u5C06\u4F7F\u6C47\u7F16\u5668\u67E5\u770B\u9644\u52A0\u5230\u6A21\u5757\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u662F\u4E3B\u5DE5\u7A0B\u5DE5\u4EF6\u3002\u5982\u679C\u80FD\u591F\u627E\u5230\u4E0E\u6307\u5B9A\u5206\u7C7B\u7B26\u5339\u914D\u7684\u9644\u4EF6\uFF0C\u5219\u4F1A\u4F7F\u7528\u5B83; \u5426\u5219\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attachmentClassifier</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u63D2\u4EF6\u5C06\u5305\u542B\u8FD9\u91CC\u5305\u542B\u7684\u9879\u76EE\u6A21\u5757\u7684\u76F4\u63A5\u548C\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\u3002\u5426\u5219\uFF0C\u5B83\u5C06\u53EA\u5305\u542B\u6A21\u5757\u5305\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeDependencies</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--List&lt;DependencySet&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u4F9D\u8D56\u5173\u7CFB\u96C6\u5141\u8BB8\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u548C\u6392\u9664\u9879\u76EE\u4F9D\u8D56\u5173\u7CFB\u3002
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                            --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                            \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                            \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                            \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                            \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
                        --&gt;</span>
                        <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                            \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5982\u679C\u6307\u5B9A\u4E3Atrue\uFF0C\u90A3\u4E48\u5728\u7A0B\u5E8F\u96C6\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u4EFB\u4F55\u7528\u4E8E\u8FC7\u6EE4\u5B9E\u9645\u6784\u4EF6\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u90FD\u5C06\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\uFF0C\u5E76\u663E\u793A\u9519\u8BEF\u3002\u8FD9\u662F\u4E3A\u4E86\u5F3A\u8C03\u8FC7\u65F6\u7684\u5305\u542B\u6216\u6392\u9664\uFF0C\u6216\u8005\u8868\u793A\u7A0B\u5E8F\u96C6\u63CF\u8FF0\u7B26\u914D\u7F6E\u4E0D\u6B63\u786E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useStrictFiltering</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E3A\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u4F9D\u8D56\u9879\u8BBE\u7F6E\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u4ECE2.2-beta-2\u5F00\u59CB\uFF1B 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1A$ {artifact.artifactId} - $ {artifact.version} $ {dashClassifier\uFF1F}\u3002$ {artifact.extension}\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4F9D\u8D56\u5173\u7CFB\u5C06\u88AB\u5305\u542B\u4E3A\u6863\u6848\uFF08jar\uFF09\u3002\u53EA\u80FD\u89E3\u538Bjar\uFF0Czip\uFF0Ctar.gz\u548Ctar.bz\u538B\u7F29\u6587\u4EF6\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                        --&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            --&gt;</span>
                            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            --&gt;</span>
                            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--boolean--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                                \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                                \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                                \u201C crlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                            --&gt;</span>
                            <span class="token comment">&lt;!--string--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--boolean--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                            <span class="token comment">&lt;!--
                                \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                            --&gt;</span>
                            <span class="token comment">&lt;!--string--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u4E3A\u6B64dependencySet\u8BBE\u7F6E\u4F9D\u8D56\u9879\u8303\u56F4\u3002
                            \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--string--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5DE5\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectArtifact</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u9644\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectAttachments</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u662F\u5426\u5C06\u4F20\u9012\u4F9D\u8D56\u9879\u5305\u542B\u5728\u5F53\u524D\u4F9D\u8D56\u9879\u96C6\u7684\u5904\u7406\u4E2D\u3002\u5982\u679C\u4E3Atrue\uFF0C\u90A3\u4E48include / excludes / useTransitiveFiltering\u5C06\u5E94\u7528\u4E8E\u4F20\u9012\u4F9D\u8D56\u9879\u6784\u4EF6\u4EE5\u53CA\u4E3B\u9879\u76EE\u4F9D\u8D56\u9879\u6784\u4EF6\u3002
                            \u5982\u679C\u4E3Afalse\uFF0C\u5219useTransitiveFiltering\u65E0\u610F\u4E49\uFF0C\u5E76\u4E14\u5305\u542B/\u6392\u9664\u4EC5\u5F71\u54CD\u9879\u76EE\u7684\u76F4\u63A5\u4F9D\u8D56\u5173\u7CFB\u3002
                            \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u662F\u771F\u7684\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                            \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveDependencies</span><span class="token punctuation">/&gt;</span></span>
                        <span class="token comment">&lt;!--
                            \u786E\u5B9A\u6B64\u4F9D\u8D56\u9879\u96C6\u4E2D\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u662F\u5426\u5C06\u5E94\u7528\u4E8E\u7ED9\u5B9A\u5DE5\u4EF6\u7684\u4F20\u9012\u8DEF\u5F84\u3002
                            \u5982\u679C\u4E3A\u771F\uFF0C\u5E76\u4E14\u5F53\u524D\u5DE5\u4EF6\u662F\u7531\u5305\u542B\u6216\u6392\u9664\u6A21\u5F0F\u5339\u914D\u7684\u53E6\u4E00\u4E2A\u5DE5\u4EF6\u5F15\u5165\u7684\u4F20\u9012\u4F9D\u8D56\u6027\uFF0C\u5219\u5F53\u524D\u5DE5\u4EF6\u5177\u6709\u4E0E\u5176\u76F8\u540C\u7684\u5305\u542B/\u6392\u9664\u903B\u8F91\u3002
                            \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6B64\u503C\u4E3Afalse\uFF0C\u4EE5\u4FDD\u6301\u4E0E2.1\u7248\u7684\u5411\u540E\u517C\u5BB9\u6027\u3002\u8FD9\u610F\u5473\u7740\u5305\u542B/\u6392\u9664\u4EC5\u4EC5\u76F4\u63A5\u5E94\u7528\u4E8E\u5F53\u524D\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u5E94\u7528\u4E8E\u4F20\u5165\u7684\u5DE5\u4EF6\u3002\uFF08\u4ECE2.2-beta-1\uFF09
                            \u9ED8\u8BA4\u503C\u4E3A\uFF1Afalse\u3002
                        --&gt;</span>
                        <span class="token comment">&lt;!--boolean--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveFiltering</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u6A21\u5757\u5305\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u5F53\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u6A21\u5757\u5305\u5C06\u4F5C\u4E3A\u5F52\u6863\uFF08jar\uFF09\u5305\u542B\u5728\u5185\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                        \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--boolean--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                        \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                        \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                        \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                        \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                        \u201C crlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                        \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--boolean--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u975EUNPACKED\u4F9D\u8D56\u5173\u7CFB\u7684\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u7531\u4E8E2.2-beta-2; 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u6CE8\u610F\uFF1A\u5982\u679CdependencySet\u6307\u5B9Aunpack == true\uFF0C\u5219outputFileNameMapping\u5C06\u4E0D\u8981\u4F7F\u7528; \u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528outputDirectory\u3002\u6709\u5173\u53EF\u7528\u4E8EoutputFileNameMapping\u53C2\u6570\u7684\u6761\u76EE\u7684\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u63D2\u4EF6FAQ\u3002
                    \u9ED8\u8BA4\u503C\u662F\uFF1A$ {module.artifactId} - $ {module.version} $ {dashClassifier\uFF1F}\u3002$ {module.extension}\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>binaries</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>moduleSet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>moduleSets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u6587\u4EF6\u7EC4\u3002fileSet\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;fileSet&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;FileSet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            fileSet\u5141\u8BB8\u5C06\u6587\u4EF6\u7EC4\u5305\u542B\u5230\u7A0B\u5E8F\u96C6\u4E2D\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileSet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53&lt;include&gt;\u5B50\u5143\u7D20\u5B58\u5728\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u6216\u76F8\u5BF9\u4F4D\u7F6E\u3002\u4F8B\u5982\uFF0C\u201Csrc / main / bin\u201D\u4F1A\u9009\u62E9\u5B9A\u4E49\u8FD9\u4E2A\u4F9D\u8D56\u5173\u7CFB\u7684\u9879\u76EE\u7684\u8FD9\u4E2A\u5B50\u76EE\u5F55\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6B64\u6587\u4EF6\u96C6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\uFF1A
                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u662F\u5426\u5728\u590D\u5236\u6587\u4EF6\u65F6\u8FC7\u6EE4\u7B26\u53F7\uFF0C\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileSets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u54EA\u4E9B\u5355\u4E2A\u6587\u4EF6\u3002\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;file&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u6587\u4EF6\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;FileItem&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>files</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u4E00\u4E2A\u6587\u4EF6\u5141\u8BB8\u5355\u4E2A\u6587\u4EF6\u5305\u542B\u9009\u9879\u6765\u66F4\u6539\u4E0D\u53D7fileSets\u652F\u6301\u7684\u76EE\u6807\u6587\u4EF6\u540D\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u6587\u4EF6\u7684\u6A21\u5757\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201C\u65E5\u5FD7\u201D\u5C06\u628A\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5728outputDirectory\u4E2D\u8BBE\u7F6E\u76EE\u6807\u6587\u4EF6\u540D\u3002\u9ED8\u8BA4\u662F\u4E0E\u6E90\u6587\u4EF6\u76F8\u540C\u7684\u540D\u79F0\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>destName</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A\u516B\u5366\u4EF7\u503C\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u6B64\u6587\u4EF6\u4E2D\u6587\u4EF6\u7684\u884C\u7ED3\u675F\u7B26\u3002\u6709\u6548\u503C\u662F\uFF1A
                \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Clf\u201D - \u4F7F\u7528\u4E00\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26\uFF08\u5373\u201C\\ n\u201D\uFF09
                \u201Cdos\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Cwindows\u201D - \u4F7F\u7528DOS / Windows\u98CE\u683C\u7684\u884C\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
                \u201Ccrlf\u201D - \u4F7F\u7528\u56DE\u8F66\uFF0C\u6362\u884C\u7B26\u7ED3\u5C3E\uFF08\u5373\u201C\\ r \\ n\u201D\uFF09
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u662F\u5426\u786E\u5B9A\u6587\u4EF6\u662F\u5426\u88AB\u8FC7\u6EE4\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>files</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--List&lt;DependencySet&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
            \u4F9D\u8D56\u5173\u7CFB\u96C6\u5141\u8BB8\u5728\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u548C\u6392\u9664\u9879\u76EE\u4F9D\u8D56\u5173\u7CFB\u3002
        --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
                --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u5305\u542B\u7684\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u4F9D\u8D56\u9879\u5DE5\u4EF6\u5750\u6807\u4EE5\u6392\u9664\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u6307\u5B9A\u4E3Atrue\uFF0C\u90A3\u4E48\u5728\u7A0B\u5E8F\u96C6\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u4EFB\u4F55\u7528\u4E8E\u8FC7\u6EE4\u5B9E\u9645\u6784\u4EF6\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u90FD\u5C06\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\uFF0C\u5E76\u663E\u793A\u9519\u8BEF\u3002\u8FD9\u662F\u4E3A\u4E86\u5F3A\u8C03\u8FC7\u65F6\u7684\u5305\u542B\u6216\u6392\u9664\uFF0C\u6216\u8005\u8868\u793A\u7A0B\u5E8F\u96C6\u63CF\u8FF0\u7B26\u914D\u7F6E\u4E0D\u6B63\u786E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useStrictFiltering</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E3A\u6B64\u7A0B\u5E8F\u96C6\u4E2D\u5305\u542B\u7684\u6240\u6709\u4F9D\u8D56\u9879\u8BBE\u7F6E\u6620\u5C04\u6A21\u5F0F\u3002\uFF08\u4ECE2.2-beta-2\u5F00\u59CB\uFF1B 2.2-beta-1\u4F7F\u7528$ {artifactId} - $ {version} $ {dashClassifier\uFF1F}\u3002$ {extension}\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF09\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1A$ {artifact.artifactId} - $ {artifact.version} $ {dashClassifier\uFF1F}\u3002$ {artifact.extension}\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputFileNameMapping</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u89E3\u5305\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4F9D\u8D56\u5173\u7CFB\u5C06\u88AB\u5305\u542B\u4E3A\u6863\u6848\uFF08jar\uFF09\u3002\u53EA\u80FD\u89E3\u538Bjar\uFF0Czip\uFF0Ctar.gz\u548Ctar.bz\u538B\u7F29\u6587\u4EF6\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpack</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5141\u8BB8\u6307\u5B9A\u5305\u542B\u548C\u6392\u9664\u4EE5\u53CA\u8FC7\u6EE4\u9009\u9879\uFF0C\u4EE5\u6307\u5B9A\u4ECE\u76F8\u5173\u6027\u5DE5\u4EF6\u89E3\u538B\u7F29\u7684\u9879\u76EE\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
            --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u5C06\u5728\u89E3\u538B\u7F29\u65F6\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u9879\u76EE\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;include&gt; some / path &lt;/ include&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \uFF08\u8BB8\u591A\uFF09 \u7528\u4E8E\u5339\u914D\u9879\u76EE\u7684\u6587\u4EF6\u548C/\u6216\u76EE\u5F55\u6A21\u5F0F\u7684\u96C6\u5408\uFF0C\u5728\u89E3\u538B\u7F29\u65F6\u5C06\u5176\u4ECE\u5F52\u6863\u6587\u4EF6\u4E2D\u6392\u9664\u3002\u6BCF\u4E2A\u9879\u76EE\u88AB\u6307\u5B9A\u4E3A&lt;exclude&gt; some / path &lt;/ exclude&gt;\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                --&gt;</span>
                <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u662F\u5426\u4F7F\u7528\u6784\u5EFA\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\u8FC7\u6EE4\u4ECE\u6863\u6848\u4E2D\u89E3\u538B\u7F29\u7684\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtered</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u8BBE\u7F6E\u6587\u4EF6\u7684\u884C\u5C3E\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09\u6709\u6548\u503C\uFF1A
                    \u201Ckeep\u201D - \u4FDD\u7559\u6240\u6709\u7684\u884C\u7ED3\u675F
                    \u201Cunix\u201D - \u4F7F\u7528Unix\u98CE\u683C\u7684\u884C\u7ED3\u5C3E
                    \u201Clf\u201D - \u4F7F\u7528\u5355\u4E2A\u6362\u884C\u7B26\u7ED3\u675F\u7B26
                    \u201Cdos\u201D - \u4F7F\u7528DOS\u98CE\u683C\u7684\u884C\u5C3E
                    \u201Ccrlf \u201D - \u4F7F\u7528Carraige\u8FD4\u56DE\uFF0C\u6362\u884C\u7B26\u7ED3\u675F
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lineEnding</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5728\u8BA1\u7B97\u53D7\u8BE5\u96C6\u5408\u5F71\u54CD\u7684\u6587\u4EF6\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u6807\u51C6\u6392\u9664\u6A21\u5F0F\uFF0C\u4F8B\u5982\u90A3\u4E9B\u5339\u914DCVS\u548CSubversion\u5143\u6570\u636E\u6587\u4EF6\u7684\u6392\u9664\u6A21\u5F0F\u3002\u4E3A\u4E86\u5411\u540E\u517C\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\u3002\uFF08\u4ECE2.2\u5F00\u59CB\uFF09
                    \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--boolean--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultExcludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--
                    \u5141\u8BB8\u6307\u5B9A\u89E3\u538B\u6863\u6848\u65F6\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u652F\u6301\u6307\u5B9A\u7F16\u7801\u7684unarchiver\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u5F52\u6863\u7A0B\u5E8F\u9ED8\u8BA4\u503C\u3002Archiver\u9ED8\u8BA4\u503C\u901A\u5E38\u4EE3\u8868\u7406\u667A\uFF08modern\uFF09\u7684values\u3002
                --&gt;</span>
                <span class="token comment">&lt;!--string--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unpackOptions</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E3A\u6B64dependencySet\u8BBE\u7F6E\u4F9D\u8D56\u9879\u8303\u56F4\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5DE5\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectArtifact</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u5F53\u524D\u9879\u76EE\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u9644\u4EF6\u662F\u5426\u5E94\u8BE5\u5305\u542B\u5728\u8FD9\u4E2A\u4F9D\u8D56\u96C6\u4E2D\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useProjectAttachments</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u662F\u5426\u5C06\u4F20\u9012\u4F9D\u8D56\u9879\u5305\u542B\u5728\u5F53\u524D\u4F9D\u8D56\u9879\u96C6\u7684\u5904\u7406\u4E2D\u3002\u5982\u679C\u4E3Atrue\uFF0C\u90A3\u4E48include / excludes / useTransitiveFiltering\u5C06\u5E94\u7528\u4E8E\u4F20\u9012\u4F9D\u8D56\u9879\u6784\u4EF6\u4EE5\u53CA\u4E3B\u9879\u76EE\u4F9D\u8D56\u9879\u6784\u4EF6\u3002
                \u5982\u679C\u4E3Afalse\uFF0C\u5219useTransitiveFiltering\u65E0\u610F\u4E49\uFF0C\u5E76\u4E14\u5305\u542B/\u6392\u9664\u4EC5\u5F71\u54CD\u9879\u76EE\u7684\u76F4\u63A5\u4F9D\u8D56\u5173\u7CFB\u3002
                \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u662F\u771F\u7684\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Atrue\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveDependencies</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u786E\u5B9A\u6B64\u4F9D\u8D56\u9879\u96C6\u4E2D\u7684\u5305\u542B/\u6392\u9664\u6A21\u5F0F\u662F\u5426\u5C06\u5E94\u7528\u4E8E\u7ED9\u5B9A\u5DE5\u4EF6\u7684\u4F20\u9012\u8DEF\u5F84\u3002
                \u5982\u679C\u4E3A\u771F\uFF0C\u5E76\u4E14\u5F53\u524D\u5DE5\u4EF6\u662F\u7531\u5305\u542B\u6216\u6392\u9664\u6A21\u5F0F\u5339\u914D\u7684\u53E6\u4E00\u4E2A\u5DE5\u4EF6\u5F15\u5165\u7684\u4F20\u9012\u4F9D\u8D56\u6027\uFF0C\u5219\u5F53\u524D\u5DE5\u4EF6\u5177\u6709\u4E0E\u5176\u76F8\u540C\u7684\u5305\u542B/\u6392\u9664\u903B\u8F91\u3002
                \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6B64\u503C\u4E3Afalse\uFF0C\u4EE5\u4FDD\u6301\u4E0E2.1\u7248\u7684\u5411\u540E\u517C\u5BB9\u6027\u3002\u8FD9\u610F\u5473\u7740\u5305\u542B/\u6392\u9664\u4EC5\u4EC5\u76F4\u63A5\u5E94\u7528\u4E8E\u5F53\u524D\u7684\u5DE5\u4EF6\uFF0C\u800C\u4E0D\u5E94\u7528\u4E8E\u4F20\u5165\u7684\u5DE5\u4EF6\u3002\uFF08\u4ECE2.2-beta-1\uFF09
                \u9ED8\u8BA4\u503C\u4E3A\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useTransitiveFiltering</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencySets</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \u5B9A\u4E49\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684Maven\u4ED3\u5E93\u3002\u53EF\u7528\u4E8E\u5B58\u50A8\u5E93\u4E2D\u7684\u5DE5\u4EF6\u662F\u9879\u76EE\u7684\u4F9D\u8D56\u5DE5\u4EF6\u3002\u521B\u5EFA\u7684\u5B58\u50A8\u5E93\u5305\u542B\u6240\u9700\u7684\u5143\u6570\u636E\u6761\u76EE\uFF0C\u5E76\u4E14\u8FD8\u5305\u542Bsha1\u548Cmd5\u6821\u9A8C\u548C\u3002\u8FD9\u5BF9\u521B\u5EFA\u5C06\u88AB\u90E8\u7F72\u5230\u5185\u90E8\u5B58\u50A8\u5E93\u7684\u6863\u6848\u5F88\u6709\u7528\u3002
        \u6CE8\u610F\uFF1A\u76EE\u524D\uFF0C\u53EA\u6709\u6765\u81EA\u4E2D\u592E\u5B58\u50A8\u5E93\u7684\u5DE5\u4EF6\u624D\u88AB\u5141\u8BB8\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;Repository&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55\u76F8\u5BF9\u4E8E\u7A0B\u5E8F\u96C6\u6839\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u201Clog\u201D\u4F1A\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u653E\u5728\u5F52\u6863\u6839\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u76EE\u5F55\u4E2D\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;include&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u5305\u542B\u7684\u9879\u76EE\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;includes&gt;\u8868\u793A\u6240\u6709\u6709\u6548\u503C\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u4E00\u7EC4\u8981\u6392\u9664\u7684\u9879\u76EE\u5DE5\u4EF6\u5750\u6807\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002
                \u5DE5\u4EF6\u5750\u6807\u53EF\u4EE5\u4EE5\u7B80\u5355\u7684groupId\uFF1AartifactId\u5F62\u5F0F\u7ED9\u51FA\uFF0C\u6216\u8005\u53EF\u4EE5\u4EE5groupId\uFF1AartifactId\uFF1Atype [\uFF1Aclassifier]\uFF1Aversion\u7684\u5F62\u5F0F\u5B8C\u5168\u9650\u5B9A\u3002
                \u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5982*\uFF1Amaven- *
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                    \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u6240\u5305\u542B\u6587\u4EF6\u7684\u6587\u4EF6\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09\u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                    \u4F8B\u5982\uFF0C\u503C0644\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0C\u7EC4\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0644
                --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u4E0EUNIX\u6743\u9650\u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u5305\u542B\u7684\u76EE\u5F55\u7684\u76EE\u5F55\u6A21\u5F0F\u3002\u8FD9\u662F\u4E00\u4E2A OCTAL VALUE\u3002\u683C\u5F0F\uFF1A\uFF08\u7528\u6237\uFF09\uFF08\u7EC4\uFF09\uFF08\u5176\u4ED6\uFF09[Format: (User)(Group)(Other) ] \u5176\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u662FRead = 4\uFF0CWrite = 2\u548CExecute = 1\u7684\u603B\u548C\u3002
                \u4F8B\u5982\uFF0C\u503C0755\u8F6C\u6362\u4E3A\u7528\u6237\u8BFB\u5199\uFF0CGroup\u548C\u5176\u4ED6\u53EA\u8BFB\u3002\u9ED8\u8BA4\u503C\u662F0755.
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directoryMode</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u6B64\u5C5E\u6027\u5C06\u89E6\u53D1\u521B\u5EFA\u5B58\u50A8\u5E93\u5143\u6570\u636E\uFF0C\u8FD9\u5C06\u5141\u8BB8\u5B58\u50A8\u5E93\u7528\u4F5C\u529F\u80FD\u6027\u8FDC\u7A0B\u5B58\u50A8\u5E93\u3002
                \u9ED8\u8BA4\u503C\u662F\uFF1Afalse\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--boolean--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeMetadata</span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!--
                \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u8981\u5C06\u4E00\u7EC4\u5DE5\u4EF6\u4E0E\u6307\u5B9A\u7684\u7248\u672C\u5BF9\u9F50\u3002groupVersionAlignment\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;groupVersionAlignment&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
                \u5141\u8BB8\u4E00\u7EC4\u5DE5\u4EF6\u4E0E\u6307\u5B9A\u7684\u7248\u672C\u5BF9\u9F50\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--List&lt;GroupVersionAlignment&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupVersionAlignments</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupVersionAlignment</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u8981\u4E3A\u5176\u5BF9\u9F50\u7248\u672C\u7684\u5DE5\u4EF6\u7684groupId\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \u60A8\u60F3\u8981\u5C06\u8BE5\u7EC4\u5BF9\u9F50\u7684\u7248\u672C\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--string--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">/&gt;</span></span>
                    <span class="token comment">&lt;!--
                        \uFF08\u8BB8\u591A\uFF09 \u5F53\u5B58\u5728&lt;exclude&gt;\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u4EEC\u5B9A\u4E49\u8981\u6392\u9664\u7684\u6784\u4EF6\u7684artifactIds\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219&lt;excludes&gt;\u4E0D\u8868\u793A\u6392\u9664\u3002\u6392\u9664\u662F\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;exclude&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u7684\u3002
                    --&gt;</span>
                    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupVersionAlignment</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupVersionAlignments</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
                \u6307\u5B9A\u6B64\u5B58\u50A8\u5E93\u4E2D\u5305\u542B\u7684\u5DE5\u4EF6\u7684\u8303\u56F4\u3002\uFF08\u4ECE2.2-beta-1\u5F00\u59CB\uFF09
                \u9ED8\u8BA4\u503C\u662F\uFF1Aruntime\u3002
            --&gt;</span>
            <span class="token comment">&lt;!--string--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        \uFF08\u8BB8\u591A\uFF09 \u6307\u5B9A\u8981\u5305\u542B\u5728\u7A0B\u5E8F\u96C6\u4E2D\u7684\u5171\u4EAB\u7EC4\u4EF6xml\u6587\u4EF6\u4F4D\u7F6E\u3002\u6307\u5B9A\u7684\u4F4D\u7F6E\u5FC5\u987B\u76F8\u5BF9\u4E8E\u63CF\u8FF0\u7B26\u7684\u57FA\u672C\u4F4D\u7F6E\u3002
        \u5982\u679C\u63CF\u8FF0\u7B26\u662F\u901A\u8FC7\u7C7B\u8DEF\u5F84\u4E2D\u7684&lt;descriptorRef /&gt;\u5143\u7D20\u627E\u5230\u7684\uFF0C\u90A3\u4E48\u5B83\u6307\u5B9A\u7684\u4EFB\u4F55\u7EC4\u4EF6\u4E5F\u5C06\u5728\u7C7B\u8DEF\u5F84\u4E2D\u627E\u5230\u3002
        \u5982\u679C\u901A\u8FC7\u8DEF\u5F84\u540D\u901A\u8FC7&lt;descriptor /&gt;\u5143\u7D20\u627E\u5230\uFF0C\u5219\u6B64\u5904\u7684\u503C\u5C06\u88AB\u89E3\u91CA\u4E3A\u76F8\u5BF9\u4E8E\u9879\u76EEbasedir\u7684\u8DEF\u5F84\u3002
        \u5F53\u627E\u5230\u591A\u4E2AcomponentDescriptors\u65F6\uFF0C\u5B83\u4EEC\u7684\u5185\u5BB9\u88AB\u5408\u5E76\u3002\u68C0\u67E5 \u63CF\u8FF0\u7B26\u7EC4\u4EF6 \u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002
        componentDescriptor\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A&lt;componentDescriptor&gt;\u5B50\u5143\u7D20\u6765\u6307\u5B9A\u3002
    --&gt;</span>
    <span class="token comment">&lt;!--List&lt;String&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>componentDescriptors</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>assembly</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function c(p,d){return s(),a("div",null,i)}var v=n(e,[["render",c],["__file","MavenAssembly\u914D\u7F6E\u8BE6\u7EC6\u89E3\u91CA.html.vue"]]);export{v as default};
