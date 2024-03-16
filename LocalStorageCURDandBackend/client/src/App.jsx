import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(getLocal());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  //save function
  const [updatedValue, setUpdatedValue] = useState(null);
  //
  //
  //
  useEffect(() => {
    getData();
  }, []);
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
  const add = async () => {
    setDisplay([...display, input]);
    setInput("");

    const data = {
      title: input,
    };
    try {
      await axios.post("http://localhost:3000/work/", data);
      console.log(data);
      getData(); // getData function so data can be retrieved
    } catch (e) {
      console.log(e);
    }
  };
  //
  //
  //
  //Delete
  const deleted = async (idToDelete) => {
    const updatedValue = display.filter((elem, index) => {
      return index !== idToDelete;
    });
    setDisplay(updatedValue);
    await axios.delete(`http://localhost:3000/work/${idToDelete}`);
    getData(); // getData function so data can be retrieved
  };
  //
  //
  //get function
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/work/");
      console.log(response);
      setDisplay(response.data.display);
    } catch (e) {
      console.log(e);
    }
  };
  //
  //Update
  const update = async (id) => {
    setUpdatedValue(id);
    console.log(id);
    try {
      const response = await axios.get(`http://localhost:3000/work/${id}`);
      setInput(response.data.title);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setToggleSubmit(false);
  };

  //

  async function save() {
    const updatedDisplay = [...display];
    updatedDisplay[updatedValue] = input;
    setDisplay(updatedDisplay);
    setInput("");

    try {
      const response = await axios.put(
        `http://localhost:3000/work/${updatedValue}`,
        {
          title: input,
        }
      );
      getData();
      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
    setToggleSubmit(true);
  }
  //

  //
  console.log(display);
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
            <h1>{elem.title}</h1>
            <button
              onClick={() => {
                deleted(elem._id);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                update(elem._id);
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
