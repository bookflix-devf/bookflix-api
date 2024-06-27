import express from 'express';

const api = express();

api.get('/test', (req, res) => {
  res.json({
    msg: 'API online',
  });
});

export default api;
