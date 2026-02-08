import React, { useState } from "react";
import API from "../../api/axios";

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/tasks", {
        title,
        description,
        dueDate,
      });

      onTaskAdded(res.data); // send new task to parent

      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-bold mb-2">Add Task</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2 mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        className="w-full border p-2 mb-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
