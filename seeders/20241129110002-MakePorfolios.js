'use strict';

const tableName = 'Portfolios'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [
      {
        title: 'Комплектация квартиры в ЖК "Рублёвка"',
        prevu: '',
        description: '',
        prevuImage: '/uploads/i01.png',
        link: 'v01',
        video: '/uploads/v01.mp4',
        date: '13.11.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Комплектация в ЖК "Сердце Столицы"',
        prevu: '',
        description: '',
        prevuImage: '/uploads/i02.png',
        link: 'v02',
        video: '/uploads/v02.mp4',
        date: '24.10.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Комплектация квартиры на ул. Тогоева',
        prevu: '',
        description: '',
        prevuImage: '/uploads/i03.png',
        link: 'v03',
        video: '/uploads/v03.mp4',
        date: '11.10.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Комплектация квартиры в ЖК "Рублёвка"',
        prevu: '',
        description: '',
        prevuImage: '/uploads/i04.png',
        link: 'v04',
        video: '/uploads/v04.mp4',
        date: '13.11.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Комплектация в ЖК "Грин Парк"',
        prevu: '',
        description: '',
        prevuImage: '/uploads/i05.png',
        link: 'v05',
        video: '/uploads/v05.mp4',
        date: '05.09.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
