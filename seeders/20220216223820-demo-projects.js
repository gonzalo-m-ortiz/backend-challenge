"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          name: "Landing Page",
          description: "Landing page for ONG",
          managerId: 1,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "E-Commerce Shop",
          description: "Online store for foreign client",
          managerId: 1,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CRM Linkroom",
          description: null,
          managerId: 1,
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
