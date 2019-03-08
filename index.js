import http from 'http';
import app from './app';
import config from './config/config.json';
import models from './models/index';
import { onError } from './helpers/loggers';

const port = process.env.PORT || config.port;

const server = http.createServer(app);

models.sequelize
  .sync()
  .then(() => {
    server.listen(port, () => console.log(`App listening on port ${port}!`));
    server.on('error', onError);
    server.on('listening', console.log);
  });
