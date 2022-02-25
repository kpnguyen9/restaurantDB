"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reviewerID: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Reviewers",
          key: "id",
          as: "reviewerID",
        },
      },
      stars: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5,
        },
      },
      title: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
      },
      restaurantID: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Restaurants",
          key: "id",
          as: "restaurantID",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reviews");
  },
};
