const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProject,
  getProjectsByWorkspace,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.post("/", protect, createProject);

router.get(
  "/workspace/:workspaceId",
  protect,
  getProjectsByWorkspace
);

router.patch(
  "/:projectId",
  protect,
  updateProject
);

router.delete(
  "/:projectId",
  protect,
  deleteProject
);

module.exports = router;