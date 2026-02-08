import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/Task/TaskCard";

const Upcoming = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchUpcomingTasks();
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
  
  
  

  const fetchUpcomingTasks = async () => {
    const res = await API.get("/tasks");
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const upcomingTasks = res.data.filter((task) => {
      if (!task.dueDate) return false;
  
      const taskDate = new Date(task.dueDate);
      taskDate.setHours(0, 0, 0, 0); // 🔥 IMPORTANT
  
      return taskDate > today; // only future dates
    });
  
    setTasks(upcomingTasks);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No upcoming tasks 🚀</p>
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

export default Upcoming;
