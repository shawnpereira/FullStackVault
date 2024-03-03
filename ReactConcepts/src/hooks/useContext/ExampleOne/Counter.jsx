import { useContext } from "react";
import CounterContext from "./CounterContext";

// Counter component to display and update the counter value
const Counter = () => {
  // Access the counter state and update function from the context
  const { count, setCount } = useContext(CounterContext);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Render the counter value and buttons for increment and decrement
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Export the Counter component
export default Counter;
