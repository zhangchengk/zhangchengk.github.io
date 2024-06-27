import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as l,b as e,d as i,e as a,w as n,a as h,o}from"./app-CtKwaxkk.js";const c={},d=h('<p>本文仅限于针对NIFI最常见的启动方式的分析，即使用以下命令启动。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>nifi.sh start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>本文是若干脚本解读和源码学习分析的导读和概括，每一步骤的详细研究需要到各个章节仔细研究。</p><h2 id="nifi-sh脚本" tabindex="-1"><a class="header-anchor" href="#nifi-sh脚本"><span>nifi.sh脚本</span></a></h2>',4),p=e("h2",{id:"runnifi-java",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#runnifi-java"},[e("span",null,"RunNiFi.java")])],-1),I=e("h2",{id:"nifi-java",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nifi-java"},[e("span",null,"NiFi.java")])],-1),u=e("h2",{id:"jettyserver-java",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jettyserver-java"},[e("span",null,"JettyServer.java")])],-1);function m(N,v){const t=s("RouteLink");return o(),l("div",null,[d,e("p",null,[i("我们启动NIFI是使用的nifi.sh脚本，那么一切自然就是从这里开始的。整个脚本分为三部分，第一部分是确定NIFI各个路径 目录的确定，设置环境变量，第二部分是方法区。第三部分是脚本逻辑代码的入口，初略的根据传参不同区执行不同的方法。关于脚本的详细学习研究请看:"),a(t,{to:"/ApacheNIFI%E5%BC%80%E5%8F%91/nifi-sh.html"},{default:n(()=>[i("nifi.sh 脚本解读")]),_:1})]),p,e("p",null,[i("nifi.sh脚本start其实最后生成的命令就是执行RunNiFi.java的main方法，RunNiFi类主要是干一些查找文件，接受脚本指令，启动停止NIFI进程(主类 org.apache.nifi.NiFi)，自动重启NIFI，发送NIFI通知等等操作；关于RunNifi.java的详细研究请看:"),a(t,{to:"/ApacheNIFI%E5%BC%80%E5%8F%91/RunNiFi%E6%BA%90%E7%A0%81.html"},{default:n(()=>[i("RunNiFi源码.java")]),_:1})]),I,e("p",null,[i("在RunNiFi.java源码解读中有提到，最终RunNiFi进程在主程序中启动了新的进程NiFi,并循环监听NIFI进程的状态，直到NIFI进程不在运行，RunNiFi主程序才结束。关于Nifi.java的详细研究请看:"),a(t,{to:"/ApacheNIFI%E5%BC%80%E5%8F%91/009-NiFi%E6%BA%90%E7%A0%81.html"},{default:n(()=>[i("NiFi.java")]),_:1})]),u,e("p",null,[i("在NiFi.java的构造方法里，使用反射构造了JettyServer,并调用了JettyServer的start方法。在JettyServer中发布了war包，启动了我们所看到的NIFI(画布、拖拽。。。)关于Nifi.java的详细研究请看:"),a(t,{to:"/ApacheNIFI%E5%BC%80%E5%8F%91/008-JettyServer%E6%BA%90%E7%A0%81.html"},{default:n(()=>[i("JettyServer.java")]),_:1})])])}const g=r(c,[["render",m],["__file","006-NIFI启动源码.html.vue"]]),_=JSON.parse('{"path":"/ApacheNIFI%E5%BC%80%E5%8F%91/006-NIFI%E5%90%AF%E5%8A%A8%E6%BA%90%E7%A0%81.html","title":"NIFI启动源码解读","lang":"zh-CN","frontmatter":{"title":"NIFI启动源码解读","date":"2020-05-21T00:00:00.000Z","category":"ApacheNIFI开发","tag":"NIFI","description":"本文仅限于针对NIFI最常见的启动方式的分析，即使用以下命令启动。 本文是若干脚本解读和源码学习分析的导读和概括，每一步骤的详细研究需要到各个章节仔细研究。 nifi.sh脚本 我们启动NIFI是使用的nifi.sh脚本，那么一切自然就是从这里开始的。整个脚本分为三部分，第一部分是确定NIFI各个路径 目录的确定，设置环境变量，第二部分是方法区。第三部...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/ApacheNIFI%E5%BC%80%E5%8F%91/006-NIFI%E5%90%AF%E5%8A%A8%E6%BA%90%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"NIFI启动源码解读"}],["meta",{"property":"og:description","content":"本文仅限于针对NIFI最常见的启动方式的分析，即使用以下命令启动。 本文是若干脚本解读和源码学习分析的导读和概括，每一步骤的详细研究需要到各个章节仔细研究。 nifi.sh脚本 我们启动NIFI是使用的nifi.sh脚本，那么一切自然就是从这里开始的。整个脚本分为三部分，第一部分是确定NIFI各个路径 目录的确定，设置环境变量，第二部分是方法区。第三部..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:tag","content":"NIFI"}],["meta",{"property":"article:published_time","content":"2020-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NIFI启动源码解读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"nifi.sh脚本","slug":"nifi-sh脚本","link":"#nifi-sh脚本","children":[]},{"level":2,"title":"RunNiFi.java","slug":"runnifi-java","link":"#runnifi-java","children":[]},{"level":2,"title":"NiFi.java","slug":"nifi-java","link":"#nifi-java","children":[]},{"level":2,"title":"JettyServer.java","slug":"jettyserver-java","link":"#jettyserver-java","children":[]}],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":1.43,"words":429},"filePathRelative":"ApacheNIFI开发/006-NIFI启动源码.md","localizedDate":"2020年5月21日","excerpt":"<p>本文仅限于针对NIFI最常见的启动方式的分析，即使用以下命令启动。</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>nifi.sh start</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,_ as data};
