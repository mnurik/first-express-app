import products from '../data/products.json';
import writeToFile from '../helpers/writeToFile';

export default (router) => {
  router.route('/products')
    .get((req, res) => {
      res.json(products);
    })
    .post((req, res, next) => {
      writeToFile(req.body, res, next);
    });

  router.get('/products/:id', (req, res, next) => {
    const product = products.find(({ id }) => id === +req.params.id);

    if (product) {
      res.json(product);
    } else {
      next(new Error(`Can't find product with id:${req.params.id}`));
    }
  });

  router.get('/products/:id/options', (req, res, next) => {
    const product = products.find(({ id }) => id === +req.params.id);

    if (product) {
      res.json(product.options);
    } else {
      next(new Error(`Can't find product with id:${req.params.id}`));
    }
  });

  router.use((error, req, res) => {
    res.json({
      success: false,
      message: error,
    });
  });
};
