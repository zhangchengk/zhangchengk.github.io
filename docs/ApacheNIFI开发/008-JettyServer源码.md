---
title: JettyServer源码解读 
date: 2020-05-21
category: ApacheNIFI开发
tag: NIFI
---
NiFi.java 源码解读中，我们有看到这一段:

```java
 // frameworkClassLoader类加载器加载framework bundle(nifi-framework-nar) 
        Thread.currentThread().setContextClassLoader(frameworkClassLoader);
        //  顾名思义  其中启用 了Jetty
        Class<?> jettyServer = Class.forName("org.apache.nifi.web.server.JettyServer", true, frameworkClassLoader);
        Constructor<?> jettyConstructor = jettyServer.getConstructor(NiFiProperties.class, Set.class);

        final long startTime = System.nanoTime();
        nifiServer = (NiFiServer) jettyConstructor.newInstance(properties, narBundles);
        nifiServer.setExtensionMapping(extensionMapping);
        nifiServer.setBundles(systemBundle, narBundles);

        if (shutdown) {
            LOGGER.info("NiFi has been shutdown via NiFi Bootstrap. Will not start Controller");
        } else {
            //余下的启动就交给JettyServer了
            nifiServer.start();
        // frameworkClassLoader类加载器加载framework bundle(nifi-framework-nar) 
        Thread.currentThread().setContextClassLoader(frameworkClassLoader);
        //  顾名思义  其中启用 了Jetty
        Class<?> jettyServer = Class.forName("org.apache.nifi.web.server.JettyServer", true, frameworkClassLoader);
        Constructor<?> jettyConstructor = jettyServer.getConstructor(NiFiProperties.class, Set.class);

        final long startTime = System.nanoTime();
        nifiServer = (NiFiServer) jettyConstructor.newInstance(properties, narBundles);
        nifiServer.setExtensionMapping(extensionMapping);
        nifiServer.setBundles(systemBundle, narBundles);

        if (shutdown) {
            LOGGER.info("NiFi has been shutdown via NiFi Bootstrap. Will not start Controller");
        } else {
            //余下的启动就交给JettyServer了
            nifiServer.start();
```
当时只是大概的讲了启动了Jetty，接下来我们就深入了解一下JettyServer里面都干了些什么。从NIFI.java可以看出，使用反射构造JettyServer，传入两个参数，一个是properties，一个是narBundles。而后调用了start()

看JettyServer的构造函数

```java
public JettyServer(final NiFiProperties props, final Set<Bundle> bundles) {
        // 读取nifi.web.jetty.threads配置 默认200 建立线程池 QueuedThreadPool是 Jetty-util里的
        final QueuedThreadPool threadPool = new QueuedThreadPool(props.getWebThreads());
        threadPool.setName("NiFi Web Server");

        // 创建Jetty Server
        this.server = new Server(threadPool);
        this.props = props;

        // 启用基于注解的配置，以确保正确初始化jsp容器
        final Configuration.ClassList classlist = Configuration.ClassList.setServerDefault(server);
        classlist.addBefore(JettyWebXmlConfiguration.class.getName(), AnnotationConfiguration.class.getName());

        // 将http配置(nifi.web.max.header.size 默认16KB)配置到connector(HTTP/HTTPS)
        configureConnectors(server);

        // 从传入的bundles中加载war，返回的是对WebAppContext Collection的GzipHandle(可以动态GZIP解压缩请求并压缩响应的处理程序) 
        // 这里是我们研究的核心代码
        final Handler warHandlers = loadInitialWars(bundles);

        // Handle集合 有序的handle HandlerList会依次调用每一个Handler，直到某个Handler将请求标记为已处理，即setHandled(true);  
        final HandlerList allHandlers = new HandlerList();

        // Only restrict the host header if running in HTTPS mode
        if (props.isHTTPSConfigured()) {
            // HostHeaderHandler是一个ScopedHandler，处理请求前获取请求服务器的主机，校验主机信息，如果不正确 返回错误码 终止Handle继续调用
            HostHeaderHandler hostHeaderHandler = new HostHeaderHandler(props);
            logger.info("Created HostHeaderHandler [" + hostHeaderHandler.toString() + "]");

            // Add this before the WAR handlers
            allHandlers.addHandler(hostHeaderHandler);
        } else {
            logger.info("Running in HTTP mode; host headers not restricted");
        }

        //HandlerCollection会依次调用每一个Handler，即使请求已经被处理了  
        final ContextHandlerCollection contextHandlers = new ContextHandlerCollection();
        contextHandlers.addHandler(warHandlers);
        allHandlers.addHandler(contextHandlers);
        server.setHandler(allHandlers);
        //server.start()的时候，会调用到DeploymentManager的dostart()方法
        deploymentManager = new DeploymentManager();
        deploymentManager.setContextAttribute(CONTAINER_INCLUDE_PATTERN_KEY, CONTAINER_INCLUDE_PATTERN_VALUE);
        deploymentManager.setContexts(contextHandlers);
        server.addBean(deploymentManager);
    }
```

