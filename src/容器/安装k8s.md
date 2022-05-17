---
title: 安装k8s
date: 2022-01-14
category: 容器
tags: 
  - 容器
author: 张诚
location: BeiJing
---


## 安装 kubeadm

kubeadm是用来快速安装Kubernetes并搭建安全稳定的集群的工具。

### 安装前准备

1、虚机 CentOS Linux release 7.5.1804 (Core) 4C 16G
>Linux version 3.10.0-862.3.3.el7.x86_64 (builder@kbuilder.dev.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-28) (GCC) ) 

2、开启端口6443(或者没开启防火墙)

```powershell
firewall-cmd --add-port=6443/tcp
```
>查看firewalld状态: `systemctl status firewalld`
>
>开启防火墙: `systemctl start firewalld`
>
>确认firewalld状态: `systemctl status firewalld`
>
>关闭防火墙：`systemctl stop firewalld`

当你在一个有严格网络边界的环境里运行 Kubernetes，例如拥有物理网络防火墙或者拥有公有云中虚拟网络的自有数据中心，了解 Kubernetes 组件使用了哪些端口和协议是非常有用的。

控制面 

协议  | 方向 | 端口范围      | 目的                      | 使用者                 
--- | -- | --------- | ----------------------- | --------------------
TCP | 入站 | 6443      | Kubernetes API server   | 所有                  
TCP | 入站 | 2379-2380 | etcd server client API  | kube-apiserver, etcd
TCP | 入站 | 10250     | Kubelet API             | 自身, 控制面             
TCP | 入站 | 10259     | kube-scheduler          | 自身                  
TCP | 入站 | 10257     | kube-controller-manager | 自身                  

尽管 etcd 的端口也列举在控制面的部分，但你也可以在外部自己托管 etcd 集群或者自定义端口。

工作节点

协议  | 方向 | 端口范围        | 目的                 | 使用者    
--- | -- | ----------- | ------------------ | -------
TCP | 入站 | 10250       | Kubelet API        | 自身, 控制面
TCP | 入站 | 30000-32767 | NodePort Services† | 所有     

