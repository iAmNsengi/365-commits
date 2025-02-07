import express from "express";
import {
  loginController,
  signUpController,
} from "../controllers/auth.controller.js";
import { loginLimit } from "../utils/rateLimits.js";
import { validateLogin, validateSignup } from "../utils/validators/index.js";

const router = express.Router();

router.use("/login", loginLimit);
router.route("/login").post(validateLogin, loginController);

router.route("/signup").post(validateSignup, signUpController);

export default router;
