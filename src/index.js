import fastify from "fastify";
import fp from "fastify-plugin";
import FastifyStatic from "@fastify/static";
import { config } from "dotenv";
import cors from "./lib/cors.js";
import routes from "./routes.js";

function main() {
  config();
  const app = fastify({ logger: true });

  app.register(fp(cors));
  app.register(routes);

  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(
      `Le serveur est disponible à l'adresse ${process.env.SCHEME}://${process.env.HOST}:${process.env.PORT}`
    );
  });
}
main();
