const { z } = require("zod");

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  CORS_ORIGIN: z
    .string()
    .default("http://localhost:3000")
    .transform((value) =>
      value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean),
    ),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(15 * 60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().default(10),
  CONTACT_WEBHOOK_URL: z.string().url().optional(),
});

const env = envSchema.parse(process.env);

module.exports = { env };
