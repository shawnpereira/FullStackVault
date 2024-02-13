const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ShawnSource:make12345sp@source.qzqbsmt.mongodb.net/Todo"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
