import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bookId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Book',
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Comment', commentSchema);
