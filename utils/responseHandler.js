export const successResponse = (res, statusCode, data = null) =>
  res.status(statusCode).json({ success: true, data });

export const errorResponse = (err, _, res) =>
  res.status(err?.statusCode || 500).json({
    success: false,
    message: err?.message || "An internal server error occurred",
  });
