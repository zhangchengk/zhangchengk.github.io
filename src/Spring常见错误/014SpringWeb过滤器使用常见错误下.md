---
title: Spring Web 过滤器使用常见错误下
date: 2024-07-08
category: Spring常见错误
tag: Spring
order: 14
---

## 案例 1：@WebFilter 过滤器使用 @Order 无效

假设我们还是基于 `Spring Boot` 去开发上节课的学籍管理系统，这里我们简单复习下上节课用到的代码。

首先，创建启动程序的代码如下：

```java 
@SpringBootApplication
@ServletComponentScan
@Slf4j
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        log.info("启动成功");
    }
}
```

实现的 Controller 代码如下：

```java
@Controller
@Slf4j
public class StudentController {
    @PostMapping("/regStudent/{name}")
    @ResponseBody
    public String saveUser(String name) throws Exception {
        System.out.println("......用户注册成功");
        return "success";
    }
}
```

上述代码提供了一个 `Restful` 接口 "`/regStudent`"。该接口只有一个参数 `name`，注册成功会返回"`success`"。

现在，我们来实现两个新的过滤器，代码如下：`AuthFilter`：例如，限制特定 `IP` 地址段（例如校园网内）的用户方可注册为新用户，当然这里我们仅仅 `Sleep 1` 秒来模拟这个过程。

```java
@WebFilter
@Slf4j
@Order(2)
public class AuthFilter implements Filter {
    @SneakyThrows
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
        if(isPassAuth()){
            System.out.println("通过授权");
            chain.doFilter(request, response);
        }else{
            System.out.println("未通过授权");
            ((HttpServletResponse)response).sendError(401);
        }
    }
    private boolean isPassAuth() throws InterruptedException {
        System.out.println("执行检查权限");
        Thread.sleep(1000);
        return true;
    }
}
```

`TimeCostFilter`：计算注册学生的执行耗时，需要包括授权过程。

```java
@WebFilter
@Slf4j
@Order(1)
public class TimeCostFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("#开始计算接口耗时");
        long start = System.currentTimeMillis();
        chain.doFilter(request, response);
        long end = System.currentTimeMillis();
        long time = end - start;
        System.out.println("#执行时间(ms)：" + time);
    }
}
```

在上述代码中，我们使用了 `@Order`，期望 `TimeCostFilter` 先被执行，因为 `TimeCostFilter` 设计的初衷是统计这个接口的性能，所以是需要统计 `AuthFilter` 执行的授权过程的。全部代码实现完毕，执行结果如下：

```
执行检查权限
通过授权
#开始计算接口耗时
......用户注册成功
#执行时间(ms)：33
```

从结果来看，执行时间并不包含授权过程，所以这并不符合我们的预期，毕竟我们是加了 `@Order` 的。但是如果我们交换 `Order` 指定的值，你会发现也不见效果，为什么会如此？难道 `Order` 不能用来排序 `WebFilter` 么？下面我们来具体解析下这个问题及其背后的原理。

## 案例解析

通过上节课的学习，我们得知：当一个请求来临时，会执行到 `StandardWrapperValve` 的 `invoke()`，这个方法会创建 `ApplicationFilterChain`，并通过 `ApplicationFilterChain#doFilter()` 触发过滤器执行，并最终执行到内部私有方法 `internalDoFilter()`， 我们可以尝试在 `internalDoFilter()` 中寻找一些启示：

```java
private void internalDoFilter(ServletRequest request,
                              ServletResponse response)
    throws IOException, ServletException {

    // Call the next filter if there is one
    if (pos < n) {
        ApplicationFilterConfig filterConfig = filters[pos++];
        try {
            Filter filter = filterConfig.getFilter();
```

从上述代码我们得知：过滤器的执行顺序是由类成员变量 `Filters` 决定的，而 `Filters` 变量则是 `createFilterChain()` 在容器启动时顺序遍历 `StandardContext` 中的成员变量 `FilterMaps` 获得的：

```java
public static ApplicationFilterChain createFilterChain(ServletRequest request,
        Wrapper wrapper, Servlet servlet) {

    // 省略非关键代码
    // Acquire the filter mappings for this Context
    StandardContext context = (StandardContext) wrapper.getParent();
    FilterMap filterMaps[] = context.findFilterMaps();
    // 省略非关键代码
    // Add the relevant path-mapped filters to this filter chain
    for (int i = 0; i < filterMaps.length; i++) {
        if (!matchDispatcher(filterMaps[i] ,dispatcher)) {
            continue;
        }
        if (!matchFiltersURL(filterMaps[i], requestPath))
            continue;
        ApplicationFilterConfig filterConfig = (ApplicationFilterConfig)
            context.findFilterConfig(filterMaps[i].getFilterName());
        if (filterConfig == null) {
            continue;
        }
        filterChain.addFilter(filterConfig);
    }
    // 省略非关键代码
    // Return the completed filter chain
    return filterChain;
}
```

