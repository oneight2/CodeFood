const User = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const valid = await User.findOne({ where: { username } });
      console.log(valid !== null);
      if (valid === null) {
        const user = await User.create({ username, password });
        res.status(200).json({
          status: true,
          message: "Success",
          data: user,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Username already registered",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      console.log(user);
      if (user) {
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
          const token = jwt.sign(
            { user: { id: user.id, username: user.username } },
            config.jwtKey
          );
          res.status(200).json({
            status: true,
            message: "Success",
            data: {
              token,
            },
          });
        } else {
          res.status(400).json({
            status: false,
            message: "Password incorrect",
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "Username not registered",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
};
