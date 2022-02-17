const projectsService = require("../services/projects");

const getById = async (req, res, next) => {
  try {
    const project = await projectsService.getById(req.params.id);
    res.status(200).json({ data: project });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await projectsService.remove(req.params.id);
    res.status(200).json({ msg: "Project removed succesfully" });
  } catch (error) {
    next(error);
  }
};

const createUpdate = async (req, res, next) => {
  try {
    const project = await projectsService.createUpdate(req.body);
    res
      .status(200)
      .json({ msg: "Project created/updated succesfully", data: project });
  } catch (error) {
    next(error);
  }
};

const getAllPaginated = async (req, res, next) => {
  try {
    const resObj = await projectsService.getAllPaginated(req);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
};

const modifyProjectUsers = async (req, res, next) => {
  try {
    const assignUsers = req.method === "DELETE" ? false : true;
    await projectsService.modifyProjectUsers(
      req.params.projectId,
      req.body.id,
      assignUsers
    );
    res.status(200).json({ msg: "Project users modified" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getById,
  remove,
  createUpdate,
  getAllPaginated,
  modifyProjectUsers,
};
