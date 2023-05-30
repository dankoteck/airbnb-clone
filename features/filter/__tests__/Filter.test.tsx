import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockDelay, renderWithRedux } from "~/utils/test-utils";
import Filter from "../Filter";

describe("Filter", () => {
  it("should render with default title", () => {
    renderWithRedux(<Filter />);

    const element = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have `Clear all` button", async () => {
    renderWithRedux(<Filter />);

    const button = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    await userEvent.click(button);

    const title = screen.getByRole("button", {
      name: /Clear all/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("should have `Show n home` button", async () => {
    renderWithRedux(<Filter />);

    const button = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    await userEvent.click(button);

    const title = screen.getByRole("button", {
      name: /^Show \d+ home(s?)$/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("should have section `Type of place`", async () => {
    renderWithRedux(<Filter />);

    const button = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    await userEvent.click(button);

    const element = screen.getByRole("group", {
      name: /Type of place/i,
    });

    expect(element).toBeInTheDocument();
  });

  it('should close the filter when clicking on the "Close" button', async () => {
    renderWithRedux(<Filter />);

    const open = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    // Open the filter modal
    await userEvent.click(open);

    const close = screen.getByRole("button", {
      name: /Close Modal/i,
    });

    // Close the filter modal
    await userEvent.click(close);

    expect(close).not.toBeInTheDocument();
  });

  // it("should have section `Price range`", () => {
  //   render(<Filter />);

  //   const element = screen.getByText(/Price range/i);

  //   expect(element).toBeInTheDocument();
  // });

  // it("should have section `Rooms and beds`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Rooms and beds/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Property type`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Property type/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Amenities`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Amenities/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Booking options`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Booking options/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Accessibility features`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Accessibility features/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Top tier stays`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Top tier stays/i);

  //   expect(elements).toBeInTheDocument();
  // });

  // it("should have section `Host language`", () => {
  //   render(<Filter />);

  //   const elements = screen.getByText(/Host language/i);

  //   expect(elements).toBeInTheDocument();
  // });
});
