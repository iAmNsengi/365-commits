import { body } from "express-validator";

export const validateSignup = [
  body()
    .custom((value, { req }) => {
      const allowedFields = ["username", "password"];
      const receivedFields = Object.keys(req.body);
      const hasNotAllowedFields = receivedFields.some(
        (field) => !allowedFields.includes(field)
      );
      if (hasNotAllowedFields) throw new Error();
      return true;
    })
    .withMessage("Only username and password fields are allowed"),
  body("username").notEmpty().withMessage("username field is required"),
  body("password").notEmpty().withMessage("password field is required"),
];
