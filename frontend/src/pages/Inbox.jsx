import React, { useEffect, useState } from "react";
import TaskCard from "../components/Task/TaskCard";
import TaskForm from "../components/Task/TaskForm";
import API from "../api/axios";

const Inbox = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);


  // GET tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setEditingTask(task);
  };
  

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await API.put(`/tasks/${taskId}`, { status: newStatus });
  
      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await API.delete(`/tasks/${taskId}`);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  
  
  
  

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("FETCH TASKS ERROR 👉", error.response?.data || error);
    }
  };
  

  // POST task
  const handleAddTask = async (taskData) => {
    try {
      const res = await API.post("/tasks", taskData);
      setTasks((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const handleSubmitTask = async (taskData) => {
    try {
      if (editingTask) {
        const res = await API.put(`/tasks/${editingTask._id}`, taskData);
  
        setTasks((prev) =>
          prev.map((t) =>
            t._id === editingTask._id ? res.data : t
          )
        );
  
        setEditingTask(null);
      } else {
        const res = await API.post("/tasks", taskData);
        setTasks((prev) => [res.data, ...prev]);
      }
    } catch (error) {
      console.error("Task save failed", error);
    }
  };
  

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>

      {/* ADD TASK */}
      <TaskForm
        onSubmit={handleSubmitTask}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
      />


      {/* TASK LIST */}
      <div className="grid gap-4 mt-4">
        {tasks.map((task) => (
          <TaskCard
          key={task._id}
          task={task}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        
        ))}
      </div>
    </div>
  );
};

export default Inbox;
