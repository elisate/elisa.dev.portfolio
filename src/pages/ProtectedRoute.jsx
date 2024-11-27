import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const userToken = JSON.parse(localStorage.getItem("userToken")); // Retrieve user token
  const isAuthenticated = !!userToken; // Check if user is logged in

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render children if authenticated
}

export default ProtectedRoute;
