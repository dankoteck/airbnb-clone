import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PropertyType from "../PropertyType";
import { propertyTypeData } from "~/data";

describe("PropertyType", () => {
  it("should render the correct number of property types", async () => {
    render(<PropertyType />);

    // Find the property type elements
    const propertyTypeElements = await screen.findAllByRole("button");

    // Check if the correct number of property types are rendered
    await waitFor(() =>
      expect(propertyTypeElements.length).toBe(propertyTypeData.length)
    );
  });

  it("should run `onSelected` function when item is clicked", async () => {
    const onSelected = jest.fn();

    render(<PropertyType onSelect={onSelected} />);

    // Find the property type elements
    const propertyTypeElements = await screen.findAllByRole("button");

    // Click on the first property type element
    await userEvent.click(propertyTypeElements[0]);

    // The onSelected function should be called with the correct index
    expect(onSelected).toHaveBeenCalledTimes(1);

    // Click on the second property type element
    await userEvent.click(propertyTypeElements[1]);

    // The onSelected function should be called with the correct index
    expect(onSelected).toHaveBeenCalledTimes(2);
  });

  it("should have checked class when user click, then click again will remove checked class", async () => {
    render(<PropertyType />);

    const activeClassName = "outline-2 outline-gray-900";

    // Find the property type elements
    const propertyTypeElements = await screen.findAllByRole("button");

    // Click on the first property type element
    await userEvent.click(propertyTypeElements[0]);

    // The onSelected function should be called with the correct index
    await waitFor(() =>
      expect(propertyTypeElements[0]).toHaveClass(activeClassName)
    );

    // Click on the first property type element again (this will remove active classname)
    await userEvent.click(propertyTypeElements[0]);

    await waitFor(() =>
      expect(propertyTypeElements[0]).not.toHaveClass(activeClassName)
    );
  });
});
