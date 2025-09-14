const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
 
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('msg_send', (data) => {                              //listening for data to recieve
        console.log(data);
        //io.emit('msg_rcvd', data);                                  // send to all 
        //socket.emit('msg_rcvd', data)                               // send to server
        socket.broadcast.emit('msg_rcvd', data)                        // send to room or group
    })

   
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {               //generally we listen on app, like app.listen()
    console.log('Server started')
});