import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/Task/TaskCard";

const Progress = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchInProgressTasks();
  }, []);

  const handleStatusChange = (id) => {
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  const handleDelete = async (taskId) => {
    try {
      await API.delete(`/tasks/${taskId}`);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  
  

  const fetchInProgressTasks = async () => {
    const res = await API.get("/tasks");
    const inProgressTasks = res.data.filter(
      (task) => task.status === "progress"
    );
    setTasks(inProgressTasks);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">In Progress</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks in progress 🚧</p>
      ) : (
        <div className="grid gap-4">
          {tasks.map((task) => (
            <TaskCard
            key={task._id}
            task={task}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
          
          ))}
        </div>
      )}
    </div>
  );
};

export default Progress;
