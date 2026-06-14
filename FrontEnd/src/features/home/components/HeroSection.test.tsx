import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders hero headline with responsive typography", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /we design and build/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/digital solutions/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /talk to our team/i }),
    ).toBeInTheDocument();
  });
});
