import { Router } from 'express';
import {
    updateCommunity
} from '../controllers/communityControllers/communityController.js'
import { authUser } from '../middlewares/authValidator.js'
import validateBody from '../middlewares/validateBody.js'
import updateCommunitySchema from '../validators/updateCommunitySchema.js';

const communityRouter = Router()

communityRouter.patch('/:communityId', authUser(['author', 'reader']), validateBody(updateCommunitySchema), updateCommunity)

export default communityRouter