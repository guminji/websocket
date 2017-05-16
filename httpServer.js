/**
 * Created by guminji on 2017/5/16.
 */
var app = require('express')();
var socket = require("socket.io");
var ioRouter =require("./ioRouter");
var fs = require('fs');
app.use('/',function(req,res){
    //io.emit('connection');
    fs.readFile(__dirname + '/resource/html/socket.html', {encoding: 'utf8'}, function (err, data) {
        if(err) {
            console.error(err);
            return;
        }
        //console.log(data);
        res.end(data);
    });
    ;
    //res.end('hellp world!');

})
var http = require('http');
var httpServer = http.Server(app);
var io = socket(httpServer);
io.on('connection', function(socket){
    console.log('a user connected');
});

//ioRouter(io);
module.exports = httpServer;
