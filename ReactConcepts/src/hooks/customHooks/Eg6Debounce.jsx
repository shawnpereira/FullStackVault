import { useState, useEffect } from "react";

// Custom hook for debouncing user input
const useDebounce = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    // Cleanup function to clear the timer if the value changes before the delay
    return () => clearTimeout(timerId);
  }, [inputValue, delay]);

  return debouncedValue;
};
//So first when on input, the UseEffect will run, if there is one more input before the 500ms, then the cleanup function will start which will restart the useEffect hook

// Main App component
const App = () => {
  const [inputValue, setInputValue] = useState("");

  const storeDebounceValue = useDebounce(inputValue, 500);

  return (
    <div>
      {" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      {storeDebounceValue}
    </div>
  );
};

// Exporting the App component as default
export default App;
