import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ServicesPage } from "./ServicesPage";

describe("ServicesPage", () => {
  it("renders service offerings and CTA", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const main = screen.getByRole("main");

    expect(
      screen.getByRole("heading", { name: /our services/i }),
    ).toBeInTheDocument();
    expect(
      within(main).getByText(/system generation & automation/i),
    ).toBeInTheDocument();
    expect(within(main).getByText(/ui\/ux design/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
