package main

import (
	"fmt"
	"log"
	"net/http"
	"sort"

	"github.com/gorilla/mux"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
	var keys []string
	for k := range r.Header {
		keys = append(keys, k)
	}
	sort.Strings(keys)

	fmt.Fprintln(w, "<b>Request Headers:</b></br>", r.URL.Path[1:])
	for _, k := range keys {
		fmt.Fprintln(w, k, ":", r.Header[k], "</br>", r.URL.Path[1:])
	}
	fmt.Fprintln(w, "Date: ")
	fmt.Fprintln(w, r.Header.Get("Date"))
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", sayHello).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}
