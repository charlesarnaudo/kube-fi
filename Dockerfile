FROM golang

WORKDIR /go/src/kube-fi

COPY ./server.go .
RUN go get ./...

CMD ["kube-fi"]

EXPOSE 8080