var express = require('express');
var app = express();
// There are a few kubes libraries, this one is the best
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const client = new Client({ config: config.fromKubeconfig(), version: '1.10' });

app.get('/api', (req, res) => {
console.log(client);
  res.json({message: 'Hello from the Server!'});
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
