import { Schema, model } from "mongoose";

const textChannelSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default model("TextChannel", textChannelSchema);
