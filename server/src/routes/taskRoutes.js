const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasksByProject,
  updateTaskStatus,
  deleteTask,
  updateTask,
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

router.patch(
  "/:taskId",
  protect,
  updateTask
);

router.delete(
  "/:taskId",
  protect,
  deleteTask
);

module.exports = router;