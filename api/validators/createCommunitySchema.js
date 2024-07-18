import Joi from 'joi';

const createCommunitySchema = Joi.object({
  textChannels: Joi.array()
    .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
    .optional(),
  name: Joi.string().required(),
});

export default createCommunitySchema;
