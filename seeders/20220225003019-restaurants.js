"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          name: "five guys",
          address: "123 street",
          category: "vegan food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "taco bell",
          address: "taco street",
          category: "mexican food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chipotle",
          address: "2445566 street",
          category: "mexican food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "burger king",
          address: "king street",
          category: "king food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Restaurants", null, {});
  },
};
