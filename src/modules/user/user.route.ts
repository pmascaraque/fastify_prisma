import { FastifyInstance } from "fastify"
import registerUserHandler from "./user.controller"

const userRoutes = async (server: FastifyInstance) => {
  server.post('/', registerUserHandler ) //route prefixed in app.ts
}

export default userRoutes