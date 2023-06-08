import { Server } from "socket.io";
import http from "http";
import { Express } from "express-serve-static-core";

const socketConfig = (app: Express) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  return io;
};

export default socketConfig;
