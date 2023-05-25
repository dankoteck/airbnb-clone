import { render, screen } from "@testing-library/react";
import AppBarMobile from "../AppBarMobile";

describe("AppBarMobile", () => {
  it("should have MagnifyingGlassIcon", () => {
    render(<AppBarMobile />);

    const element = screen.getByTestId(/magnifying-glass-icon/i);

    expect(element).toBeInTheDocument();
  });

  it("should have describe filter text", () => {
    render(<AppBarMobile />);

    const element = screen.getByText(/Anywhere/i);

    expect(element).toBeInTheDocument();
  });

  it("should have Filter button", () => {
    render(<AppBarMobile />);

    const element = screen.getByRole("button", { name: /Filter/i });

    expect(element).toBeInTheDocument();
  });
});
