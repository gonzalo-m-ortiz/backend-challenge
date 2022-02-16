"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          name: "proj test 1",
          description: "desc test 1",
          managerId: 1,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "proj test 2",
          description: null,
          managerId: 1,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "proj test 3",
          description: "desc test 3",
          managerId: 1,
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "proj test 4",
          description: "desc test 4",
          managerId: 2,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "proj test 5",
          description: "desc test 5",
          managerId: 2,
          statusId: 1,
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
