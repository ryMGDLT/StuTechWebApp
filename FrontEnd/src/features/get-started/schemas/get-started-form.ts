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

export const projectTypeOptions = [
  { value: "web-app", label: "Web application" },
  { value: "mobile-app", label: "Mobile application" },
  { value: "ui-ux", label: "UI/UX design" },
  { value: "automation", label: "Automation & systems" },
  { value: "other", label: "Other / not sure yet" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "flexible", label: "Flexible / exploring" },
] as const;

export const getStartedFormSchema = z.object({
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
  projectType: z.enum(
    ["web-app", "mobile-app", "ui-ux", "automation", "other"],
    { message: "Select a project type" },
  ),
  timeline: z.enum(["asap", "1-3-months", "3-6-months", "flexible"], {
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

export type GetStartedFormValues = z.infer<typeof getStartedFormSchema>;

export type GetStartedFormInput = z.input<typeof getStartedFormSchema>;

export function validateGetStartedForm(
  input: GetStartedFormInput,
):
  | { success: true; data: GetStartedFormValues }
  | {
      success: false;
      errors: Partial<Record<keyof GetStartedFormInput, string>>;
    } {
  const result = getStartedFormSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Partial<Record<keyof GetStartedFormInput, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (
      typeof field === "string" &&
      !(field in errors) &&
      (field === "name" ||
        field === "email" ||
        field === "company" ||
        field === "projectType" ||
        field === "timeline" ||
        field === "description")
    ) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}
