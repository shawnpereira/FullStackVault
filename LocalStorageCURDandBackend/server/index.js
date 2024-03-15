const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mainRoute = require("./routes");
app.use("/work", mainRoute);

app.listen(3000, () => {
  console.log("3000 active");
});
