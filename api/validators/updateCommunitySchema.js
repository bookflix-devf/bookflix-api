import Joi from 'joi';

const updateCommunitySchema = Joi.object({
  authorId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
  textChannels: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).required(),
});

export default updateCommunitySchema;
