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
      <h3>
        Selected Project: {selectedProject.title}
      </h3>

      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />

        <button onClick={createTask}>
          Create Task
        </button>
      </div>

      <h4>Tasks</h4>

      {tasks.map((task) => (
        <div key={task._id}>
          <p>
            {task.title} - {task.status}
          </p>

          <button
            onClick={() => {
              updateTaskStatus(
                task._id,
                "IN_PROGRESS"
              );
            }}
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
          >
            Complete
          </button>

          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskSection;