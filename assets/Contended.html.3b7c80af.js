import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,d as e}from"./app.20fe4298.js";const t={},o=e(`<p>\u89E3\u51B3\u4F2A\u5171\u4EAB\u95EE\u9898\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>FIELD<span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Contended</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u539F\u7406\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u539F\u7406\u53CA\u914D\u7F6E</h2><p>\u57FA\u672C\u4E0A\uFF0C\u5F53\u6211\u4EEC\u7528\u8FD9\u4E2A\u6CE8\u89E3\u6CE8\u91CA\u4E00\u4E2A\u5B57\u6BB5\u65F6\uFF0CHotspot JVM\u5C06\u5728\u6CE8\u91CA\u5B57\u6BB5\u5468\u56F4\u6DFB\u52A0\u4E00\u4E9B\u586B\u5145\u3002\u8FD9\u6837\uFF0C\u5B83\u53EF\u4EE5\u786E\u4FDD\u5B57\u6BB5\u9A7B\u7559\u5728\u81EA\u5DF1\u7684Cache Line\u4E0A\u3002\u6B64\u5916\uFF0C\u5982\u679C\u6211\u4EEC\u7528\u8FD9\u4E2A\u6CE8\u89E3\u6CE8\u91CA\u6574\u4E2A\u7C7B\uFF0Chotsopt jvm\u5C06\u5728\u6240\u6709\u5B57\u6BB5\u4E4B\u524D\u6DFB\u52A0\u76F8\u540C\u7684\u586B\u5145\u3002</p><p>@Contended\u6CE8\u89E3\u65E8\u5728\u7531JDK\u672C\u8EAB\u5728\u5185\u90E8\u4F7F\u7528\u3002\u56E0\u6B64\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4E0D\u4F1A\u5F71\u54CD\u975E\u5185\u90E8\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u7684\u590D\u5236\u7C98\u8D34\u52A0\u6CD5\u5668\u7684\u6027\u80FD\u4E0D\u5982\u5185\u7F6E\u52A0\u6CD5\u5668\u7684\u539F\u56E0\u3002</p><p>\u8981\u5220\u9664\u6B64\u4EC5\u4F9B\u5185\u90E8\u4F7F\u7528\u7684\u9650\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u91CD\u65B0\u8FD0\u884C\u57FA\u51C6\u6D4B\u8BD5\u65F6\u4F7F\u7528-XX\uFF1A-RestrictContended</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C@confered\u6CE8\u91CA\u6DFB\u52A0128\u5B57\u8282\u7684\u586B\u5145\u3002\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3A\u5728\u8BB8\u591A\u73B0\u4EE3\u5904\u7406\u5668\u4E2D\uFF0C\u7F13\u5B58\u7EBF\u7684\u5927\u5C0F\u7EA6\u4E3A64/128\u5B57\u8282\u3002</p><p>\u4F46\u662F\uFF0C\u8FD9\u4E2A\u503C\u53EF\u4EE5\u901A\u8FC7-XX:conferedpaddingwidth\u8C03\u6574\u6807\u5FD7\u8FDB\u884C\u914D\u7F6E\u3002\u5728\u7F16\u5199\u672C\u6587\u65F6\uFF0C\u6B64\u6807\u5FD7\u4EC5\u63A5\u53D70\u52308192\u4E4B\u95F4\u7684\u503C\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7-XX:-enableConflued\u8C03\u8C10\u6765\u7981\u7528@contelled\u6548\u679C\u3002\u5F53\u5185\u5B58\u5F88\u8D35\uFF0C\u6211\u4EEC\u53EF\u4EE5\u627F\u53D7\u4E00\u70B9\uFF08\u6709\u65F6\u751A\u81F3\u5F88\u591A\uFF09\u6027\u80FD\u635F\u5931\u65F6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u88AB\u8BC1\u660E\u662F\u6709\u7528\u7684\u3002</p><h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use Cases</h2><h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> Thread</h3><p>java.lang.Thread\u5728java\u4E2D\uFF0C\u751F\u6210\u968F\u673A\u6570\u662F\u548C\u7EBF\u7A0B\u6709\u7740\u5173\u8054\u3002\u800C\u4E14\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u591A\u7EBF\u7A0B\u4E0B\u4EA7\u751F\u968F\u673A\u6570\u7684\u64CD\u4F5C\u662F\u5F88\u5E38\u89C1\u7684\uFF0CJDK\u4E3A\u4E86\u786E\u4FDD\u4EA7\u751F\u968F\u673A\u6570\u7684\u64CD\u4F5C\u4E0D\u4F1A\u4EA7\u751Ffalse sharing ,\u628A\u4EA7\u751F\u968F\u673A\u6570\u7684\u4E09\u4E2A\u76F8\u5173\u503C\u8BBE\u4E3A\u72EC\u5360cache line\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4EE5\u4E0B\u4E09\u4E2A\u6700\u521D\u672A\u521D\u59CB\u5316\u7684\u5B57\u6BB5\u4EC5\u7531\u7C7Bjava.util.concurrent.ThreadLocalRandom\u7BA1\u7406\u3002\u8FD9\u4E9B\u5B57\u6BB5\u7528\u4E8E\u5728\u5E76\u53D1\u4EE3\u7801\u4E2D\u6784\u5EFA\u9AD8\u6027\u80FDPRNGs\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u4F1A\u5192\u610F\u5916\u7684\u9519\u8BEF\u5171\u4EAB\u7684\u98CE\u9669\u3002\u56E0\u6B64\uFF0C\u8FD9\u4E9B\u5B57\u6BB5\u7528@Contended\u9694\u79BB\u3002</span>

<span class="token doc-comment comment">/** ThreadLocalRandom\u7684\u5F53\u524D\u79CD\u5B50 */</span>
<span class="token annotation punctuation">@sun.misc.Contended</span><span class="token punctuation">(</span><span class="token string">&quot;tlr&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">long</span> threadLocalRandomSeed<span class="token punctuation">;</span>

<span class="token doc-comment comment">/** \u63A2\u9488\u54C8\u5E0C\u503C\uFF1B\u5982\u679CthreadLocalRandomSeed\u521D\u59CB\u5316\uFF0C\u5219\u4E3A\u975E\u96F6 */</span>
<span class="token annotation punctuation">@sun.misc.Contended</span><span class="token punctuation">(</span><span class="token string">&quot;tlr&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">int</span> threadLocalRandomProbe<span class="token punctuation">;</span>

<span class="token doc-comment comment">/** \u4ECE\u516C\u5171ThreadLocalRandom\u5E8F\u5217\u4E2D\u5206\u79BB\u51FA\u7684\u6B21\u8981\u79CD\u5B50 */</span>
<span class="token annotation punctuation">@sun.misc.Contended</span><span class="token punctuation">(</span><span class="token string">&quot;tlr&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">int</span> threadLocalRandomSecondarySeed<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h3><p>\u5728\u5E76\u53D1\u6761\u4EF6\u4E0B\u8FDB\u884C++\u64CD\u4F5C\u3002\u56E0\u4E3A++\u8FD9\u4E2A\u64CD\u4F5C\u5E76\u4E0D\u662F\u539F\u5B50\u7684\uFF0C\u800C\u4E14\u5728\u8FDE\u7EED\u7684Atomic\u4E2D\uFF0C\u5F88\u5BB9\u6613\u4EA7\u751F\u4F2A\u5171\u4EAB\uFF08false sharing\uFF09\u3002\u6240\u4EE5\u5728\u5176\u5185\u90E8\u6709\u4E13\u95E8\u7684\u6570\u636E\u7ED3\u6784\u6765\u4FDD\u5B58long\u578B\u7684\u6570\u636E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">/* ---------------- Counter support -------------- */</span>

    <span class="token doc-comment comment">/**
     * \u586B\u5145\u8BA1\u6570\u7684\u586B\u5145\u5355\u5143\u683C\u3002\u6539\u7F16\u81EALongAdder\u548CStriped64\u3002\u8BF7\u53C2\u9605\u5176\u5185\u90E8\u6587\u6863\u4EE5\u83B7\u53D6\u89E3\u91CA\u3002
     */</span>
    <span class="token annotation punctuation">@sun.misc.Contended</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">CounterCell</span> <span class="token punctuation">{</span>
        <span class="token keyword">volatile</span> <span class="token keyword">long</span> value<span class="token punctuation">;</span>
        <span class="token class-name">CounterCell</span><span class="token punctuation">(</span><span class="token keyword">long</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> value <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u8BA1\u6570\u5668\u5355\u5143\u683C\u8868\u3002\u975E\u7A7A\u65F6\uFF0C\u5927\u5C0F\u662F2\u7684\u5E42\u3002
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">CounterCell</span><span class="token punctuation">[</span><span class="token punctuation">]</span> counterCells<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[o];function p(l,i){return a(),s("div",null,c)}var r=n(t,[["render",p],["__file","Contended.html.vue"]]);export{r as default};