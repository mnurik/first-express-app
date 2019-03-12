import http from 'http';

import sequelize from './models/index';
import app from './app';
import config from './config/config.json';
import { onError } from './helpers/loggers';

const port = process.env.PORT || config.port;

const server = http.createServer(app);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    server.listen(port, () => console.log(`App listening on port ${port}!`));
    server.on('error', onError);
    server.on('listening', console.log);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
