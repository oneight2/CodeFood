const express = require("express");
const router = express.Router();
const { isLogin } = require("../middleware/auth");
const {
  create,
  updateStepOrder,
  updateReaction,
  historyDetail,
  listHistory,
} = require("./controller");

router.post("/", isLogin, create);
router.put("/:id/done-step", isLogin, updateStepOrder);
router.post("/:id/reaction", isLogin, updateReaction);
router.get("/:id", isLogin, historyDetail);
router.get("/", isLogin, listHistory);

module.exports = router;
