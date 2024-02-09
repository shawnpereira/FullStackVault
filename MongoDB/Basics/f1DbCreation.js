const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/OS"); /// /OS will create a database named OS

const User = mongoose.model("Users", {
  // "Users will create a user table"
  // schema for the database
  name: String,
  email: String,
  password: String,
});

const add = new User({
  // adds this user to the database
  name: "Shawn",
  email: "shawn@gmail.com",
  password: "qwer",
});

add.save();
