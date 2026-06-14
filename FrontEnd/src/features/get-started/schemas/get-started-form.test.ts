import { describe, expect, it } from "vitest";
import {
  getStartedFormSchema,
  validateGetStartedForm,
} from "./get-started-form";

describe("getStartedFormSchema", () => {
  it("accepts valid lead qualification input", () => {
    const result = validateGetStartedForm({
      name: "Jane Doe",
      email: "Jane@Example.com",
      company: "Acme Inc",
      projectType: "web-app",
      timeline: "1-3-months",
      description: "We need a customer portal for our B2B clients.",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jane@example.com");
    }
  });

  it("rejects short descriptions", () => {
    const result = getStartedFormSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      company: "",
      projectType: "web-app",
      timeline: "flexible",
      description: "short",
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = validateGetStartedForm({
      name: "Jane Doe",
      email: "not-an-email",
      company: "",
      projectType: "web-app",
      timeline: "flexible",
      description: "We need help building a mobile app.",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.email).toBeDefined();
    }
  });
});
