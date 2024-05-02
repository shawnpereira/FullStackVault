import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
};

// UI for displaying the count
const Count = ({ count }) => {
  return <div>{count}</div>;
};

// Buttons component responsible for UI and receiving logic functions
const Buttons = ({ count, setCount }) => {
  // Logic for handling addition and subtraction
  const { handleAddition, handleSubtract } = Operation({ count, setCount });

  return (
    <div>
      <button onClick={handleAddition}>Increase</button>
      <button onClick={handleSubtract}>Decrease</button>
    </div>
  );
};

// Operation component responsible for defining logic functions
const Operation = ({ count, setCount }) => {
  const handleAddition = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  // Return the logic functions
  return { handleAddition, handleSubtract };
};

export default App;
