const express = require("express");
const router = express.Router();

const { findAll, create, update, delete: remove } = require("./controller");

router.get("/", findAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
