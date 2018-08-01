#!/usr/bin/env bash
# A crutch

echo Rebuilding local docker image
docker build -t charlesarnaudo/kube-fi .

echo Running docker_push.sh
./docker_push.sh

echo applying change via kubectl
kubectl set image deployment/webapp kube-fi-webapp=charlesarnaudo/kube-fi:latest
kubectl apply -f cluster-conf.yml
kubectl set image deployment/webapp kube-fi-webapp=charlesarnaudo/kube-fi:latest

echo Done