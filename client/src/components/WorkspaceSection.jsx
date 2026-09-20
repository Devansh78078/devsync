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
      <input
        type="text"
        placeholder="Workspace Name"
        value={workspaceName}
        onChange={(e) => {
          setWorkspaceName(e.target.value);
        }}
      />

      <button onClick={createWorkspace}>
        Create Workspace
      </button>

      {workspaces.map((workspace) => (
        <div key={workspace._id}>
          <h3
            onClick={() => {
              setSelectedWorkspace(workspace);
              fetchProjects(workspace._id);
            }}
          >
            {workspace.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default WorkspaceSection;