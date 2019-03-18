import express from 'express';
import verificationJWT from '../middlewares/auth';
import User from '../models/user';

const router = express.Router();

router
  .get('/', verificationJWT, async (req, res, next) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      if (user === null) {
        res.status(404).send({ error: `Can't find user with id: ${req.params.id}` });
      }
      res.status(200).json();
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
