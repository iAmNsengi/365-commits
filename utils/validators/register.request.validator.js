import { body } from "express-validator";
import RegexCraft from "regexcraft";

const passwordValidator = new RegexCraft()
  .hasMinLength(6)
  .hasUpperCase(1)
  .hasNumber(1);

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
  body("username")
    .notEmpty()
    .withMessage("username field is required")
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage(
      "Username should have at least 4 characters, and only numbers and letters are allowed"
    ),
  body("password")
    .notEmpty()
    .withMessage("password field is required")
    .trim()
    .matches(passwordValidator.build())
    .withMessage(
      "Password should have at least 6 characters, at least one uppercase, one number and one special character"
    ),
];
