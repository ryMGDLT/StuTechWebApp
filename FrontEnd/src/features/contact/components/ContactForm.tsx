import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ApiRequestError } from "@/lib/api";
import { submitContactForm } from "@/features/contact/services/submit-contact";
import {
  validateContactForm,
  type ContactFormInput,
} from "@/features/contact/schemas/contact-form";

const initialFormState: ContactFormInput = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>(initialFormState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormInput, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = validateContactForm(form);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitStatus("idle");
    setSubmitMessage("");
    setIsSubmitting(true);

    try {
      await submitContactForm(result.data);
      setSubmitStatus("success");
      setSubmitMessage(
        "Thanks for reaching out. We'll review your message and respond soon.",
      );
      setForm(initialFormState);
    } catch (error) {
      setSubmitStatus("error");

      if (error instanceof ApiRequestError && error.errors) {
        setErrors(error.errors as Partial<Record<keyof ContactFormInput, string>>);
      }

      setSubmitMessage(
        error instanceof ApiRequestError
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="contact-name"
          name="name"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          autoComplete="name"
          required
          disabled={isSubmitting}
        />
        {errors.name ? (
          <p id="contact-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          autoComplete="email"
          required
          disabled={isSubmitting}
        />
        {errors.email ? (
          <p id="contact-email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-company" className="text-sm font-medium">
          Company <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="contact-company"
          name="company"
          value={form.company ?? ""}
          onChange={(event) => handleChange("company", event.target.value)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={
            errors.company ? "contact-company-error" : undefined
          }
          autoComplete="organization"
          disabled={isSubmitting}
        />
        {errors.company ? (
          <p id="contact-company-error" className="text-sm text-destructive">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          rows={5}
          required
          disabled={isSubmitting}
          className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>

      {submitStatus === "success" ? (
        <p
          role="status"
          className="rounded-lg border border-xone-cyan/30 bg-xone-accent-muted px-4 py-3 text-sm text-foreground"
        >
          {submitMessage}
        </p>
      ) : null}

      {submitStatus === "error" ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
