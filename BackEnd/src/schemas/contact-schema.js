const { z } = require("zod");
const { hasControlCharacters } = require("../lib/validation-helpers");

const contactInputSchema = z.object({
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
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be 2000 characters or fewer")
    .refine((value) => !hasControlCharacters(value), {
      message: "Message contains invalid characters",
    }),
});

/**
 * @param {unknown} body
 * @returns {{ success: true, data: z.infer<typeof contactInputSchema> } | { success: false, errors: Record<string, string> }}
 */
function parseContactInput(body) {
  const result = contactInputSchema.safeParse(body);

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

module.exports = { contactInputSchema, parseContactInput };
