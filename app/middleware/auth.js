const config = require("../../config");
const jwt = require("jsonwebtoken");
const User = require("../auth/model");
module.exports = {
  isLogin: async (req, res, next) => {
    try {
      const token = req.headers.authorization
        ? req.headers.authorization.replace("Bearer ", "")
        : res.status(500).json({ status: false, message: "Unauthorized" });

      const data = jwt.verify(token, config.jwtKey);
      const user = await User.findOne({ id: data.user.id });
      if (!user) {
        throw new Error();
      }
      req.user = user;
      req.token = token;
      next();
    } catch (err) {
      res.status(401).json({ status: false, message: err.message, token });
    }
  },
};
