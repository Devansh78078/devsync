const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createWorkspace,
  getWorkspaces,
  updateWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaceController");

router.post("/", protect, createWorkspace);

router.get("/", protect, getWorkspaces);

router.patch(
  "/:workspaceId",
  protect,
  updateWorkspace
);

router.delete(
  "/:workspaceId",
  protect,
  deleteWorkspace
);

module.exports = router;