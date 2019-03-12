import Sequelize from 'sequelize';
import sequelize from './index';

const Product = sequelize.define('product', {
  name: Sequelize.STRING,
  brand: Sequelize.STRING,
  price: Sequelize.FLOAT,
}, { createdAt: false, updatedAt: false });

export default Product;
