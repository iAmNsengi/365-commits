export const successResponse = (res, statusCode, data = null) =>
  res.status(statusCode).json({ success: true, data });

export const errorResponse = (err, req, res, next) =>
  res.status(err?.code === 11000 ? 409 : err?.statusCode || 400).json({
    success: false,
    message: err?.message || "An internal server error occurred",
  });