[NodePort Services](https://kubernetes.io/zh/docs/concepts/services-networking/service/)的默认端口范围。

所有默认端口都可以重新配置。当使用自定义的端口时，你需要打开这些端口来代替这里提到的默认端口。

一个常见的例子是 API 服务器的端口有时会配置为443。或者你也可以使用默认端口，把 API 服务器放到一个监听443 端口的负载均衡器后面，并且路由所有请求到 API 服务器的默认端口。


### 安装 runtime

为了在 Pod 中运行容器，Kubernetes 使用 `Container Runtime`(负责运行容器)。

默认情况下，Kubernetes 使用 `容器运行时接口（Container Runtime Interface，CRI）` 来与你所选择的容器运行时交互。

如果你不指定运行时，则 kubeadm 会自动尝试检测到系统上已经安装的运行时， 方法是扫描一组众所周知的 Unix 域套接字。 下面的表格列举了一些容器运行时及其对应的套接字路径：

运行时        | 域套接字                           
---------- | -------------------------------
Docker     | /var/run/dockershim.sock       
containerd | /run/containerd/containerd.sock
CRI-O      | /var/run/crio/crio.sock        

如果同时检测到 Docker 和 containerd，则优先选择 Docker。 这是必然的，因为 Docker 18.09 附带了 containerd 并且两者都是可以检测到的， 即使你仅安装了 Docker。 如果检测到其他两个或多个运行时，kubeadm 输出错误信息并退出。
kubelet 通过内置的 dockershim CRI 实现与 Docker 集成。

这里我们安装Docker。

1. Uninstall old versions
```powershell
 sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

2. Set up the repository
```powershell
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

3. Install Docker Engine

安装最新版本
```powershell
sudo yum install docker-ce docker-ce-cli containerd.io
```

或者查询指定版本安装
```powershell
yum list docker-ce --showduplicates | sort -r
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
# 比如
sudo yum install docker-ce-3:19.03.9-3.el7 docker-ce-cli-3:19.03.9-3.el7 containerd.io
```
 

4. Start Docker.

```powershell
sudo systemctl start docker
```

![](https://gitee.com/zhangchengk/img/raw/master/镜像/k8s/1.png)

### 安装 kubeadm、kubelet 和 kubectl

我们需要在每台机器上安装以下的软件包：

* `kubeadm`：用来初始化集群的指令。
* `kubelet`：在集群中的每个节点上用来启动 Pod 和容器等。
* `kubectl`：用来与集群通信的命令行工具。

`kubeadm` **不能** 帮你安装或者管理 `kubelet` 或 `kubectl`，所以你需要确保它们与通过 `kubeadm` 安装的控制平面的`版本`相匹配。
如果不这样做，则存在发生版本偏差的风险，可能会导致一些预料之外的错误和问题。然而，控制平面与 `kubelet` 间的相差一个次要版本不一致是支持的，但 `kubelet`
的版本不可以超过 API 服务器的版本。例如，1.7.0 版本的 `kubelet` 可以完全兼容 1.8.0 版本的 API 服务器，反之则不可以。

```powershell
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
# 将 SELinux 设置为 permissive 模式（相当于将其禁用）
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes

sudo systemctl enable --now kubelet
```

>通过运行命令 setenforce 0 和 sed ... 将 SELinux 设置为 permissive 模式 可以有效地将其禁用。 这是允许容器访问主机文件系统所必需的，而这些操作时为了例如 Pod 网络工作正常。你必须这么做，直到 kubelet 做出对 SELinux 的支持进行升级为止。
>如果你知道如何配置 SELinux 则可以将其保持启用状态，但可能需要设定 kubeadm 不支持的部分配置

![](https://gitee.com/zhangchengk/img/raw/master/镜像/k8s/3.png)

配置 Docker 守护程序，尤其是使用 systemd 来管理容器的 cgroup。

```powershell
sudo mkdir /etc/docker
cat <<EOF | sudo tee /etc/docker/daemon.json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
```

>对于运行 Linux 内核版本 4.0 或更高版本，或使用 3.10.0-51 及更高版本的 RHEL 或 CentOS 的系统，overlay2是首选的存储驱动程序。

重新启动 Docker 并在启动时启用：
```powershell
sudo systemctl enable docker
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 配置 cgroup 驱动程序

容器运行时和 kubelet 都具有名字为 "cgroup driver" 的属性，该属性对于在 Linux 机器上管理 CGroups 而言非常重要。

>你需要确保容器运行时和 kubelet 所使用的是相同的 cgroup 驱动，否则 kubelet 进程会失败。

kubeadm 支持在执行 kubeadm init 时，传递一个 KubeletConfiguration 结构体。 KubeletConfiguration 包含 cgroupDriver 字段，可用于控制 kubelet 的 cgroup 驱动。
>说明： 在版本 1.22 中，如果用户没有在 KubeletConfiguration 中设置 cgroupDriver 字段， kubeadm init 会将它设置为默认值 systemd。
```yml
# 这是一个最小化的示例，其中显式的配置了此字段：
# kubeadm-config.yaml
kind: ClusterConfiguration
apiVersion: kubeadm.k8s.io/v1beta3
kubernetesVersion: v1.23.1  #这里注意自己的版本
---
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
cgroupDriver: systemd
```
这样一个配置文件就可以传递给 kubeadm 命令了：
```powershell
kubeadm init --config kubeadm-config.yaml
```

![](https://gitee.com/zhangchengk/img/raw/master/镜像/k8s/4.png)

>Kubeadm 对集群所有的节点，使用相同的 KubeletConfiguration。 KubeletConfiguration 存放于 kube-system 命名空间下的某个 ConfigMap 对象中。
>执行 init、join 和 upgrade 等子命令会促使 kubeadm 将 KubeletConfiguration 写入到文件 /var/lib/kubelet/config.yaml 中， 继而把它传递给本地节点的 kubelet。


## 使用 kubeadm 创建集群

使用 kubeadm，你能创建一个符合最佳实践的最小化 Kubernetes 集群。事实上，你可以使用 kubeadm 配置一个通过 Kubernetes 一致性测试 的集群。 kubeadm 还支持其他集群生命周期功能， 例如 启动引导令牌 和集群升级。

kubeadm 工具很棒，如果你需要：

* 一个尝试 Kubernetes 的简单方法。
* 一个现有用户可以自动设置集群并测试其应用程序的途径。
* 其他具有更大范围的生态系统和/或安装工具中的构建模块。


你可以在各种机器上安装和使用 `kubeadm`：笔记本电脑，一组云服务器，Raspberry Pi 等。无论是部署到云还是本地，你都可以将 `kubeadm` 集成到预配置系统中，例如 Ansible 或 Terraform。

### 准备开始

要遵循本指南，你需要：

* 一台或多台运行兼容 deb/rpm 的 Linux 操作系统的计算机；例如：Ubuntu 或 CentOS。
* 每台机器 2 GB 以上的内存，内存不足时应用会受限制。
* 用作控制平面节点的计算机上至少有2个 CPU。
* 集群中所有计算机之间具有完全的网络连接。你可以使用公共网络或专用网络。

你还需要使用可以在新集群中部署特定 Kubernetes 版本对应的 `kubeadm`。

[Kubernetes 版本及版本倾斜支持策略](https://kubernetes.io/zh/docs/setup/release/version-skew-policy/#supported-versions) 适用于 `kubeadm` 以及整个 Kubernetes。查阅该策略以了解支持哪些版本的 Kubernetes 和 `kubeadm`。该页面是为 Kubernetes v1.23 编写的。

`kubeadm` 工具的整体功能状态为一般可用性（GA）。一些子功能仍在积极开发中。随着工具的发展，创建集群的实现可能会略有变化，但总体实现应相当稳定。 

### 准备所需的容器镜像

这个步骤是可选的，只适用于你希望 kubeadm init 和 kubeadm join 不去下载存放在 k8s.gcr.io 上的默认的容器镜像的情况。

当你在离线的节点上创建一个集群的时候，Kubeadm 有一些命令可以帮助你预拉取所需的镜像。 阅读离线运行 kubeadm 获取更多的详情。

#### 使用自定义的镜像

默认情况下, kubeadm 会从 k8s.gcr.io 仓库拉取镜像。如果请求的 Kubernetes 版本是 CI 标签 （例如 ci/latest），则使用 gcr.io/k8s-staging-ci-images。


