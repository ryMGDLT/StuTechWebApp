import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  projectTypeOptions,
  timelineOptions,
  validateGetStartedForm,
  type GetStartedFormInput,
} from "@/features/get-started/schemas/get-started-form";

const initialFormState: GetStartedFormInput = {
  name: "",
  email: "",
  company: "",
  projectType: "web-app",
  timeline: "flexible",
  description: "",
};

const selectClassName =
  "h-9 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

export function GetStartedForm() {
  const [form, setForm] = useState<GetStartedFormInput>(initialFormState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof GetStartedFormInput, string>>
  >({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (field: keyof GetStartedFormInput, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = validateGetStartedForm(form);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitStatus("success");
    setForm(initialFormState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="get-started-name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="get-started-name"
            name="name"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "get-started-name-error" : undefined}
            autoComplete="name"
            required
          />
          {errors.name ? (
            <p id="get-started-name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="get-started-email" className="text-sm font-medium">
            Work email
          </label>
          <Input
            id="get-started-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "get-started-email-error" : undefined
            }
            autoComplete="email"
            required
          />
          {errors.email ? (
            <p id="get-started-email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="get-started-company" className="text-sm font-medium">
          Company <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="get-started-company"
          name="company"
          value={form.company ?? ""}
          onChange={(event) => handleChange("company", event.target.value)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={
            errors.company ? "get-started-company-error" : undefined
          }
          autoComplete="organization"
        />
        {errors.company ? (
          <p id="get-started-company-error" className="text-sm text-destructive">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="get-started-project-type" className="text-sm font-medium">
            Project type
          </label>
          <select
            id="get-started-project-type"
            name="projectType"
            value={form.projectType}
            onChange={(event) =>
              handleChange("projectType", event.target.value)
            }
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "get-started-project-type-error" : undefined
            }
            className={selectClassName}
          >
            {projectTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p
              id="get-started-project-type-error"
              className="text-sm text-destructive"
            >
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="get-started-timeline" className="text-sm font-medium">
            Timeline
          </label>
          <select
            id="get-started-timeline"
            name="timeline"
            value={form.timeline}
            onChange={(event) => handleChange("timeline", event.target.value)}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={
              errors.timeline ? "get-started-timeline-error" : undefined
            }
            className={selectClassName}
          >
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.timeline ? (
            <p
              id="get-started-timeline-error"
              className="text-sm text-destructive"
            >
              {errors.timeline}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="get-started-description" className="text-sm font-medium">
          Project overview
        </label>
        <textarea
          id="get-started-description"
          name="description"
          value={form.description}
          onChange={(event) => handleChange("description", event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "get-started-description-error" : undefined
          }
          rows={4}
          placeholder="What are you looking to build? Who is it for?"
          required
          className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
        />
        {errors.description ? (
          <p
            id="get-started-description-error"
            className="text-sm text-destructive"
          >
            {errors.description}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Request a discovery call
      </Button>

      {submitStatus === "success" ? (
        <p
          role="status"
          className="rounded-lg border border-xone-cyan/30 bg-xone-accent-muted px-4 py-3 text-sm text-foreground"
        >
          Thanks — we&apos;ve captured your details. A team member will follow up
          within one business day. Prefer to talk now?{" "}
          <Link
            to="/contact"
            className="font-medium text-xone-violet underline-offset-4 hover:underline"
          >
            Contact us directly
          </Link>
          .
        </p>
      ) : null}
    </form>
  );
}
