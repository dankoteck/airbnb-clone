import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomsAndBeds from "../RoomsAndBeds";

describe("RoomsAndBeds", () => {
  it("should render the correct number of select options", () => {
    render(<RoomsAndBeds />);

    // Find the select option elements
    const selectOptionElements = screen.getAllByRole("button");

    // Check if the correct number of select options are rendered
    // `3` for 3 labels: Bedrooms, Beds, Bathrooms
    // `9` for 9 options: 1 to 8 and "Any"
    expect(selectOptionElements.length).toBe(3 * 9);
  });

  it("should update the selected option when a select option is clicked", async () => {
    render(<RoomsAndBeds />);

    // Find the select option elements
    const selectOptionElements = screen.getAllByRole("button");

    // Click on the first select option element (Bedrooms, 1)
    await userEvent.click(selectOptionElements[0]);

    // The first select option element should be selected
    await waitFor(() =>
      expect(selectOptionElements[0]).toHaveClass("bg-black text-white")
    );

    // Click on the second select option element (Bedrooms, 2)
    await userEvent.click(selectOptionElements[1]);

    // The first select option element should not be selected
    await waitFor(() =>
      expect(selectOptionElements[0]).not.toHaveClass("bg-black text-white")
    );
    // The second select option element should be selected
    await waitFor(() =>
      expect(selectOptionElements[1]).toHaveClass("bg-black text-white")
    );

    // Click on the third select option element (Beds, 1)
    await userEvent.click(selectOptionElements[9]);

    // The third select option element should be selected
    await waitFor(() =>
      expect(selectOptionElements[9]).toHaveClass("bg-black text-white")
    );
  });
});
