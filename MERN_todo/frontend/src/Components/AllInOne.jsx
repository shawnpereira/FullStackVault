import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [display, setDisplay] = useState([]);

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      // Add the new todo to the display
      setDisplay([...display, { title, description }]);
      // Clear input fields after adding todo
      setTitle("");
      setDescription("");
      alert("Todo added");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={addTodo}>Add</button>
      {/* Display todos */}
      {display.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>Edit</button>
          <button>Description</button>
        </div>
      ))}
    </div>
  );
};

export default CreateTodo;
