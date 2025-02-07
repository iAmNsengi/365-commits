import { body } from "express-validator";

export const validateLogin = [
  body("username").notEmpty().withMessage("Username field is required"),
  body("password").notEmpty().withMessage("Please provide your password"),
];
