import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "Username already exists"],
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.index({ unique: true });

const User = mongoose.model("User", userSchema);
export default User;
