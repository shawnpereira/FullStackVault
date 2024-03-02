import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
