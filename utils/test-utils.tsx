import { PreloadedState } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { AppState, AppStore, setupStore } from "~/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<AppState>;
  store?: AppStore;
}

export function renderWithRedux(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const mockDelay = (delay: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

type SetStateMock<S> = (newState: S | ((prevState: S) => S)) => void;

export function mockUseState<T>(initialState: T): [T, SetStateMock<T>] {
  let state: T = initialState;
  const setState: SetStateMock<T> = (newState) => {
    if (typeof newState === "function") {
      state = (newState as (prevState: T) => T)(state);
    } else {
      state = newState;
    }
  };
  return [state, setState];
}
