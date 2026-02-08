import React from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import StatusDropdown from "./StatusDropdown";

const TaskCard = ({ task, onStatusChange, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow border hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            {task.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {task.description}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        </div>

        {/* DELETE */}
        <button
          onClick={() => onDelete && onDelete(task._id)}
          className="text-red-500 hover:text-red-700 transition"
          title="Delete Task"
        >
          <FiTrash2 size={18} />
        </button>
      </div>

      <div className="mt-3 flex justify-between items-center">
        {/* STATUS */}
        <StatusDropdown
          taskId={task._id}
          status={task.status}
          onStatusChange={onStatusChange}
        />

        {/* EDIT */}
        <button
          onClick={() => onEdit && onEdit(task)}
          className="flex items-center gap-1 text-indigo-600 hover:underline text-sm"
          title="Edit Task"
        >
          <FiEdit3 size={16} />
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
