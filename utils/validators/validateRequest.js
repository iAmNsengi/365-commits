import { validationResult } from "express-validator";

const validateRequest = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res
      .status(400)
      .json({ success: false, message: errors.array()[0].msg });
};

export default validateRequest;
