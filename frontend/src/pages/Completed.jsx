import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/Task/TaskCard";

const Completed = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchCompleted();
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
    

  const fetchCompleted = async () => {
    const res = await API.get("/tasks");
    const completedTasks = res.data.filter(
      (task) => task.status === "completed"
    );
    setTasks(completedTasks);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      {tasks.map((task) => (
        <TaskCard
        key={task._id}
        task={task}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
      
      ))}
    </div>
  );
};

export default Completed;
