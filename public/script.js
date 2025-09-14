var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function exec() {                          //on click , messaage sent to server
    socket.emit('msg_send', {
        msg: inputMsg.value           
    });
}

socket.on('msg_rcvd', (data) => {                             //      listening for message
    let limsg = document.createElement('li');                   // will add recieved data to list
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})