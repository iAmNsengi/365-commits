import express from "express";

const router = express.Router();

router.route("").post(createNewConversation).get(getAllConversations);
router.route("/:id").get(getConversationMessages).delete(deleteConversation);
router.route("/:id/:messageId").delete(deleteMessageInConversation);

export default router;
