import Sequelize from 'sequelize';
import sequelize from './index';
import ProductOption from './product_options';

const Size = sequelize.define('size', {
  name: Sequelize.STRING,
}, { createdAt: false, updatedAt: false });

ProductOption.belongsTo(Size);
Size.hasMany(ProductOption);

export default Size;
