const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const connect = require('./config/database-config');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
 
io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
    console.log('joining a room ');
        socket.join(data.roomid);
    })

    socket.on('msg_send', (data) => {                              //listening for data to recieve
        console.log(data);
        //io.emit('msg_rcvd', data);                                  // send to all 
        //socket.emit('msg_rcvd', data)                               // send to server
        //socket.broadcast.emit('msg_rcvd', data)                        // send to room or group
        io.to(data.roomid).emit('msg_rcvd', data)
    });
});
app.set('view engine',  'ejs');
app.use('/', express.static(__dirname + '/public'));

app.get('/chat/:roomid', (req, res) => {
    res.render('index', {
        name: "Sanket ",
        id: req.params.roomid
       
    });
})

server.listen(3000, async () => {               //generally we listen on app, like app.listen()
    console.log('Server started');
    await connect();
    console.log('mongo db connected');
});