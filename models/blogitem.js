'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogItem extends Model {
    static associate(models) {
      this.belongsTo(models.BlogCategory);
    }
  }
  BlogItem.init({
    blogCategoryId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    prevu: DataTypes.TEXT,
    description: DataTypes.TEXT,
    prevuImage: DataTypes.STRING,
    link: DataTypes.STRING,
    video: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BlogItem',
  });
  return BlogItem;
};