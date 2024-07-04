import { Router } from 'express';
import {
  createComment,
  getCommentsByBookId,
  deleteCommentById,
} from '../controllers/bookControllers/commentController.js';
import { authUser } from '../middlewares/authValidator.js';

const commentRouter = Router({
  mergeParams: true,
  strict: true,
});

commentRouter.get('/', authUser(['author', 'reader']), getCommentsByBookId);
commentRouter.post('/', authUser(['author', 'reader']), createComment);
commentRouter.delete(
  '/:commentId',
  authUser(['author', 'reader']),
  deleteCommentById
);
export default commentRouter;
