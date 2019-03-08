module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    size: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
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
