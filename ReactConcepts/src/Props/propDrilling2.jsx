//same as before just more complex
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} />
      <Operation count={count} setCount={setCount} />
    </div>
  );
};
//UI FOR COUNT
const Count = ({ count }) => {
  return <div>{count}</div>;
};

//Just the UI
const Buttons = ({ handleAddition, handleSubtract }) => {
  return (
    <div>
      <button onClick={handleAddition}>Increase</button>
      <button onClick={handleSubtract}>Decrease</button>
    </div>
  );
};
//Logic
const Operation = ({ count, setCount }) => {
  const handleAddition = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };
  return { handleAddition, handleSubtract };
};

export default App;
