import express from 'express';
import products from '../data/products.json';
import writeToFile from '../helpers/writeToFile';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    // TODO: use async read file
    res.json(products);
  })
  .post(async (req, res, next) => {
    try {
      await writeToFile(req.body);
    } catch (error) {
      next(error);
    }
    res.json(products);
  });

router.get('/:id', (req, res, next) => {
  const product = products.find(({ id }) => id === +req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ error: `Can't find product with id:${req.params.id}` });
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
