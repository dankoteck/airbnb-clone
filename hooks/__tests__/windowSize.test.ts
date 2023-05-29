import { act, renderHook } from "@testing-library/react";
import { mockDelay } from "~/utils/test-utils";
import { useWindowSize } from "../windowSize";

describe("windowSize", () => {
  it("should return default window size", () => {
    const { result } = renderHook(() => useWindowSize());
    const { current } = result;
    const { width, height } = current;

    // default value of jsdom is 1024x768
    expect(width).toBe(1024);
    expect(height).toBe(768);
  });

  it("should return resized width & height", async () => {
    const debounceDelay = 500;
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.resizeTo(500, 500);
    });

    await mockDelay(debounceDelay);

    const { current } = result;
    const { width, height } = current;

    expect(width).toBe(500);
    expect(height).toBe(500);
  });
});
