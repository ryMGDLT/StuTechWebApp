import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { submitContactForm } from "./submit-contact";

vi.mock("@/lib/api", () => ({
  postJson: vi.fn(),
}));

import { postJson } from "@/lib/api";

describe("submitContactForm", () => {
  beforeEach(() => {
    vi.mocked(postJson).mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("posts validated contact values to /api/contact", async () => {
    vi.mocked(postJson).mockResolvedValueOnce({
      success: true,
      message: "Thanks",
      data: { id: "contact-123", receivedAt: "2026-06-14T00:00:00.000Z" },
    });

    const result = await submitContactForm({
      name: "Jane Doe",
      email: "jane@example.com",
      company: "",
      message: "We need help with a new web application.",
    });

    expect(postJson).toHaveBeenCalledWith("/api/contact", {
      name: "Jane Doe",
      email: "jane@example.com",
      company: "",
      message: "We need help with a new web application.",
    });
    expect(result.id).toBe("contact-123");
  });
});
