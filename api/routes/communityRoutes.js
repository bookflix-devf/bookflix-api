import { Router } from 'express';
//import { getCommunityByAuthorId } from '../controllers/communityControllers/communityController.js';
import authorRouter from './authorRoutes.js';

const communityRouter = Router();


authorRouter.use('/:authorId/community', authorRouter);



export default communityRouter;
