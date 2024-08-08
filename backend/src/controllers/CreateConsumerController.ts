import { FastifyRequest, FastifyReply } from "fastify";
import { CreateConsumerService } from "../services/CreateConsumerService";

class CreateConsumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string, email: string };

    const customerService = new CreateConsumerService();
    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateConsumerController };