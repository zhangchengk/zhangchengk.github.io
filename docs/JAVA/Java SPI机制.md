---
title: Java SPI机制
date: 2020-07-11
category: Java
---


## 什么是SPI

SPI全称Service Provider Interface，翻译过来是服务提供接口。它是jdk内置的一种服务发现机制，它可以让服务定义与实现分离、解耦，大大提升了程序的扩展性。Java SPI 实际上是“基于接口的编程＋策略模式＋配置文件”组合实现的动态加载机制，提供了通过interface寻找implement的方法。

使用Java SPI需要符合的约定：

- Service provider提供Interface的具体实现后，在目录META-INF/services下的文件(以Interface全路径命名)中添加具体实现类的全路径名。
- 接口实现类的jar包存放在所使用的类加载器能找到的地方。
- 应用程序使用ServiceLoader动态加载实现类(根据目录META-INF/services下的配置文件找到实现类的全限定名并调用classloader来加载实现类到JVM)。
- SPI的实现类必须具有无参数的构造方法。

SPI加载的核心就是ClassLoader的getResource系列方法，jdk提供了一个工具类，就是上面说的ServiceLoader。

## ServiceLoader

```java
public final class ServiceLoader<S> implements Iterable{
...
}
```

它实现了Iterable接口。它的入口方法是load

```java
public static <S> ServiceLoader<S> load(Class<S> service, ClassLoader loader){
    return new ServiceLoader<>(service, loader);
}

public static <S> ServiceLoader<S> load(Class<S> service) {
    ClassLoader cl = Thread.currentThread().getContextClassLoader();
    return ServiceLoader.load(service, cl);
}
```

构造方法及reload方法：

```java
// 表示正在加载的服务的类或接口
private final Class<S> service;

// 用于查找，加载和实例化提供程序的类加载器
private final ClassLoader loader;

// 创建ServiceLoader时采取的访问控制上下文
private final AccessControlContext acc;

private ServiceLoader(Class<S> svc, ClassLoader cl) {
    service = Objects.requireNonNull(svc, "Service interface cannot be null");
    loader = (cl == null) ? ClassLoader.getSystemClassLoader() : cl;
    acc = (System.getSecurityManager() != null) ? AccessController.getContext() : null;
    reload();
}

// 缓存的提供程序（按实例顺序）
private LinkedHashMap<String,S> providers = new LinkedHashMap<>();

// The current lazy-lookup iterator
private LazyIterator lookupIterator;

/**
* 清除缓存, 调用此方法后，后续iterator方法的调用将懒惰地查找并实例化提供程序，就像新创建的加载程序一样。
*/
public void reload() {
    providers.clear();
    lookupIterator = new LazyIterator(service, loader);
}
```

当我们在程序中`遍历`返回的ServiceLoader实例时，会使用创建的`LazyIterator`迭代器。

遍历时会先后调用LazyIterator的hasNext方法和LazyIterator的next方法
```java
//遍历ServiceLoader时调用
 public Iterator<S> iterator() {
    return new Iterator<S>() {

        Iterator<Map.Entry<String,S>> knownProviders
            = providers.entrySet().iterator();
        //LazyIterator的hasNext方法
        public boolean hasNext() {
            if (knownProviders.hasNext())
                return true;
            return lookupIterator.hasNext();
        }
         //LazyIterator的next方法
        public S next() {
            if (knownProviders.hasNext())
                return knownProviders.next().getValue();
            return lookupIterator.next();
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }

    };
}
```
而在LazyIterator的hasNext方法会调用私有的hasNextService方法，此方法通过类加载器的getResources/getSystemResources 去获取资源(读取META-INF/services/那些以接口全名命名的配置文件)，进而获取接口实现类的全名称。LazyIterator的next方法会调用私有的nextService方法，根据前面得到的接口实现类的全名称调用`Class.forName`去加载类获得Class对象，最后调用newInstance来实例化。
```java
private static final String PREFIX = "META-INF/services/";

private class LazyIterator implements Iterator<S>{

    Class<S> service;
    ClassLoader loader;
    Enumeration<URL> configs = null;
    Iterator<String> pending = null;
    String nextName = null;

    private LazyIterator(Class<S> service, ClassLoader loader) {
        this.service = service;
        this.loader = loader;
    }
    //通过类加载器的getResources/getSystemResources 去获取资源(读取META-INF/services/那些以接口全名命名的配置文件)，进而获取接口实现类的全名称。
    private boolean hasNextService() {
        if (nextName != null) {
            return true;
        }
        if (configs == null) {
            try {
                String fullName = PREFIX + service.getName();
                if (loader == null)
                    configs = ClassLoader.getSystemResources(fullName);
                else
                    configs = loader.getResources(fullName);
            } catch (IOException x) {
                fail(service, "Error locating configuration files", x);
            }
        }
        while ((pending == null) || !pending.hasNext()) {
            if (!configs.hasMoreElements()) {
                return false;
            }
            pending = parse(service, configs.nextElement());
        }
        nextName = pending.next();
        return true;
    }
    
    // 使用实现类的全名称，调用Class.forName来加载类，获得Class对象，然后调用newInstance()进行实例化。
    private S nextService() {
        if (!hasNextService())
            throw new NoSuchElementException();
        String cn = nextName;
        nextName = null;
        Class<?> c = null;
        try {
            c = Class.forName(cn, false, loader);
        } catch (ClassNotFoundException x) {
            fail(service, "Provider " + cn + " not found");
        }
        if (!service.isAssignableFrom(c)) {
            fail(service,  "Provider " + cn  + " not a subtype");
        }
        try {
            S p = service.cast(c.newInstance());
            providers.put(cn, p);
            return p;
        } catch (Throwable x) {
            fail(service,
                    "Provider " + cn + " could not be instantiated",
                    x);
        }
        throw new Error();          // This cannot happen
    }

    public boolean hasNext() {
        if (acc == null) {
            return hasNextService();
        } else {
            PrivilegedAction<Boolean> action = new PrivilegedAction<Boolean>() {
                public Boolean run() { return hasNextService(); }
            };
            return AccessController.doPrivileged(action, acc);
        }
    }

    public S next() {
        if (acc == null) {
            return nextService();
        } else {
            PrivilegedAction<S> action = new PrivilegedAction<S>() {
                public S run() { return nextService(); }
            };
            return AccessController.doPrivileged(action, acc);
        }
    }

    public void remove() {
        throw new UnsupportedOperationException();
    }
}
```

## 最后

使用Java SPI机制能够在service provider与service user之间进行解耦，同时，只有在使用的时候才主动加载实现类并缓存加载的实现类，但是会加载配置文件中所有的实现类，尽管有些实现类不使用。获取指定实现类也只能通过Iterator来获取，不能通过类似Map方式直接获取。而且，ServiceLoader实例在多线程环境中不安全。




