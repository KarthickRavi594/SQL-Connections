var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var sql = require("mssql");
var configFile = require('./config');

const port = process.env.PORT || 3456;

app.listen(port, err => {
    if (err) console.log(err);
    else {
        console.log("Running in ", port);
    }
});

app.use(bodyParser.json());

var config = configFile;

sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected');
    }
});

app.post('/create', function (req, res) {

})

app.post('/insert', function (req, res) {

})

app.post('/update', function (req, res) {

})
app.post('/delete', function (req, res) {

})