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

const remove = async (id) => {
  const rowsRemovedCount = await db.Projects.destroy({ where: { id } });
  return rowsRemovedCount;
};

const create = async (project) => {
  const projectCreated = await db.Projects.create(project);
  return projectCreated;
};

const update = async (id, project) => {
  const [rowsUpdatedCount] = await db.Projects.update(project, {
    where: { id },
  });
  return rowsUpdatedCount;
};

module.exports = {
  getByIdWithAssociations,
  remove,
  create,
  update,
};
