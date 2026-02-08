import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold">
        MyTasks<span className="text-yellow-300">.</span>
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-white font-medium text-2xl">
          Hello,<span className="text-yellow-300 text-lg"> {user?.name || "User"}</span> 
        </span>

        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center text-xl justify-center text-yellow-300 font-extrabold">
          {user?.name?.charAt(0)?.toUpperCase()}
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500  hover:bg-red-500/50 text-white rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
