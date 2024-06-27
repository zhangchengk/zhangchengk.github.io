import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as e}from"./app-CtKwaxkk.js";const n={},s=e(`<ol><li>【强制】类、类属性、类方法的注释必须使用 Javadoc 规范，使用<code>/**内容*/</code>格式，不得使用<code>// xxx</code>方式。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。</p></div><ol start="2"><li>【强制】所有的<code>抽象方法（包括接口中的方法）</code>必须要用 Javadoc 注释、除了返回值、参数、异常说明外，还必须指出该方法做什么事情，实现什么功能。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>对子类的实现要求，或者调用注意事项，请一并说明。</p></div><ol start="3"><li>【强制】所有的类都必须添加创建者和创建日期。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>在设置模板时，注意 IDEA 的@author 为<code>\${USER}</code>，而 eclipse 的@author 为<code>\${user}</code>，大小写有区别，而日期的设置统一为 <code>yyyy/MM/dd</code> 的格式。</p></div><div class="hint-container tip"><p class="hint-container-title">正例</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">* </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> yangguanbao</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">* @date 2016/10/31</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ol start="4"><li>【强制】方法内部单行注释，在被注释语句上方另起一行，使用<code>//</code>注释。方法内部多行注释使用<code>/* */</code>注释，注意与代码对齐。</li><li>【强制】所有的<code>枚举类型字段</code>必须要有注释，说明每个数据项的用途。</li><li>【推荐】与其“半吊子”英文来注释，不如用中文注释把问题说清楚。专有名词与关键字保持英文原文即可。</li></ol><div class="hint-container caution"><p class="hint-container-title">反例</p><p>“TCP 连接超时”解释成“传输控制协议连接超时”，理解反而费脑筋。</p></div><ol start="7"><li>【推荐】代码修改的同时，注释也要进行相应的修改，尤其是参数、返回值、异常、核心逻辑等的修改。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>代码与注释更新不同步，就像路网与导航软件更新不同步一样，如果导航软件严重滞后，就失去了导航的意义。</p></div><ol start="8"><li>【推荐】在类中删除未使用的任何字段和方法；在方法中删除未使用的任何参数声明与内部变量。</li><li>【参考】谨慎注释掉代码。在上方详细说明，而不是简单地注释掉。如果无用，则删除。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>代码被注释掉有两种可能性：</p><ul><li>1）后续会恢复此段代码逻辑。</li><li>2）永久不用。 前者如果没有备注信息，难以知晓注释动机。后者建议直接删掉即可，假如需要查阅历史代码，登录代码仓库即可。</li></ul></div><ol start="10"><li>【参考】对于注释的要求：</li></ol><ul><li>第一、能够准确反映设计思想和代码逻辑；</li><li>第二、能够描述业务含义，使别的程序员能够迅速了解到代码背后的信息。 完全没有注释的大段代码对于阅读者形同天书，注释是给自己看的，即使隔很长时间，也能清晰理解当时的思路；注释也是给继任者看的，使其能够快速接替自己的工作。</li></ul><ol start="11"><li>【参考】好的命名、代码结构是自解释的，注释力求精简准确、表达到位。避免出现注释的一个极端：过多过滥的注释，代码的逻辑一旦修改，修改注释是相当大的负担。</li></ol><div class="hint-container caution"><p class="hint-container-title">反例</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// put elephant into fridge </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(elephant</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fridge)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>方法名 put，加上两个有意义的变量名 elephant 和 fridge，已经说明了这是在干什么，语义清晰的代码不需要额外的注释。</p></div><ol start="12"><li>【参考】特殊注释标记，请注明标记人与标记时间。注意及时处理这些标记，通过标记扫描，经常清理此类标记。线上故障有时候就是来源于这些标记处的代码。 1） 待办事宜<code>（TODO）:（标记人，标记时间，[预计处理时间]）</code>表示需要实现，但目前还未实现的功能。这实际上是一个 Javadoc 的标签，目前的 Javadoc 还没有实现，但已经被广泛使用。只能应用于类，接口和方法（因为它是一个 Javadoc 标签）。 2） 错误，不能工作<code>（FIXME）:（标记人，标记时间，[预计处理时间]）</code>在注释中用 FIXME 标记某代码是错误的，而且不能工作，需要及时纠正的情况。</li></ol>`,18),l=[s];function o(c,d){return a(),t("div",null,l)}const p=i(n,[["render",o],["__file","09-注释规约.html.vue"]]),k=JSON.parse('{"path":"/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/09-%E6%B3%A8%E9%87%8A%E8%A7%84%E7%BA%A6.html","title":"注释规约","lang":"zh-CN","frontmatter":{"title":"注释规约","date":"2021-02-14T00:00:00.000Z","category":"阿里Java开发手册","description":"【强制】类、类属性、类方法的注释必须使用 Javadoc 规范，使用/**内容*/格式，不得使用// xxx方式。 说明 在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。 【强制】所有的抽象方法（包括接口中...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/09-%E6%B3%A8%E9%87%8A%E8%A7%84%E7%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"注释规约"}],["meta",{"property":"og:description","content":"【强制】类、类属性、类方法的注释必须使用 Javadoc 规范，使用/**内容*/格式，不得使用// xxx方式。 说明 在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。 【强制】所有的抽象方法（包括接口中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:published_time","content":"2021-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注释规约\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1105},"filePathRelative":"阿里Java开发手册/09-注释规约.md","localizedDate":"2021年2月14日","excerpt":"<ol>\\n<li>【强制】类、类属性、类方法的注释必须使用 Javadoc 规范，使用<code>/**内容*/</code>格式，不得使用<code>// xxx</code>方式。</li>\\n</ol>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">说明</p>\\n<p>在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。</p>\\n</div>\\n<ol start=\\"2\\">\\n<li>【强制】所有的<code>抽象方法（包括接口中的方法）</code>必须要用 Javadoc 注释、除了返回值、参数、异常说明外，还必须指出该方法做什么事情，实现什么功能。</li>\\n</ol>","autoDesc":true}');export{p as comp,k as data};
