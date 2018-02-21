var express = require('express');
var bodyParser = require('body-parser');
const massive = require('massive');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
}).listen(3000);

console.log("waiting for requests...");