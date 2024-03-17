import { Hono } from "hono";

const app = new Hono();
//getting input from user, in postman test it with para, auth header and body
app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;

//hello world
// import { Hono } from 'hono'
// const app = new Hono()

// app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

// export default app
