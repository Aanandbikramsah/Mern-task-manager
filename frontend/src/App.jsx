import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import Progress from "./pages/Progress";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";


// Utils
import PrivateRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* 👇 THESE WERE MISSING */}
          <Route index element={<Navigate to="inbox" />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="today" element={<Today />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="progress" element={<Progress />} />
          <Route path="pending" element={<Pending />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
