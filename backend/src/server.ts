import { app } from "./app";
import cors from "@fastify/cors";
import { routes } from "./routes/routes";

const port: number = process.env.NODE_PORT_01 ? parseInt(process.env.NODE_PORT_01) : parseInt(process.env.NODE_PORT_02 ?? "4610");

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ code: error.code, message: error.message });
  });

  try {
    await app.listen({ port });
  } catch(error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

start();