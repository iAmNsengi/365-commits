import catchAsync from "../utils/catchAsync.js";
import User from "../models/User.js";
import AppError from "../utils/appError.js";

export const loginController = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });
  if (!user) return next(new AppError("UnAuthorized, user not found", 401));
});

export const signUpController = async (req, res) => {
  try {
  } catch (error) {
    console.error(`Error occurred in login controller, ${error.message}`);
    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        `An internal server errror occurred in login Controller`,
    });
  }
};
