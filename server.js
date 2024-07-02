import http from 'http';
import api from './api/api.js';
const server = http.createServer(api);
console.log(process.env.NEW_RELIC_APP_NAME);
server.on('listening', () => {
  console.info(`Server running http://localhost:8000`);
});

//TODO change port to env variable
server.listen(8000);

console.log('test');
