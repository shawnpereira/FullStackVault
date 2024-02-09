const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // check the headers and validate the admin from the admin DB
  const username = req.headers.username; // shawn@gmail.com
  const password = req.headers.password; /// 123456

  Admin.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesnt exist",
      });
    }
  });
}

module.exports = adminMiddleware;
