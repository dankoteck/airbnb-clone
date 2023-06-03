import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PriceRange from "../PriceRange";

describe("PriceRange", () => {
  it("should update input values when Minimum input changes", async () => {
    // Render the PriceRange component
    render(<PriceRange />);

    // Get the input elements
    const input = await screen.findByLabelText("Minimum");

    // Simulate user input by changing the input values
    await userEvent.clear(input); // clear the current input value
    await userEvent.type(input, "20");

    // Check if the input values have been updated
    await waitFor(() => expect(input).toHaveDisplayValue("20"));
  });

  it("should update input values when Maximum input changes", async () => {
    // Render the PriceRange component
    render(<PriceRange />);

    // Get the input elements
    const input = await screen.findByLabelText("Maximum");

    // Simulate user input by changing the input values
    await userEvent.clear(input); // clear the current input value
    await userEvent.type(input, "50");

    // Check if the input values have been updated
    await waitFor(() => expect(input).toHaveDisplayValue("50"));
  });
});
