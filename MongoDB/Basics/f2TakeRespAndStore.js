const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Source");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pass: { type: String, required: true },
});

const User = mongoose.model("Users", UserSchema); // Users is the table which will be created to store the data

app.post("/", function (req, resp) {
  const name = req.body.name; // for postman to take input in body
  const pass = req.body.pass;

  const user = new User({
    name: name,
    pass: pass,
  });

  user.save(); // to save the user input
  resp.json({
    msg: "success",
  });
});

app.listen(3000);
