import API from "../../api/axios";

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
  progress: "bg-blue-100 text-blue-700 border-blue-300",
  completed: "bg-green-100 text-green-700 border-green-300",
};

const StatusDropdown = ({ taskId, status, onStatusChange }) => {
  const handleChange = async (e) => {
    const newStatus = e.target.value;

    try {
      // 🔹 Update backend
      await API.put(`/tasks/${taskId}`, {
        status: newStatus,
      });

      // 🔹 Notify parent
      onStatusChange(taskId, newStatus);
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      className={`px-3 py-1 rounded-full text-sm border font-medium focus:outline-none
        ${statusStyles[status]}`}
    >
      <option value="pending">Pending</option>
      <option value="progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default StatusDropdown;
