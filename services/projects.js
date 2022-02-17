const projectsRepository = require("../repositories/projects");

const getById = async (id) => {
  const project = await projectsRepository.getByIdWithAssociations(id);
  if (!project) {
    const error = new Error(`Project with id ${id} not found`);
    error.status = 404;
    throw error;
  }
  return project;
};

const remove = async (id) => {
  const projectsRemovedCount = await projectsRepository.remove(id);
  if (projectsRemovedCount <= 0) {
    const error = new Error(`Project with id ${id} not found`);
    error.status = 404;
    throw error;
  }
};

module.exports = {
  getById,
  remove,
};
