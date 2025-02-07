import jwt from "jsonwebtoken";

const generateToken = (data, res) => {
  try {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
    return token;
  } catch (error) {
    return res.status(500).json({
      message:
        error?.message ||
        "An internal server error occurred generating token, try logging in agin!",
    });
  }
};

export default generateToken;
