const db = require("../models");

const getById = async (id) => {
  const user = await db.Users.findByPk(id);
  return user;
};

module.exports = {
  getById,
};
