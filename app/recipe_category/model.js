const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../db");

const RecipeCategories = sequelize.define(
  "recipe_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "recipe_categories",
  }
);

module.exports = RecipeCategories;
