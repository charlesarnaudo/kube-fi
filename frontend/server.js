// Express dep
var express = require('express');
var request = require('request');


const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({ config: config.getInCluster() });
client.loadSpec();
var app = express();

// Where we serve our static files
app.use(express.static('public'));

// index router
app.get('/', function (req, res) {
    res.send('Hello World');
});

// API routes
app.get('/getPods', async function (req, res) {
    const namespaces = await client.api.v1.pods.get();
    console.log(namespaces)
    res.send('Got pods!');
});


// Server bits
var server = app.listen(8000, function () {
    var host = "127.0.0.1";
    var port = 8000;
    console.log("Kube-fi listening at http://%s:%s", host, port)
});