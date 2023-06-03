import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithRedux } from "~/utils/test-utils";
import Filter from "..";

describe("Filter", () => {
  it("should open the modal when the button is clicked", async () => {
    renderWithRedux(<Filter />);

    // Get the button element
    const button = screen.getByLabelText("Airbnb Filters");

    // Assert that the modal is initially closed
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );

    // Simulate a button click
    await userEvent.click(button);

    const modal = await screen.findByRole("dialog");
    await waitFor(() => expect(modal).toBeInTheDocument());
  });
});
