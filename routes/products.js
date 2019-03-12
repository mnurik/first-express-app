import express from 'express';
import verificationJWT from '../middlewares/auth';
import Product from '../models/product';
import ProductOption from '../models/product_options';
import Size from '../models/size';

const router = express.Router();

router.use(verificationJWT);

router.route('/')
  .get(async (req, res, next) => {
    try {
      const products = await Product.findAll({ include: [{ all: true, nested: true }] });
      // const products = await Product.findAll({
      //   include: [{
      //     model: ProductOption,
      //     as: 'options',
      //     include: [Size],
      //   }],
      // });
      res.json(products);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      await Product.create(req.body, { include: [ProductOption] });
      const products = await Product.findAll({ include: [{ all: true, nested: true }] });
      res.json(products);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id, { include: [{ all: true, nested: true }] });
    if (product === null) {
      res.status(404).send({ error: `Can't find product with id: ${req.params.id}` });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/options', async (req, res, next) => {
  try {
    const options = await ProductOption.findAll({ where: { productId: req.params.id } });
    if (options.length) {
      res.json(options);
    } else {
      res.status(404);
      res.json({
        success: false,
        message: `Can't find product with id:${req.params.id}`,
      });
    }
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
