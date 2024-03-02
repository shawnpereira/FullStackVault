const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ShawnSource:make12345sp@source.qzqbsmt.mongodb.net/blog"
  )
  .then(console.log("connected"));
