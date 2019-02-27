import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default (app) => {
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
};
