import express from 'express';
import verificationJWT from '../middlewares/auth';
import Size from '../models/size';
import Product from '../models/product';

const router = express.Router();

router.use(verificationJWT);

router.route('/')
  .get(async (req, res, next) => {
    try {
      const products = await Product.find().populate('options.size');
      res.json(products);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newProduct = new Product(req.body);
      const product = await newProduct.save();

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  });

router
  .get('/:id', async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id).populate('options.size');
      if (product === null) {
        res.status(404).send({ error: `Can't find product with id: ${req.params.id}` });
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      if (product === null) {
        res.status(404).send({ error: `Can't find product with id: ${req.params.id}` });
      }
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  });

router.get('/:id/options', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('options.size');
    if (product === null) {
      res.status(404).send({ error: `Can't find product with id: ${req.params.id}` });
    }
    res.json(product.options);
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
