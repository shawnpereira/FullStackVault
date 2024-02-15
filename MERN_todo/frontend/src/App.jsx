import { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import Todos from "./Components/Todos";

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
