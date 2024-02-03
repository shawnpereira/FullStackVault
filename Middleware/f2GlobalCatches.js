const express = require("express");
const app = express();

app.use(express.json());

app.post("/health", function (req, resp) {
  const kidney = req.body.kidney;
  const kidneyLength = kidney.length;

  resp.send("you have" + kidneyLength + "kidney");
});

//GLOBAL CATCHES must be used at end
//it will send user invalid input if they try to input anything that is invalid
app.use(function (err, req, resp, next) {
  resp.send("Invalid Input");
});

app.listen(3000);
