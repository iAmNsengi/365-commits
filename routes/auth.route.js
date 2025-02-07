import express from "express";
import {
  loginController,
  signUpController,
} from "../controllers/auth.controller.js";
import { loginLimit } from "../utils/rateLimits.js";
import { validateLogin } from "../utils/validators/login.request.validator.js";

const router = express.Router();

router.use("/login", loginLimit);
router.route("/login").post(validateLogin, loginController);

router.route("/signup").post(signUpController);

export default router;
