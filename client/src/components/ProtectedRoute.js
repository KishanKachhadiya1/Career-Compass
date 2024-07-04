import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || (requiredRole && user.userType !== requiredRole)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
