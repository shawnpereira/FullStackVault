const { User } = require("../db");

function userMiddleware(req, res, next) {
  const username = req.headers.username; // shawn@gmail.com
  const password = req.headers.password; /// 123456

  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesnt exist",
      });
    }
  });
}

module.exports = userMiddleware;
