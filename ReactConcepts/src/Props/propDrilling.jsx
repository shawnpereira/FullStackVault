import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count passedValueCount={count} />
      <Operation passedValueCount={count} passedValueSetCount={setCount} />
    </div>
  );
};

const Count = ({ passedValueCount }) => {
  return <div>{passedValueCount}</div>;
};

const Operation = ({ passedValueCount, passedValueSetCount }) => {
  const handleAddition = () => {
    passedValueSetCount(passedValueCount + 1);
  };

  const handleSubtract = () => {
    passedValueSetCount(passedValueCount - 1);
  };

  return (
    <div>
      <Buttons Addition={handleAddition} Subtract={handleSubtract} />
    </div>
  );
};

const Buttons = ({ Addition, Subtract }) => {
  return (
    <div>
      <button onClick={Addition}>Add</button>
      <button onClick={Subtract}>Subtract</button>
    </div>
  );
};

export default App;
