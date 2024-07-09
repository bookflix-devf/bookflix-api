import joi from 'joi';

const registerUserSchema = joi.object({
  user: joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,}$')).required(),
    gender: joi.string().required(),
    nickname: joi.string().required(),
    avatar: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
  }),
  role: joi.string().required(),
});

export default registerUserSchema;
