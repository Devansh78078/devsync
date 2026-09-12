const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProject,
  getProjectsByWorkspace,
} = require("../controllers/projectController");

router.post("/", protect, createProject);
router.get("/workspace/:workspaceId", protect, getProjectsByWorkspace);

module.exports = router;