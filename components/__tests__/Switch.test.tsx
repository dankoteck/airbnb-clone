import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "../Switch";

describe("Switch", () => {
  it("should render the switch in the unchecked state by default", async () => {
    render(<Switch />);

    const switchInput = (await screen.findByRole("switch")) as HTMLInputElement;

    expect(switchInput.checked).toBe(false);
  });

  it("should call the onChange callback when the switch is toggled", async () => {
    const handleChange = jest.fn();

    render(<Switch onChange={handleChange} />);

    const switchInput = (await screen.findByRole("switch")) as HTMLInputElement;

    await userEvent.click(switchInput);
    await waitFor(() => expect(handleChange).toHaveBeenCalledWith(true));

    await userEvent.click(switchInput);
    await waitFor(() => expect(handleChange).toHaveBeenCalledWith(false));
  });

  it("should render the switch in the checked state when provided prop value is true", async () => {
    render(<Switch value={true} />);

    const switchInput = (await screen.findByRole("switch")) as HTMLInputElement;

    await waitFor(() => expect(switchInput.checked).toBe(true));
  });
});
