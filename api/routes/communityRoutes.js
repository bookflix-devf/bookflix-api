import { Router } from 'express';
import deleteCommunityById from '../controllers/communityControllers/communityController.js'
import { authUser } from '../middlewares/authValidator.js';

const communityRouter = Router({
    mergeParams: true,
    strict: true,
  });

communityRouter.delete('/:communityId', authUser(['author']),deleteCommunityById)

export default communityRouter;