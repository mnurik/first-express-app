'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('sizes', [
    {
      name: 'XS',
    },
    {
      name: 'SM',
    },
    {
      name: 'M',
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
