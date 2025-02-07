import express from "express";
import { loginController } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/login").post(loginController);

export default router;
