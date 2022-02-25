"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviewers",
      [
        {
          name: "John Smith",
          email: "jsmith@yahoo.com",
          karma: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Jane",
          email: "jj@gmail.com",
          karma: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          email: "jd@yahoo.com",
          karma: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Adams",
          email: "ja@gmail.com",
          karma: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviewers", null, {});
  },
};