下面继续查找对 `StandardContext` 成员变量 `FilterMaps` 的写入引用，我们找到了 `addFilterMapBefore()`：

```java
public void addFilterMapBefore(FilterMap filterMap) {
    validateFilterMap(filterMap);
    // Add this filter mapping to our registered set
    filterMaps.addBefore(filterMap);
    fireContainerEvent("addFilterMap", filterMap);
}
```

到这，我们已经知道过滤器的执行顺序是由 `StandardContext` 类成员变量 `FilterMaps` 的顺序决定，而 `FilterMaps` 则是一个包装过的数组，所以我们只要进一步弄清楚 `FilterMaps` 中各元素的排列顺序即可。我们继续在 `addFilterMapBefore()` 中加入断点，尝试从调用栈中找到一些线索：

```
addFilterMapBefore:2992, StandardContext
addMappingForUrlPatterns:107, ApplicationFilterRegistration
configure:229, AbstractFilterRegistrationBean
configure:44, AbstractFilterRegistrationBean
register:113, DynamicRegistrationBean
onStartup:53, RegistrationBean
selfInitialize:228, ServletWebServerApplicationContext
// 省略非关键代码
```

可知，`Spring` 从 `selfInitialize()` 一直依次调用到 `addFilterMapBefore()`，稍微分析下 `selfInitialize()`，我们可以了解到，这里是通过调用 `getServletContextInitializerBeans()`，获取所有的 `ServletContextInitializer` 类型的 `Bean`，并调用该 `Bean` 的 `onStartup()`，从而一步步以调用栈显示的顺序，最终调用到 `addFilterMapBefore()`。

```java
private void selfInitialize(ServletContext servletContext) throws ServletException {
   prepareWebApplicationContext(servletContext);
   registerApplicationScope(servletContext);
   WebApplicationContextUtils.registerEnvironmentBeans(getBeanFactory(), servletContext);
   for (ServletContextInitializer beans : getServletContextInitializerBeans()) {
      beans.onStartup(servletContext);
   }
}
```

现在我们继续查看 `selfInitialize()` 的细节。首先，查看上述代码中的` getServletContextInitializerBeans()`，因为此方法返回的 `ServletContextInitializer` 类型的 `Bean` 集合顺序决定了 `addFilterMapBefore()` 调用的顺序，从而决定了 `FilterMaps` 内元素的顺序，最终决定了过滤器的执行顺序。`getServletContextInitializerBeans()` 的实现非常简单，只是返回了 `ServletContextInitializerBeans` 类的一个实例，参考代码如下：

```java
protected Collection<ServletContextInitializer> getServletContextInitializerBeans() {
   return new ServletContextInitializerBeans(getBeanFactory());
}
```

上述方法的返回值是个 `Collection`，可见 `ServletContextInitializerBeans` 类是一个集合类，它继承了 `AbstractCollection` 抽象类。也因为如此，上述 `selfInitialize()` 才可以遍历 `ServletContextInitializerBeans` 的实例对象。既然 `ServletContextInitializerBeans` 是集合类，那么我们就可以先查看其 `iterator()`，看看它遍历的是什么。

```java
@Override
public Iterator<ServletContextInitializer> iterator() {
   return this.sortedList.iterator();
}
```

此集合类对外暴露的集合遍历元素为 `sortedList` 成员变量，也就是说，上述 `selfInitialize()` 最终遍历的即为 `sortedList` 成员变量。

到这，我们可以进一步确定下结论：`selfInitialize()` 中是通过 `getServletContextInitializerBeans()` 获取到的 `ServletContextInitializer` 类型的 `Beans` 集合，即为 `ServletContextInitializerBeans` 的类型成员变量 `sortedList`。反过来说，`sortedList` 中的过滤器 `Bean` 元素顺序，决定了最终过滤器的执行顺序。现在我们继续查看 `ServletContextInitializerBeans` 的构造方法如下：

