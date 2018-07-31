# Kube-fi

## Local development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Local build and deploy

``` bash
# bring up local k8s cluster
minikube start

# build image (repeat when needed)
docker build -t charlesarnaudo/kube-fi . && ./docker_push.sh

# create deployment and service
kubectl create -f cluster-conf.yml

# update deployment (when new image is built)
kubectl apply -f cluster-conf.yml

# list ip of webapp deploy on local cluster
minikube service list

# Go to Kubernetes Dashboard
minikube dashboard

```

## Cluster installation
### Configuration
#### All Nodes
    curl -sSL get.docker.com | sh && sudo usermod pi -aG docker

    sudo dphys-swapfile swapoff && \
    sudo dphys-swapfile uninstall && \
    sudo update-rc.d dphys-swapfile remove

    orig="$(head -n1 /boot/cmdline.txt) cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory"
    echo "$orig" | sudo tee /boot/cmdline.txt
    sudo reboot

    curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - &&
    echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list &&
    sudo apt-get update -q &&
    sudo apt-get install -qy kubelet=1.9.7-00 kubectl=1.9.7-00 kubeadm=1.9.7-00

#### Master Node Only
    sudo sed -i '/KUBELET_NETWORK_ARGS=/d' /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
    sudo kubeadm init --token-ttl=0 --apiserver-advertise-address=192.168.1.139 --ignore-preflight-errors=ALL
    kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"

#### Reset between attempts
    kubeadm reset && sudo rm -rf ~/.kube && sudo systemctl daemon-reload && sudo systemctl restart docker && sudo systemctl restart kubelet sudo reboot

#### Current Join Command
    kubeadm join --token 529788.d483f5bc90822df1 192.168.1.139:6443 --discovery-token-ca-cert-hash sha256:5b1ee616e0f7cbed2413796a99c2737dbc0ec68c45bf251fb6d309fde4a16a0a
