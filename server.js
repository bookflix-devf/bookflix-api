import http from 'http';
import api from './api/api.js';
import './api/config/database.js';
import './api/config/database.js';
import dotenv from 'dotenv';
import './api/config/database.js';

// Cargar las variables de entorno desde .env
dotenv.config();
const server = http.createServer(api);

server.on('listening', () => {
  console.info(`Server running http://localhost:8000`);
});

//TODO change port to env variable
server.listen(8000);
