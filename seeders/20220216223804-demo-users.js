"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "user test 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "user test 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "user test 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
