import { act, render, screen, waitFor } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo", () => {
  it("should render the logo", async () => {
    render(<Logo />);

    const element = await screen.findByTestId(/airbnb-logo/i);

    expect(element).toBeInTheDocument();
  });

  it("should render smaller logo when window width is < 900px", async () => {
    render(<Logo />);

    act(() => {
      window.resizeTo(899, 899);
    });

    const element = await screen.findByTestId(/airbnb-logo/i);

    await waitFor(() => expect(element).toHaveAttribute("width", "32"));
  });

  it("should render normal logo when window width is >= 900px", async () => {
    render(<Logo />);

    act(() => {
      window.resizeTo(900, 900);
    });

    const element = await screen.findByTestId(/airbnb-logo/i);

    await waitFor(() => expect(element).toHaveAttribute("width", "102"));
  });
});
