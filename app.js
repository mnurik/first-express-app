import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import parsers from './middlewares/parsers';
import passport from './middlewares/passport';
import {
  products,
  auth,
  users,
  cities,
} from './routes/index';
import './middlewares/localStrategy';

const app = express();

parsers(app);
passport(app);

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello world!',
};

app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cities', cities);
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
  });
});

// TODO: Docker
// TODO: GraphQL

export default app;
