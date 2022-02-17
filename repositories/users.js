const db = require("../models");

const getById = async (id) => {
  const user = await db.Users.findByPk(id);
  return user;
};

const userExists = async (id) => {
  const user = await db.Users.findByPk(id, {
    attributes: ["id"],
  });
  return user ? true : false;
};

module.exports = {
  getById,
  userExists,
};
