import http from 'http';
import mongoose from 'mongoose';

import app from './app';
import config from './config/config.json';
import { onError } from './helpers/loggers';

const port = process.env.PORT || config.port;

const server = http.createServer(app);

mongoose.connect(config.mlabUri, { useNewUrlParser: true })
  .then(
    () => {
      console.log('Database connection established!');
      server.listen(port, () => console.log(`App listening on port ${port}!`));
      server.on('error', onError);
      server.on('listening', console.log);
    },
    (err) => {
      console.log('Error connecting Database instance due to: ', err);
    },
  );
