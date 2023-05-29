"use client";

import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "~/store";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => {
  const store = setupStore();

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
