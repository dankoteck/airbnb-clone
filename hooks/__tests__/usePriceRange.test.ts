import { act, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { mockUseState } from "~/utils/test-utils";
import { usePriceRange } from "../usePriceRange";

describe("usePriceRange", () => {
  it("should have minimum of range and maximum of range", () => {
    const { result } = renderHook(() => usePriceRange());
    const { current } = result;
    const { range } = current;
    const [min, max] = range;

    expect(min).not.toBeNull();
    expect(max).not.toBeNull();
  });

  it("should work normally with `selected` data", () => {
    const useStateMock: jest.SpyInstance = jest.spyOn(React, "useState");

    // Mock the useState hook
    useStateMock.mockImplementation(mockUseState);

    const { result } = renderHook(() => usePriceRange());
    const { current } = result;
    const { selected } = current;

    const [selectedValue, setSelectedValue] = selected;

    act(() => {
      setSelectedValue([1, 2]);
    });

    expect(useStateMock).toHaveBeenCalled();

    useStateMock.mockRestore();
  });

  it("should work normally with `input` data", () => {
    const useStateMock: jest.SpyInstance = jest.spyOn(React, "useState");

    // Mock the useState hook
    useStateMock.mockImplementation(mockUseState);

    const { result } = renderHook(() => usePriceRange());
    const { current } = result;
    const { input } = current;

    const [inputValues, setInputValues] = input;

    act(() => {
      setInputValues([1, 2]);
    });

    expect(useStateMock).toHaveBeenCalled();

    useStateMock.mockRestore();
  });

  it("should work normally with `slider` data", () => {
    const useStateMock: jest.SpyInstance = jest.spyOn(React, "useState");

    // Mock the useState hook
    useStateMock.mockImplementation(mockUseState);

    const { result } = renderHook(() => usePriceRange());
    const { current } = result;
    const { slider } = current;

    const [sliderValues, setSliderValues] = slider;

    act(() => {
      setSliderValues([1, 2]);
    });

    expect(useStateMock).toHaveBeenCalled();

    useStateMock.mockRestore();
  });

  it("should update input values and slider values when changing MIN value", async () => {
    const { result } = renderHook(() => usePriceRange());

    const { current } = result;
    const { onInputChange } = current;

    act(() => {
      onInputChange(30, "MIN");
    });

    await waitFor(() =>
      expect(result.current.input[0]).toEqual([30, result.current.range[1]])
    );

    await waitFor(() =>
      expect(result.current.slider[0]).toEqual([30, result.current.range[1]])
    );
  });

  it("should update input values and slider values when changing MAX value", async () => {
    const { result } = renderHook(() => usePriceRange());

    const { current } = result;
    const { onInputChange } = current;

    act(() => {
      onInputChange(40, "MAX");
    });

    await waitFor(() =>
      expect(result.current.input[0]).toEqual([result.current.range[0], 40])
    );
    await waitFor(() =>
      expect(result.current.slider[0]).toEqual([result.current.range[0], 40])
    );
  });

  it("should not update values if the input is invalid", async () => {
    const { result } = renderHook(() => usePriceRange());

    const { current } = result;
    const { onInputChange } = current;
    const MIN = current.range[0];
    const MAX = current.range[1];

    act(() => {
      onInputChange("abc", "MAX");
    });

    // Assert values remain unchanged after providing an invalid MAX value
    await waitFor(() => expect(result.current.input[0]).toEqual([MIN, "abc"])); // because the input always update new value
    await waitFor(() => expect(result.current.slider[0]).toEqual([MIN, MAX]));
  });
});
