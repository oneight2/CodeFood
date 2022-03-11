const express = require("express");
const router = express.Router();
const { isLogin } = require("../middleware/auth");
const { create } = require("./controller");

router.post("/", isLogin, create);

module.exports = router;
