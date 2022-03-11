const express = require("express");
const router = express.Router();

const { search } = require("./controller");

router.get("/recipes", search);

module.exports = router;
