import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as i,a}from"./app-CtKwaxkk.js";const t={},r=a('<blockquote><p>大部分文章译自原文：https://exceptionfactory.com/posts/2021/10/23/improving-jwt-authentication-in-apache-nifi/ 同时结合译文，参照NIFI(1.15)源码进行分析讲述举例说明</p></blockquote><h2 id="本文目的" tabindex="-1"><a class="header-anchor" href="#本文目的"><span>本文目的</span></a></h2><ol><li>深入对Apache NiFi的新版JWT身份验证深入理解。</li><li>为自定义外部应用程序访问使用了JWT身份验证的NIFI服务提供参考和开发依据。</li></ol><h2 id="背景知识" tabindex="-1"><a class="header-anchor" href="#背景知识"><span>背景知识</span></a></h2><p><code>JSON Web Tokens</code>为众多Web应用程序和框架提供了灵活的身份验证和授权标准。<a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519</a>概述了JWT的基本要素，枚举了符合公共声明属性的所需编码，格式和已注册的<code>声明</code>属性名称(payload里属性称为<code>声明</code>)。<a href="https://datatracker.ietf.org/doc/html/rfc7515" target="_blank" rel="noopener noreferrer">RFC 7515</a>中的JSON Web签名和<a href="https://datatracker.ietf.org/doc/html/rfc7518" target="_blank" rel="noopener noreferrer">RFC 7518</a>中的JSON Web算法描述了JWT的支持标准，其他的比如<a href="https://en.wikipedia.org/wiki/OAuth" target="_blank" rel="noopener noreferrer">OAuth 2.0</a>框架的安全标准构建在这些支持标准上，就可以在各种服务中启用授权。</p><p>用于生成和验证<code>JSON Web Tokens</code>的库可用于所有主流的编程语言，这使得它成为许多平台上(身份验证)的流行方法。由于它的灵活性和几个库中的实现问题，一些人批评了JWT的应用程序安全性。尽管与传统的服务器会话管理相比，JWT有一定程度的复杂性，但<code>JSON格式</code>、<code>标准字段命名</code>和<code>加密的签名</code>的这些特性还是使<code>JSON Web Tokens</code>得到了广泛的应用。</p><h2 id="jwt的组成元素" tabindex="-1"><a class="header-anchor" href="#jwt的组成元素"><span>JWT的组成元素</span></a></h2><p>JWT标准定义了令牌的三个元素:<code>header</code>、<code>payload</code>和<code>signature</code>。每个元素使用<a href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">Bas64</a>编码的字符串组成，以便与HTTP头所需的ASCII字符集相兼容。序列化的令牌结构使用句<code>点(.)</code>字符分隔这三个元素。<code>header</code>和<code>payload</code>元素包含一个或多个属性的JSON对象，<code>signature</code>元素包含了<code>header</code>和<code>payload</code>元素的二进制签名。<a href="https://datatracker.ietf.org/doc/html/rfc7519#section-3.1" target="_blank" rel="noopener noreferrer">RFC 7519 3.1</a>节提供了一个JWT示例，其中包括每个元素的编码和解码表示。</p><h3 id="jwt-header" tabindex="-1"><a class="header-anchor" href="#jwt-header"><span>JWT Header</span></a></h3><p>大多数JWT都包括一个带有<code>签名算法</code>的<code>header</code>，该<code>签名算法</code>描述了<code>加密密钥的类型</code>和<code>哈希算法</code>。JSON Web签名标准定义了利用基于<a href="https://en.wikipedia.org/wiki/HMAC" target="_blank" rel="noopener noreferrer">哈希消息验证码</a>的<code>对称密钥</code>算法，以及几种<code>非对称密钥</code>算法。两种类型的加密密钥策略都依赖于<a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" rel="noopener noreferrer">SHA-2</a>哈希算法，其输出大小可选，分别为256、384或512位。</p><p>比如<code>header</code>指定使用SHA-256的对称密钥HMAC验证，可以在JSON中表示如下:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&quot;typ&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;JWT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&quot;alg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;HS256&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Base64编码后为</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="jwt-payload" tabindex="-1"><a class="header-anchor" href="#jwt-payload"><span>JWT Payload</span></a></h3><p>JWT的<code>payload</code>包含了一些可扩展数量的属性，称之为<code>声明</code>。<a href="https://datatracker.ietf.org/doc/html/rfc7519#section-4.1" target="_blank" rel="noopener noreferrer">RFC 7519第4.1节</a>定义了一套已经注册了的用于提供基本身份和有效性细节的<code>声明</code>(我们自定义声明时应别名于这些声明名称关键字)。具体的实现服务中的<code>payload</code>还可以包括自定义的<code>声明</code>，以提供额外的授权状态信息。</p><p>比如<code>payload</code>指定了一个带有用户名和过期时间戳的声明，可以使用以下JSON表示:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&quot;sub&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&quot;exp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1640995200</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Base64编码后为</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTY0MDk5NTIwMH0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="jwt-signature" tabindex="-1"><a class="header-anchor" href="#jwt-signature"><span>JWT Signature</span></a></h3><p><code>signature</code>提供了<code>header</code>和<code>payload</code>的可验证签名。更改<code>header</code>或<code>payload</code>的任何部分都会导致不同的签名。使用对称密钥或非对称密钥对的私钥生成<code>signature</code>，这个<code>signature</code>就可以(使用公钥)被用来去验证<code>header</code>和<code>payload</code>是否被篡改，是否还是服务最初发布的原始值。<a href="https://datatracker.ietf.org/doc/html/rfc7519#section-6" target="_blank" rel="noopener noreferrer">RFC 7519第6节</a>描述了不安全的jwt，其中签名元素为空字符串，签名算法为空，但是这种实现并不常见，需要额外的安全措施，并不适合大多数使用场景。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Apache NiFi从<code>0.4.0</code>版本起就开始利用<code>JSON Web Tokens</code>来提供持久的用户界面访问。除了使用<code>X.509证书</code>的<code>TLS双向认证</code>外，jwt还支持大多数NiFi认证策略，包括<code>LDAP</code>、<code>Kerberos</code>、<code>OpenID Connect</code>和<code>SAML</code>。在成功交换凭证之后，NiFi服务生成并返回一个JWT, web浏览器将使用它来处理所有后续请求。这种方法将对身份提供者的影响最小化，还简化了完成登录过程后的应用程序访问。</p><p>尽管JWT的生成、签名和验证对NiFi用户或管理员并不直接可见，但这些功能对于应用程序的安全性来说是必不可少的。NiFi最近的变化改进了JWT处理的各个方面，增强了服务器和客户端处理中的应用程序安全性。这些更新涵盖了NiFi在登录处理过程中产生的所有<code>JSON Web Tokens</code>的<code>密钥生成</code>、<code>密钥存储</code>、<code>签名验证</code>和<code>令牌撤销</code>。在评估认证策略和考虑整体系统安全时，根据这些更新的实现来理解NiFi JWT处理还是很有用的。</p><h2 id="实现概要" tabindex="-1"><a class="header-anchor" href="#实现概要"><span>实现概要</span></a></h2><p>对JWT处理的更新几乎涉及到实现的每个方面，从支持库到客户机请求格式。最初的实现和更新后的实现都依赖于<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>来提供web应用程序安全的基础结构。</p><h3 id="nifi最初的jwt实现" tabindex="-1"><a class="header-anchor" href="#nifi最初的jwt实现"><span>NIFI最初的JWT实现</span></a></h3><p>NiFi 1.14.0和更早版本的JSON Web令牌实现包括以下特性:</p><ul><li>基于<a href="https://github.com/jwtk/jjwt" target="_blank" rel="noopener noreferrer">JJWT</a>库</li><li>使用随机UUID为每个经过身份验证的用户生成<code>对称密钥</code></li><li>在位于文件系统上的<code>H2数据库中存储</code>对称密钥</li><li>基于<a href="https://en.wikipedia.org/wiki/HMAC" target="_blank" rel="noopener noreferrer">HMAC</a>和SHA-256的JWT签名验证</li><li>基于<code>删除对称密钥</code>的<code>令牌撤销</code></li><li>Web浏览器使用HTTP <code>Authorization</code>头和使用<code>本地存储(Local Storage)</code>来存储Token</li></ul><h3 id="nifi新版的jwt实现" tabindex="-1"><a class="header-anchor" href="#nifi新版的jwt实现"><span>NIFI新版的JWT实现</span></a></h3><p>JWT处理的更新包括以下特性:</p><ul><li>基于<a href="https://docs.spring.io/spring-security/site/docs/current/reference/html5/#spring-security-oauth2-jose" target="_blank" rel="noopener noreferrer">Spring Security OAuth 2.0 JOSE</a>和<a href="https://connect2id.com/products/nimbus-jose-jwt" target="_blank" rel="noopener noreferrer">Nimbus JOSE JWT</a>库</li><li>使用RSA算法生成<code>非对称密钥</code>对，密钥大小为4096位</li><li>私钥存储在应用程序内存中</li><li>公钥存储在持久化到文件系统的<a href="http://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#state_providers" target="_blank" rel="noopener noreferrer">local State Provider</a></li><li><code>密钥对</code>基于可配置的持续时间进行更新，默认为1小时</li><li>使用<a href="https://en.wikipedia.org/wiki/Probabilistic_signature_scheme" target="_blank" rel="noopener noreferrer">RSASSA-PSS</a>和SHA-512进行JWT签名验证</li><li>基于<code>State Provider记录</code>失效的<code>令牌标识符</code>，实现<code>令牌撤销</code></li><li>Web浏览器使用限制JavaScript访问的HTTP会话<code>cookie</code>来存储Token</li></ul><h2 id="更新前后对比" tabindex="-1"><a class="header-anchor" href="#更新前后对比"><span>更新前后对比</span></a></h2><p>重构NiFi JWT涉及到对<code>nifi-web-security</code>模块的大量代码更改，包括配置和请求处理组件。更改JWT生成和处理还提供了引入新单元测试来验证组件行为的机会。Spring Security框架的最新开发允许用标准实现替换几个自定义类。虽然NiFi没有实现<code>OAuth 2.0</code>规范，但更新后的JWT实现使用了几个<code>Spring Security OAuth 2.0</code>组件，它们提供了可配置的令牌验证。一个新的配置类将支持的组件连接在一起，各个元素使用私有变量来指定各个方面，比如键大小和处理算法。虽然一些属性可以作为NiFi应用程序属性公开，但内部默认值为所有部署提供了高级别的安全性。</p><blockquote><p>使用默认值就够用了</p></blockquote><h3 id="库对比" tabindex="-1"><a class="header-anchor" href="#库对比"><span>库对比</span></a></h3><p>自JWT处理在<code>NiFi 0.4.0</code>中首次亮相以来，就使用<code>JJWT</code>库实现令牌的生成、签名和验证。<code>JJWT</code>库里包含了大量的特性和大量的测试，而<code>Spring Security OAuth 2.0</code>依赖于<code>Nimbus JOSE JWT</code>库，后者提供了一些额外的功能，例如使用JSON Web Keys对令牌验证的简化支持。这两个库都为JWT处理提供了坚实的基础，但对于依赖于<code>Spring Security OAuth 2.0</code>的应用程序来说，<code>Nimbus JOSE JWT</code>是构建自定义功能的最直接的选择。随着<code>Spring Security</code>依赖的引入，包括<code>spring-security-oauth2-resource-server</code>和<code>spring-security-oauth2-jose</code>，迁移到<code>Nimbus JOSE JWT</code>是首选。</p><p><code>Spring Security OAuth 2.0</code>库提供了许多用于实现令牌身份验证的有用组件。<code>JwtAuthenticationProvider</code>实现了标准的<code>Spring Security AuthenticationProvider</code>接口，并允许与NiFi授权组件相匹配的自定义身份验证转换策略。利用<code>Spring Security</code>消除了对自定义类的需要。<code>Spring Security</code>还提供了通用的<code>JwtDecoder</code>和<code>OAuth2TokenValidator</code>接口，用于抽象令牌的解析和验证。通过可扩展和可组合的实现，<code>Spring Security OAuth 2.0</code>模块简化了NiFi JWT处理，并与web安全配置的其余部分自然匹配。</p><p><code>Nimbus库</code>包含了几个标准接口，包括<code>JWTProcessor</code>和<code>JWSKeySelector</code>，它们为声明验证和签名验证提供了扩展点。这些接口的实现支持与<code>Spring Security OAuth 2.0</code>组件的直接集成，还提供了针对离散特性进行单元测试的机会。<code>Nimbus库</code>还包括一套完整的JWT对象建模类，这使得它更容易实现特性，而无需担心直接JSON解析和序列化。</p><h3 id="秘钥的生成对比" tabindex="-1"><a class="header-anchor" href="#秘钥的生成对比"><span>秘钥的生成对比</span></a></h3><p>用于<code>JSON Web signature</code>生成和验证的<code>加密密钥</code>是实现安全性的一个基本元素。关键是要有足够的<code>长度</code>和<code>随机性</code>。一个弱密钥或被破坏的密钥可能被对手获取并冒充其他用户或提供升级特权的恶意jwt。</p><p><code>NiFi 1.14.0</code>及<code>之前版本</code>使用<code>java.util.UUID.randomUUID()</code>为每个经过身份验证的用户生成唯一的<code>对称密钥</code>。为每个用户提供一个唯一的密钥可以确保一个被破坏的密钥不能用于为不同的用户生成JWT。尽管随机UUID方法生成36个字符的字符串，但有效的随机性还是要小得多。</p><p>随机UUID方法使用<code>java.security.SecureRandom</code>生成16个随机字节，但是<a href="https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)" target="_blank" rel="noopener noreferrer">UUID版本4</a>需要使用一个字节来表示UUID版本，一个字节来表示变体，将有效的随机字节数减少到14，或122位。尽管潜在的随机值的数量仍然非常大，但按照<a href="https://datatracker.ietf.org/doc/html/rfc7518#section-3.2" target="_blank" rel="noopener noreferrer">RFC 7518 Section 3.2</a>里的描述，122位还不到使用SHA-256的HMAC所需的最小密钥长度的一半。</p><p>更新后的JWT实现将<code>HMAC SHA-256</code>算法替换为基于<code>RSA密钥对</code>的数字签名。NiFi不是为每个用户创建一个密钥，而是生成一个密钥大小为4096位的<code>共享密钥对</code>。<a href="https://datatracker.ietf.org/doc/html/rfc7518#section-3.5" target="_blank" rel="noopener noreferrer">RFC 7518 Section 3.5</a>要求使用RSASSA-PSS时密钥最小为2048位，NiFi值为4096符合当前推荐的强RSA密钥对。NiFi使用标准的<code>Java KeyPairGenerator</code>接口，该接口委托给已配置的Java安全提供程序，并利用SecureRandom类进行随机生成。</p><blockquote><p>NiFi新版的JWT的<code>RSA密钥对</code>中，私钥用于生成<code>signature</code>，公钥要验证<code>signature</code>。</p></blockquote><h4 id="秘钥更新周期" tabindex="-1"><a class="header-anchor" href="#秘钥更新周期"><span>秘钥更新周期</span></a></h4><p>为了减少潜在的密钥泄露，NiFi以可配置的时间间隔生成新的密钥对，默认为1小时。nifi中的以下属性，可配置属性调整秘钥更新间隔:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>nifi.security.user.jws.key.rotation.period</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该属性支持使用ISO 8601标准的间隔时间，默认值为<code>PT1H</code>。更频繁地生成新密钥对会使用额外的计算资源，而较少频繁地更新会影响被破坏的密钥保持有效的时间长度。</p><blockquote><p><code>JwtAuthenticationSecurityConfiguration</code>配置类在生成bean的<code>keyGenerationCommand()</code>方法中，会利用Spring的<code>ThreadPoolTaskScheduler</code>,注册一个<code>KeyGenerationCommand</code>的定时任务，调度周期就是<code>nifi.security.user.jws.key.rotation.period</code>(默认一小时)。 <code>KeyGenerationCommand</code>的<code>run</code>方法会被调度生成秘钥对，以及一个UUID(<code>JWT ID</code>)，然后更新内存中的私钥，将新的公钥存在Local State中。</p></blockquote><h3 id="秘钥存储的对比" tabindex="-1"><a class="header-anchor" href="#秘钥存储的对比"><span>秘钥存储的对比</span></a></h3><p>最初的NiFi JWT实现将生成的对称密钥存储在位于文件系统上的H2数据库中。数据库表为每个用户建立一条记录，这条记录将生成的UUID与用户标识符关联起来。在<code>NiFi 1.10.0</code>之前，H2数据库在初次登录后为每个用户保留相同的UUID对称密钥。这种方法不支持任何类型的JWT撤销，依赖于<code>过期声明</code>来使令牌撤销。</p><p>在<code>NiFi 1.10.0</code>发布更新后，注销用户界面删除了用户当前的对称密钥，有效地撤销了当前令牌，并强制在后续登录时生成一个新的UUID。尽管有这些改进，但还是使用了没有任何额外保护的H2数据库存储对称密钥。</p><p>更新后的实现利用非对称加密的属性，将生成的<code>私钥</code>与<code>公钥``分开存储</code>。NiFi将当前的<code>私钥保存在内存中</code>，并将相关的<code>公钥存储在Local State Provider</code>中。这种方法允许NiFi在应用程序重启后仍可以使用公钥验证当前令牌，同时避免不安全的私钥存储。默认的Local State Provider将条目保存在NiFi安装目录下名为local的目录中。</p><blockquote><p>私钥用于生成签名，存在内存中。公钥用于校验签名是否合法，存在Local State中。 源码<code>StandardJwsSignerProvider</code>中的<code>currentSigner</code>里存的有私钥，只在内存，无持久化。 在源码<code>StandardVerificationKeyService</code>的<code>save</code>方法里可以看到，存到state中的是key就是所谓的<code>JWT ID</code>(生成秘钥对的时候同时生成的UUID)，value是一个<code>VerificationKey</code>对象序列化后的字符串，其中包含了公钥，算法和公钥的过期时间等信息(新生成的公钥过期时间由<code>nifi.security.user.jws.key.rotation.period</code>配置决定，默认一小时，但后面在签名时，会被新生成的Token的过期时间所覆盖)。</p></blockquote><h3 id="签名算法的对比" tabindex="-1"><a class="header-anchor" href="#签名算法的对比"><span>签名算法的对比</span></a></h3><p>基于密钥生成和密钥存储的改变，新的NiFi JWT实现使用<code>PS512</code> JSON Web签名算法代替<code>HS256</code>(<code>HMAC</code>的<code>SHA-256</code>算法依赖于对称密钥来生成签名和验证，而其他算法则使用私钥进行签名，使用公钥进行验证)。由于NiFi同时充当令牌颁发者和资源服务器，HMAC SHA-256算法提供了一个可接受的实现。但是，在令牌创建和验证中使用相同的密钥，需要对敏感信息进行持久的存储，而迁移到基于<code>非对称密钥对</code>的算法会消除这一需求。</p><p>在技术术语中，使用<code>HMAC SHA-256</code>生成的JWT的签名部分不是一个加密签名，而是一个提供数据完整性度量的消息验证码。<code>PS512</code>算法是利用非对称密钥对的几个选项之一。<code>RS512</code>和<code>PS512</code>都使用RSA密钥对，但<code>PS512</code>使用更新的RSA签名方案和<a href="https://datatracker.ietf.org/doc/html/rfc8017#section-8.1" target="_blank" rel="noopener noreferrer">RFC 8017 Section 8.1</a>中的<code>Appendix-Probabilistic Signature Scheme</code>策略。与<code>RSASSA-PKCS1-v1_5</code>相比，<code>RSASSA-PSS</code>标准提供了更好的安全性，<code>RSASSA-PKCS1-v1_5</code>嵌入了一个哈希函数规范，该规范可能会被较弱的替代方案替代。尽管<a href="https://datatracker.ietf.org/doc/html/rfc8017#section-8" target="_blank" rel="noopener noreferrer">RFC 8017 Section 8</a>指出，目前还没有针对支持<code>RS512</code>的签名策略的已知攻击，但还是推荐使用<code>PS512</code>算法。其他新的非对称密钥对算法也可用，如<a href="https://datatracker.ietf.org/doc/html/rfc8037" target="_blank" rel="noopener noreferrer">RFC 8037 3.1节</a>中定义的<code>Edwards-curve Ed25519</code>，这些算法需要额外的支持库，NiFi可以考虑在未来的版本中包含这些支持库。</p><h3 id="token失效的对比" tabindex="-1"><a class="header-anchor" href="#token失效的对比"><span>Token失效的对比</span></a></h3><p>随着NIFI从<code>对称密钥</code>向<code>共享的非对称密钥对</code>的转变，有必要引入一种新的实现<code>令牌撤销</code>的方法。</p><p><code>过期机制</code>强制令牌拥有有限的生命周期，<code>最长可达12小时</code>，而<code>令牌撤销</code>可以确保完成注销过程后令牌不再有效。</p><p>NiFi版本<code>1.10.0</code>到<code>1.14.0</code>通过删除用户的对称密钥实现了有效的<code>令牌撤销</code>，而更新后的实现则是通过记录和跟踪被撤销的令牌标识符来实现的<code>令牌撤销</code>。</p><p><a href="https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7" target="_blank" rel="noopener noreferrer">JWT ID</a>声明提供了标识惟一令牌的标准方法。在令牌生成期间，NiFi分配一个<code>随机UUID作为JWT ID</code>。当用户发起注销过程时，NiFi记录下这个对应的JWT ID，NiFi根据记录的JWT ID拒绝未来的请求，这种方式使NiFi能够处理令牌发放和令牌失效之间的间隔状态。<code>JWT ID</code>的记录依赖于NiFi<code>Local State Provider</code>，在重启时会被清理一遍(清理那些过期的)。这种撤销策略只存储最少的信息，更加细粒度的使用了标准的JWT属性。同时NiFi使用可配置的秘钥更新周期来查找和删除过期的失效记录。</p><blockquote><p>令牌失效有两种，一种是令牌过期，一种是用户发起注销引起的<code>令牌撤销</code>。 前文提及，公钥存储在<code>Local State</code>，key就是<code>JWT ID</code>，value是一个对象序列化后的字符串，里面包含了公钥的过期时间。源码<code>JwtAuthenticationSecurityConfiguration</code>配置类在生成bean的<code>keyExpirationCommand()</code>方法中，会利用Spring的<code>ThreadPoolTaskScheduler</code>,注册一个<code>KeyExpirationCommand</code>的定时任务，调度周期就是<code>nifi.security.user.jws.key.rotation.period</code>(默认一小时)。<code>KeyExpirationCommand</code>会调用<code>StandardVerificationKeyService</code>中<code>deleteExpired()</code>方法，用来清理过期的公钥记录。 【注意】：虽然公钥有过期时间(默认一小时)，会被定时清理，但是这个过期时间会在生成Token时被Token中的过期时间覆盖，比如生成的token默认过期时间12小时，则公钥的过期时间也会更新成12小时。而每次生成的<code>JWT ID</code>不同，Local State(可以简单理解成一个map)中是可以同时存在多个时段的公钥信息。举个形象点的例子，NIFI启动后生成了一个共享的秘钥对，其中公钥存储到了Local State中，过期时间是默认值一小时(假定我们没有修改<code>nifi.security.user.jws.key.rotation.period</code>)。过了40分钟后，此时公钥过期时间还剩下20分钟，然后用户张三登陆了NiFi，NIFI程序验证通过了张三的用户名和密码后，要生成并返回JWT，假定生成的Token的过期时间是12小时，其中在生成<code>signature</code>的时候会将这个12小时的过期时间更新在当前的公钥存储里，于是乎此时公钥过期时间变成了12小时。然后再过20分钟(满一小时了)，NIFI程序自动生成了新的秘钥对，内存中的私钥被替换成了新的，Local State中增加了新的公钥，即张三登陆时拿到的那个Token所对应的所需要的公钥还在Local State中。 用户完成登出过程后程序会调用<code>StandardJwtLogoutListener</code>的<code>logout(final String bearerToken)</code>方法，方法中会调用<code>StandardJwtRevocationService</code>的<code>setRevoked(final String id, final Instant expiration)</code>方法，将当前的<code>JWT ID</code>记录下来，下一次这个Token发起请求的时候就会拒绝访问。同理公钥存储的过期清理的定时任务，<code>JWT ID</code>也有定时任务进行过期清理，这里不赘述。</p></blockquote><h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h3><p>在JWT处理的最初实现中，NiFi使用HTTP <code>Authorization</code> header传递令牌，使用<a href="https://datatracker.ietf.org/doc/html/rfc6750#section-2.1" target="_blank" rel="noopener noreferrer">RFC 6750 Section 2.1</a>中定义的<code>Bearer</code>方案。在成功交换凭证之后，NiFi用户界面使用<code>Local Storage</code>存储JWT进行持久访问。基于令牌寿命和跨浏览器实例的持久存储，用户界面维护一个经过身份验证的会话，而不需要额外的访问凭据请求。该接口还利用令牌的存在来指示是否显示登出链接。</p><h4 id="本地存储的问题" tabindex="-1"><a class="header-anchor" href="#本地存储的问题"><span>本地存储的问题</span></a></h4><p>使用标准HTTP <code>Authorization</code> header提供了在后续请求中传递JWT的直接方法，但是利用<code>Local Storage</code>会引起关于令牌本身安全性的潜在问题。浏览器<code>Local Storage</code>在应用程序重新启动时持续存在，如果用户在没有完成NiFi注销过程的情况下关闭浏览器，令牌将保持持久性，并可用于未来的浏览器会话。而在NiFi用户界面中执行的所有JavaScript代码都可以使用本地存储，可能导致NIFI受到跨站点脚本攻击。基于这些原因，Web应用程序安全方面建议不要将任何敏感信息持久化到<code>Local Storage</code>。</p><p>除了潜在的安全问题外，使用<code>Local Storage</code>还会在不同的浏览器实例中访问应用程序资源。NiFi内容查看器等特性需要实现自定义的一次性密码身份验证策略，当浏览器试图加载高级用户界面扩展的资源时，也会导致访问问题。</p><blockquote><p>Local Storage:<a href="https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage" target="_blank" rel="noopener noreferrer">https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage</a>：Also known as Offline Storage, Web Storage. Underlying storage mechanism may vary from one user agent to the next. In other words, any authentication your application requires can be bypassed by a user with local privileges to the machine on which the data is stored. Therefore, it&#39;s recommended to avoid storing any sensitive information in local storage where authentication would be assumed.</p></blockquote><h4 id="基于cookie的实现" tabindex="-1"><a class="header-anchor" href="#基于cookie的实现"><span>基于Cookie的实现</span></a></h4><p>为了解决安全和可用性问题，NiFi最近的更新使用了HTTP会话<code>cookie</code>替换了JWT<code>Local Storage</code>。会话<code>cookie</code>实现使用<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies" target="_blank" rel="noopener noreferrer">HttpOnly</a>属性来限制访问，使其对JavaScript不可用，这缓解了一些潜在的漏洞。浏览器在重新启动时不维护会话<code>cookie</code>，这避免了与有效或陈旧令牌的持久性相关的问题。</p><p>新的实现使用了<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite" target="_blank" rel="noopener noreferrer">SameSite</a>属性的<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#strict" target="_blank" rel="noopener noreferrer">Strict</a>设置，该设置指示支持浏览器避免在第三方站点发起的请求中发送cookie。会话cookie还使用<a href="https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-05#section-4.1.3" target="_blank" rel="noopener noreferrer">Cookie Name Prefixes</a>来通知支持它的浏览器，cookie必须包含<a href="https://owasp.org/www-community/controls/SecureCookieAttribute" target="_blank" rel="noopener noreferrer">Secure</a>属性，要求在后续的请求中传输使用HTTPS。</p><p>由于JavaScript对HTTP会话<code>cookie</code>的访问限制，更新后的实现还采用了一种不同的方法来注销支持状态。NiFi用户界面将过期时间戳存储在<code>Session Storage</code>中，而不是将整个令牌存储在<code>Local Storage</code>中。与会话cookie类似，浏览器在关闭时从<code>Session Storage</code>中删除项目。此策略依赖于存储最小数量的信息，且使用寿命较短，从而避免了与令牌本身相关的安全问题和潜在的持久性问题。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>NiFi中的<code>JSON Web Tokens</code>并不是Web应用程序安全最明显的方面，但它们在许多部署配置中起到了至关重要的作用。作为一个顶级的开源项目，开发一个最佳的JWT实现需要考虑许多因素。<code>NiFi 0.4.0</code>中JWT支持的最初部署解决了各种用例，但技术进步和最近的库开发为改进实现提供了几个机会。更新后的JWT集成增强了服务器和浏览器代码中的安全性，为潜在的和理论上的攻击提供了额外的保护。web应用安全的大部分方面都需要不断的评估，NiFi JWT支持也不例外。</p><blockquote><p>关于请求NIFI后端API，以表单形式将<code>username</code> <code>password</code>(<code>application/x-www-form-urlencoded</code>)Post到https://XX:8443/access/token，返回token然后增加到Cookie(name是<code>__Secure-Authorization-Bearer</code>)。 如果想避免到NIFI界面登陆，直接重定向到流程，同域的还好说，将token添加到cookie中就好了，而如果是跨域就有些麻烦了。跨域的话最直接的方式就是反向代理(比如nginx)NIFI的地址，使与自定义的web应用同域。还有一种稍微复杂点的需要开发的操作，我是这么干的，我自定义了一套无侵入源码NIFI的多用户多租户的登陆以及授权(一个nar)，在NIFI免安全认证开放一个Get请求API(自定义的无侵入源码的war)，向这个API传递token和groupId参数，然后在NIFI程序里设置cookie并重定向，最后这种方案有时间的话再写篇文章进行说明。</p></blockquote>',78),c=[r];function d(n,s){return i(),o("div",null,c)}const p=e(t,[["render",d],["__file","034-JWT.html.vue"]]),k=JSON.parse('{"path":"/ApacheNIFI%E6%95%99%E7%A8%8B/034-JWT.html","title":"Apache NiFi中的JWT身份验证","lang":"zh-CN","frontmatter":{"title":"Apache NiFi中的JWT身份验证","date":"2022-01-19T00:00:00.000Z","category":"ApacheNIFI教程","tag":"NIFI","author":"张诚","description":"大部分文章译自原文：https://exceptionfactory.com/posts/2021/10/23/improving-jwt-authentication-in-apache-nifi/ 同时结合译文，参照NIFI(1.15)源码进行分析讲述举例说明 本文目的 深入对Apache NiFi的新版JWT身份验证深入理解。 为自定义外部应用程...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/ApacheNIFI%E6%95%99%E7%A8%8B/034-JWT.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"Apache NiFi中的JWT身份验证"}],["meta",{"property":"og:description","content":"大部分文章译自原文：https://exceptionfactory.com/posts/2021/10/23/improving-jwt-authentication-in-apache-nifi/ 同时结合译文，参照NIFI(1.15)源码进行分析讲述举例说明 本文目的 深入对Apache NiFi的新版JWT身份验证深入理解。 为自定义外部应用程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"张诚"}],["meta",{"property":"article:tag","content":"NIFI"}],["meta",{"property":"article:published_time","content":"2022-01-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache NiFi中的JWT身份验证\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张诚\\"}]}"]]},"headers":[{"level":2,"title":"本文目的","slug":"本文目的","link":"#本文目的","children":[]},{"level":2,"title":"背景知识","slug":"背景知识","link":"#背景知识","children":[]},{"level":2,"title":"JWT的组成元素","slug":"jwt的组成元素","link":"#jwt的组成元素","children":[{"level":3,"title":"JWT Header","slug":"jwt-header","link":"#jwt-header","children":[]},{"level":3,"title":"JWT Payload","slug":"jwt-payload","link":"#jwt-payload","children":[]},{"level":3,"title":"JWT Signature","slug":"jwt-signature","link":"#jwt-signature","children":[]}]},{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"实现概要","slug":"实现概要","link":"#实现概要","children":[{"level":3,"title":"NIFI最初的JWT实现","slug":"nifi最初的jwt实现","link":"#nifi最初的jwt实现","children":[]},{"level":3,"title":"NIFI新版的JWT实现","slug":"nifi新版的jwt实现","link":"#nifi新版的jwt实现","children":[]}]},{"level":2,"title":"更新前后对比","slug":"更新前后对比","link":"#更新前后对比","children":[{"level":3,"title":"库对比","slug":"库对比","link":"#库对比","children":[]},{"level":3,"title":"秘钥的生成对比","slug":"秘钥的生成对比","link":"#秘钥的生成对比","children":[]},{"level":3,"title":"秘钥存储的对比","slug":"秘钥存储的对比","link":"#秘钥存储的对比","children":[]},{"level":3,"title":"签名算法的对比","slug":"签名算法的对比","link":"#签名算法的对比","children":[]},{"level":3,"title":"Token失效的对比","slug":"token失效的对比","link":"#token失效的对比","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":20.53,"words":6160},"filePathRelative":"ApacheNIFI教程/034-JWT.md","localizedDate":"2022年1月19日","excerpt":"<blockquote>\\n<p>大部分文章译自原文：https://exceptionfactory.com/posts/2021/10/23/improving-jwt-authentication-in-apache-nifi/\\n同时结合译文，参照NIFI(1.15)源码进行分析讲述举例说明</p>\\n</blockquote>\\n<h2>本文目的</h2>\\n<ol>\\n<li>深入对Apache NiFi的新版JWT身份验证深入理解。</li>\\n<li>为自定义外部应用程序访问使用了JWT身份验证的NIFI服务提供参考和开发依据。</li>\\n</ol>\\n<h2>背景知识</h2>\\n<p><code>JSON Web Tokens</code>为众多Web应用程序和框架提供了灵活的身份验证和授权标准。<a href=\\"https://datatracker.ietf.org/doc/html/rfc7519\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC 7519</a>概述了JWT的基本要素，枚举了符合公共声明属性的所需编码，格式和已注册的<code>声明</code>属性名称(payload里属性称为<code>声明</code>)。<a href=\\"https://datatracker.ietf.org/doc/html/rfc7515\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC 7515</a>中的JSON Web签名和<a href=\\"https://datatracker.ietf.org/doc/html/rfc7518\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC 7518</a>中的JSON Web算法描述了JWT的支持标准，其他的比如<a href=\\"https://en.wikipedia.org/wiki/OAuth\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OAuth 2.0</a>框架的安全标准构建在这些支持标准上，就可以在各种服务中启用授权。</p>","autoDesc":true}');export{p as comp,k as data};
