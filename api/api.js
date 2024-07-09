import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import authRouter from './routes/authRoutes.js';
import communityRouter from './routes/communityRoutes.js';
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
api.use('/author', authorRouter)
api.use('/community', communityRouter)

api.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: err,
  });
});

export default api;