```java
public ServletContextInitializerBeans(ListableBeanFactory beanFactory,
      Class<? extends ServletContextInitializer>... initializerTypes) {
   this.initializers = new LinkedMultiValueMap<>();
   this.initializerTypes = (initializerTypes.length != 0) ? Arrays.asList(initializerTypes)
         : Collections.singletonList(ServletContextInitializer.class);
   addServletContextInitializerBeans(beanFactory);
   addAdaptableBeans(beanFactory);
   List<ServletContextInitializer> sortedInitializers = this.initializers.values().stream()
         .flatMap((value) -> value.stream().sorted(AnnotationAwareOrderComparator.INSTANCE))
         .collect(Collectors.toList());
   this.sortedList = Collections.unmodifiableList(sortedInitializers);
   logMappings(this.initializers);
}
```

通过第 8 行，可以得知：我们关心的类成员变量 `this.sortedList`，其元素顺序是由类成员变量` this.initializers `的 `values` 通过比较器 `AnnotationAwareOrderComparator` 进行排序的。

继续查看 `AnnotationAwareOrderComparator` 比较器，忽略比较器调用的细节过程，其最终是通过两种方式获取比较器需要的 `order` 值，来决定 `sortedInitializers` 的排列顺序：

- 待排序的对象元素自身实现了 `Order` 接口，则直接通过 `getOrder()` 获取 `order` 值；
- 否则执行 `OrderUtils.findOrder()` 获取该对象类 `@Order` 的属性。

这里多解释一句，因为 `this.initializers` 的 `values` 类型为 `ServletContextInitializer`，其实现了 `Ordered` 接口，所以这里的比较器显然是使用了 `getOrder()` 获取比较器所需的 `order` 值，对应的类成员变量即为` order`。

继续查看 `this.initializers` 中的元素在何处被添加，我们最终得知，`addServletContextInitializerBeans()` 以及 `addAdaptableBeans()` 这两个方法均构建了 `ServletContextInitializer` 子类的实例，并添加到了` this.initializers `成员变量中。在这里，我们只研究 `addServletContextInitializerBeans`，毕竟我们使用的添加过滤器方式（使用 `@WebFilter `标记）最终只会通过这个方法生效。在这个方法中，`Spring `通过 `getOrderedBeansOfType() `实例化了所有 `ServletContextInitializer` 的子类：

```java
private void addServletContextInitializerBeans(ListableBeanFactory beanFactory) {
   for (Class<? extends ServletContextInitializer> initializerType : this.initializerTypes) {
      for (Entry<String, ? extends ServletContextInitializer> initializerBean : getOrderedBeansOfType(beanFactory,
            initializerType)) {
         addServletContextInitializerBean(initializerBean.getKey(), initializerBean.getValue(), beanFactory);
      }
   }
}
```
根据其不同类型，调用 `addServletContextInitializerBean()`，我们可以看出 `ServletContextInitializer` 的子类包括了 `ServletRegistrationBean、FilterRegistrationBean` 以及 `ServletListenerRegistrationBean`，正好对应了 `Servlet` 的三大要素。而这里我们只需要关心对应于 `Filter` 的 `FilterRegistrationBean`，显然，`FilterRegistrationBean` 是 `ServletContextInitializer` 的子类（实现了 `Ordered` 接口），同样由成员变量 `order` 的值决定其执行的优先级。

```java
private void addServletContextInitializerBean(String beanName, ServletContextInitializer initializer,
      ListableBeanFactory beanFactory) {
   if (initializer instanceof ServletRegistrationBean) {
      Servlet source = ((ServletRegistrationBean<?>) initializer).getServlet();
      addServletContextInitializerBean(Servlet.class, beanName, initializer, beanFactory, source);
   }
   else if (initializer instanceof FilterRegistrationBean) {
      Filter source = ((FilterRegistrationBean<?>) initializer).getFilter();
      addServletContextInitializerBean(Filter.class, beanName, initializer, beanFactory, source);
   }
   else if (initializer instanceof DelegatingFilterProxyRegistrationBean) {
      String source = ((DelegatingFilterProxyRegistrationBean) initializer).getTargetBeanName();
      addServletContextInitializerBean(Filter.class, beanName, initializer, beanFactory, source);
   }
   else if (initializer instanceof ServletListenerRegistrationBean) {
      EventListener source = ((ServletListenerRegistrationBean<?>) initializer).getListener();
      addServletContextInitializerBean(EventListener.class, beanName, initializer, beanFactory, source);
   }
   else {
      addServletContextInitializerBean(ServletContextInitializer.class, beanName, initializer, beanFactory,
            initializer);
   }
}
```

最终添加到 `this.initializers` 成员变量中：

```java
private void addServletContextInitializerBean(Class<?> type, String beanName, ServletContextInitializer initializer,
      ListableBeanFactory beanFactory, Object source) {
   this.initializers.add(type, initializer);
// 省略非关键代码
}
```

