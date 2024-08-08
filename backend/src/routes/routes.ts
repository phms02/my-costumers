import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateConsumerController } from "../controllers/CreateConsumerController";
import { ListConsumersController } from "../controllers/ListCostumersController";
import { DeleteConsumerController } from "../controllers/DeleteConsumerController";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListConsumersController().handle(request, reply);
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateConsumerController().handle(request, reply);
  });

  fastify.delete("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteConsumerController().handle(request, reply);
  });
}