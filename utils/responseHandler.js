export const successResponse = (res, statusCode, data = null) =>
  res.status(statusCode).json({ success: true, data });

export const errorResponse = (err, req, res, next) =>
  res
    .status(err?.statusCode)
    .json({
      success: false,
      message: err?.message || "An internal server error occurred",
    });
