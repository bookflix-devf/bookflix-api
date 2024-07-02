import express from 'express';
import bookRouter from './routes/bookRoutes.js';

const api = express();

api.get('/test', (req, res) => {
  res.json({
    msg: 'API online',
  });
});

api.use('/books', bookRouter);

export default api;
