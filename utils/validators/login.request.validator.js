import { body } from "express-validator";

export const validateLogin = [
  body()
    .custom((value, { req }) => {
      const allowedFields = ["username", "password"];
      const receivedFields = Object.keys(req.body);
      const hasExtraFields = receivedFields.some(
        (field) => !allowedFields.includes(field)
      );
      if (hasExtraFields) throw new Error();
      return true;
    })
    .withMessage("Only username and password fields are allowed"),
  body("username").notEmpty().withMessage("Username field is required"),
  body("password").notEmpty().withMessage("Please provide your password"),
];
