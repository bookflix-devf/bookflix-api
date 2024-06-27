import User from './User.js';
import { Schema } from 'mongoose';

const readerSchema = new Schema({
  isSuscribed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default User.discriminator('Reader', readerSchema);
