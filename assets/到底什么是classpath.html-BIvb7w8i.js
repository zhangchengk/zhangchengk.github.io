import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,a}from"./app-CtKwaxkk.js";const t={},l=a('<p>classpath是JVM用到的一个环境变量，它用来指示JVM如何搜索class。因为Java是编译型语言，源码文件是.java，而编译后的.class文件才是真正可以被JVM执行的字节码。因此，JVM需要知道，如果要加载一个abc.xyz.Hello的类，应该去哪搜索对应的Hello.class文件。所以，<code>classpath就是一组目录的集合</code>，它设置的搜索路径与操作系统相关。例如，在Windows系统上，用;分隔，带空格的目录用&quot;&quot;括起来，可能长这样：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">C:\\work\\project1\\bin</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">;C:\\shared;&quot;D:\\My Documents\\project1\\bin&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在Linux系统上，用:分隔，可能长这样：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/shared:/usr/local/bin:/home/liaoxuefeng/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在我们假设classpath是<code>.;C:\\work\\project1\\bin;C:\\shared</code>，当JVM在加载<code>abc.xyz.Hello</code>这个类时，会依次查找：</p><ul><li><p>&lt;当前目录&gt;\\abc\\xyz\\Hello.class</p></li><li><p>C:\\work\\project1\\bin\\abc\\xyz\\Hello.class</p></li><li><p>C:\\shared\\abc\\xyz\\Hello.class</p></li></ul><p>注意到<code>.</code>代表当前目录。如果JVM在某个路径下找到了对应的class文件，就不再往后继续搜索。如果所有路径下都没有找到，就报错。classpath的设定方法有两种：</p><ul><li><p>在系统环境变量中设置classpath环境变量，不推荐；</p></li><li><p>在启动JVM时设置classpath变量，推荐。</p></li></ul><p>我们强烈不推荐在系统环境变量中设置classpath，那样会污染整个系统环境。在启动JVM时设置classpath才是推荐的做法。实际上就是给java命令传入-classpath或-cp参数：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">java -classpath .</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">;C:\\work\\project1\\bin;C:\\shared abc.xyz.Hello</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者使用-cp的简写：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">java -cp .</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">;C:\\work\\project1\\bin;C:\\shared abc.xyz.Hello</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>没有设置系统环境变量，也没有传入-cp参数，那么JVM默认的classpath为.，即当前目录：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">java abc.xyz.Hello</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上述命令告诉JVM只在当前目录搜索Hello.class。</p><p>在IDE中运行Java程序，IDE自动传入的-cp参数是当前工程的bin目录和引入的jar包。通常，我们在自己编写的class中，会引用Java核心库的class，例如，String、ArrayList等。这些class应该上哪去找？有很多“如何设置classpath”的文章会告诉你把JVM自带的rt.jar放入classpath，但事实上，根本不需要告诉JVM如何去Java核心库查找class，JVM怎么可能笨到连自己的核心库在哪都不知道？</p><blockquote><p>不要把任何Java核心库添加到classpath中！JVM根本不依赖classpath加载核心库！</p></blockquote><p>更好的做法是，不要设置classpath！默认的当前目录.对于绝大多数情况都够用了。</p>',18),r=[l];function h(p,c){return s(),i("div",null,r)}const d=e(t,[["render",h],["__file","到底什么是classpath.html.vue"]]),k=JSON.parse('{"path":"/JAVA/%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%98%AFclasspath.html","title":"到底什么是classpath?","lang":"zh-CN","frontmatter":{"title":"到底什么是classpath?","date":"2020-10-12T00:00:00.000Z","category":"Java","description":"classpath是JVM用到的一个环境变量，它用来指示JVM如何搜索class。因为Java是编译型语言，源码文件是.java，而编译后的.class文件才是真正可以被JVM执行的字节码。因此，JVM需要知道，如果要加载一个abc.xyz.Hello的类，应该去哪搜索对应的Hello.class文件。所以，classpath就是一组目录的集合，它设置...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/JAVA/%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%98%AFclasspath.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"到底什么是classpath?"}],["meta",{"property":"og:description","content":"classpath是JVM用到的一个环境变量，它用来指示JVM如何搜索class。因为Java是编译型语言，源码文件是.java，而编译后的.class文件才是真正可以被JVM执行的字节码。因此，JVM需要知道，如果要加载一个abc.xyz.Hello的类，应该去哪搜索对应的Hello.class文件。所以，classpath就是一组目录的集合，它设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:published_time","content":"2020-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"到底什么是classpath?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"JAVA/到底什么是classpath.md","localizedDate":"2020年10月12日","excerpt":"<p>classpath是JVM用到的一个环境变量，它用来指示JVM如何搜索class。因为Java是编译型语言，源码文件是.java，而编译后的.class文件才是真正可以被JVM执行的字节码。因此，JVM需要知道，如果要加载一个abc.xyz.Hello的类，应该去哪搜索对应的Hello.class文件。所以，<code>classpath就是一组目录的集合</code>，它设置的搜索路径与操作系统相关。例如，在Windows系统上，用;分隔，带空格的目录用\\"\\"括起来，可能长这样：</p>\\n<div class=\\"language-properties line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"properties\\" data-title=\\"properties\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#98C379\\">C:\\\\work\\\\project1\\\\bin</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">;C:\\\\shared;\\"D:\\\\My Documents\\\\project1\\\\bin\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,k as data};
