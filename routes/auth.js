import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import config from '../config/config.json';

const router = express.Router();

router.route('/')
  .post(passport.authenticate('local', { session: false }), (req, res, next) => {
    const { password, ...userData } = req.user;
    try {
      res.json({
        code: 200,
        message: 'Ok',
        data: userData,
        token: jwt.sign({ user: req.body.login }, config.secret),
      });
    } catch (err) {
      next(err);
    }
  });

router.get('/facebook', passport.authenticate('facebook'));

router.use((error, req, res) => {
  res.status(500);
  res.json({
    success: false,
    message: error,
  });
});

export default router;
