import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/CountersSlice";
import { SidebarTrigger } from "../components/ui/sidebar";

const CounterPage = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="flex gap-2">
          <h1 className="text-3xl font-bold">Count:</h1>
          <p className="text-3xl font-semibold text-green-700">
            {counters[0].value}
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 rounded-2xl bg-amber-300"
          >
            Increment
          </button>
          <span
            onClick={handleDecrement}
            className="px-4 py-2 rounded-2xl bg-red-300 border border-red-600"
          >
            Decrement
          </span>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
