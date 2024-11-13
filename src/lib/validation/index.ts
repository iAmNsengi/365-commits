import * as z from "zod";

export const signupValidation = z.object({
  name: z.string().min(2, { message: "Name is yoo short" }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, { message: "Email is too short" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
