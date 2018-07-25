#!/bin/bash

echo -e "\e[92mTrying to start minikube \033[0m"
minikube --extra-config apiserver.cors-allowed-origins=["http://*"] start

echo -e "\e[92mUsing minikube docker env variable \033[0m"
eval $(minikube docker-env)

echo -e "\e[92mTrying to build docker image \033[0m"
docker build -t charlesarnaudo/kube-fi .

echo -e "\e[92mTrying to create kubes deployment and service \033[0m"
kubectl create -f cluster-conf.yml

echo -e "\e[92mList of running services, a sanity check of sorts \033[0m"
minikube service list

echo -e "\e[92mLets launch dashboard \033[0m"
minikube dashboard


