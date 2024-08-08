import prismaClient from "../prisma";

class ListCostumersService {
  async execute() {
    const customers = await prismaClient.customer.findMany();
    return customers;
  }
}

export { ListCostumersService };