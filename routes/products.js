import products from '../data/products';
import writeToFile from '../helpers/writeToFile';

export default (router) => {
  router.route('/products')
    .get((req, res) => {
      res.json(products);
    })
    .post((req, res, next) => {
      console.log('====================================');
      console.log(req.body);
      console.log('====================================');
      res.json(writeToFile(req.body));
      // } catch (error) {
      //   next(`We weren't able to save ${error}`);
      // }
    });

  router.get('/products/:id', (req, res, next) => {
    const product = products.find(({ id }) => id === +req.params.id);

    if (product) {
      res.json(product);
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
