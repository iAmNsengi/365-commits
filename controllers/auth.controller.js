import catchAsync from "../utils/catchAsync.js";
import User from "../models/User.js";
import AppError from "../utils/appError.js";
import bcrypt from "bcryptjs";
import { successResponse } from "../utils/responseHandler.js";
import generateToken from "../utils/auth/generateToken.js";
import validateRequest from "../utils/validators/validateRequest.js";

export const loginController = catchAsync(async (req, res, next) => {
  validateRequest(req, res);
  const { username, password } = req.body;
  const user = await User.findOne({ username: username }).select("+password");
  if (!user) return next(new AppError("UnAuthorized, user not found", 401));
  const userWithPasswordExists = await bcrypt.compare(password, user.password);
  if (!userWithPasswordExists)
    return next(new AppError("UnAuthorized, user not found", 401));
  user.password = undefined;
  const token = generateToken({ id: user._id, username: user.username }, res);

  return successResponse(res, 200, { user, token });
});

export const signUpController = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, password: hashedPassword });
  newUser.password = undefined;
  const token = generateToken({ id: newUsers._id, username: newUser.username });
  return successResponse(res, 200, { token, ...newUser });
});
