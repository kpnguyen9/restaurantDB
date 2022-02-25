"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.Restaurants, {
        foreignKey: "restaurantID",
      });
      Review.hasMany(models.Reviewers, {
        foreignKey: "reviewerID",
      });
    }
  }
  Review.init(
    {
      reviewerID: DataTypes.INTEGER,
      stars: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 5,
        },
      },
      title: DataTypes.STRING,
      review: DataTypes.STRING,
      restaurantID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
