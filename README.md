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

## Local k8s deployment

``` bash
# Bring up local k8s cluster
minikube start

# create deployment and service
kubectl create -f cluster-conf.yml

# list ip of webapp deploy on local cluster
minikube service list
```