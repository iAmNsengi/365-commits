import rateLimit from "express-rate-limit";

// limit max 5 login requests in 15 min
export const loginLimit = rateLimit({
  max: 5,
  windowMs: 15 * 60 * 100,
  message: "Too many login attempts, try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: true,
});

// limit 100 requests from IP in 15 minutes
export const reqLimit = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: "Too many requests from this IP, try again after 15 minutes",
  legacyHeaders: true,
  standardHeaders: true,
});
