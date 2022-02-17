"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectsUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectsUsers.init(
    {},
    {
      sequelize,
      modelName: "ProjectsUsers",
      tableName: "ProjectsUsers",
    }
  );
  return ProjectsUsers;
};
