// Express dep
var express = require('express');
var request = require('request');
var os = require('os');


const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({config: config.getInCluster()});
client.loadSpec();
var app = express();

// Where we serve our static files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});


app.get('/getPods', async function (req, res) {

    var pod_list = [];
    const pods = await client.api.v1.namespace('default').pods.get();
    pods.body.items.forEach((item) => {
        pod_list.push(item.metadata);
    });

    res.send(pod_list);
});


// Server bits
var server = app.listen(8000, function () {
    var host = "127.0.0.1";
    var port = 8000;
    console.log("Kube-fi listening at http://%s:%s", host, port)
});