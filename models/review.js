'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: DataTypes.STRING,
    prevu: DataTypes.STRING,
    description: DataTypes.TEXT,
    prevuImage: DataTypes.STRING,
    link: DataTypes.STRING,
    video: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};