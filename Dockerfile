FROM golang

WORKDIR /go/src/kube-fi

COPY ./server.go .
RUN go get ./...

EXPOSE 8080

CMD ["kube-fi"]