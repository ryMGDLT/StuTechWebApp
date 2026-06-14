import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ProcessPage } from "./ProcessPage";

describe("ProcessPage", () => {
  it("renders all five process steps", () => {
    render(
      <MemoryRouter>
        <ProcessPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /how we work/i })).toBeInTheDocument();
    expect(screen.getByText("Determine")).toBeInTheDocument();
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Deployment")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });
});
