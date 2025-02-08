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
  body("username")
    .notEmpty()
    .withMessage("username field is required")
    .matches(/^[a-zA-Z0-9]{4,20}$/)
    .withMessage(
      "Username should have at least 4 characters and max 20 characters, and only numbers and letters are allowed"
    ),
  body("password")
    .notEmpty()
    .withMessage("password field is required")
    .trim()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&_]).{6,}$/)
    .withMessage(
      "Password should have at least 6 characters, at least one uppercase, one number and one special character allowed characters: !@#$%^&_"
    ),
];
