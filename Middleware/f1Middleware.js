const express = require("express");
const app = express();

function userMiddleware(req, resp, next) {
  const username = req.query.username;
  const password = req.query.password;

  if (username !== "Shawn" || password !== "123") {
    resp.status(403).json({
      msg: "Incorrect validation of user",
    });
  } else {
    next(); // Proceed to the next middleware
  }
}

function userIdMiddleware(req, resp, next) {
  const ID = req.query.id;

  if (ID !== "2") {
    resp.status(403).json({
      msg: "Invalid ID",
    });
  } else {
    next(); // Proceed to the next middleware
  }
}

// ---------app.use(userIdMiddleware)------ // with this we dont have to include the userIdMiddleware below in any methods, when we add app.use(userIdMiddleware); it means that to use that middleware everywhere on the methods without having to pass it inside the function

app.get("/", userMiddleware, userIdMiddleware, function (req, resp) {
  resp.json({
    msg: "Access granted",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
