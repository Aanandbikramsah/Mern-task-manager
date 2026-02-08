import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiInbox,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiRotateCw
} from "react-icons/fi";

const Sidebar = () => {
  const baseClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-indigo-100";

  const activeClass =
    "bg-indigo-500 text-white font-semibold";

  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <h2 className="text-xl font-bold mb-6 text-indigo-600">
        📝 To-Do App
      </h2>

      <nav className="space-y-2">
        <NavLink
          to="/dashboard/inbox"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          <FiInbox /> Inbox
        </NavLink>

        <NavLink
          to="/dashboard/today"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          <FiCalendar /> Today
        </NavLink>

        <NavLink
          to="/dashboard/upcoming"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          <FiClock /> Upcoming
        </NavLink>

        <div className="mt-4">
            <p className="text-gray-500 text-sm mb-2">Status</p>

            <NavLink
              to="/dashboard/pending"
              className={({ isActive }) =>
                isActive ? `${baseClass} ${activeClass}` : baseClass
              }
            >
              <FiRotateCw /> Pending
            </NavLink>

            <NavLink
              to="/dashboard/progress"
              className={({ isActive }) =>
                isActive ? `${baseClass} ${activeClass}` : baseClass
              }
            >
              <FiRotateCw /> In Progress
            </NavLink>

            <NavLink
              to="/dashboard/completed"
              className={({ isActive }) =>
                isActive ? `${baseClass} ${activeClass}` : baseClass
              }
            >
              <FiCheckCircle /> Completed
            </NavLink>
          </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
