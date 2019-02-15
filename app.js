import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();

app.use((req, res, next) => {
  req.parsedCookies = req.cookies;
  req.parsedQuery = req.query;
  next();
});

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api', router);

export default app;
