const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasksByProject,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");

router.post("/", protect, createTask);

router.get(
  "/project/:projectId",
  protect,
  getTasksByProject
);

router.patch(
  "/:taskId/status",
  protect,
  updateTaskStatus
);

router.delete(
  "/:taskId",
  protect,
  deleteTask
);
module.exports = router;