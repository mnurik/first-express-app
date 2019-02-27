import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import users from '../data/users.json';

const verificationJWT = (req, res, next) => {
  if (req.headers.token) {
    const decoded = jwt.verify(req.headers.token, config.secret);
    if (users.find(user => user.login === decoded.user)) {
      next();
    }
  }
  res.status(401).json({
    code: 401,
    message: 'You have to login',
  });
};

export default verificationJWT;
