const { z } = require("zod");

function validateUser(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const validationResult = schema.safeParse(obj);
  //safeParse returns success or fail if it matches the schema of zod
  console.log(validationResult);
}

validateUser({
  email: "sfsdfsd", // This is an invalid email format
  password: "", // This password is too short
});
