"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurants.belongsTo(models.review, {
        foreignKey: "restaurantID",
        onDelete: "CASCADE",
      });
    }
  }
  Restaurants.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      category: DataTypes.STRING,
      restaurantID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Restaurants",
    }
  );
  return Restaurants;
};
