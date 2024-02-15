const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

const cors = require("cors"); // allows frontend to hit this backend server
app.use(cors());
// if you want to restrict for the backend server to hit only one end point we can do it as
// cors({
//   origin: "url",
// })

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await todo.find({});
    res.json({
      todos: todos,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
