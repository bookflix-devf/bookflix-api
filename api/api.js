import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import authRouter from './routes/authRoutes.js';

const api = express();

api.use(express.json());

api.get('/test', (req, res) => {
  res.json({
    msg: 'API online',
  });
});

api.use('/books', bookRouter);
api.use('/auth', authRouter);

export default api;
