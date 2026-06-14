const { z } = require("zod");
const { hasControlCharacters } = require("../lib/validation-helpers");

const projectTypeValues = [
  "web-app",
  "mobile-app",
  "ui-ux",
  "automation",
  "other",
];

const timelineValues = ["asap", "1-3-months", "3-6-months", "flexible"];

const getStartedInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer")
    .refine((value) => !hasControlCharacters(value), {
      message: "Name contains invalid characters",
    }),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email must be 254 characters or fewer")
    .email("Enter a valid email address")
    .transform((value) => value.toLowerCase()),
  company: z
    .string()
    .trim()
    .max(100, "Company must be 100 characters or fewer")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypeValues, {
    message: "Select a project type",
  }),
  timeline: z.enum(timelineValues, {
    message: "Select a timeline",
  }),
  description: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (at least 10 characters)")
    .max(1000, "Description must be 1000 characters or fewer")
    .refine((value) => !hasControlCharacters(value), {
      message: "Description contains invalid characters",
    }),
});

/**
 * @param {unknown} body
 * @returns {{ success: true, data: z.infer<typeof getStartedInputSchema> } | { success: false, errors: Record<string, string> }}
 */
function parseGetStartedInput(body) {
  const result = getStartedInputSchema.safeParse(body);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !(field in errors)) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}

module.exports = { getStartedInputSchema, parseGetStartedInput };
