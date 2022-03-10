const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  jwtKey: process.env.SECRET_TOKEN,
  serviceName: process.env.SERVICE_NAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
};
