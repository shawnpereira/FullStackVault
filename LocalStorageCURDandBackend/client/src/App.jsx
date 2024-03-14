import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(getLocal());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  //save function
  const [updatedValue, setUpdatedValue] = useState(null);
  //
  //
  //
  //
  // Add data to localStorage whenever display changes
  useEffect(() => {
    //we use stringify to convert data to string, list is a pre defined value in localStorage where strings are stored
    localStorage.setItem("lists", JSON.stringify(display));
  }, [display]);
  //
  //
  //
  // Function to retrieve data from localStorage
  function getLocal() {
    //we use parse to convert data to array as we are storing in array
    const getValue = localStorage.getItem("lists");
    return getValue ? JSON.parse(getValue) : [];
  }
  //
  //
  //
  //Create
  const add = () => {
    setDisplay([...display, input]);
    setInput("");
  };
  //
  //
  //
  //Delete
  const deleted = (idToDelete) => {
    const updatedValue = display.filter((elem, index) => {
      return index !== idToDelete;
    });
    setDisplay(updatedValue);
  };
  //
  //
  //
  //Update
  const update = (id) => {
    let updatedItem = display.find((elem, index) => {
      return index == id;
    });
    //toggle it
    setToggleSubmit(false);
    //logic to edit
    setInput(updatedItem);
    //using the "updatedValue" useState
    setUpdatedValue(id); // we get the id of value we want to update
  };
  //
  //save
  function save() {
    const updatedDisplay = [...display]; // Create a copy of the display array
    updatedDisplay[updatedValue] = input; // so "updatedDisplay[updatedValue]" is basically pointing to the index in the entire display, so now whatever is there at "input" is been fed inside that index
    setDisplay(updatedDisplay); // Update the display state with the edited item
    setInput(""); // Clear the input field
    setToggleSubmit(true); // Switch back to "Add" mode
  }

  //
  //
  //
  //
  //
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      {/* toggle em */}
      {toggleSubmit ? (
        <button onClick={add}>Click me</button>
      ) : (
        <button onClick={save}>save</button>
      )}

      {/*  */}
      {/*  */}
      {/*  */}

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
            <button
              onClick={() => {
                update(index);
              }}
            >
              update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
