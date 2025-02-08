import express from "express";
import authRoutes from "./auth.route.js";
import conversationRoutes from "./conversation.route.js";

const router = express.Router();

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/conversation", conversationRoutes);

router.use("*", (req, res) =>
  res.status(404).json({
    success: false,
    message: "The resource you are looking for could not be found",
  })
);

export default router;
