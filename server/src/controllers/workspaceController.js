const Workspace = require("../models/Workspace");

const createWorkspace = async (req, res) => {
  try {
    const { name } = req.body;

    const workspace = await Workspace.create({
      name,
      owner: req.user.userId,
    });

    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find({
      owner: req.user.userId,
    });

    res.json(workspaces);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateWorkspace = async (req, res) => {
  try {
    const { name } = req.body;

    const workspace =
      await Workspace.findByIdAndUpdate(
        req.params.workspaceId,
        { name },
        { new: true }
      );

    res.json(workspace);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteWorkspace = async (req, res) => {
  try {
    const workspace =
      await Workspace.findByIdAndDelete(
        req.params.workspaceId
      );

    res.json({
      message:
        "Workspace deleted successfully",
      workspace,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createWorkspace,
  getWorkspaces,
  updateWorkspace,
  deleteWorkspace,
};