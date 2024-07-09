import { Router } from 'express';
import { getCommunityByAuthorId } from '../controllers/communityControllers/communityController.js';

const communityRouter = Router();


communityRouter.get('/:authorId/community', getCommunityByAuthorId);

export default communityRouter;