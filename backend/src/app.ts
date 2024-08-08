import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

export const app = Fastify({ logger: true });