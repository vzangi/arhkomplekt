'use strict';

const tableName = 'Users'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [
      {
        login: 'zangi',
        password: 'Qazwsx1593',
        name: 'Vladimir',
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'Aslan',
        password: 'beAmazing!',
        name: 'Aslan',
        role: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
