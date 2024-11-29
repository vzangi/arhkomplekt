'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blogCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogCategories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      },
      title: {
        type: Sequelize.STRING
      },
      prevu: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      prevuImage: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BlogItems');
  }
};