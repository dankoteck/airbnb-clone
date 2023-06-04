import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AirbnbFilterModal from "..";
import { renderWithRedux } from "~/utils/test-utils";

describe("Modal", () => {
  it('should invoke "onOk" callback when click on "Show n home(s)" button', async () => {
    const jestFn = jest.fn();

    renderWithRedux(<AirbnbFilterModal open onOk={jestFn} />);

    const element = await screen.findByRole("button", {
      name: /Show \d+ home(s?)/i,
    });

    await userEvent.click(element);

    await waitFor(() => expect(jestFn).toHaveBeenCalledTimes(1));
  });

  it('should invoke "onCancel" callback when click on "Clear all" button', async () => {
    const jestFn = jest.fn();

    renderWithRedux(<AirbnbFilterModal open onCancel={jestFn} />);

    const element = await screen.findByRole("button", {
      name: /Clear all/i,
    });

    await userEvent.click(element);

    await waitFor(() => expect(jestFn).toHaveBeenCalledTimes(1));
  });
});
