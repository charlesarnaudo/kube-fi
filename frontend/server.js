// Express dep
var express = require('express');
var app = express();

// K8 dep
const k8s = require('@kubernetes/client-node');
var k8sApi = k8s.Config.defaultClient();

// Where we serve our static files
app.use(express.static('public'));

// index router
app.get('/', function (req, res) {
    res.send('Hello World');
});


// API routes
app.get('/getPods', function (req, response) {
    k8sApi.listNamespacedPod('default')
        .then((res) => {
            console.log(res.body);
        });
    response.send('Got pods!');
});


// Server bits
var server = app.listen(8080, function () {
    var host = "127.0.0.1"
    var port = 8080
    console.log("Kube-fi listening at http://%s:%s", host, port)
});