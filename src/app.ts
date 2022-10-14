import Fastify from "fastify";

const server = Fastify()

const main = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
    console.log('Server ready at http://localhost:3000')
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();