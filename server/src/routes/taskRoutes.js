const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
  createTask,
  getTasksByProject,
  updateTaskStatus,
} = require("../controllers/taskController");

router.post("/", protect, createTask);
router.patch(
  "/:taskId/status",
  protect,
  updateTaskStatus
);

module.exports = router;