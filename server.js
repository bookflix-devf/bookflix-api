import http from 'http';
import api from './api/api.js';
import './api/config/database.js';

import { Server } from 'socket.io';

const server = http.createServer(api);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

server.on('listening', () => {
  console.info(`Server running http://localhost:8000`);
});

io.on('connection', (socket) => {
  //Broadcast de conexión
  // io.emit('message', {
  //   nickname: 'Bot',
  //   name: 'Bookflix',
  //   msg: 'Se ha conectado otro usuario',
  // });

  // //Configurar un listener
  // socket.on('message', (msgObj) => {
  //   io.emit('message', msgObj);
  // });

  /**
   * {from, to}
   */
  socket.on('joinTextChannel', (changeRoomObj) => {
    console.log(
      `Dejando sala ${changeRoomObj.from} para entrar a ${changeRoomObj.to}`
    );
    socket.leave(changeRoomObj.from);
    socket.join(changeRoomObj.to);
  });

  socket.on('sendMessage', (msgObj) => {
    //TODO guardar el mensaje en el modelo Messsage
    io.to(msgObj.room).emit('sendMessage', msgObj);
  });
});

//TODO change port to env variable
server.listen(8000);
