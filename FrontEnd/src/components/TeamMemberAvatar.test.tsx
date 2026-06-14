import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TeamMemberAvatar } from "./TeamMemberAvatar";

describe("TeamMemberAvatar", () => {
  it("renders initials with accessible label", () => {
    render(<TeamMemberAvatar initials="JS" name="John Smith" />);

    expect(screen.getByRole("img", { name: /john smith avatar/i })).toHaveTextContent(
      "JS",
    );
  });
});
