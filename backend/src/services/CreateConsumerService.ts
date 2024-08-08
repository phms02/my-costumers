import prismaClient from "../prisma";

interface CreateConsumerProps {
  name: string;
  email: string;
}

class CreateConsumerService {
  async execute({ name, email }: CreateConsumerProps) {
    if(!name || !email) throw new Error("Preencha todos os campos!");

    const customer = await prismaClient.customer.create({
      data: { name, email, status: true }
    });

    return customer;
  }
}

export { CreateConsumerService };