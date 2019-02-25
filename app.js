import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { products, auth, users } from './routes/index';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.parsedCookies = req.cookies;
  next();
});

app.use((req, res, next) => {
  req.parsedQuery = req.query;
  next();
});

app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/auth', auth);

export default app;
