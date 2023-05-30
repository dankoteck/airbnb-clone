import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockDelay, renderWithRedux } from "~/utils/test-utils";
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

  it("should change the type of place when clicking on the option", async () => {
    renderWithRedux(<TypeOfPlace />);

    const element = screen.getByRole("button", {
      name: /Rooms/i,
    });

    act(() => {
      userEvent.click(element);
    });

    await mockDelay(500);

    expect(element).toHaveClass("bg-black");
  });
});
