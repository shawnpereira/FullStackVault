import { Hono, Next } from "hono";
import { Context } from "hono/jsx";

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("You dont have acces");
  }
});

app.get("/", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({ msg: "as" });
});

export default app;
