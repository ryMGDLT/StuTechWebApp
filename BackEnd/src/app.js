const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { env } = require("./lib/env");
const { contactRouter } = require("./routes/contact-routes");
const { getStartedRouter } = require("./routes/get-started-routes");
const { healthRouter } = require("./routes/health-routes");
const { errorHandler } = require("./middleware/error-handler");

/**
 * @param {{ rateLimitMax?: number, rateLimitWindowMs?: number }} [overrides]
 * @returns {import("express").Express}
 */
function createApp(overrides = {}) {
  const app = express();

  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      methods: ["GET", "POST"],
    }),
  );

  app.use(express.json({ limit: "32kb" }));

  const leadRateLimiter = rateLimit({
    windowMs: overrides.rateLimitWindowMs ?? env.RATE_LIMIT_WINDOW_MS,
    max: overrides.rateLimitMax ?? env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: "Too many requests. Please try again later.",
    },
  });

  app.get("/", (_req, res) => {
    res.send("Xone Software Development API");
  });

  app.use("/api/health", healthRouter);
  app.use("/api/contact", leadRateLimiter, contactRouter);
  app.use("/api/get-started", leadRateLimiter, getStartedRouter);

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
