import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,a as n}from"./app-CtKwaxkk.js";const a={},l=n('<ol><li>【强制】隶属于用户个人的页面或者功能必须进行权限控制校验。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>防止没有做水平权限校验就可随意访问、修改、删除别人的数据，比如查看他人的私信内容。</p></div><ol start="2"><li>【强制】用户敏感数据禁止直接展示，必须对展示数据进行脱敏。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>中国大陆个人手机号码显示为:137****0969，隐藏中间 4 位，防止隐私泄露。 ::; 3. 【强制】用户输入的 SQL 参数严格使用参数绑定或者 METADATA 字段值限定，防止 SQL 注入，禁止字符串拼接 SQL 访问数据库。</p><div class="hint-container caution"><p class="hint-container-title">反例</p><p>某系统签名大量被恶意修改，即是因为对于危险字符 # --没有进行转义，导致数据库更新时，where后边的信息被注释掉，对全库进行更新。</p></div></div><ol start="4"><li>【强制】用户请求传入的任何参数必须做有效性验证。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><ul><li>忽略参数校验可能导致：</li><li>page size 过大导致内存溢出</li><li>恶意 order by 导致数据库慢查询</li><li>缓存击穿</li><li>SSRF</li><li>任意重定向</li><li>SQL 注入，Shell 注入，反序列化注入</li><li>正则输入源串拒绝服务 ReDoS Java 代码用正则来验证客户端的输入，有些正则写法验证普通用户输入没有问题，但是如果攻击人员使用的是特殊构造的字符串来验证，有可能导致死循环的结果。</li></ul><ol start="5"><li>【强制】禁止向 HTML 页面输出未经安全过滤或未正确转义的用户数据。</li><li>【强制】表单、AJAX 提交必须执行 CSRF 安全验证。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>CSRF(Cross-site request forgery)跨站请求伪造是一类常见编程漏洞。对于存在 CSRF 漏洞的应用/网站，攻击者可以事先构造好 URL，只要受害者用户一访问，后台便在用户不知情的情况下对数据库中用户参数进行相应修改。</p></div></div><ol start="7"><li>【强制】URL 外部重定向传入的目标地址必须执行白名单过滤。</li><li>【强制】在使用平台资源，譬如短信、邮件、电话、下单、支付，必须实现正确的防重放的机制，如数量限制、疲劳度控制、验证码校验，避免被滥刷而导致资损。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>如注册时发送验证码到手机，如果没有限制次数和频率，那么可以利用此功能骚扰到其它用户，并造成短信平台资源浪费。</p></div><ol start="9"><li>【推荐】发贴、评论、发送即时消息等用户生成内容的场景必须实现防刷、文本内容违禁词过滤等风控策略。</li></ol>',9),o=[l];function r(c,s){return e(),i("div",null,o)}const d=t(a,[["render",r],["__file","15-安全规约.html.vue"]]),m=JSON.parse('{"path":"/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/15-%E5%AE%89%E5%85%A8%E8%A7%84%E7%BA%A6.html","title":"安全规约","lang":"zh-CN","frontmatter":{"title":"安全规约","date":"2021-02-14T00:00:00.000Z","category":"阿里Java开发手册","description":"【强制】隶属于用户个人的页面或者功能必须进行权限控制校验。 说明 防止没有做水平权限校验就可随意访问、修改、删除别人的数据，比如查看他人的私信内容。 【强制】用户敏感数据禁止直接展示，必须对展示数据进行脱敏。 说明 中国大陆个人手机号码显示为:137****0969，隐藏中间 4 位，防止隐私泄露。 ::; 3. 【强制】用户输入的 SQL 参数严格使...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/15-%E5%AE%89%E5%85%A8%E8%A7%84%E7%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"安全规约"}],["meta",{"property":"og:description","content":"【强制】隶属于用户个人的页面或者功能必须进行权限控制校验。 说明 防止没有做水平权限校验就可随意访问、修改、删除别人的数据，比如查看他人的私信内容。 【强制】用户敏感数据禁止直接展示，必须对展示数据进行脱敏。 说明 中国大陆个人手机号码显示为:137****0969，隐藏中间 4 位，防止隐私泄露。 ::; 3. 【强制】用户输入的 SQL 参数严格使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:published_time","content":"2021-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全规约\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"阿里Java开发手册/15-安全规约.md","localizedDate":"2021年2月14日","excerpt":"<ol>\\n<li>【强制】隶属于用户个人的页面或者功能必须进行权限控制校验。</li>\\n</ol>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">说明</p>\\n<p>防止没有做水平权限校验就可随意访问、修改、删除别人的数据，比如查看他人的私信内容。</p>\\n</div>\\n<ol start=\\"2\\">\\n<li>【强制】用户敏感数据禁止直接展示，必须对展示数据进行脱敏。</li>\\n</ol>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">说明</p>\\n<p>中国大陆个人手机号码显示为:137****0969，隐藏中间 4 位，防止隐私泄露。\\n::;\\n3. 【强制】用户输入的 SQL 参数严格使用参数绑定或者 METADATA 字段值限定，防止 SQL 注入，禁止字符串拼接 SQL 访问数据库。</p>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">反例</p>\\n<p>某系统签名大量被恶意修改，即是因为对于危险字符 # --没有进行转义，导致数据库更新时，where后边的信息被注释掉，对全库进行更新。</p>\\n</div>\\n</div>","autoDesc":true}');export{d as comp,m as data};
