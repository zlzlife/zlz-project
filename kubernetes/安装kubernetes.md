## Kubernetes

```
 官网地址: https://kubernetes.io/
```

- Linux安装 (https://kubernetes.io/zh-cn/docs/tasks/tools/install-kubectl-linux/)
  - curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
  - curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl.sha256"

#### 常用的命令

```
kubectl get deployments --namespace=<namespace> // 获取命令空间下的所有deployments
```