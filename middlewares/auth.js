import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import models from '../models';

const verificationJWT = async (req, res, next) => {
  try {
    if (req.headers.token) {
      const decoded = jwt.verify(req.headers.token, config.secret);
      const user = await models.User.findOne({ where: { login: decoded.user } });
      if (user !== null) {
        next();
      }
    }
  } catch (error) {
    res.status(401).json({
      code: 401,
      message: 'You have to login',
    });
  }
};

export default verificationJWT;
