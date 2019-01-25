import express from 'express';
import bodyParser from 'body-parser';

export default ({ config, router }) => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(router);

  app.get('/', (req, res) => {
    return res.json({
      status: '000',
      message: 'Success'
    });
  });

  return {
    app,
    start: () => Promise.resolve()
      .then(() => {
        const http = app.listen(config.http.port, () => {
          const { port } = http.address();
          console.log(`The server is running on the port ${port}`);
        });
      })
  }
};