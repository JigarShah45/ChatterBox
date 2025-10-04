const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] }
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

socket.on("send_message", (data) => {
  io.to(data.room).emit("receive_message", data);  // only once
});

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

server.listen(3001, () => console.log('Server running on port 3001'));
