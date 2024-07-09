import { Router } from 'express';
import communityRouter from './communityRoutes';

const authorRouter = Router();

authorRouter.get('/:authorId/community', communityRouter);

export default authorRouter