---
title: github Pages自动部署
date: 2020-04-14
category: 其他
tags: 
  - Git
author: Panda诚
location: BeiJing  
---
# 自动部署github Pages

[https://github.com/zhangchengk/autodeploy](https://github.com/zhangchengk/autodeploy)

下载项目
```
git clone -b master git@github.com:zhangchengk/autodeploy.git
```

Maven构建项目
```
mvn clean package
```

运行jar包
```
java -DgithubUserName=你的github账号 -DgithubPwd=你的密码 -DgithubName=你的github名词 -DrepoName=仓库名称 -jar autodeploy-jar-with-dependencies.jar
```

# 原理

使用HtmlUnit模拟登陆获取Cookie，带着Cookie执行部署更新Pages POST请求

# 代码实现

```java
package github.autodeploy;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.NicelyResynchronizingAjaxController;
import com.gargoylesoftware.htmlunit.SilentCssErrorHandler;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;
import com.gargoylesoftware.htmlunit.util.Cookie;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpStatus;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.cookie.ClientCookie;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.cookie.BasicClientCookie;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Level;


/**
 * 自动部署github pages
 *
 * @author zhangcheng
 */
public class githubDeployMain {

    private static final String PARAMS = "branch=master&build_directory=&force_https=true";
    private static final String LOGIN_XPATH = "/html/body/header/div/div/div[5]/a[1]";
    private static final String LOGIN_FORM_XPATH = "/html/body/div[2]/div[2]/div/div[1]/div[2]/div/form[1]";
    private static final String LOGIN_INPUT_XPATH = "/html/body/div[2]/div[2]/div/div[1]/div[2]/div/form[1]/div[2]/div/div/div[4]/input";
    private static final int ERROR_CODE = 300;

    private static Map<String, String> header = new HashMap<>(16);

    private static Log log = LogFactory.getLog(githubDeployMain.class);

    static {
        header.put("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        header.put("X-CSRF-Token", "");
        header.put("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36");
        header.put("X-Requested-With", "XMLHttpRequest");
        header.put("Accept", "*/*");
        header.put("Accept-Encoding", "gzip, deflate, br");
        header.put("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,und;q=0.6,de;q=0.5");
        header.put("Connection", "keep-alive");
        header.put("Host", "github.com");
        header.put("Origin", "https://github.com");
        header.put("Sec-Fetch-Dest", "empty");
        header.put("Sec-Fetch-Mode", "cors");
        header.put("Sec-Fetch-Site", "same-origin");
        java.util.logging.Logger.getLogger("com.gargoylesoftware.htmlunit").setLevel(Level.OFF);
        java.util.logging.Logger.getLogger("org.apache.http.client").setLevel(Level.OFF);
    }

    public static void main(String[] args) {
        log.info("开始自动部署github Pages ...[忽略github登陆警告邮件或微信等信息]");
        String githubUserName = System.getProperty("githubUserName");
        String githubPwd = System.getProperty("githubPwd");
        String githubName = System.getProperty("githubName");
        String repoName = System.getProperty("repoName");

        Set<Cookie> cookies;
        try (WebClient webClient = new WebClient(BrowserVersion.CHROME)) {
            //配置webClient
            //ajax
            webClient.setAjaxController(new NicelyResynchronizingAjaxController());
            //支持js
            webClient.getOptions().setJavaScriptEnabled(true);
            //忽略js错误
            webClient.getOptions().setThrowExceptionOnScriptError(false);
            //忽略css错误
            webClient.setCssErrorHandler(new SilentCssErrorHandler());
            //不执行CSS渲染
            webClient.getOptions().setCssEnabled(false);
            //超时时间
            webClient.getOptions().setTimeout(3000);
            //允许重定向
            webClient.getOptions().setRedirectEnabled(true);
            //允许cookie
            webClient.getCookieManager().setCookiesEnabled(true);
            log.info("准备使用[" + githubUserName + "]账号登陆github");
            //开始请求网站
            HtmlPage page = webClient.getPage("https://github.com");
            //点击首页上的登陆按钮，跳转到登陆页面
            HtmlPage loginPage = ((DomElement) page.getByXPath(LOGIN_XPATH).get(0)).click();
            /*
             * 获取登陆表单，表单如果是依赖js或css生成的，要等待加载完成，现有框架里等待方法不完善
             * 这里可以采用循环等待的方案，等到全部资源加载完，获取到了要取的表单元素再继续执行
             */
            while (loginPage.getByXPath(LOGIN_FORM_XPATH).size() == 0) {
                Thread.sleep(5000);
            }
            //获取登陆表单元素
            HtmlForm form = (HtmlForm) loginPage.getByXPath(LOGIN_FORM_XPATH).get(0);
            //用户名input
            HtmlTextInput username = (HtmlTextInput) form.getElementsByAttribute("input", "id", "user_login").get(0);
            //密码input
            HtmlPasswordInput password = (HtmlPasswordInput) form.getElementsByAttribute("input", "id", "user_password").get(0);
            //设置input的value
            username.setValueAttribute(githubUserName);
            password.setValueAttribute(githubPwd);
            //登陆
            HtmlPage home = ((DomElement) loginPage.getByXPath(LOGIN_INPUT_XPATH).get(0)).click();
            log.info("登陆成功，准备自动部署Pages...");
            cookies = webClient.getCookieManager().getCookies();
            List<DomElement> list = home.getElementsByName("csrf-token");

            List<BasicClientCookie> cookieList = new ArrayList<>();
            cookies.forEach(c -> {
                BasicClientCookie cookie = new BasicClientCookie(c.getName(), c.getValue());
                cookie.setDomain("github.com");
                cookie.setAttribute(ClientCookie.DOMAIN_ATTR, "true");
                cookieList.add(cookie);
            });
            String token = list.get(0).getAttribute("content");
            header.put("X-CSRF-Token", token);
            header.put("Referer", getReferUrl(githubName, repoName));
            HttpPost httpPost = new HttpPost(getPostUrl(githubName, repoName));
            // 设置参数
            StringEntity stringEntity = new StringEntity(PARAMS, StandardCharsets.UTF_8);
            stringEntity.setContentType("application/x-www-form-urlencoded; charset=UTF-8");
            httpPost.setEntity(stringEntity);
            header.forEach(httpPost::setHeader);
            int returnCode = sendHttpPost(httpPost, cookieList);
            // 判断响应状态
            if (returnCode >= ERROR_CODE) {
                log.warn("自动部署失败~");
            }
            if (HttpStatus.SC_OK == returnCode) {
                log.info("自动部署成功！！！");
            }
        } catch (Exception e) {
            log.error(e);
        }
    }

    private static String getPostUrl(String githubName, String repoName) {
        return String.format("https://github.com/%s/%s/pages/rebuild", githubName, repoName);
    }

    private static String getReferUrl(String githubName, String repoName) {
        return String.format("https://github.com/%s/%s/pages", githubName, repoName);
    }

    /**
     * 发送Post请求
     *
     * @param httpPost post
     * @param cookies  HtmlUnit爬来的cookie
     * @return status code
     */
    private static int sendHttpPost(HttpPost httpPost, List<BasicClientCookie> cookies) throws IOException {
        RequestConfig requestConfig = RequestConfig.custom().setSocketTimeout(50000).setConnectTimeout(50000)
                .setConnectionRequestTimeout(50000).build();
        CookieStore store = new BasicCookieStore();
        cookies.forEach(store::addCookie);
        CloseableHttpClient httpClient = HttpClients.custom()
                // 设置请求配置
                .setDefaultRequestConfig(requestConfig)
                // 设置重试次数
                .setRetryHandler(new DefaultHttpRequestRetryHandler(0, false))
                .setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36")
                .setDefaultCookieStore(store)
                .build();
        // 配置请求信息
        httpPost.setConfig(requestConfig);
        // 执行请求
        try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
            return response.getStatusLine().getStatusCode();
        }
    }
}

```


## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://github.com/zhangchengk/zhangchengk.github.io/raw/master/img/wechat.jpg)