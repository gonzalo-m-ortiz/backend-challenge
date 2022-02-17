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

module.exports = {
  getById,
  remove,
};
