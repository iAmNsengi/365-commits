import rateLimit from "express-rate-limit";

// limit max 5 login requests in 15 min
export const loginLimit = rateLimit({
  max: 5,
  windowMs: 15 * 60 * 1000,
  message: {
    success: false,
    message: "Too many login attempts, try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: true,
});

// limit max 10 signin requests in 5 min
export const signupLimit = rateLimit({
  max: 10,
  windowMs: 5 * 60 * 1000,
  message: {
    success: false,
    message: "Too many signup attempts, try again after 5 minutes",
  },
  standardHeaders: true,
  legacyHeaders: true,
});

// limit 100 requests from IP in 15 minutes
export const reqLimit = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: {
    success: false,
    message: "Too many requests from this IP, try again after 15 minutes",
  },
  legacyHeaders: true,
  standardHeaders: true,
});
