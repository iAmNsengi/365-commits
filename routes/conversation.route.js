import express from "express";
import {
  createNewConversation,
  deleteConversation,
  deleteMessageInConversation,
  getAllConversations,
  getConversationMessages,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.route("").post(createNewConversation).get(getAllConversations);
router.route("/:id").get(getConversationMessages).delete(deleteConversation);
router.route("/:id/:messageId").delete(deleteMessageInConversation);

export default router;
