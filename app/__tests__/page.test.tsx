import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { CardView } from "@/components/index";

describe("CardView", () => {
  it("renders a heading", () => {
    const heading = render(<CardView />);
    expect(heading).toBeDefined();
  });
});
