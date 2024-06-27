import User from './User.js';
import { Schema } from 'mongoose';

const authorSchema = new Schema({
  biography: {
    type: String,
  },
});

export default User.discriminator('Author', authorSchema);
