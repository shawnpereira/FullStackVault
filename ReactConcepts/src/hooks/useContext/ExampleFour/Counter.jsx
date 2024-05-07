import { createContext, useState } from "react";

export const ContextCreator = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ContextCreator.Provider value={{ count, setCount }}>
      {children}
    </ContextCreator.Provider>
  );
};
