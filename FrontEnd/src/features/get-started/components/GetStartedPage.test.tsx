import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { GetStartedPage } from "./GetStartedPage";

describe("GetStartedPage", () => {
  it("renders lead qualification form fields", () => {
    render(
      <MemoryRouter>
        <GetStartedPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /get started with xone software development/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/timeline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project overview/i)).toBeInTheDocument();
  });

  it("shows validation errors for invalid submission", () => {
    render(
      <MemoryRouter>
        <GetStartedPage />
      </MemoryRouter>,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /request a discovery call/i }),
    );

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});
