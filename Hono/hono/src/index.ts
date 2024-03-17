import { Hono, Next } from "hono";

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("You dont have acces");
  }
});
// The middleware checks if the request has an Authorization header. If it does, it calls the next function to proceed with the request. If not, it responds with a message indicating that access is denied.

app.get("/", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({ msg: "as" });
});

export default app;
