import express from 'express';
import parsers from './middlewares/parsers';
import passport from './middlewares/passport';
import { products, auth, users } from './routes/index';

import './middlewares/localStrategy';

const app = express();

parsers(app);
passport(app);

app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
