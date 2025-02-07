import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String },
    status: { type: String, enum: ["read", "pending"], default: "pending" },
  },
  { timestamps: true }
);

messageSchema.index({ sender: 1 });

const Message = new mongoose.model("Message", messageSchema);

export default Message;
