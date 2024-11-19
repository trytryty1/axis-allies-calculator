import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("select-nation", ({ player, nation }) => {
    socket.broadcast.emit("nation-selected", { player, nation });
  });
});

server.listen(3001, () => {
    
})