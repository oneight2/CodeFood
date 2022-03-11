const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Recipes = sequelize.define(
  "recipes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    recipeCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ingredientsPerServing: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    steps: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nServing: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    nReactionLike: {
      type: DataTypes.INTEGER,
    },
    nReactionNeutral: {
      type: DataTypes.INTEGER,
    },
    nReactionDislike: {
      type: DataTypes.INTEGER,
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
    tableName: "recipes",
  }
);

module.exports = Recipes;
