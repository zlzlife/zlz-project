## 基于ubuntu安装kubernetes

- ubuntu: v24.04
- kubernetes: v1.23.3

<b style="color:red">注: 以下操作请使用root用户操作</b>

#### 1.安装docker
```
# 1. 基于apt-get安装docker
apt install docker.io -y

# 2. 查看docker是否安装完成
docker -v
```

#### 2.安装kubernetes
```
# 1. 设置apt的阿里云镜像仓库地址
apt-add-repository "deb https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial main"

# 2. 更新apt仓库
apt update

# 3. 安装kubernetes(版本为v1.23.3)
apt install -y kubelet-1.23.3 kubeadm-1.23.3 kubectl-1.23.3

# 4. 启用kubectl服务
systemctl daemon-reload 
systemctl enable kubelet
systemctl start kubelet # 注:这里有个坑,在没有执行kubeadm init之前这里start会失败
systemctl status kubelet.service # 查看服务状态,没执行kubeadm init之前启动是不成功的

# 5. 初始化kubectl服务(注:请将192.168.x.xxx改成本机的固定IP)
kubeadm init \
  --kubernetes-version=v1.23.3 \
  --image-repository registry.aliyuncs.com/google_containers \
  --pod-network-cidr=10.244.0.0/16 \
  --apiserver-advertise-address=192.168.x.xxx \
  --service-cidr=10.96.0.0/12

# 6. 执行完kubeadm init之后,输入的命令行会要求执行以下命令。对着执行即可。
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# 7. 这时候重启下kube服务,查看下状态。就没有第4步的问题了
systemctl restart kubelet
systemctl status kubelet.service

# 8. 查看nodes状态
kubectl get nodes # 这个时候STATUS还不是Ready状态。还需要安装网络插件calico

# 9. 安装网络插件calico
kubectl apply -y calico.yaml # calico.yaml文件见同目录的calico.yaml
kubectl get pods --all-namespaces | grep "calico" # 查看节点状态为Running即可
```

#### 3.安装k8s可视化界面
```
# 1. 安装web可视化界面
kubectl apply -f recommended.yaml # 基于https的dashboard (需要配置https证书)
kubectl apply -f recommended-http.yaml # 基于http的dashboard (只能通过locahost访问)

# 2. 查看pod状态
kubectl get pods --all-namespaces | grep "dashboard"

# 3. 修改端口
kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard # 找到 type: ClusterIp 改为 NodePort

# 4. 找到端口
kubectl get svc -A | grep "kubernetes-dashboard" # 两条命令都可以
kubectl get service -n kubernetes-dashboard # 两条命令都可以

# 5. 创建登录用户
kubectl apply -f admin-login.yaml 

# 6. 获取token
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```


