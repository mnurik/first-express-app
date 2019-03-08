import express from 'express';
import verificationJWT from '../middlewares/auth';
import models from '../models';

const router = express.Router();

router.route('/')
  .get(verificationJWT, async (req, res, next) => {
    try {
      const users = await models.User.findAll();
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
