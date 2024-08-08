import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumersService } from "../services/ListCostumersService";

class ListConsumersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCostumersService = new ListCostumersService();
    const costumers = await listCostumersService.execute();

    reply.send(costumers);
  }
}

export { ListConsumersController };