import User from "../models/User.js";

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findBy({ where: { username: username } });
    if (!user)
      return res.status(401).json({
        success: false,
        message: `Unauthorized, user with credential not found`,
      });
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
