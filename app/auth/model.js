const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../db");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "user",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 200],
      },
    },
  },
  {
    timestamps: false,
    tableName: "users",
    hooks: {
      beforeCreate: (user, options) => {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

module.exports = User;
