import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { buildApiUrl } from "@/lib/env";
import { ApiRequestError, postJson } from "@/lib/api";

describe("buildApiUrl", () => {
  it("returns relative path when no base URL is configured", () => {
    expect(buildApiUrl("/api/contact")).toBe("/api/contact");
  });
});

describe("postJson", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns success payload on 201", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => ({
        success: true,
        message: "Thanks",
        data: { id: "contact-1", receivedAt: "2026-06-14T00:00:00.000Z" },
      }),
    } as Response);

    const result = await postJson("/api/contact", {
      name: "Jane",
      email: "jane@example.com",
      message: "Hello from the test suite.",
    });

    expect(result.data.id).toBe("contact-1");
    expect(fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("throws ApiRequestError with validation errors on 400", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => ({
        success: false,
        message: "Validation failed",
        errors: { email: "Enter a valid email address" },
      }),
    } as Response);

    await expect(postJson("/api/contact", {})).rejects.toEqual(
      expect.objectContaining<Partial<ApiRequestError>>({
        name: "ApiRequestError",
        status: 400,
        message: "Validation failed",
        errors: { email: "Enter a valid email address" },
      }),
    );
  });

  it("throws ApiRequestError on rate limit", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 429,
      json: async () => ({
        success: false,
        message: "Too many requests. Please try again later.",
      }),
    } as Response);

    await expect(postJson("/api/contact", {})).rejects.toEqual(
      expect.objectContaining({
        status: 429,
        message: "Too many requests. Please try again later.",
      }),
    );
  });
});
