import { act, renderHook, waitFor } from "@testing-library/react";
import { useWindowSize } from "../useWindowSize";

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
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.resizeTo(500, 500);
    });

    await waitFor(() => expect(result.current.width).toBe(500));
    await waitFor(() => expect(result.current.height).toBe(500));
  });
});
