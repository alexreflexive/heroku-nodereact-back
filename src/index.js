import fastify from "fastify";
import fp from "fastify-plugin";
import FastifyStatic from "@fastify/static";
import { config } from "dotenv";
import cors from "./lib/cors.js";
import routes from "./routes.js";
import path from "path";
import { fileURLToPath } from "url";

function main() {
  config();
  const app = fastify({ logger: true });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log(path.join(__dirname, "frontend", "build"));
  console.log(
    "-----------------------------------------------------------------"
  );
  app.register(fp(cors));
  app.register(routes, { prefix: "/api" });
  app.register(FastifyStatic, {
    root: path.join(__dirname, "frontend", "build"),
    prefix: "/", // optional: default '/'
  });
  // this will work with fastify-static and send ./static/index.html
  app.setNotFoundHandler((req, res) => {
    res.sendFile("index.html");
  });

  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(
      `Le serveur est disponible à l'adresse ${process.env.SCHEME}://${process.env.HOST}:${process.env.PORT}`
    );
  });
}
main();
