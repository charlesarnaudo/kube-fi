package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
	message := "Hello world"
	w.Write([]byte(message))
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", sayHello).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}
