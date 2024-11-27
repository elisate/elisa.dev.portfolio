import React from "react";
import { Outlet } from "react-router-dom";
import NavPart from "./NavPart";
import Sidebar from "./Sidebar";
import ProtectedRoute from "../pages/ProtectedRoute";
function DashboardLayout() {
  return (
    <ProtectedRoute>
      <div>
        <NavPart />
        <Sidebar />
        <Outlet />
      </div>
    </ProtectedRoute>
  );
}

export default DashboardLayout;
