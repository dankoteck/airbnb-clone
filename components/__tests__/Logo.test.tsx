import { act, render, screen } from "@testing-library/react";
import { mockDelay } from "~/utils/test-utils";
import Logo from "../Logo";

describe("Logo", () => {
  it("should render the logo", () => {
    render(<Logo />);

    const element = screen.getByTestId(/airbnb-logo/i);

    expect(element).toBeInTheDocument();
  });

  it("should render smaller logo when window width is < 900px", async () => {
    render(<Logo />);

    act(() => {
      window.resizeTo(899, 899);
    });

    await mockDelay(500);

    const element = screen.getByTestId(/airbnb-logo/i);

    expect(element).toHaveAttribute("width", "32");
  });

  it("should render normal logo when window width is >= 900px", async () => {
    render(<Logo />);

    act(() => {
      window.resizeTo(900, 900);
    });

    await mockDelay(500);

    const element = screen.getByTestId(/airbnb-logo/i);

    expect(element).toHaveAttribute("width", "102");
  });
});
