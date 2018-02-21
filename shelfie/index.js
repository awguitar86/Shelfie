var express = require('express');
var bodyParser = require('body-parser');
const massive = require('massive');
const { getBins } = require('./shelfie.router');
const connectionInfo = 'postgres://bvmwvjrsfpetvu:a8602969dd82216739db133bf41d956a8a58118aa876e5e39983962fba835a58@ec2-23-21-198-69.compute-1.amazonaws.com:5432/d4i2ch5ctuggum?ssl=true';
var app = express();

app.use(bodyParser.json());

massive(connectionInfo)
    .then(instance => {
        app.set('instance', instance);
        return instance.seed();
    })
    .then(data => {console.log('table successfully reset');})
    .catch(error => {console.error(error)});

app.get('/api/bins', getBins);

app.listen(3000, function() {
    console.log(`listening on port ${ this.address().port }`);
})