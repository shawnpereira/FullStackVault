import { createContext } from "react";

// Create a context to hold the counter state and update function
const CounterContext = createContext(0);

// Export the context so it can be used in other components
export default CounterContext;
