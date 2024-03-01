import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <button
        onClick={function () {
          setNumber(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setNumber(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setNumber(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setNumber(4);
        }}
      >
        4
      </button>
      <Todo id={number} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
      res
    ) {
      const json = await res.json();
      setTodo(json.todo);
    });
  }, [id]);
  //Only fetches when id renders
  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
