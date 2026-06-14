import { describe, expect, it } from "vitest";
import { validateContactForm } from "./contact-form";

describe("contactFormSchema", () => {
  it("accepts valid contact form input", () => {
    const result = validateContactForm({
      name: "Jane Doe",
      email: "Jane@Example.com",
      company: "Acme Corp",
      message: "We need help building a web app.",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jane@example.com");
      expect(result.data.name).toBe("Jane Doe");
    }
  });

  it("rejects empty required fields", () => {
    const result = validateContactForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    }
  });

  it("rejects invalid email and short messages", () => {
    const result = validateContactForm({
      name: "Jane",
      email: "not-an-email",
      company: "",
      message: "Hi",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    }
  });
});
