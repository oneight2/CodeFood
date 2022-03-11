const express = require("express");
const router = express.Router();

const { findAll, findOne, steps, create, update } = require("./controller");

router.get("/", findAll);
router.get("/:id", findOne);
router.get("/:id/steps", steps);
router.post("/", create);
router.put("/:id", update);

module.exports = router;
