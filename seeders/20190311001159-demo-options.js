'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('product_options', [{
    productId: 1,
    sizeId: 1,
  }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
