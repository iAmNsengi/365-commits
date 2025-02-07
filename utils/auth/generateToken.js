import jwt from "jsonwebtoken";
import { errorResponse } from "../responseHandler.js";

const generateToken = (data, res) => {
  try {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
    return token;
  } catch (error) {
    return errorResponse(error, "", res);
  }
};

export default generateToken;
