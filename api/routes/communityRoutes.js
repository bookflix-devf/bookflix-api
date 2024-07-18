import { Router } from 'express';
import {
  createCommunityByAuthorId,
  getCommunityByAuthorId,
  updateCommunity,
} from '../controllers/communityControllers/communityController.js';
import { authUser } from '../middlewares/authValidator.js';
import validateBody from '../middlewares/validateBody.js';
import createCommunitySchema from '../validators/createCommunitySchema.js';
import updateCommunitySchema from '../validators/updateCommunitySchema.js';
import textChannelRouter from './textChannelRoutes.js';

const communityRouter = Router({
  mergeParams: true,
});

communityRouter.get(
  '/',
  authUser(['author', 'reader']),
  getCommunityByAuthorId
);
communityRouter.post(
  '/',
  authUser(['author']),
  validateBody(createCommunitySchema),
  createCommunityByAuthorId
);

communityRouter.use('/channels', textChannelRouter);

communityRouter.patch(
  '/:communityId',
  authUser(['author']),
  validateBody(updateCommunitySchema),
  updateCommunity
);

export default communityRouter;
