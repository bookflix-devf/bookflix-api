import { Schema, model } from 'mongoose';

const textChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('TextChannel', textChannelSchema);
