const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

  if (decodedValue.username) {
    req.username = decodedValue.username; //so with this we can get the username from the header without the user having to send it explicitly as middlewares job is to send data and it does that by accessing the header

    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
