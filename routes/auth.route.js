import express from "express";
import { loginController } from "../controllers/auth.controller.js";
import { loginLimit } from "../utils/rateLimits.js";

const router = express.Router();

router.use("/login", loginLimit);
router.route("/login").post(loginController);

export default router;
