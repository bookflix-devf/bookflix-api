import { Router } from 'express';
import {
  createBook,
  getBookInfoById,
  searchBooks,
} from '../controllers/bookControllers/bookController.js';
import { authUser } from '../middlewares/authValidator.js';
import commentRouter from './commentRoutes.js';

const bookRouter = Router();

//TODO only author
bookRouter.post('/', authUser(['author']), createBook);
bookRouter.get('/', searchBooks);
bookRouter.get('/:bookId', getBookInfoById);

//TODO
bookRouter.use('/:bookId/comments', commentRouter);

export default bookRouter;
