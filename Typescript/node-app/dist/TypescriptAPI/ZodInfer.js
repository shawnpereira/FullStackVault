"use strict";
// import { z } from "zod";
// import express from "express";
// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies
// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z
//     .number()
//     .min(18, { message: "You must be at least 18 years old" })
//     .optional(),
// });
// type FinalSchema = z.infer<typeof userProfileSchema>;
// app.put("/user", (req, res) => {
//   const result = userProfileSchema.safeParse(req.body);
//   const updateBody: FinalSchema = req.body; // we infer it from userProfileSchema
//   if (!result.success) {
//     res.status(400).json({ error: result.error });
//     return;
//   }
//   res.json({
//     message: "User updated",
//     updateBody,
//   });
// });
// app.listen(3000, () => console.log("Server running on port 3000"));
