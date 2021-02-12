---
title: 用户验证Provider接口源码解读-待完成
date: 2020-05-21
category: ApacheNIFI教程
tags: 
  - Apache NIFI
author: Panda诚
location: BeiJing
publish: false
---

用户认证接口定义

```java
/**
 * 能够使用用户名/密码凭据对用户进行身份验证的身份提供程序。
 */
public interface LoginIdentityProvider {

    /**
     * 验证指定的登录凭据。
     *
     * @param credentials 用户的登录凭据。
     * @return 认证响应
     * @throws InvalidLoginCredentialsException 登录凭据无效
     * @throws IdentityAccessException 由于访问基础存储存在问题，因此无法注册用户
     */
    AuthenticationResponse authenticate(LoginCredentials credentials) throws InvalidLoginCredentialsException, IdentityAccessException;

    /**
     * 在实例创建后立即调用，以供实施者执行其他设置
     *
     * @param initializationContext in which to initialize
     * @throws ProviderCreationException Unable to initialize
     */
    void initialize(LoginIdentityProviderInitializationContext initializationContext) throws ProviderCreationException;

    /**
     * 调用以配置AuthorityProvider(授权)。
     *
     * @param configurationContext at the time of configuration
     * @throws ProviderCreationException for any issues configuring the provider
     */
    void onConfigured(LoginIdentityProviderConfigurationContext configurationContext) throws ProviderCreationException;

    /**
     * 在实例销毁之前立即调用，以供实现者释放资源。
     *
     * @throws ProviderDestructionException If pre-destruction fails.
     */
    void preDestruction() throws ProviderDestructionException;
}


```

用户凭证
```java
public class LoginCredentials {

    private final String username;
    private final String password;

    public LoginCredentials(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
```

认证响应
```java
/**
 * 用户登录尝试的身份验证响应。
 */
public class AuthenticationResponse {

    private final String identity;
    private final String username;
    private final long expiration;
    private final String issuer;

    /**
     * 创建身份验证响应。用户名和验证有效的时间（以毫秒为单位）
     *
     * @param identity 用户标识
     * @param username 用户名
     * @param expiration 过期时间(毫秒)
     * @param issuer The issuer of the token
     */
    public AuthenticationResponse(final String identity, final String username, final long expiration, final String issuer) {
        this.identity = identity;
        this.username = username;
        this.expiration = expiration;
        this.issuer = issuer;
    }

    public String getIdentity() {
        return identity;
    }

    public String getUsername() {
        return username;
    }

    public String getIssuer() {
        return issuer;
    }

    /**
     * 返回给定认证的有效期限（以毫秒为单位）。
     *
     * @return The expiration in milliseconds
     */
    public long getExpiration() {
        return expiration;
    }

}

```

授权Provider配置上下文接口
```java
/**
 *
 */
public interface LoginIdentityProviderConfigurationContext {

    /**
     * @return 授权提供者的标识符
     */
    String getIdentifier();

    /**
     * 检索组件当前了解的所有属性，而不管是否已为其设置值。如果不存在任何值，则其值为null，因此适用于属性描述符的任何注册默认值。
     *
     * @return Map of all properties
     */
    Map<String, String> getProperties();

    /**
     * @param property to lookup the descriptor and value of
     * @return the value the component currently understands for the given
     * PropertyDescriptor. This method does not substitute default
     * PropertyDescriptor values, so the value returned will be null if not set
     */
    String getProperty(String property);
}


```

## 公众号

关注公众号 得到第一手文章/文档更新推送。

![](https://gitee.com/zhangchengk/zhangchengk/raw/master/img/wechat.jpg)