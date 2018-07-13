#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t charlesarnaudo/kubefi .
docker push charlesarnaudo/kube-fi
