import React, { useContext } from "react";
import { ContextCreator } from "../Counter";

const Counter = () => {
  const counterContext = useContext(ContextCreator);
  return (
    <div>
      <button
        className="border"
        onClick={() => counterContext.setCount(counterContext.count + 1)}
      >
        Increase
      </button>
      <button
        className="border"
        onClick={() => counterContext.setCount(counterContext.count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
