import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import authRouter from './routes/authRoutes.js';
import authorRouter from './routes/authorRoutes.js';

const api = express();

api.use(express.json());

api.get('/test', (req, res) => {
  res.json({
    msg: 'API online',
  });
});

api.use('/books', bookRouter);
api.use('/auth', authRouter);
api.use('/authors', authorRouter);
api.use('/communityId', authorRouter);

api.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: err,
  });
});

export default api;
