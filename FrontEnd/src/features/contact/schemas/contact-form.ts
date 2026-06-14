import { z } from "zod";

function hasControlCharacters(value: string): boolean {
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code <= 0x1f || code === 0x7f) {
      return true;
    }
  }
  return false;
}

export const contactFormSchema = z.object({
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

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormInput = z.input<typeof contactFormSchema>;

export function validateContactForm(
  input: ContactFormInput,
):
  | { success: true; data: ContactFormValues }
  | { success: false; errors: Partial<Record<keyof ContactFormInput, string>> } {
  const result = contactFormSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (
      typeof field === "string" &&
      !(field in errors) &&
      (field === "name" ||
        field === "email" ||
        field === "company" ||
        field === "message")
    ) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}
