'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seo.init({
    page: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    keywords: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seo',
  });
  return Seo;
};