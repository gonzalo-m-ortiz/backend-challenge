"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Agustin Perez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fabricio Chavez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pedro Garcia",
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
