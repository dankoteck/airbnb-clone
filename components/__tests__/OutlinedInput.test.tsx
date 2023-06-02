import { act, render, screen, waitFor } from "@testing-library/react";
import OutlinedInput from "../OutlinedInput";
import userEvent from "@testing-library/user-event";

describe("OutlinedInput", () => {
  it("shoud render normally with label", () => {
    render(<OutlinedInput id="testing" label="Label" />);

    const element = screen.getByLabelText(/Label/i);

    expect(element).toBeInTheDocument();
  });

  it("should render with prefix", () => {
    render(<OutlinedInput id="testing" label="Label" prefix="$" />);

    const element = screen.getByText("$");

    expect(element).toBeInTheDocument();
  });

  it("should focused state on input focus", async () => {
    render(<OutlinedInput id="input-id" label="Input Label" />);

    const inputElement = await screen.findByRole("textbox", {
      name: "Input Label",
    });

    act(() => {
      inputElement?.focus();
    });

    waitFor(() => expect(inputElement).toHaveFocus());
  });

  it("clears focused state on input blur", async () => {
    render(<OutlinedInput id="input-id" label="Input Label" />);

    const inputElement = await screen.findByRole("textbox", {
      name: "Input Label",
    });

    act(() => {
      inputElement?.focus();
      inputElement?.blur();
    });

    waitFor(() => expect(inputElement).not.toHaveFocus());
  });
});
