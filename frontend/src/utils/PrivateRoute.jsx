import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token exists → allow
  if (token) {
    return children;
  }

  // Else → redirect to login
  return <Navigate to="/login" />;
};

export default PrivateRoute;