通过上述代码，我们再次看到了 `FilterRegistrationBean`。但问题来了，我们没有定义 `FilterRegistrationBean`，那么这里的 `FilterRegistrationBean` 是在哪里被定义的呢？其 `order` 类成员变量是否有特定的取值逻辑？不妨回想下上节课的案例 1，它是在 `WebFilterHandler` 类的 `doHandle()` 动态构建了 `FilterRegistrationBean` 的 `BeanDefinition`：

```java
class WebFilterHandler extends ServletComponentHandler {

   WebFilterHandler() {
      super(WebFilter.class);
   }

   @Override
   public void doHandle(Map<String, Object> attributes, AnnotatedBeanDefinition beanDefinition,
         BeanDefinitionRegistry registry) {
      BeanDefinitionBuilder builder = BeanDefinitionBuilder.rootBeanDefinition(FilterRegistrationBean.class);
      builder.addPropertyValue("asyncSupported", attributes.get("asyncSupported"));
      builder.addPropertyValue("dispatcherTypes", extractDispatcherTypes(attributes));
      builder.addPropertyValue("filter", beanDefinition);
      builder.addPropertyValue("initParameters", extractInitParameters(attributes));
      String name = determineName(attributes, beanDefinition);
      builder.addPropertyValue("name", name);
      builder.addPropertyValue("servletNames", attributes.get("servletNames"));
      builder.addPropertyValue("urlPatterns", extractUrlPatterns(attributes));
      registry.registerBeanDefinition(name, builder.getBeanDefinition());
   }
   // 省略非关键代码
```

这里我再次贴出了 `WebFilterHandler` 中 `doHandle()` 的逻辑（即通过 `BeanDefinitionBuilder` 动态构建了 `FilterRegistrationBean` 类型的 `BeanDefinition`）。然而遗憾的是，此处并没有设置 `order` 的值，更没有根据 `@Order` 指定的值去设置。

到这里我们终于看清楚了问题的本质，所有被 `@WebFilter` 注解的类，最终都会在此处被包装为 `FilterRegistrationBean` 类的 `BeanDefinition`。虽然 `FilterRegistrationBean` 也拥有 `Ordered `接口，但此处却并没有填充值，因为这里所有的属性都是从 `@WebFilter` 对应的属性获取的，而 `@WebFilter` 本身没有指定可以辅助排序的属性。现在我们来总结下，过滤器的执行顺序是由下面这个串联决定的：

```
RegistrationBean 中 order 属性的值 ->
ServletContextInitializerBeans 类成员变量 sortedList 中元素的顺序 ->
ServletWebServerApplicationContext 中 selfInitialize() 遍历 FilterRegistrationBean 的顺序 ->
addFilterMapBefore() 调用的顺序 ->
filterMaps 内元素的顺序 ->
过滤器的执行顺序
```

可见，`RegistrationBean` 中 `order` 属性的值最终可以决定过滤器的执行顺序。但是可惜的是：当使用 `@WebFilter` 时，构建的 `FilterRegistrationBean` 并没有依据 `@Order `的值去设置 `order` 属性，所以 `@Order `失效了。

## 问题修正

现在，我们理清了 `Spring` 启动 `Web` 服务之前的一些必要类的初始化流程，同时也弄清楚了 `@Order` 和 `@WebFilter` 同时使用失效的原因，但这个问题想要解决却并非那么简单。这里我先提供给你一个常见的做法，即实现自己的 `FilterRegistrationBean` 来配置添加过滤器，不再使用 `@WebFilter`。具体代码如下：

```java
@Configuration
public class FilterConfiguration {
    @Bean
    public FilterRegistrationBean authFilter() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new AuthFilter());
        registration.addUrlPatterns("/*");
        registration.setOrder(2);
        return registration;
    }

    @Bean
    public FilterRegistrationBean timeCostFilter() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new TimeCostFilter());
        registration.addUrlPatterns("/*");
        registration.setOrder(1);
        return registration;
    }
}
```

按照我们查看的源码中的逻辑，虽然 `WebFilterHandler` 中 `doHandle()` 构建了 `FilterRegistrationBean` 类型的 `BeanDefinition`，但没有设置 `order` 的值。所以在这里，我们直接手工实例化了 `FilterRegistrationBean` 实例，而且设置了其` setOrder()`。同时不要忘记去掉 `AuthFilter` 和 `TimeCostFilter` 类中的 `@WebFilter`，这样问题就得以解决了。