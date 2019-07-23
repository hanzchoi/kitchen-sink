const express = require('express');
const pgp = require('pg-promise')({});

const app = express();
const port = process.env.PORT;
const db = pgp(process.env.DATABASE_URL);

app.get('/', function(req, res) {
    db.any('SELECT version()').then(function(data) {
        s = 'node version: ' + process.version + '<br>\n';
        s += 'postgres version: ' + data[0]['version'] + '<br>\n';
        res.send(s);
    });
});

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
