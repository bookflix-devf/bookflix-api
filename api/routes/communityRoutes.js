import { Router } from 'express';
import deleteCommunityById from '../controllers/communityControllers/communityController.js'

const communityRouter = Router({
    mergeParams: true,
    strict: true,
  });

communityRouter.delete('/:communityId', deleteCommunityById)

export default communityRouter;