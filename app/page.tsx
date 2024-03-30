"use client";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
} from "@/state/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen flex items-center flex-col mt-8 space-y-8">
      <h2 className="text-3xl font-bold text-center w-full">Redux Examples </h2>
      <p className="text-3xl font-bold text-center w-full">Count : {count}</p>
      <div className="flex gap-4 items-center justify-center flex-wrap w-full max-w-[300px] mx-auto">
        <button
          className="p-2 bg-slate-600 rounded-md text-sm"
          onClick={() => dispatch(decrement())}
        >
          Decrement++
        </button>
        <button
          className="p-2 bg-sky-800 rounded-md text-sm"
          onClick={() => dispatch(increment())}
        >
          Increment++
        </button>
        <button
          className="p-2 bg-sky-800 rounded-md text-sm"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By 5
        </button>
        <button
          className="p-2 bg-sky-800 rounded-md text-sm"
          onClick={() => dispatch(incrementAsync(5))}
        >
          Increment Async
        </button>
      </div>
    </div>
  );
}
