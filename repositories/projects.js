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
      {
        model: db.Users,
        as: "users",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
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

const getAllPaginated = async (offset, limit, queryParams) => {
  const whereClause = {};
  if (queryParams.name) {
    whereClause.name = { [db.Sequelize.Op.substring]: queryParams.name };
  }
  const countAndRows = await db.Projects.findAndCountAll({
    where: whereClause,
    attributes: ["id", "name", "createdAt"],
    include: [
      {
        model: db.Users,
        as: "manager",
        attributes: ["id", "name"], //image
      },
    ],
    order: [["createdAt", "DESC"]],
    offset,
    limit,
  });
  return countAndRows;
};

const projectExists = async (id) => {
  const project = await db.Projects.findByPk(id, {
    attributes: ["id"],
  });
  return project ? true : false;
};

const addUser = async (projectId, userId) => {
  await db.ProjectsUsers.create({ projectId, userId });
};

const removeUser = async (projectId, userId) => {
  await db.ProjectsUsers.destroy({ where: { projectId, userId } });
};

module.exports = {
  getByIdWithAssociations,
  remove,
  create,
  update,
  getAllPaginated,
  projectExists,
  addUser,
  removeUser,
};
