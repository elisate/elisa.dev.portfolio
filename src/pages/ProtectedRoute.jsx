import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const userToken = localStorage.getItem("userToken"); // Retrieve token from localStorage
  const isAuthenticated = !!userToken; // Check if user is authenticated (token exists)

  if (!isAuthenticated) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // If authenticated, render the children (DashboardLayout content)
}

export default ProtectedRoute;
