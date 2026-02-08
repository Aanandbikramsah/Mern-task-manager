import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/Task/TaskCard";

const Pending = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchPending();
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
  
  

  const fetchPending = async () => {
    const res = await API.get("/tasks");
    const pendingTasks = res.data.filter(
      (task) => task.status === "pending"
    );
    setTasks(pendingTasks);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>
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

export default Pending;
