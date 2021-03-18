var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

var PORT = process.env.PORT || 5000
app.use(express.static('client'));

server.listen(PORT,function(){
    console.log("chat is running");
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('message', function(msg) {
      io.emit('message', msg);
    });
  });