loadInitialWars方法：
```java
private Handler loadInitialWars(final Set<Bundle> bundles) {

        // 查询war包(回忆，此时nar包都被解压到work目录了，从那些目录里筛选查找war)
        final Map<File, Bundle> warToBundleLookup = findWars(bundles);

        // 有五个特定的war包需要发布
        File webUiWar = null;
        File webApiWar = null;
        File webErrorWar = null;
        File webDocsWar = null;
        File webContentViewerWar = null;
        Map<File, Bundle> otherWars = new HashMap<>();
        for (Map.Entry<File,Bundle> warBundleEntry : warToBundleLookup.entrySet()) {
            final File war = warBundleEntry.getKey();
            final Bundle warBundle = warBundleEntry.getValue();

            if (war.getName().toLowerCase().startsWith("nifi-web-api")) {
                webApiWar = war;
            } else if (war.getName().toLowerCase().startsWith("nifi-web-error")) {
                webErrorWar = war;
            } else if (war.getName().toLowerCase().startsWith("nifi-web-docs")) {
                webDocsWar = war;
            } else if (war.getName().toLowerCase().startsWith("nifi-web-content-viewer")) {
                webContentViewerWar = war;
            } else if (war.getName().toLowerCase().startsWith("nifi-web")) {
                webUiWar = war;
            } else {
                otherWars.put(war, warBundle);
            }
        }

        // 这五个war是必需的
        if (webUiWar == null) {
            throw new RuntimeException("Unable to load nifi-web WAR");
        } else if (webApiWar == null) {
            throw new RuntimeException("Unable to load nifi-web-api WAR");
        } else if (webDocsWar == null) {
            throw new RuntimeException("Unable to load nifi-web-docs WAR");
        } else if (webErrorWar == null) {
            throw new RuntimeException("Unable to load nifi-web-error WAR");
        } else if (webContentViewerWar == null) {
            throw new RuntimeException("Unable to load nifi-web-content-viewer WAR");
        }

        // 其他的扩展war其实只包含4种，ContentViewer,ProcessorConfiguration,ControllerServiceConfiguration ReportingTaskConfiguration 举个例子：在使用UpdateAttribute组件的时候，配置页面有一个高级选项，他就是一个扩展war,每个扩展war在webapp目录下会有一个META-INF目录,比如ifi-update-attribute-ui 里面就有一个配置文件nifi-processor-configuration(没有这个目录和对应的配置文件的war都被忽略掉)
        final ExtensionUiInfo extensionUiInfo = loadWars(otherWars);
        componentUiExtensionWebContexts = new ArrayList<>(extensionUiInfo.getComponentUiExtensionWebContexts());
        contentViewerWebContexts = new ArrayList<>(extensionUiInfo.getContentViewerWebContexts());
        componentUiExtensions = new UiExtensionMapping(extensionUiInfo.getComponentUiExtensionsByType());

        final HandlerCollection webAppContextHandlers = new HandlerCollection();
        final Collection<WebAppContext> extensionUiContexts = extensionUiInfo.getWebAppContexts();
        extensionUiContexts.stream().forEach(c -> webAppContextHandlers.addHandler(c));

        final ClassLoader frameworkClassLoader = getClass().getClassLoader();

        // 加载web ui  (WebAppContext也是Handle 读取web.xml等等) 因为这些war都打在nifi-framework-nar的nar包中，所以使用的frameworkClassLoader类加载器为parent类加载器
        final WebAppContext webUiContext = loadWar(webUiWar, "/nifi", frameworkClassLoader);
        webUiContext.getInitParams().put("oidc-supported", String.valueOf(props.isOidcEnabled()));
        webUiContext.getInitParams().put("knox-supported", String.valueOf(props.isKnoxSsoEnabled()));
        webUiContext.getInitParams().put("whitelistedContextPaths", props.getWhitelistedContextPaths());
        webAppContextHandlers.addHandler(webUiContext);

        // 加载web app 
        webApiContext = loadWar(webApiWar, "/nifi-api", frameworkClassLoader);
        webAppContextHandlers.addHandler(webApiContext);

        // 加载 content viewer app
        webContentViewerContext = loadWar(webContentViewerWar, "/nifi-content-viewer", frameworkClassLoader);
        webContentViewerContext.getInitParams().putAll(extensionUiInfo.getMimeMappings());
        webAppContextHandlers.addHandler(webContentViewerContext);

        // 加载 documentation war
        final String docsContextPath = "/nifi-docs";
        webDocsContext = loadWar(webDocsWar, docsContextPath, frameworkClassLoader);

        // 在文档Web应用程序中添加为HTML文档提供服务的servlet
        addDocsServlets(webDocsContext);

        webAppContextHandlers.addHandler(webDocsContext);

        // 加载 web error app
        final WebAppContext webErrorContext = loadWar(webErrorWar, "/", frameworkClassLoader);
        webErrorContext.getInitParams().put("whitelistedContextPaths", props.getWhitelistedContextPaths());
        webAppContextHandlers.addHandler(webErrorContext);

        // 返回GzipHandle
        return gzip(webAppContextHandlers);
    }
```
主要的流程配置其实已经完了，只需启动就可以了

