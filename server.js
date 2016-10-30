var net = require('net');
var strftime = require('strftime');
var express = require('express');

var port = process.argv[2];
var app = express();


var server = net.createServer(function(socket) {
    
    socket.end(strftime(
        "%F %H:%M\n", 
        new Date()
    ));

});

server.listen(port);