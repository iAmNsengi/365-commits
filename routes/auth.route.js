import express from "express";
import {
  loginController,
  signUpController,
} from "../controllers/auth.controller.js";
import { loginLimit } from "../utils/rateLimits.js";

const router = express.Router();

router.use("/login", loginLimit);
router.route("/login").post(loginController);

router.route("/signup").post(signUpController);

export default router;
