const express = require("express");
const cors = require("cors");
const blogRouter = require("./route/blog-route");

require("./db/index");

const app = express();
app.use(cors());
app.use(express.json());

// runs the backend for routes
app.use("api/blogs", blogRouter);

// app.use("/api", (req, res) => {
//   res.send("hello");
// });

app.listen(3000);
