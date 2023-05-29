import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import categories from "~/data/categories";
import CategorySlider from "../CategorySlider";
import { mockDelay } from "~/utils/test-utils";

describe("CategorySlider", () => {
  it("should have two arrows", () => {
    render(<CategorySlider />);

    const prevArrow = screen.getByRole("button", {
      name: /Previous slide/i,
    });

    const nextArrow = screen.getByRole("button", {
      name: /Next slide/i,
    });

    expect(prevArrow).toBeInTheDocument();
    expect(nextArrow).toBeInTheDocument();
  });

  it('should invoke "onSlideChange" callback when slide change', async () => {
    const jestFn = jest.fn();

    render(<CategorySlider onSlideChange={jestFn} />);

    // Assert when clicking next arrow
    const nextArrow = screen.getByRole("button", {
      name: /Next slide/i,
    });

    act(() => {
      userEvent.click(nextArrow);
    });

    await mockDelay(500);

    expect(jestFn).toHaveBeenCalledTimes(1);

    // Assert when clicking prev arrow
    const prevArrow = screen.getByRole("button", {
      name: /Previous slide/i,
    });

    act(() => {
      userEvent.click(prevArrow);
    });

    await mockDelay(500);

    expect(jestFn).toHaveBeenCalledTimes(2); // 1 for next arrow, 1 for prev arrow
  });

  it("should render all `categories` list", () => {
    render(<CategorySlider />);

    const element = screen.getAllByRole("link", { name: /^Category .*$/i });

    expect(element).toHaveLength(categories.length);
  });

  it('should hidden "Previous slide" button when slide is first', () => {
    render(<CategorySlider />);

    const prevArrow = screen.getByRole("button", {
      name: /Previous slide/i,
    });

    expect(prevArrow).toHaveClass("!opacity-0");
  });
});
