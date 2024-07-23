import { Schema, model } from 'mongoose';

const communitySchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Author',
    },
    textChannels: [
      {
        type: Schema.Types.ObjectId,
        ref: 'TextChannel',
      },
    ],
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Community', communitySchema);
