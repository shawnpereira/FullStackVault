import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(getLocal());

  // Add data to localStorage whenever display changes
  useEffect(() => {
    //we use stringify to convert data to string, list is a pre defined value in localStorage where strings are stored
    localStorage.setItem("lists", JSON.stringify(display));
  }, [display]);

  // Function to retrieve data from localStorage
  function getLocal() {
    //we use parse to convert data to array as we are storing in array
    const getValue = localStorage.getItem("lists");
    return getValue ? JSON.parse(getValue) : [];
  }

  const add = () => {
    setDisplay([...display, input]);
    setInput("");
  };

  const deleted = (idToDelete) => {
    const updatedValue = display.filter((elem, index) => {
      return index !== idToDelete;
    });
    setDisplay(updatedValue);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={add}>Click me</button>

      {display.map((elem, index) => {
        return (
          <div key={index}>
            <h1>{elem}</h1>
            <button
              onClick={() => {
                deleted(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
