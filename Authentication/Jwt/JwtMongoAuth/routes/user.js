const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {});

router.post("/signin", (req, res) => {});

router.get("/courses", (req, res) => {});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  const username = req.username;
  console.log(username);
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {});

module.exports = router;
