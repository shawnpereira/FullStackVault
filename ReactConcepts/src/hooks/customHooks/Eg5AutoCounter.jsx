import { useEffect, useState } from "react";

// Custom hook for counting
const useCounter = () => {
  const [count, setCount] = useState(0);

  // This effect runs after every render
  useEffect(() => {
    // Set up a timer using setTimeout
    const timer = setTimeout(() => {
      // Update the count by incrementing it by 1
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Return a cleanup function to clear the timer
    // This prevents memory leaks and ensures cleanup when the component unmounts
    return () => clearTimeout(timer);
  }, [count]); // Re-run the effect when 'count' changes

  // Return the current value of 'count'
  return count;
};

function App() {
  // Call the 'useCounter' custom hook to get the current count value
  const count = useCounter();

  // Render the count value inside a div
  return <div>{count}</div>;
}

export default App;
