import React, { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, editingTask, onCancelEdit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  // 🔹 Populate form when editing
  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate?.slice(0, 10),
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);

    // reset
    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="title"
        value={task.title}
        placeholder="Title"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={task.description}
        placeholder="Description"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <div className="flex gap-2">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
