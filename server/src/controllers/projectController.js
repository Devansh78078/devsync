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

module.exports = {
  createProject,
};