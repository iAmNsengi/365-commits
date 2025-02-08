export const successResponse = (res, statusCode, data = null) =>
  res.status(statusCode).json({ success: true, data });

export const errorResponse = (err, req, res, next) => {
  console.log();

  return res
    .status(err?.cause?.code === 11000 ? 409 : err?.statusCode || 500)
    .json({
      success: false,
      message: err?.message || "An internal server error occurred",
    });
};
