import { Router } from 'express';
import {
    updateCommunity
} from '../controllers/communityControllers/communityController.js'
import { authUser } from '../middlewares/authValidator.js'
import validateBody from '../middlewares/validateBody.js'
import { getCommunityByAuthorId } from '../controllers/communityControllers/communityController.js';
import updateCommunitySchema from '../validators/updateCommunitySchema.js';

const communityRouter = Router({
    mergeParams: true,
    strict: true,
})

communityRouter.get('/', getCommunityByAuthorId);
communityRouter.patch('/:communityId', authUser(['author']), validateBody(updateCommunitySchema), updateCommunity)


export default communityRouter;
