// import Sequelize from 'sequelize';
import sequelize from './index';
import Product from './product';

const ProductOption = sequelize.define('product_option', {

}, { createdAt: false, updatedAt: false });

ProductOption.belongsTo(Product);
Product.hasMany(ProductOption);

export default ProductOption;
