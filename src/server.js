const Hapi = require('@hapi/hapi');
const { AppRouter } = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(AppRouter);

  await server.start();
  console.log('Server Run On Port 5000');
};

init();
