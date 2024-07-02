import { Router } from 'express';
import { createBook } from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.post('/', createBook);

export default bookRouter;
