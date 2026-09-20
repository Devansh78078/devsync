import { useEffect, useState } from "react";
import api from "../services/api";
import WorkspaceSection from "../components/WorkspaceSection";
import ProjectSection from "../components/ProjectSection";
import TaskSection from "../components/TaskSection";

function Dashboard() {
  const [workspaces, setWorkspaces] = useState([]);
  const [workspaceName, setWorkspaceName] = useState("");

  const [selectedWorkspace, setSelectedWorkspace] =
    useState(null);

  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] =
    useState("");
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] =
    useState("");

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await api.get(
          "/workspaces"
        );

        setWorkspaces(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWorkspaces();
  }, []);

  const createWorkspace = async () => {
    try {
      const response = await api.post(
        "/workspaces",
        {
          name: workspaceName,
        }
      );

      setWorkspaces([
        ...workspaces,
        response.data,
      ]);

      setWorkspaceName("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async (
    workspaceId
  ) => {
    try {
      const response = await api.get(
        `/projects/workspace/${workspaceId}`
      );

      setProjects(response.data);
      setSelectedProject(null);
      setTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async () => {
    try {
      const response = await api.post(
        "/projects",
        {
          title: projectTitle,
          workspace:
            selectedWorkspace._id,
        }
      );

      setProjects([
        ...projects,
        response.data,
      ]);

      setProjectTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProject = async (
    projectId,
    title
  ) => {
    try {
      const response = await api.patch(
        `/projects/${projectId}`,
        {
          title,
        }
      );

      setProjects(
        projects.map((project) =>
          project._id === projectId
            ? response.data
            : project
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (
    projectId
  ) => {
    try {
      await api.delete(
        `/projects/${projectId}`
      );

      setProjects(
        projects.filter(
          (project) =>
            project._id !== projectId
        )
      );

      setSelectedProject(null);
      setTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async (
    projectId
  ) => {
    try {
      const response = await api.get(
        `/tasks/project/${projectId}`
      );

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      const response = await api.post(
        "/tasks",
        {
          title: taskTitle,
          project:
            selectedProject._id,
        }
      );

      setTasks([
        ...tasks,
        response.data,
      ]);

      setTaskTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskStatus = async (
    taskId,
    newStatus
  ) => {
    try {
      const response = await api.patch(
        `/tasks/${taskId}/status`,
        {
          status: newStatus,
        }
      );

      setTasks(
        tasks.map((task) =>
          task._id === taskId
            ? response.data
            : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (
    taskId,
    title
  ) => {
    try {
      const response = await api.patch(
        `/tasks/${taskId}`,
        {
          title,
        }
      );

      setTasks(
        tasks.map((task) =>
          task._id === taskId
            ? response.data
            : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (
    taskId
  ) => {
    try {
      await api.delete(
        `/tasks/${taskId}`
      );

      setTasks(
        tasks.filter(
          (task) =>
            task._id !== taskId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          DevSync Dashboard
        </h1>

        <button
          onClick={logout}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-lg bg-white p-4 shadow">
          <WorkspaceSection
            workspaceName={
              workspaceName
            }
            setWorkspaceName={
              setWorkspaceName
            }
            createWorkspace={
              createWorkspace
            }
            workspaces={workspaces}
            setSelectedWorkspace={
              setSelectedWorkspace
            }
            fetchProjects={
              fetchProjects
            }
          />
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          {selectedWorkspace && (
            <ProjectSection
              selectedWorkspace={
                selectedWorkspace
              }
              projectTitle={
                projectTitle
              }
              setProjectTitle={
                setProjectTitle
              }
              createProject={
                createProject
              }
              projects={projects}
              setSelectedProject={
                setSelectedProject
              }
              fetchTasks={
                fetchTasks
              }
              updateProject={
                updateProject
              }
              deleteProject={
                deleteProject
              }
            />
          )}
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          {selectedProject && (
            <TaskSection
              selectedProject={
                selectedProject
              }
              taskTitle={taskTitle}
              setTaskTitle={
                setTaskTitle
              }
              createTask={
                createTask
              }
              tasks={tasks}
              updateTaskStatus={
                updateTaskStatus
              }
              updateTask={
                updateTask
              }
              deleteTask={
                deleteTask
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;