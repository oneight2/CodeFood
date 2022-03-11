const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../db");

const ServeHistory = sequelize.define(
  "serve_history",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nServing: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    recipeCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeCategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    steps: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    nStep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nStepDone: {
      type: DataTypes.INTEGER,
    },
    reaction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "progress",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "serve_history",
  }
);

module.exports = ServeHistory;
