import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PagePlaceholder } from "./PagePlaceholder";

describe("PagePlaceholder", () => {
  it("renders title and construction message", () => {
    render(
      <PagePlaceholder
        title="Services"
        description="Explore our offerings."
      />,
    );

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Explore our offerings.")).toBeInTheDocument();
    expect(
      screen.getByText(/under construction for Xone Software Development/i),
    ).toBeInTheDocument();
  });
});
