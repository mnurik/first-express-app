import mongoose from 'mongoose';

import Product from '../models/product';
import Size from '../models/size';
import User from '../models/user';
import City from '../models/cities';
import config from '../config/config.json';

mongoose.connect(config.mlabUri, { useNewUrlParser: true })
  .then((db) => {
    console.log('Database connection established!');

    // db.cities.remove({});
    // db.products.remove({});
    // db.sizes.remove({});
    // db.users.remove({});

    const sizeS = new Size({ name: 'S' });
    const sizeM = new Size({ name: 'M' });
    const sizeXL = new Size({ name: 'XL' });

    // [sizeS, sizeM, sizeXL].forEach(el => el.save());

    const firstProduct = new Product({
      name: 'Supreme T-Shirt', brand: 'Supreme', price: 99.99, options: [{ size: sizeXL._id }],
    });
    const secondProduct = new Product({
      name: 'Supreme T-Shirt 2', brand: 'Supreme 2', price: 150, options: [{ size: sizeS._id }],
    });
    const thirdProduct = new Product({
      name: 'Nike T-Shirt', brand: 'Nike', price: 300, options: [{ size: sizeM._id }],
    });

    // [firstProduct, secondProduct, thirdProduct].forEach(pr => pr.save());

    // User.insertMany([
    //   {
    //     name: {
    //       first: 'Ines',
    //       last: 'Lowe',
    //     },
    //     login: 'Warner',
    //     password: 'ea',
    //   },
    //   {
    //     name: {
    //       first: 'Brock',
    //       last: 'Beasley',
    //     },
    //     login: 'Morales',
    //     password: 'id',
    //   },
    // ], console.log);

    City.insertMany([
      {
        name: 'Brest',
        country: 'Belarus',
        capital: false,
        location: {
          lat: 52.097621,
          long: 23.734050,
        },
      },
      {
        name: 'Minsk',
        country: 'Belarus',
        capital: true,
        location: {
          lat: 52.097625,
          long: 23.734053,
        },
      },
    ], console.log);
    // db.close();
  }, (err) => {
    console.log('Error connecting Database instance due to: ', err);
  });
