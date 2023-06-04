import { act, renderHook, waitFor } from "@testing-library/react";
import useScrollOffset from "../useScrollOffset";

describe("useScrollOffset", () => {
  beforeAll(() => {
    // Mock the window scrollY property
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
    });
  });

  it("should return the initial scroll position", () => {
    const { result } = renderHook(() => useScrollOffset());
    expect(result.current).toBe(0);
  });

  it("should update the scroll position when the window is scrolled", async () => {
    const { result } = renderHook(() => useScrollOffset());

    expect(result.current).toBe(0);

    act(() => {
      // Simulate scrolling by changing the window scrollY property
      window.scrollY = 200;

      // Trigger the scroll event
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => expect(result.current).toBe(200));
  });
});
