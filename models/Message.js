import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: { type: String },
    status: { type: String, enum: ["read", "pending"], default: "pending" },
  },
  { timestamps: true }
);

const Message = new mongoose.model("Message", messageSchema);

export default Message;
