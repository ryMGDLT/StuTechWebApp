import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { submitGetStartedForm } from "./submit-get-started";

vi.mock("@/lib/api", () => ({
  postJson: vi.fn(),
}));

import { postJson } from "@/lib/api";

describe("submitGetStartedForm", () => {
  beforeEach(() => {
    vi.mocked(postJson).mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("posts validated get-started values to /api/get-started", async () => {
    vi.mocked(postJson).mockResolvedValueOnce({
      success: true,
      message: "Thanks",
      data: { id: "get-started-456", receivedAt: "2026-06-14T00:00:00.000Z" },
    });

    const result = await submitGetStartedForm({
      name: "John Smith",
      email: "john@example.com",
      company: "Acme",
      projectType: "web-app",
      timeline: "flexible",
      description: "We want to build a customer portal for our SaaS product.",
    });

    expect(postJson).toHaveBeenCalledWith("/api/get-started", {
      name: "John Smith",
      email: "john@example.com",
      company: "Acme",
      projectType: "web-app",
      timeline: "flexible",
      description: "We want to build a customer portal for our SaaS product.",
    });
    expect(result.id).toBe("get-started-456");
  });
});
