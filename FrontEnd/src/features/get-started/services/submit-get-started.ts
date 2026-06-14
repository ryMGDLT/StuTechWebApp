import { postJson } from "@/lib/api";
import type { GetStartedFormValues } from "@/features/get-started/schemas/get-started-form";

export type GetStartedSubmissionResult = {
  id: string;
  receivedAt: string;
};

export async function submitGetStartedForm(
  values: GetStartedFormValues,
): Promise<GetStartedSubmissionResult> {
  const response = await postJson<GetStartedSubmissionResult>(
    "/api/get-started",
    values,
  );
  return response.data;
}
