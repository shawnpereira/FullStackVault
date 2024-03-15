const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Work = mongoose.model("Work", todoSchema);
//
//
//
module.exports = Work;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected successfully");
});
