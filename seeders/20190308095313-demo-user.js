'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    login: 'Warner',
    password: 'ea',
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
