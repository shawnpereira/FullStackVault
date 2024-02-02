const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/OS");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const add = new User({
  name: "Shawn",
  email: "shawn@gmail.com",
  password: "qwer",
});

add.save();
