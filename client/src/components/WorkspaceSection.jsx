import { useState } from "react";

function WorkspaceSection({
  workspaceName,
  setWorkspaceName,
  createWorkspace,
  workspaces,
  setSelectedWorkspace,
  fetchProjects,
  updateWorkspace,
  deleteWorkspace,
}) {
  const [editingWorkspaceId, setEditingWorkspaceId] =
    useState(null);

  const [editedName, setEditedName] =
    useState("");

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">
        Workspaces
      </h2>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Workspace Name"
          value={workspaceName}
          onChange={(e) => {
            setWorkspaceName(e.target.value);
          }}
          className="flex-1 rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />

        <button
          onClick={createWorkspace}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Create
        </button>
      </div>

      <div className="space-y-2">
        {workspaces.map((workspace) => (
          <div
            key={workspace._id}
            className="rounded border border-gray-200 p-3"
          >
            <div className="flex items-center justify-between">
              <div
                onClick={() => {
                  setSelectedWorkspace(
                    workspace
                  );

                  fetchProjects(
                    workspace._id
                  );
                }}
                className="flex-1 cursor-pointer"
              >
                {editingWorkspaceId ===
                workspace._id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => {
                      setEditedName(
                        e.target.value
                      );
                    }}
                    className="rounded border border-gray-300 px-2 py-1"
                  />
                ) : (
                  <h3 className="font-medium">
                    {workspace.name}
                  </h3>
                )}
              </div>

              <div className="flex gap-2">
                {editingWorkspaceId ===
                workspace._id ? (
                  <button
                    onClick={() => {
                      updateWorkspace(
                        workspace._id,
                        editedName
                      );

                      setEditingWorkspaceId(
                        null
                      );
                      setEditedName("");
                    }}
                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingWorkspaceId(
                        workspace._id
                      );

                      setEditedName(
                        workspace.name
                      );
                    }}
                    className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => {
                    deleteWorkspace(
                      workspace._id
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

export default WorkspaceSection;