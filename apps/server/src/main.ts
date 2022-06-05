import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', function (_, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen(3000, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
