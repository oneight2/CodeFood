const { Sequelize } = require("sequelize");
const {
  database,
  username,
  password,
  host,
  dialect,
  port,
} = require("../config");

console.log("DB", database);
console.log("USER", username);
console.log("PASS", password);
console.log("HOST", host);
console.log("DIALECT", dialect);

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
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
