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

# use minikube docker env
eval $(minikube docker-env)

# build image (repeat when needed)
docker build -t charlesarnaudo/kube-fi .

# create deployment and service
kubectl create -f cluster-conf.yml

# list ip of webapp deploy on local cluster
minikube service list

# Go to Kubernetes Dashboard
minikube dashboard
```
