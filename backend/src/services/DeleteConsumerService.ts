import prismaClient from "../prisma";

interface DeleteConsumerProps {
  id: string;
}

class DeleteConsumerService {
  async execute({ id }: DeleteConsumerProps) {
    try {
      const consumer = await prismaClient.customer.delete({ where: { id: id }});
      // const foundConsumer = await prismaClient.customer.findFirst({ where: { id: id }});

      // if(!foundConsumer) throw new Error("No found customer!");

      // const consumer = await prismaClient.customer.delete({ where: { id: foundConsumer?.id }});

      return consumer;
    } catch(error) {
      if(!id) {  //? Throw a error if id is null!
        console.error("You need to inform consumer id!");
        throw new Error("You need to inform consumer ID!");
      }

      console.error(`Error deleting consumer: ${error}`);
      throw new Error("Error deleting consumer!");
    }
  }
}

export { DeleteConsumerService };