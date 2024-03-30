"use client";

import { Provider } from "react-redux";
import { store } from "@/state/store";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
