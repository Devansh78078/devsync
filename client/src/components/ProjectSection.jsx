import { useState } from "react";

function ProjectSection({
  selectedWorkspace,
  projectTitle,
  setProjectTitle,
  createProject,
  projects,
  setSelectedProject,
  fetchTasks,
  updateProject,
  deleteProject,
}) {
  const [editingProjectId, setEditingProjectId] =
    useState(null);

  const [editedTitle, setEditedTitle] =
    useState("");

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
            className="rounded border border-gray-200 p-3"
          >
            <div className="flex items-center justify-between">
              <div
                onClick={() => {
                  setSelectedProject(project);
                  fetchTasks(project._id);
                }}
                className="flex-1 cursor-pointer"
              >
                {editingProjectId === project._id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => {
                      setEditedTitle(
                        e.target.value
                      );
                    }}
                    className="rounded border border-gray-300 px-2 py-1"
                  />
                ) : (
                  <h3 className="font-medium">
                    {project.title}
                  </h3>
                )}
              </div>

              <div className="flex gap-2">
                {editingProjectId ===
                project._id ? (
                  <button
                    onClick={() => {
                      updateProject(
                        project._id,
                        editedTitle
                      );

                      setEditingProjectId(
                        null
                      );
                      setEditedTitle("");
                    }}
                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingProjectId(
                        project._id
                      );

                      setEditedTitle(
                        project.title
                      );
                    }}
                    className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => {
                    deleteProject(
                      project._id
                    );
                  }}
                  className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;