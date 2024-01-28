const express = require("express");
const port = 3000;

const users = [
  {
    name: "John",
    kidney: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
    liver: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
  {
    name: "Pom",
    kidney: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
    liver: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

const app = express();

app.use(express.json()); // Has to be used for using postman

// GET METHOD
app.get("/", function (req, resp) {
  let numberOfHealthyKidney = 0;
  // Access the second user (index 1) and count the healthy kidneys
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (users[0].kidney[i].healthy) {
      numberOfHealthyKidney = numberOfHealthyKidney + 1;
    }
  }

  resp.json({ numberOfHealthyKidney });
});

// POST METHOD
app.post("/", function (req, resp) {
  const isHealthy = req.body.isHealthy; // will take value of false or true from user
  users[0].kidney.push({
    healthy: isHealthy, // will update the database so if "true" is inserted then number of healthy kidneys will increase
  });
  resp.json({
    msg: "Done", // Will send back message after request is executed
  });
});
// IN postman the body will include {"ishealthy" : true} and select post and send the request, thus it will be pushed into the database

//PUT METHOD (REPLACE)

app.put("/", function (req, resp) {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].healthy = false; // will update all healthy kidney of user 0 to false
  }

  resp.json({ mes: "YEP" });

  // IN postman keep the body empty and select put and send the request
});

app.delete("/", function (req, resp) {
  const newKidney = [];
  for (let i = 0; i < users[0].kidney.length; i++) {
    newKidney.push({
      healthy: false,
    });
  }
  users[0].kidney = newKidney;

  resp.json({ mes: "yos" });
});

app.listen(port);
