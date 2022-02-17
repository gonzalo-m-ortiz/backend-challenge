const db = require("../models");

const getByIdWithAssociations = async (id) => {
  const project = await db.Projects.findByPk(id, {
    attributes: { exclude: ["managerId", "statusId"] },
    include: [
      {
        model: db.Users,
        as: "manager",
        attributes: ["id", "name"],
      },
      {
        model: db.ProjectsStatus,
        as: "status",
        attributes: ["id", "name"],
      },
    ],
  });
  return project;
};

module.exports = {
  getByIdWithAssociations,
};
