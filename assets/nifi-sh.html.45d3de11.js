import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,d as e}from"./app.0a7c44f6.js";const t={},p=e(`<p>\u6574\u4E2A\u811A\u672C\u5206\u4E3A\u4E09\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u662F\u786E\u5B9ANIFI\u5404\u4E2A\u8DEF\u5F84 \u76EE\u5F55\u7684\u786E\u5B9A\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7B2C\u4E8C\u90E8\u5206\u662F\u65B9\u6CD5\u533A\u3002\u7B2C\u4E09\u90E8\u5206\u662F\u811A\u672C\u903B\u8F91\u4EE3\u7801\u7684\u5165\u53E3\uFF0C\u521D\u7565\u7684\u6839\u636E\u4F20\u53C2\u4E0D\u540C\u533A\u6267\u884C\u4E0D\u540C\u7684\u65B9\u6CD5\u3002\u4EE5\u4E0B\u811A\u672C\u6709\u8BE6\u7EC6\u6CE8\u91CA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># ==========================</span>
<span class="token comment"># 1\u3001\u67E5\u627E\u6587\u4EF6\u7684\u8DEF\u5F84 start</span>
<span class="token comment"># ==========================</span>

<span class="token comment"># \u7531\u4E8EMacOS X\u3001FreeBSD\u548C\u5176\u4ED6\u4E00\u4E9B\u7CFB\u7EDF\u7F3A\u5C11gnu readlink\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u57FA\u4E8E\u4EE5\u4E0BStackOverflow\u6CE8\u91CAhttp://stackoverflow.com/a/1116890/888876\u7684\u66F4\u53EF\u79FB\u690D\u7684\u65B9\u6CD5</span>

<span class="token comment">## \u7279\u6B8A\u53D8\u91CF \u5F53\u524D\u811A\u672C\u7684\u6587\u4EF6\u540D</span>
<span class="token assign-left variable">TARGET_FILE</span><span class="token operator">=</span><span class="token variable">$0</span>
<span class="token comment">#\u8DF3\u8F6C\u5230\u5F53\u524D\u811A\u672C\u6240\u5728\u7684\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $TARGET_FILE<span class="token variable">)</span></span>
<span class="token comment">## TARGET_FILE=nifi.sh</span>
<span class="token assign-left variable">TARGET_FILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $TARGET_FILE<span class="token variable">)</span></span>

<span class="token comment">## \u904D\u5386(\u53EF\u80FD\u7684)\u7B26\u53F7\u94FE\u63A5\u94FE   -L filename\uFF0C\u5224\u65AD\u6587\u4EF6\u662F\u5426\u95EE\u94FE\u63A5\u6587\u4EF6</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> -L <span class="token string">&quot;<span class="token variable">$TARGET_FILE</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">TARGET_FILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>readlink $TARGET_FILE<span class="token variable">)</span></span>
    <span class="token builtin class-name">cd</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $TARGET_FILE<span class="token variable">)</span></span>
    <span class="token assign-left variable">TARGET_FILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $TARGET_FILE<span class="token variable">)</span></span>
<span class="token keyword">done</span>


<span class="token comment"># pwd -P  \u663E\u793A\u51FA\u5B9E\u9645\u8DEF\u5F84\uFF0C\u800C\u975E\u4F7F\u7528\u8FDE\u63A5\uFF08link\uFF09\u8DEF\u5F84\u3002</span>
<span class="token assign-left variable">PHYS_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span> -P<span class="token variable">)</span></span>
<span class="token comment"># \u811A\u672C\u6240\u5728\u76EE\u5F55</span>
<span class="token assign-left variable">SCRIPT_DIR</span><span class="token operator">=</span><span class="token variable">$PHYS_DIR</span>
<span class="token assign-left variable">PROGNAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>
<span class="token comment"># ==========================</span>
<span class="token comment"># \u67E5\u627E\u6587\u4EF6\u7684\u8DEF\u5F84 end</span>
<span class="token comment"># ==========================</span>

<span class="token comment"># \u6267\u884Cnifi-env.sh  \u8BBE\u7F6E\u4E86NIFI\u7684\u76EE\u5F55\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable">\${SCRIPT_DIR}</span>/nifi-env.sh&quot;</span>

<span class="token comment"># ==========================</span>
<span class="token comment">#/2\u3001\u65B9\u6CD5\u533A start</span>
<span class="token comment"># ==========================</span>

<span class="token function-name function">warn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PROGNAME}</span>: <span class="token variable">$*</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">die</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    warn <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u68C0\u6D4B\u7279\u6B8A\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7136\u540E\u505A\u4E00\u4E9B\u7279\u6B8A\u64CD\u4F5C</span>
<span class="token function-name function">detectOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># Cygwin\u662F\u4E00\u4E2A\u5728windows\u5E73\u53F0\u4E0A\u8FD0\u884C\u7684\u7C7BUNIX\u6A21\u62DF\u73AF\u5883</span>
    <span class="token assign-left variable">cygwin</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
    <span class="token comment"># AIX\uFF0C\u662FIBM\u4E13\u6709\u7684UNIX\u64CD\u4F5C\u7CFB\u7EDF</span>
    <span class="token assign-left variable">aix</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
    <span class="token comment"># AS400\u662FIBM\u65E9\u671F\u63A8\u51FA\u7684\u5546\u7528\u5C0F\u578B\u673A</span>
    <span class="token assign-left variable">os400</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
    <span class="token comment"># Darwin\u662F\u7531\u82F9\u679C\u7535\u8111\u4E8E2000\u5E74\u6240\u91CA\u51FA\u7684\u4E00\u4E2A\u5F00\u653E\u539F\u59CB\u7801\u64CD\u4F5C\u7CFB\u7EDF</span>
    <span class="token assign-left variable">darwin</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span><span class="token variable">)</span></span>&quot;</span> <span class="token keyword">in</span>
        CYGWIN*<span class="token punctuation">)</span>
            <span class="token assign-left variable">cygwin</span><span class="token operator">=</span>true
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        AIX*<span class="token punctuation">)</span>
            <span class="token assign-left variable">aix</span><span class="token operator">=</span>true
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        OS400*<span class="token punctuation">)</span>
            <span class="token assign-left variable">os400</span><span class="token operator">=</span>true
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        Darwin<span class="token punctuation">)</span>
            <span class="token assign-left variable">darwin</span><span class="token operator">=</span>true
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token comment"># For AIX, set an environment variable</span>
    <span class="token keyword">if</span> <span class="token variable">\${aix}</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token builtin class-name">export</span> <span class="token assign-left variable">LDR_CNTRL</span><span class="token operator">=</span>MAXDATA<span class="token operator">=</span>0xB0000000@DSA
         <span class="token builtin class-name">echo</span> <span class="token variable">\${LDR_CNTRL}</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># In addition to those, go around the linux space and query the widely</span>
    <span class="token comment"># adopted /etc/os-release to detect linux variants</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -f /etc/os-release <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> /etc/os-release
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">unlimitFD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># Use the maximum available, or set MAX_FD != -1 to use that</span>
    <span class="token comment"># \u5224\u65AD \${MAX_FD}\u6709\u6CA1\u6709\u88AB\u8D4B\u503C \u6761\u4EF6\u6210\u7ACB\u5219\u6CA1\u6709\u8D4B\u503C</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${MAX_FD}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">MAX_FD</span><span class="token operator">=</span><span class="token string">&quot;maximum&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token comment"># \u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u63D0\u5347\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6700\u5927\u6570\u91CF</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${os400}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;false&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${cygwin}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;false&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">MAX_FD_LIMIT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">ulimit</span> -H -n<span class="token variable">)</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${MAX_FD_LIMIT}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;unlimited&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${MAX_FD}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;maximum&quot;</span> -o <span class="token string">&quot;<span class="token variable">\${MAX_FD}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;max&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                    <span class="token comment"># use the system max</span>
                    <span class="token assign-left variable">MAX_FD</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${MAX_FD_LIMIT}</span>&quot;</span>
                <span class="token keyword">fi</span>

                <span class="token builtin class-name">ulimit</span> -n <span class="token variable">\${MAX_FD}</span> <span class="token operator">&gt;</span> /dev/null
                <span class="token comment"># echo &quot;ulimit -n&quot; \`ulimit -n\`</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                    warn <span class="token string">&quot;Could not set maximum file descriptor limit: <span class="token variable">\${MAX_FD}</span>&quot;</span>
                <span class="token keyword">fi</span>
            <span class="token keyword">else</span>
                warn <span class="token string">&quot;Could not query system maximum file descriptor limit: <span class="token variable">\${MAX_FD_LIMIT}</span>&quot;</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment"># \u627E\u5230\u8981\u6267\u884C\u7684JVM</span>
<span class="token function-name function">locateJava</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u8BBE\u7F6EJava\u865A\u62DF\u673A</span>
    <span class="token keyword">if</span> <span class="token variable">$cygwin</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${JAVA}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">JAVA</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --unix <span class="token string">&quot;<span class="token variable">\${JAVA}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --unix <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span><span class="token variable">)</span></span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${JAVA}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> -r /etc/gentoo-release <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>java-config --jre-home<span class="token variable">)</span></span>
    <span class="token keyword">fi</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${JAVA}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${JAVA_HOME}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                die <span class="token string">&quot;JAVA_HOME is not valid: <span class="token variable">\${JAVA_HOME}</span>&quot;</span>
            <span class="token keyword">fi</span>
            <span class="token assign-left variable">JAVA</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>/bin/java&quot;</span>
        <span class="token keyword">else</span>
            warn <span class="token string">&quot;JAVA_HOME not set; results may vary&quot;</span>
            <span class="token assign-left variable">JAVA</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">type</span> java<span class="token variable">)</span></span>
            <span class="token assign-left variable">JAVA</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">\${JAVA}</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;.* \\(/.*\\)$&#39;</span><span class="token variable">)</span></span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${JAVA}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                die <span class="token string">&quot;java command not found&quot;</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># \u5982\u679C\u547D\u4EE4\u662F env, tools.jar classes.jar\u4E5F\u52A0\u5230 classpath</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;env&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${TOOLS_JAR}</span>&quot;</span> <span class="token operator">=</span>  <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">TOOLS_JAR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> -H <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> -name <span class="token string">&quot;tools.jar&quot;</span><span class="token variable">)</span></span>
        <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${TOOLS_JAR}</span>&quot;</span> <span class="token operator">=</span>  <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">TOOLS_JAR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> -H <span class="token string">&quot;<span class="token variable">\${JAVA_HOME}</span>&quot;</span> -name <span class="token string">&quot;classes.jar&quot;</span><span class="token variable">)</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">\${TOOLS_JAR}</span>&quot;</span> <span class="token operator">=</span>  <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
             warn <span class="token string">&quot;Could not locate tools.jar or classes.jar. Please set manually to avail all command features.&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>

<span class="token punctuation">}</span>
<span class="token comment"># \u521D\u59CB\u5316 </span>
<span class="token function-name function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u786E\u5B9A\u662F\u5426\u9700\u8981\u6267\u884C\u7279\u6B8A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5904\u7406</span>
    detectOS

    <span class="token comment"># \u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u4E0D\u9650\u5236\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6570\u91CF</span>
    unlimitFD

    <span class="token comment"># \u627E\u5230\u8981\u6267\u884C\u7684JVM</span>
    locateJava <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u5C06nifi\u5B89\u88C5\u4E3Aservice</span>
<span class="token function-name function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    detectOS

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${darwin}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span>  <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${cygwin}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;Installing Apache NiFi as a service is not supported on OS X or Cygwin.&#39;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>

    <span class="token assign-left variable">SVC_NAME</span><span class="token operator">=</span>nifi
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">$2</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">SVC_NAME</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token keyword">fi</span>

    <span class="token comment"># since systemd seems to honour /etc/init.d we don&#39;t still create native systemd services</span>
    <span class="token comment"># yet...</span>
    <span class="token assign-left variable">initd_dir</span><span class="token operator">=</span><span class="token string">&#39;/etc/init.d&#39;</span>
    <span class="token assign-left variable">SVC_FILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${initd_dir}</span>/<span class="token variable">\${SVC_NAME}</span>&quot;</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -w  <span class="token string">&quot;<span class="token variable">\${initd_dir}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Current user does not have write permissions to <span class="token variable">\${initd_dir}</span>. Cannot install NiFi as a service.&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>

<span class="token comment"># Create the init script, overwriting anything currently present</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">SERVICEDESCRIPTOR<span class="token bash punctuation"> <span class="token operator">&gt;</span> <span class="token variable">\${SVC_FILE}</span></span>
#!/bin/sh

#
#    Licensed to the Apache Software Foundation (ASF) under one or more
#    contributor license agreements.  See the NOTICE file distributed with
#    this work for additional information regarding copyright ownership.
#    The ASF licenses this file to You under the Apache License, Version 2.0
#    (the &quot;License&quot;); you may not use this file except in compliance with
#    the License.  You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.
#
# chkconfig: 2345 20 80
# description: Apache NiFi is a dataflow system based on the principles of Flow-Based Programming.
#

# Make use of the configured NIFI_HOME directory and pass service requests to the nifi.sh executable
NIFI_HOME=<span class="token variable">\${NIFI_HOME}</span>
bin_dir=\\<span class="token variable">\${NIFI_HOME}</span>/bin
nifi_executable=\\<span class="token variable">\${bin_dir}</span>/nifi.sh

\\<span class="token variable">\${nifi_executable}</span> &quot;\\<span class="token variable">$@</span>&quot;
SERVICEDESCRIPTOR</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token string">&quot;<span class="token variable">\${SVC_FILE}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not create service file <span class="token variable">\${SVC_FILE}</span>&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>

    <span class="token comment"># Provide the user execute access on the file</span>
    <span class="token function">chmod</span> u+x <span class="token variable">\${SVC_FILE}</span>


    <span class="token comment"># If SLES or OpenSuse...</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${ID}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;opensuse&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${ID}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;sles&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">rm</span> -f <span class="token string">&quot;/etc/rc.d/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span>
        <span class="token function">ln</span> -s <span class="token string">&quot;/etc/init.d/<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token string">&quot;/etc/rc.d/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not create link /etc/rc.d/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token function">rm</span> -f <span class="token string">&quot;/etc/rc.d/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span>
        <span class="token function">ln</span> -s <span class="token string">&quot;/etc/init.d/<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token string">&quot;/etc/rc.d/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not create link /etc/rc.d/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${SVC_NAME}</span> installed&quot;</span>
    <span class="token comment"># Anything other fallback to the old approach</span>
    <span class="token keyword">else</span>
        <span class="token function">rm</span> -f <span class="token string">&quot;/etc/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span>
        <span class="token function">ln</span> -s <span class="token string">&quot;/etc/init.d/<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token string">&quot;/etc/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not create link /etc/rc2.d/S65<span class="token variable">\${SVC_NAME}</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token function">rm</span> -f <span class="token string">&quot;/etc/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span>
        <span class="token function">ln</span> -s <span class="token string">&quot;/etc/init.d/<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token string">&quot;/etc/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not create link /etc/rc2.d/K65<span class="token variable">\${SVC_NAME}</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${SVC_NAME}</span> installed&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">BOOTSTRAP_CONF_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${NIFI_HOME}</span>/conf&quot;</span>
    <span class="token assign-left variable">BOOTSTRAP_CONF</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF_DIR}</span>/bootstrap.conf&quot;</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">BOOTSTRAP_LIBS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${NIFI_HOME}</span>/lib/bootstrap/*&quot;</span>

    <span class="token comment"># \u8FD0\u884CNiFi\u65F6\u4F7F\u7528\u7684\u7528\u6237\u540D\u3002\u6B64\u503C\u5C06\u5728Windows\u4E0A\u88AB\u5FFD\u7565\u3002\u5728bootstrap.conf\u4E2D run.as= \u914D\u7F6E</span>
    <span class="token assign-left variable">run_as_user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&#39;^\\s*run.as&#39;</span> <span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF}</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39;=&#39;</span> -f2<span class="token variable">)</span></span>
    <span class="token comment"># \u5982\u679C\u4EE5\u7528\u6237\u8EAB\u4EFD\u8FD0\u884C\u4E0E\u542F\u52A8\u6D41\u7A0B\u76F8\u540C\uFF0C\u5219\u5FFD\u7565\u6B64\u914D\u7F6E</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${run_as_user}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">unset</span> run_as_user
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token variable">$cygwin</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${run_as_user}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;The run.as option is not supported in a Cygwin environment. Exiting.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span><span class="token punctuation">;</span>

        <span class="token assign-left variable">NIFI_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${NIFI_HOME}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">NIFI_LOG_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${NIFI_LOG_DIR}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">NIFI_PID_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${NIFI_PID_DIR}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">BOOTSTRAP_CONF</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">BOOTSTRAP_CONF_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF_DIR}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">BOOTSTRAP_LIBS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_LIBS}</span>&quot;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">BOOTSTRAP_CLASSPATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF_DIR}</span>;<span class="token variable">\${BOOTSTRAP_LIBS}</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${TOOLS_JAR}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">TOOLS_JAR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cygpath --path --windows <span class="token string">&quot;<span class="token variable">\${TOOLS_JAR}</span>&quot;</span><span class="token variable">)</span></span>
            <span class="token assign-left variable">BOOTSTRAP_CLASSPATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${TOOLS_JAR}</span>;<span class="token variable">\${BOOTSTRAP_CLASSPATH}</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${run_as_user}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">id</span> -u <span class="token string">&quot;<span class="token variable">\${run_as_user}</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;The specified run.as user <span class="token variable">\${run_as_user}</span> does not exist. Exiting.&quot;</span>
                <span class="token builtin class-name">exit</span> <span class="token number">1</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">fi</span><span class="token punctuation">;</span>
        <span class="token assign-left variable">BOOTSTRAP_CLASSPATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_CONF_DIR}</span>:<span class="token variable">\${BOOTSTRAP_LIBS}</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${TOOLS_JAR}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">BOOTSTRAP_CLASSPATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${TOOLS_JAR}</span>:<span class="token variable">\${BOOTSTRAP_CLASSPATH}</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Java home: <span class="token variable">\${JAVA_HOME}</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;NiFi home: <span class="token variable">\${NIFI_HOME}</span>&quot;</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Bootstrap Config File: <span class="token variable">\${BOOTSTRAP_CONF}</span>&quot;</span>
    <span class="token builtin class-name">echo</span>

    <span class="token comment">#\u5728\u540E\u53F0\u8FD0\u884C&#39;start&#39;\uFF0C\u56E0\u4E3A\u8FDB\u7A0B\u5C06\u7EE7\u7EED\u8FD0\u884C\uFF0C\u76D1\u89C6NiFi\u3002\u6240\u6709\u5176\u4ED6\u547D\u4EE4\u90FD\u5C06\u5F88\u5FEB\u7EC8\u6B62\uFF0C\u6240\u4EE5\u8981\u7B49\u5F85\u5B83\u4EEC</span>

    <span class="token comment">#\u8BBE\u7F6E\u76EE\u5F55\u7684\u53C2\u6570</span>
    <span class="token comment"># java\u7A0B\u5E8F\u542F\u52A8\u53C2\u6570 -D \u5728System\u7C7B\u4E2D\u901A\u8FC7getProperties()\u5F97\u5230\u7684\u4E00\u4E32\u7CFB\u7EDF\u5C5E\u6027</span>
    <span class="token assign-left variable">BOOTSTRAP_LOG_PARAMS</span><span class="token operator">=</span><span class="token string">&quot;-Dorg.apache.nifi.bootstrap.config.log.dir=&#39;<span class="token variable">\${NIFI_LOG_DIR}</span>&#39;&quot;</span>
    <span class="token assign-left variable">BOOTSTRAP_PID_PARAMS</span><span class="token operator">=</span><span class="token string">&quot;-Dorg.apache.nifi.bootstrap.config.pid.dir=&#39;<span class="token variable">\${NIFI_PID_DIR}</span>&#39;&quot;</span>
    <span class="token assign-left variable">BOOTSTRAP_CONF_PARAMS</span><span class="token operator">=</span><span class="token string">&quot;-Dorg.apache.nifi.bootstrap.config.file=&#39;<span class="token variable">\${BOOTSTRAP_CONF}</span>&#39;&quot;</span>

    <span class="token comment"># \u53BB\u6389\u4E00\u4E0B\u6CE8\u91CB\u5C31\u5141\u8BB8\u8C03\u8BD5NIFI\u8FDB\u7A0B (\u6216\u8005\u5728bootstrap.conf\u4E2D\u53D6\u6D88\u6CE8\u91CA)</span>
    <span class="token comment">#BOOTSTRAP_DEBUG_PARAMS=&quot;-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000&quot;</span>

    <span class="token assign-left variable">BOOTSTRAP_DIR_PARAMS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BOOTSTRAP_LOG_PARAMS}</span> <span class="token variable">\${BOOTSTRAP_PID_PARAMS}</span> <span class="token variable">\${BOOTSTRAP_CONF_PARAMS}</span>&quot;</span>

    <span class="token assign-left variable">run_nifi_cmd</span><span class="token operator">=</span><span class="token string">&quot;&#39;<span class="token variable">\${JAVA}</span>&#39; -cp &#39;<span class="token variable">\${BOOTSTRAP_CLASSPATH}</span>&#39; -Xms12m -Xmx24m <span class="token variable">\${BOOTSTRAP_DIR_PARAMS}</span> <span class="token variable">\${BOOTSTRAP_DEBUG_PARAMS}</span> <span class="token variable">\${BOOTSTRAP_JAVA_OPTS}</span> org.apache.nifi.bootstrap.RunNiFi <span class="token variable">$@</span>&quot;</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">\${run_as_user}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token comment"># \u4E3A\u8FD0\u884C\u63D0\u4F9BSCRIPT_DIR\u5E76\u6267\u884Cni -env\u3002</span>
      <span class="token assign-left variable">run_nifi_cmd</span><span class="token operator">=</span><span class="token string">&quot;sudo -u <span class="token variable">\${run_as_user}</span> sh -c <span class="token entity" title="\\&quot;">\\&quot;</span>SCRIPT_DIR=&#39;<span class="token variable">\${SCRIPT_DIR}</span>&#39; &amp;&amp; . &#39;<span class="token variable">\${SCRIPT_DIR}</span>/nifi-env.sh&#39; &amp;&amp; <span class="token variable">\${run_nifi_cmd}</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;run&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token comment"># \u4F7F\u7528exec\u5C06PID\u5207\u6362\u5230RunNiFi java\u8FDB\u7A0B\uFF0C\u800C\u4E0D\u662F\u5C06\u5176\u4F5C\u4E3A\u5B50\u8FDB\u7A0B( \u524D\u53F0\u8FD0\u884Cnifi\uFF0CCtrl-C\u5C31\u505C\u6B62NIFI)</span>
      <span class="token comment"># exec\u547D\u4EE4 \u7528\u4E8E\u8C03\u7528\u5E76\u6267\u884C\u6307\u4EE4\u7684\u547D\u4EE4\u3002exec\u547D\u4EE4\u901A\u5E38\u7528\u5728shell\u811A\u672C\u7A0B\u5E8F\u4E2D\uFF0C\u53EF\u4EE5\u8C03\u7528\u5176\u4ED6\u7684\u547D\u4EE4\u3002\u5982\u679C\u5728\u5F53\u524D\u7EC8\u7AEF\u4E2D\u4F7F\u7528\u547D\u4EE4\uFF0C\u5219\u5F53\u6307\u5B9A\u7684\u547D\u4EE4\u6267\u884C\u5B8C\u6BD5\u540E\u4F1A\u7ACB\u5373\u9000\u51FA\u7EC8\u7AEF\u3002</span>
      <span class="token assign-left variable">run_nifi_cmd</span><span class="token operator">=</span><span class="token string">&quot;exec <span class="token variable">\${run_nifi_cmd}</span>&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># Linux eval\u547D\u4EE4\u7528\u4E8E\u91CD\u65B0\u8FD0\u7B97\u6C42\u51FA\u53C2\u6570\u7684\u5185\u5BB9\u3002</span>
    <span class="token comment"># eval\u53EF\u8BFB\u53D6\u4E00\u8FDE\u4E32\u7684\u53C2\u6570\uFF0C\u7136\u540E\u518D\u4F9D\u53C2\u6570\u672C\u8EAB\u7684\u7279\u6027\u6765\u6267\u884C\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;start&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token punctuation">(</span> <span class="token builtin class-name">eval</span> <span class="token string">&quot;cd <span class="token variable">\${NIFI_HOME}</span> &amp;&amp; <span class="token variable">\${run_nifi_cmd}</span>&quot;</span> <span class="token operator">&amp;</span> <span class="token punctuation">)</span><span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">1</span>&gt;&amp;</span>-
    <span class="token keyword">else</span>
        <span class="token builtin class-name">eval</span> <span class="token string">&quot;cd <span class="token variable">\${NIFI_HOME}</span> &amp;&amp; <span class="token variable">\${run_nifi_cmd}</span>&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token assign-left variable">EXIT_STATUS</span><span class="token operator">=</span><span class="token variable">$?</span>

   <span class="token comment"># \u7A0D\u7B49(3\u79D2)\uFF0C\u7B49\u5F85\u65E5\u5FD7\u8BB0\u5F55\u5B8C\u6210\uFF0C\u7136\u540E\u56DE\u663E\u65B0\u884C\u3002</span>
   <span class="token comment"># \u6211\u4EEC\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u907F\u514D\u5728\u8FD0\u884C\u547D\u4EE4\u540E\uFF0C\u65E5\u5FD7\u5728\u63A7\u5236\u53F0\u88AB\u5410\u51FA\u6765\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED9\u7528\u6237</span>
    <span class="token function">sleep</span> <span class="token number">3</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    init <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    run <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># ==========================</span>
<span class="token comment"># \u65B9\u6CD5\u533A end</span>
<span class="token comment"># ==========================</span>

<span class="token comment"># ==========================</span>
<span class="token comment"># 3\u3001\u5165\u53E3 start</span>
<span class="token comment"># ==========================</span>

<span class="token comment"># \u5224\u65AD $1 \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4EC0\u4E48 </span>
<span class="token comment"># \u5176\u4E2Dinstall \u5C06nifi\u5B89\u88C5\u4E3Aservice </span>
<span class="token comment"># start \u542F\u52A8</span>
<span class="token comment"># stop \u505C\u6B62</span>
<span class="token comment"># run</span>
<span class="token comment"># status </span>
<span class="token comment"># dump</span>
<span class="token comment"># env</span>
<span class="token comment"># restart \u91CD\u542F</span>

<span class="token comment"># $@ \u4F20\u5168\u90E8\u53C2\u6570</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token function">install</span><span class="token punctuation">)</span>
        <span class="token function">install</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    start<span class="token operator">|</span>stop<span class="token operator">|</span>run<span class="token operator">|</span>status<span class="token operator">|</span>dump<span class="token operator">|</span><span class="token function">env</span><span class="token punctuation">)</span>
        main <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token punctuation">)</span>
        init
        run <span class="token string">&quot;stop&quot;</span>
        run <span class="token string">&quot;start&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage nifi {start|stop|run|restart|status|dump|install}&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function l(o,c){return n(),a("div",null,i)}var k=s(t,[["render",l],["__file","nifi-sh.html.vue"]]);export{k as default};
