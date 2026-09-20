const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      workspace,
      deadline,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      workspace,
      deadline,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProjectsByWorkspace = async (req, res) => {
  try {
    const projects = await Project.find({
      workspace: req.params.workspaceId,
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.projectId,
      { title },
      { new: true }
    );

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(
      req.params.projectId
    );

    res.json({
      message: "Project deleted successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjectsByWorkspace,
  updateProject,
  deleteProject,
};