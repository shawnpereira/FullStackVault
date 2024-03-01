import { useEffect, useRef } from "react";
//useRef is a Hook in React that allows you to create a mutable reference to a DOM element or any other value that persists across renders without causing a re-render when its value changes.

//useRef gives you a way to keep track of values that persist between renders without causing the component to re-render. It's useful for accessing or storing references to DOM elements, managing focus, or storing any value that you want to persist between renders without triggering a re-render.
function App() {
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.innerHTML = "10";
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are{" "}
      <div ref={containerRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
