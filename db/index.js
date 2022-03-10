const { Sequelize } = require("sequelize");
const { database, username, password, host, dialect } = require("../config");

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  timezone: "+07:00",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
