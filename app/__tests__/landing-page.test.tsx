import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Landing } from "@/features/index";

describe("Landing Page", () => {
  it("renders a heading", () => {
    const heading = render(<Landing />);
    console.log("Found osmething", heading);
    expect(heading).toMatchSnapshot();
  });
});
