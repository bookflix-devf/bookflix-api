import { Router } from 'express';
import {
  createBook,
  getBookInfoById,
} from '../controllers/bookControllers/bookController.js';

const bookRouter = Router();

bookRouter.post('/', createBook);
bookRouter.get('/:bookId', getBookInfoById);

export default bookRouter;
