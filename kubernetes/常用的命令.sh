# 获取所有的名称空间
kubectl get namespaces

# 获取某一个名称空间的deployments
kubectl get deployments -n {namespaces}

# 获取某一个名称空间的pods
kubectl get pods -n {namespaces}

# 删除某一个名称空间的deployments
kubectl delete deployments {deployments} -n {namespaces}

# 编辑某个名称空间的deployments文件
kubectl edit deployments {deployments} -n {namespaces}

# 订阅某个pod节点内容
kubectl describe pod {pod}

# 查看NodePort
kubectl get service -n {namespaces}


