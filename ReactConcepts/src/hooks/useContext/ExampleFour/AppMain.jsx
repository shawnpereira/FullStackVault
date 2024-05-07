import React, { useContext } from "react";
import Counter from "./Components/Counter";
import { ContextCreator, CounterProvider } from "./Counter";

const CounterDisplay = () => {
  const counterState = useContext(ContextCreator);

  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

const AppMain = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
};

export default AppMain;
