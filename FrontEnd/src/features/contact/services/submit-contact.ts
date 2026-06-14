import { postJson } from "@/lib/api";
import type { ContactFormValues } from "@/features/contact/schemas/contact-form";

export type ContactSubmissionResult = {
  id: string;
  receivedAt: string;
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmissionResult> {
  const response = await postJson<ContactSubmissionResult>(
    "/api/contact",
    values,
  );
  return response.data;
}
