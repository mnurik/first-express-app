import express from 'express';
import users from '../data/users.json';
import verificationJWT from '../middlewares/auth';

const router = express.Router();

router.route('/')
  .get(verificationJWT, (req, res) => {
    res.json(users);
  });

export default router;
