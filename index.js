import app from './app';
import config from './config/config.json';

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`App listening on port ${port}!`));
