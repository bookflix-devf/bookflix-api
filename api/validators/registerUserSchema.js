import joi from 'joi';
import User from '../models/books/User.js';

const userNotExists = async (email, helpers) => {
  const user = await User.findOne({
    email,
  });
  console.log(user);
  if (user != null ) {
    return helpers.error ("user.userAlreadyExists", {v: email});
  }
  return email;
}

const registerUserSchema = joi.object({
  user: joi.object({
    email: joi.string().email().external(userNotExists).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')).required(),
    gender: joi.string().required(),
    nickname: joi.string().required(),
    avatar: joi.string().required(),
    lastName: joi.string().required(),
    firstName: joi.string().required(),
  }),
  role: joi.string().required(),
});

export default registerUserSchema;
