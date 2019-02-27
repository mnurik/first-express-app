import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import users from '../data/users.json';
import config from '../config/config.json';

const router = express.Router();

router.route('/')
  .post(passport.authenticate('local', { session: false }), (req, res, next) => {
    const { password, ...rest } = users.find(user => user.login === req.body.login) || {};
    if (password === req.body.password) {
      try {
        res.json({
          code: 200,
          message: 'Ok',
          data: {
            ...rest,
          },
          token: jwt.sign({ user: req.body.login }, config.secret),
        });
      } catch (err) {
        next(err);
      }
    } else {
      res.status(404).json({
        code: 404,
        message: 'Not Found',
      });
    }
  });

router.use((error, req, res) => {
  res.status(500);
  res.json({
    success: false,
    message: error,
  });
});

export default router;
