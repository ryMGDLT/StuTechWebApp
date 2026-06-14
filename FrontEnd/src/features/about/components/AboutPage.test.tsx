import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  it("renders company story and links", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /about xone/i })).toBeInTheDocument();
    expect(screen.getByText(/our story/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /see our process/i })).toHaveAttribute(
      "href",
      "/process",
    );
  });
});
