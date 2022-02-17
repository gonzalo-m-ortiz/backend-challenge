"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProjectsStatus",
      [
        {
          name: "Enabled",
          description: "The project is active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Disabled",
          description: null,
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
