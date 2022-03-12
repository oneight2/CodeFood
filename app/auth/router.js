const express = require("express");
const router = express.Router();

const { register, login, index } = require("./controller");

router.post("/register", register);
router.post("/login", login);

router.get("/", index);

module.exports = router;
