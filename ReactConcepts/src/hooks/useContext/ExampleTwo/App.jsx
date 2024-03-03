import { useState, useContext } from "react";
import CounterContext from "./hooks/useContext/ExampleOne/CounterContext";

function App() {
  // Define state for count and setCount using useState
  const [count, setCount] = useState(0);

  return (
    // Provide CounterContext.Provider to pass count and setCount to child components
    <CounterContext.Provider value={{ count, setCount }}>
      <div>
        {/* Render Count component */}
        <Count />
      </div>
    </CounterContext.Provider>
  );
}

///////////////////////////////////////////////////////////////////////////////////////
function Count() {
  console.log("re-render");
  return (
    <div>
      {/* Render CountRenderer and Buttons components */}
      <CountRenderer />
      <Buttons />
    </div>
  );
}

//////////////////////////////////////////////////////////////////////
function CountRenderer() {
  // Use props to receive count from Count component
  const { count } = useContext(CounterContext);

  return (
    <div>
      {/* Display count */}
      <b>{count}</b>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////
function Buttons() {
  // Use props to receive setCount from Count component
  const { setCount } = useContext(CounterContext);

  return (
    <div>
      {/* Implement increase and decrease buttons with appropriate onClick handlers */}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
