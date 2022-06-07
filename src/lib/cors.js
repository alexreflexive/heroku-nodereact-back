import FastifyCors from "@fastify/cors";

export default async function cors(app) {
  app.register(FastifyCors);
}
