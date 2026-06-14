import { buildApiUrl } from "@/lib/env";

export type ApiErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string>;
};

export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export class ApiRequestError extends Error {
  readonly status: number;
  readonly errors?: Record<string, string>;

  constructor(
    message: string,
    status: number,
    errors?: Record<string, string>,
  ) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.errors = errors;
  }
}

export async function postJson<TResponse>(
  path: string,
  body: unknown,
): Promise<ApiSuccessResponse<TResponse>> {
  const response = await fetch(buildApiUrl(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  let payload: ApiResponse<TResponse> | null = null;

  try {
    payload = (await response.json()) as ApiResponse<TResponse>;
  } catch {
    throw new ApiRequestError(
      "Unable to reach the server. Please try again.",
      response.status,
    );
  }

  if (!response.ok || !payload.success) {
    throw new ApiRequestError(
      payload.message ?? "Something went wrong. Please try again.",
      response.status,
      payload.errors,
    );
  }

  return payload;
}
