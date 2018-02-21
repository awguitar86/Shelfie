const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const { getBins } = require('./shelfie.router');
const connectionInfo ='postgres://daybzsec:F-Fru6MI6Z6iOjzbDSYrmgvn6ugqNSBg@baasu.db.elephantsql.com:5432/daybzsec';
const app = express();

app.use(bodyParser.json());

massive(connectionInfo)
    .then(instance => {
        app.set('instance', instance); //the instance is massive getting the data from the database

        return instance.seed();
    })
    .then(data => {console.log('table successfully reset');})
    .catch(error => {console.error(error)});

app.get('/api/bins', getBins);

app.listen(3000, function() {
    console.log(`listening on port ${ this.address().port }`);
})