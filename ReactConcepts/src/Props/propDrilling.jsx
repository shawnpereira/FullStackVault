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
const Buttons = ({ Addition, Subtract }) => {
  return (
    <div>
      <button onClick={Addition}>Add</button>
      <button onClick={Subtract}>Subtract</button>
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

  return (
    <div>
      <Buttons Addition={handleAddition} Subtract={handleSubtract} />
    </div>
  );
};

export default App;
