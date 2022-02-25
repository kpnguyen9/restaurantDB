"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          stars: 4,
          title: "THIS PLASE WAS GOOD",
          review: "yummmmmmmmmm",
          reviewerID: 1,
          restaurantID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stars: 5,
          title: "WHAAAAAAAT",
          review: "go try it now",
          reviewerID: 2,
          restaurantID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stars: 2,
          title: "Don't go here",
          review: "avoid at all costs",
          reviewerID: 3,
          restaurantID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stars: 1,
          title: "Dirty",
          review: "gross",
          reviewerID: 4,
          restaurantID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
