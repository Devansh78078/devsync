function WorkspaceSection({
  workspaceName,
  setWorkspaceName,
  createWorkspace,
  workspaces,
  setSelectedWorkspace,
  fetchProjects,
}) {
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
            onClick={() => {
              setSelectedWorkspace(workspace);
              fetchProjects(workspace._id);
            }}
            className="cursor-pointer rounded border border-gray-200 p-3 transition hover:bg-gray-100"
          >
            <h3 className="font-medium">
              {workspace.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkspaceSection;