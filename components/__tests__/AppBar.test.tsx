import { render, screen } from "@testing-library/react";
import AppBar from "../AppBar";

describe("Introducing", () => {
  it("should have a Logo", () => {
    render(<AppBar />);

    const label = screen.getByRole("img", {
      name: /airbnb-logo/i,
    });

    expect(label).toBeInTheDocument();
  });

  it("should have a FiltersAndSearch component", () => {
    render(<AppBar />);

    const element = screen.getByRole("group", {
      name: /filters-and-search/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have a `Airbnb your home` button", () => {
    render(<AppBar />);

    const element = screen.getByRole("button", {
      name: /airbnb-your-home/i,
    });

    expect(element).toHaveTextContent(/Airbnb your home/i);
  });

  it("should have Change languague button", () => {
    render(<AppBar />);

    const element = screen.getByRole("button", {
      name: /change-language/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have User account context menu", () => {
    render(<AppBar />);

    const element = screen.getByRole("button", {
      name: /user-account-context-menu/i,
    });

    expect(element).toBeInTheDocument();
    // expect(element).toHaveTextContent(/Help/i); // because when User login or signup always have Help button.
  });
});
