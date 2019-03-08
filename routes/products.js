import express from 'express';
import verificationJWT from '../middlewares/auth';
import models from '../models';

const router = express.Router();

router.use(verificationJWT);

router.route('/')
  .get(async (req, res, next) => {
    try {
      const products = await models.Product.findAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      await models.Product.create(req.body);
      const products = await models.Product.findAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id', async (req, res, next) => {
  try {
    const product = await models.Product.findById(req.params.id);
    if (product === null) {
      res.status(404).send({ error: `Can't find product with id: ${req.params.id}` });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/options', (req, res, next) => {
  const product = products.find(({ id }) => id === +req.params.id);

  if (product) {
    res.json(product.options);
  } else {
    next(new Error(`Can't find product with id:${req.params.id}`));
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
