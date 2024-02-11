const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ShawnSource:make12345sp@source.qzqbsmt.mongodb.net/Jwt"
  // if after .net/ we write some name, then that DB will be created, since we did not do that we got a default as "test" under which our admin, users, course is mentioned
  // we could have .net/CourseApp and that would not create test and create CourseApp
);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});
const Admin = mongoose.model("Admin", AdminSchema); // Creates a table named Admin in mongodb
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
