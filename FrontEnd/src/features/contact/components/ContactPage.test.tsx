import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ContactPage } from "./ContactPage";

describe("ContactPage", () => {
  it("renders contact details and form fields", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /contact xone software development/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(screen.getByText(/hello@xonesoftware.dev/i)).toBeInTheDocument();
  });

  it("shows validation errors for invalid submission", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});
