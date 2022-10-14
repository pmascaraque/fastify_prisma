import { FastifyInstance } from "fastify"
import registerUserHandler from "./user.controller"

export const userRoutes = async (server: FastifyInstance) => {
  server.post('/', registerUserHandler ) //route prefixed in app.ts
}
