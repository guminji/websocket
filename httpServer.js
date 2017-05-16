/**
 * Created by guminji on 2017/5/16.
 */
var app = require('express')();
var socket = require("socket.io");
var ioRouter =require("./ioRouter");
var fs = require('fs');
app.use('/',function(req,res){
    fs.readFile(__dirname + '/resource/html/socket.html', {encoding: 'utf8'}, function (err, data) {
        if(err) {
            console.error(err);
            return;
        }
        res.end(data);
    });
})
var http = require('http');
var httpServer = http.Server(app);
var io = socket(httpServer);
ioRouter(io);
module.exports = httpServer;
