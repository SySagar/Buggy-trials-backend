import ACTIONS from "./events";

const userSocketMap = {};

const socketFunctions = (io: any) => {
  function getAllConnectedClients(roomId: string) {
    // Map
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
      (socketId: string) => {
        return {
          socketId,
          username: userSocketMap[socketId],
        };
      }
    );
  }

  io.on("connection", (socket: any) => {
    console.log("socket connected", socket.id);

    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
      userSocketMap[socket.id] = username;
      socket.join(roomId);
      const clients = getAllConnectedClients(roomId);
      clients.forEach(({ socketId }) => {
        io.to(socketId).emit(ACTIONS.JOINED, {
          clients,
          username,
          socketId: socket.id,
        });
      });
    });
  });
};

export default socketFunctions;
