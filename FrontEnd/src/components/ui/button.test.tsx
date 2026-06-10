import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders with accessible label", () => {
    render(<Button>Get started</Button>);
    expect(
      screen.getByRole("button", { name: /get started/i }),
    ).toBeInTheDocument();
  });
});
