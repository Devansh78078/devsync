function ProjectSection({
  selectedWorkspace,
  projectTitle,
  setProjectTitle,
  createProject,
  projects,
  setSelectedProject,
  fetchTasks,
}) {
  return (
    <div>
      <h2>
        Selected Workspace: {selectedWorkspace.name}
      </h2>

      <div>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
        />

        <button onClick={createProject}>
          Create Project
        </button>
      </div>

      <h3>Projects</h3>

      {projects.map((project) => (
        <div key={project._id}>
          <p
            onClick={() => {
              setSelectedProject(project);
              fetchTasks(project._id);
            }}
          >
            {project.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;