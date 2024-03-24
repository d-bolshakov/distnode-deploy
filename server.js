import fastify from "fastify";
import { Recipe } from "./recipe.js";

const server = fastify();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;

server.get("/", async (req, reply) => {
  return "Hello from Distributed Node.js!";
});

server.get("/recipes/:id", async (req, reply) => {
  const recipe = new Recipe(req.params.id);
  await recipe.hydrate();
  return recipe;
});

server.listen({ host: HOST, port: PORT }, () => {
  console.log(`Producer running at http://${HOST}:${PORT}`);
});
