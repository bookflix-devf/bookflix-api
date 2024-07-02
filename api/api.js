import express from 'express';

const api = express();

api.get('/test', (req, res) => {
  console.log(new Error('trasteando'));
  console.log('Hola desde mi test ');
  res.json({
    msg: 'API online',
    error: new Error('error preba'),
  });
});

export default api;
