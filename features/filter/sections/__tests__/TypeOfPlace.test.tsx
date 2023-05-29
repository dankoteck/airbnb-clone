import { screen } from "@testing-library/react";
import { renderWithRedux } from "~/utils/test-utils";
import TypeOfPlace from "../TypeOfPlace";

describe("TypeOfPlace", () => {
  it("should have option `All types`", () => {
    renderWithRedux(<TypeOfPlace />);

    const element = screen.getByRole("button", {
      name: /All types/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have option `Rooms`", () => {
    renderWithRedux(<TypeOfPlace />);

    const element = screen.getByRole("button", {
      name: /Rooms/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should have option `Homes`", () => {
    renderWithRedux(<TypeOfPlace />);

    const element = screen.getByRole("button", {
      name: /Homes/i,
    });

    expect(element).toBeInTheDocument();
  });
});
