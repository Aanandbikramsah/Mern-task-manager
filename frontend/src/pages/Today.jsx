import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/Task/TaskCard";

const Today = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTodayTasks();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = async (taskId) => {
    try {
      await API.delete(`/tasks/${taskId}`);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  
  

  const fetchTodayTasks = async () => {
    const res = await API.get("/tasks");
    
    const today = new Date().toISOString().split("T")[0];

    const todayTasks = res.data.filter(
      (task) =>
        task.dueDate &&
        task.dueDate.split("T")[0] === today
    );

    setTasks(todayTasks);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks for today 🎉</p>
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

export default Today;
