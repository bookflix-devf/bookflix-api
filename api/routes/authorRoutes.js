import { Router } from 'express';
import communityRouter from './communityRoutes.js';

import {
  getAllAuthors,
  getAuthorById,
  getBooksByAuthorId,
} from '../controllers/authorControllers/authorController.js';

const authorRouter = Router();

authorRouter.get('/', getAllAuthors);
authorRouter.get('/:authorId', getAuthorById);
authorRouter.get('/:authorId/books', getBooksByAuthorId);

authorRouter.use('/:authorId/community', communityRouter);

export default authorRouter;
