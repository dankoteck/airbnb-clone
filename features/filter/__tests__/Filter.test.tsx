import { fireEvent, screen, waitFor } from "@testing-library/react";

import { renderWithRedux } from "~/utils/test-utils";
import Filter from "../Filter";

describe("CategoryFilter", () => {
  beforeEach(async () => {
    renderWithRedux(<Filter />);

    const button = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    await waitFor(() => {
      fireEvent.click(button);
    });
  });

  it("should render with default title", () => {
    renderWithRedux(<Filter />);

    const element = screen.getByRole("button", {
      name: /Airbnb Filters/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have `Clear all` button", () => {
    renderWithRedux(<Filter />);

    const title = screen.getByRole("button", {
      name: /Clear all/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("should have `Show n home` button", () => {
    renderWithRedux(<Filter />);

    const title = screen.getByRole("button", {
      name: /^Show \d+ home(s?)$/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("should have section `Type of place`", () => {
    renderWithRedux(<Filter />);

    const element = screen.getByRole("group", {
      name: /Type of place/i,
    });

    expect(element).toBeInTheDocument();
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
