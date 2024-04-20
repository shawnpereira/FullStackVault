import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  //useCallback is about not rendering a child component if the function does not need to render

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: re-create the function only if count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Pass the callback function to a child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// ChildComponent receives a prop for the click event
function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

export default App;