再简单看一下loadWar方法

```java
private WebAppContext loadWar(final File warFile, final String contextPath, final ClassLoader parentClassLoader) {
        final WebAppContext webappContext = new WebAppContext(warFile.getPath(), contextPath);
        webappContext.setContextPath(contextPath);
        webappContext.setDisplayName(contextPath);

        // i让Jetty检测是否有tlds 网络碎片等等的指令(具体我也不清楚)
        webappContext.setAttribute(CONTAINER_INCLUDE_PATTERN_KEY, CONTAINER_INCLUDE_PATTERN_VALUE);

        // remove slf4j server class to allow WAR files to have slf4j dependencies in WEB-INF/lib
        List<String> serverClasses = new ArrayList<>(Arrays.asList(webappContext.getServerClasses()));
        serverClasses.remove("org.slf4j.");
        webappContext.setServerClasses(serverClasses.toArray(new String[0]));
        webappContext.setDefaultsDescriptor(WEB_DEFAULTS_XML);

        // 获取此Webapp的临时目录 nifi.web.jetty.working.directory
        File tempDir = new File(props.getWebWorkingDirectory(), warFile.getName());
        if (tempDir.exists() && !tempDir.isDirectory()) {
            throw new RuntimeException(tempDir.getAbsolutePath() + " is not a directory");
        } else if (!tempDir.exists()) {
            final boolean made = tempDir.mkdirs();
            if (!made) {
                throw new RuntimeException(tempDir.getAbsolutePath() + " could not be created");
            }
        }
        if (!(tempDir.canRead() && tempDir.canWrite())) {
            throw new RuntimeException(tempDir.getAbsolutePath() + " directory does not have read/write privilege");
        }

        // configure the temp dir
        webappContext.setTempDirectory(tempDir);

        // 设置表单发布的最大大小，以防止来自大型表单的DOS攻击。 (3x the default)
        webappContext.setMaxFormContentSize(600000);

        // 将HTTP安全标头添加到所有响应
        final String ALL_PATHS = "/*";
        ArrayList<Class<? extends Filter>> filters = new ArrayList<>(Arrays.asList(XFrameOptionsFilter.class, ContentSecurityPolicyFilter.class, XSSProtectionFilter.class));
        if(props.isHTTPSConfigured()) {
            filters.add(StrictTransportSecurityFilter.class);
        }
        filters.forEach( (filter) -> addFilters(filter, ALL_PATHS, webappContext));

        try {
            // 设置类加载器
            webappContext.setClassLoader(new WebAppClassLoader(parentClassLoader, webappContext));
        } catch (final IOException ioe) {
            startUpFailure(ioe);
        }

        logger.info("Loading WAR: " + warFile.getAbsolutePath() + " with context path set to " + contextPath);
        return webappContext;
    }
```

而后调用JettyServer的start方法，就是启动Jetty，然后就是(主要在nifi-web-api这个war)读web.xml 加载管理各种bean。




