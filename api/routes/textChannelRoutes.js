import { Router } from 'express';
import {
    createTextChannel,
    getTextChannelById,
    searchTextChannels,
    deleteTextChannelById,
  } from '../controllers/communityControllers/textChannelController.js';
  // FALTA hacer el textChannelController
  import { authUser } from '../middlewares/authValidator.js';

  const textChannelRouter = Router({
    mergeParams: true,
    strict: true,
  });
  
  textChannelRouter.post('/', authUser(['author']), createTextChannel);
  textChannelRouter.get('/:textChannelId', getTextChannelById);
  textChannelRouter.get('/', searchTextChannels);
  textChannelRouter.delete(
    '/:textChannelId',
    authUser(['author','reader']),
    deleteTextChannelById
  );

  export default textChannelRouter;