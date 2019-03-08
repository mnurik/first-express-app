'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Sizes', [
    {
      name: 'XS',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'SM',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'M',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
