const express = require("express");
const router = express.Router();

const { findAll, create, update } = require("./controller");

router.get("/", findAll);
router.post("/", create);
router.put("/:id", update);

module.exports = router;
