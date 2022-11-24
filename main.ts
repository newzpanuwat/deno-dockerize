// @ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx: any) => {
  ctx.response.body = "Hello from Deno and AWS Lightsail!";
});

await app.listen({ port: 8000 });
