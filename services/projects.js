const projectsRepository = require("../repositories/projects");
const projectsStatusRepository = require("../repositories/projectsStatus");
const usersRepository = require("../repositories/users");
const { paginate } = require("../modules/pagination");

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

const createUpdate = async (project) => {
  // validate associations
  const user = await usersRepository.getById(project.managerId);
  if (!user) {
    const error = new Error(
      `User with id ${project.managerId} not found. Project not created`
    );
    error.status = 400;
    throw error;
  }
  const projectStatus = await projectsStatusRepository.getById(
    project.statusId
  );
  if (!projectStatus) {
    const error = new Error(
      `Status with id ${project.statusId} not found. Project not created`
    );
    error.status = 400;
    throw error;
  }
  // modify project
  if (project.id) {
    //update
    const projectsUpdatedCount = await projectsRepository.update(
      project.id,
      project
    );
    if (projectsUpdatedCount <= 0) {
      const error = new Error(`Project with id ${project.id} not found`);
      error.status = 404;
      throw error;
    }
  } else {
    //create
    const projectCreated = await projectsRepository.create(project);
    project.id = projectCreated.id;
  }
  const projectModified = await projectsRepository.getByIdWithAssociations(
    project.id
  );
  return projectModified;
};

const getAllPaginated = async (req) => {
  const resObj = paginate(req, 2, projectsRepository.getAllPaginated);
  return resObj;
};

module.exports = {
  getById,
  remove,
  createUpdate,
  getAllPaginated,
};
