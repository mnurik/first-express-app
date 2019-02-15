import express from 'express';
import products from './products';

const router = express.Router();

products(router);

export default router;
