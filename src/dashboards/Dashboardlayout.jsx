import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavPart from "./NavPart";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div>
      <NavPart />
      <Sidebar />
        <Outlet />
     
    </div>
  );
}

export default DashboardLayout;
