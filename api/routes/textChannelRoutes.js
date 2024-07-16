import { Router } from 'express';
import {
    createTextChannel,
    getTextChannelById,
    searchTextChannels,
    updateTextChannelById,
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
  textChannelRouter.patch(
    '/:textChannelId',
    authUser(['author','reader']),
    updateTextChannelById
    );
  textChannelRouter.delete(
    '/:textChannelId',
    authUser(['author','reader']),
    deleteTextChannelById
  );

  textChannelRouter.use('/author/:authorId/community/:communityId/', textChannelRouter);

  export default textChannelRouter;