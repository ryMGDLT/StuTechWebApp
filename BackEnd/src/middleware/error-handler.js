/**
 * @param {Error} err
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
function errorHandler(err, _req, res, _next) {
  console.error("Unhandled API error:", err.message);

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
}

module.exports = { errorHandler };
