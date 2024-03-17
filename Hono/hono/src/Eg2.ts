import { Hono } from "hono";

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("You don't have access"); // Corrected typo
  }
});
// The middleware checks if the request has an Authorization header. If it does, it calls the next function to proceed with the request. If not, it responds with a message indicating that access is denied.
app.get("/", async (c) => {
  try {
    const body = await c.req.parseBody();
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));

    return c.json({ msg: "Success" }); // Changed message
  } catch (error) {
    console.error("Error:", error);
    return c.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
