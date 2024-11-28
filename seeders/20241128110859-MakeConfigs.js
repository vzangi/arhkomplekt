'use strict';

const tableName = 'Configs'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(tableName, [
    {
      name: 'phone',
      value: '+7 (918) 706-00-50',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tel',
      value: '79187060050',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'city',
      value: 'Владикавказ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'address',
      value: 'ул. Карла Маркса 74',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'email',
      value: 'komplektator_vld@yandex.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
