import { Router } from 'express';
import communityRouter from './communityRoutes.js';

import { getAllAuthors, getAuthorById } from '../controllers/authorControllers/authorController.js';

const authorRouter = Router();

authorRouter.get('/', getAllAuthors);
authorRouter.get('/:authorId', getAuthorById);

authorRouter.use('/:authorId/community', communityRouter);
authorRouter.delete('/Author/{:authorId}/Community/{:communityid}', communityRouter);

export default authorRouter;