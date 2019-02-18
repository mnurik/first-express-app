import fs from 'fs';
import products from '../data/products.json';

export default (data, res, next) => {
  const writable = fs.createWriteStream('./data/products.json');

  writable.write(JSON.stringify([
    ...products,
    {
      ...data,
      id: products[products.length - 1].id + 1,
    },
  ]));

  writable.on('error', (error) => {
    next(error);
  });

  writable.end(() => res.json(products));
};
