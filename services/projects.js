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

module.exports = {
  getById,
};
