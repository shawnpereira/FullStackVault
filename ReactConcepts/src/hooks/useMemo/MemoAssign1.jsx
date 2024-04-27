import { useMemo, useState } from "react";
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
const MemoAssign1 = () => {
  const [input, setInput] = useState();

  //MEMO WILL HELP THIS FUNCTION TO RUN ONLY WHEN INPUT CHANGES
  const memoThis = useMemo(() => {
    let expensiveValue = 1;
    for (let i = 1; i <= input; i++) {
      expensiveValue = expensiveValue * i;
    }
    return expensiveValue;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {memoThis}</p>
    </div>
  );
};

export default MemoAssign1;
