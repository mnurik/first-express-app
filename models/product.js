import Sequelize from 'sequelize';
import Size from './size';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    // options: [
    //   {
    //     size: {
    //       type: DataTypes.INTEGER,
    //       references: {
    //         model: Size,
    //         key: 'id',
    //       },
    //     },
    //   },
    // ],
    size: {
      type: DataTypes.INTEGER,
      references: {
        model: Size,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  }, {});
  // Product.hasMany(Size, { foreignKey: 'size' });
  return Product;
};
