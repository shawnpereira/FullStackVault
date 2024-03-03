import { useState } from "react";
import CounterContext from "./hooks/useContext/CounterContext";
import Counter from "./hooks/useContext/Counter";

// App component to hold the counter context provider
const App = () => {
  // State to hold the counter value and update function
  const [count, setCount] = useState(0);

  // Render the Counter component wrapped in the CounterContext provider
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div>
        <h1>Counter App</h1>
        <Counter />
      </div>
    </CounterContext.Provider>
  );
};

export default App;
