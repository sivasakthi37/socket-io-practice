var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function () {

    console.log('listen the 4000 port number');
    //console.log("hai hellow how are u");

});
app.use(express.static('public'));

var io = socket(server);

io.on('connection', (socket) =>{
    console.log("enna pillayarae ithu");
    console.log('made io connection....');

socket.on('chat',(data)=>{

    io.sockets.emit('chat',data);

})


});

