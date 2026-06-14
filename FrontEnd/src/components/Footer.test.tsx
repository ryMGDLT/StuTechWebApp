import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders Xone branding and navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("img", { name: /xone software development/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about us/i })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getAllByRole("link", { name: /^contact$/i })[0]).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
