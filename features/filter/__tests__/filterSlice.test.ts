import reducer, { setTypeOfPlace } from "~/features/filter/filterSlice";

describe("filterSlice", () => {
  it("should return initial state", () => {
    const currentState = reducer(undefined, { type: undefined });

    expect(currentState).toEqual({ typeOfPlace: "all" });
  });

  it("should change `typeOfPlace`", () => {
    const previousState = { typeOfPlace: "all" } as const;
    const currentState = reducer(previousState, setTypeOfPlace("homes"));

    expect(currentState).toEqual({ typeOfPlace: "homes" });
  });
});
