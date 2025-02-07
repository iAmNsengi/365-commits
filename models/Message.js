import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const Message = new mongoose.model("Message", messageSchema);

export default Message;
