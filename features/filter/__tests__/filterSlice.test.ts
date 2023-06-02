import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { waitFor } from "@testing-library/react";
import filterReducer, {
  InitialState,
  PriceRange,
  selectFilter,
  updatePriceRange,
  updateTypeOfPlace,
} from "../filterSlice";

describe("filterSlice", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filter: filterReducer,
      },
    });
  });

  it("should update typeOfPlace", () => {
    const typeOfPlace = "rooms";

    // Dispatch the updateTypeOfPlace action
    store.dispatch(updateTypeOfPlace(typeOfPlace));

    // Get the updated state
    const updatedState: InitialState = store.getState().filter;

    // Check if the typeOfPlace has been updated
    waitFor(() => expect(updatedState.typeOfPlace).toEqual(typeOfPlace));
  });

  it("should update priceRange", () => {
    const priceRange: PriceRange = [100, 200];

    // Dispatch the updatePriceRange action
    store.dispatch(updatePriceRange(priceRange));

    // Get the updated state
    const updatedState: InitialState = store.getState().filter;

    // Check if the priceRange has been updated
    waitFor(() => expect(updatedState.priceRange).toEqual(priceRange));
  });

  it("should select filter state", () => {
    const initialState: InitialState = {
      typeOfPlace: "all",
      priceRange: [0, 0],
    };

    // Get the initial filter state
    const selectedState: InitialState = selectFilter({ filter: initialState });

    // Check if the selected state matches the initial state
    waitFor(() => expect(selectedState).toEqual(initialState));
  });
});
