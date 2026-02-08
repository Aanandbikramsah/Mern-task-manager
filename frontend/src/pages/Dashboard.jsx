import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

// Pages
import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import Progress from "./Progress";
import Pending from "./Pending";
import Completed from "./Completed";


const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Routes>
          <Route index element={<Navigate to="inbox" />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="today" element={<Today />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="pending" element={<Pending />} />
          <Route path="progress" element={<Progress />} />
          <Route path="completed" element={<Completed />} />
        </Routes>



        </main>
      </div>
    </div>
    
  );
};

export default Dashboard;






