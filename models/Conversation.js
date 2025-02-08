import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

conversationSchema.index({ sender: 1 });

conversationSchema.methods.getMyConversations = function (id) {
  return this.model("Conversation").find({ $or: { sender: id, receiver: id } });
};

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
