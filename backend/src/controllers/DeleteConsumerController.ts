import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteConsumerService } from "../services/DeleteConsumerService";

class DeleteConsumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    // const { id } = request.query as { id: string };

    const consumerServices = new DeleteConsumerService();
    const consumers = await consumerServices.execute({ id });

    reply.send(consumers);
  }
}

export { DeleteConsumerController };