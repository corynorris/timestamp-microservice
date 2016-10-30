var net = require('net');
var strftime = require('strftime');
var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var port = process.env.PORT || process.argv[2] || 3000;

app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
  res.send(strftime(
        "%F %H:%M\n", 
        new Date()
    ));
});

app.listen(port);