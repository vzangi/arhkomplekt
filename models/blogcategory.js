'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogCategory extends Model {
    static associate(models) {
      this.hasMany(models.BlogItem, {
        as: 'items',
        foreignKey: 'blogCategoryId'
      });
    }
  }
  BlogCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BlogCategory',
  });
  return BlogCategory;
};