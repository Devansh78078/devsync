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
      <h2 className="mb-2 text-xl font-bold">
        Projects
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        Workspace: {selectedWorkspace.name}
      </p>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
          className="flex-1 rounded border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
        />

        <button
          onClick={createProject}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Create
        </button>
      </div>

      <div className="space-y-2">
        {projects.map((project) => (
          <div
            key={project._id}
            onClick={() => {
              setSelectedProject(project);
              fetchTasks(project._id);
            }}
            className="cursor-pointer rounded border border-gray-200 p-3 transition hover:bg-gray-100"
          >
            <h3 className="font-medium">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;