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

export default app;
