function TaskSection({
  selectedProject,
  taskTitle,
  setTaskTitle,
  createTask,
  tasks,
  updateTaskStatus,
  deleteTask,
}) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">
        Tasks
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        Project: {selectedProject.title}
      </p>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          className="flex-1 rounded border border-gray-300 px-3 py-2 outline-none focus:border-purple-500"
        />

        <button
          onClick={createTask}
          className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          Create
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="rounded border border-gray-200 p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium">
                {task.title}
              </h3>

              <span className="text-sm text-gray-500">
                {task.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  updateTaskStatus(
                    task._id,
                    "IN_PROGRESS"
                  );
                }}
                className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
              >
                Start
              </button>

              <button
                onClick={() => {
                  updateTaskStatus(
                    task._id,
                    "DONE"
                  );
                }}
                className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
              >
                Complete
              </button>

              <button
                onClick={() => {
                  deleteTask(task._id);
                }}
                className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskSection;