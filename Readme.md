# Chat App with Socket.IO

Real-time chat application using Node.js, Express, and Socket.IO.




## What's Inside

- **Backend**: Express + Socket.IO server (`index.js`)
- **Frontend**: HTML + JavaScript (`public/`)
- **Communication**: WebSocket events between client & server

## Key Theory

**Why `http.createServer()`?**
- Express alone can't handle WebSockets
- Socket.IO needs HTTP server to attach to
- Pattern: Express → HTTP Server → Socket.IO

## File Structure

```
├── index.js          # Server (Express + Socket.IO)
├── public/
│   ├── index.html    # Frontend
│   └── script.js     # Client-side JS
└── package.json      # Dependencies
```

## How It Works

1. Client connects: `io()` in script.js
2. Server detects: `io.on('connection')`
3. Events flow: `socket.emit()` ↔ `socket.on()`

## Dependencies

- `express` - Web framework
- `socket.io` - Real-time communication
- `nodemon` - Auto-restart dev server

---

## 📚 Socket.IO Core Concepts

### 🔹 Event Names

A label (string) for a message sent over the socket.

Lets client & server know what type of data/action it is.

**Example:** `"chat_message"`, `"user_joined"`.

Without event names, all data would mix in one stream → messy.

### 🔹 Core Functions in Socket.IO

- **`io.on("connection", fn)`** → server listens for new clients connecting
- **`socket.emit(event, data)`** → send data to the server (client → server)
- **`socket.on(event, fn)`** → listen for data from the server (server → client, or client → server)
- **`io.emit(event, data)`** → broadcast to all clients
- **`socket.broadcast.emit(event, data)`** → send to everyone except the sender
- **`io.to(room).emit(event, data)`** → send to clients in a specific room/group
- **`socket.join(room)` / `socket.leave(room)`** → add/remove a client from a room

### 👉 In Short:

- **Event name** = identifier
- **Emit** = send
- **On** = listen
- **Rooms** = groups of sockets
