import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "@/state/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
