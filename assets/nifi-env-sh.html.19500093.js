import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,d as e}from"./app.0a7c44f6.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#!/bin/sh</span>

<span class="token comment"># nifi \u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NIFI_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">\${SCRIPT_DIR}</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>

<span class="token comment"># nifi pid \u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NIFI_PID_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${NIFI_HOME}</span>/run&quot;</span>

<span class="token comment"># nifi \u65E5\u5FD7\u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NIFI_LOG_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${NIFI_HOME}</span>/logs&quot;</span>

<span class="token comment"># \u8BBE\u7F6E\u4E3Afalse\uFF0C\u4EE5\u5F3A\u5236\u5728\u4F7F\u7528Kerberos\u7684\u5904\u7406\u5668\u4E2D\u4F7F\u7528Keytab\u63A7\u5236\u5668\u670D\u52A1\u3002</span>
<span class="token comment"># \u5982\u679C\u4E3Atrue\uFF0C\u8FD9\u4E9B\u5904\u7406\u5668\u5C06\u5141\u8BB8\u76F4\u63A5\u5728\u5904\u7406\u5668\u5185\u914D\u7F6Ekeytab\u548Cprincipal\u3002</span>
<span class="token comment"># \u5982\u679C\u4E3Afalse\uFF0C\u5982\u679C\u8BD5\u56FE\u914D\u7F6E\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5904\u7406\u5668\u5C06\u65E0\u6548\u3002\u8FD9\u5728\u591A\u79DF\u6237\u73AF\u5883\u4E2D\u53EF\u80FD\u662F\u6709\u5229\u7684\uFF0C\u5728\u8FD9\u79CD\u73AF\u5883\u4E2D\uFF0Ckeytabs\u7684\u7BA1\u7406\u5E94\u8BE5\u53EA\u7531\u5177\u6709\u8F83\u9AD8\u6743\u9650\u7684\u7528\u6237\u6267\u884C(\u5373\uFF0C\u5DF2\u88AB\u6388\u4E88\u201CACCESS_KEYTAB\u201D\u9650\u5236\u7684\u7528\u6237)\u3002</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NIFI_ALLOW_EXPLICIT_KEYTAB</span><span class="token operator">=</span>true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function p(c,o){return n(),a("div",null,t)}var m=s(l,[["render",p],["__file","nifi-env-sh.html.vue"]]);export{m as default};
