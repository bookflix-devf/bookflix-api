import { Router } from 'express';
import {
  createBook,
  getBookInfoById,
  searchBooks,
} from '../controllers/bookControllers/bookController.js';

const bookRouter = Router();

//TODO only author
bookRouter.post('/', createBook);

bookRouter.get('/:bookId', getBookInfoById);
bookRouter.get('/', searchBooks);

export default bookRouter;
