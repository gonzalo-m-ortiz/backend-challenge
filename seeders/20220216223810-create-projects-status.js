"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProjectsStatus",
      [
        {
          name: "enabled",
          description: "desc status 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "disabled",
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
