module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('products', [{
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
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
