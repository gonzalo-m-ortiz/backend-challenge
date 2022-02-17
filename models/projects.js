"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.belongsToMany(models.Users, {
        through: "ProjectsUsers",
        as: "users",
      });
      Projects.belongsTo(models.ProjectsStatus, {
        foreignKey: "statusId",
        as: "status",
      });
      Projects.belongsTo(models.Users, {
        foreignKey: "managerId",
        as: "manager",
      });
    }
  }
  Projects.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      managerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );
  return Projects;
};
