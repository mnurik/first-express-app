import express from 'express';
import verificationJWT from '../middlewares/auth';
import User from '../models/user';

const router = express.Router();

router.route('/')
  .get(verificationJWT, async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      next(error);
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
