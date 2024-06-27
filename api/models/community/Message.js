import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    message: {
      type: String,
      required: true,
    },
    textChannelId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'TextChannel',
    },
  },
  {
    timestamps: true,
  }
);

export default model('Message', messageSchema);
