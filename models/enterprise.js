'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enterprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enterprise.belongsTo(models.User);
      Enterprise.hasMany(models.Service);
    }
  }
  Enterprise.init({
    branch: DataTypes.STRING,
    number: DataTypes.INTEGER,
    street: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enterprise',
  });
  return Enterprise;
};