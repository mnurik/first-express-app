import express from 'express';
import parsers from './middlewares/parsers';
import './middlewares/localStrategy';
import { products, auth, users } from './routes/index';

const app = express();

parsers(app);

app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/auth', auth);

export default app;
