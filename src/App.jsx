import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Dashboard from "./dashboards/Dashboard";
import Dashboardlayout from "./dashboards/Dashboardlayout";
import Projects from "./dashboards/Projects";
import { Appcontext } from "./fetch/ContextProvider";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="landing" element={<Welcome />} />
            <Route path="projects" element={<Project />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Dashboard Routes */}
          <Route path="/" element={<Dashboardlayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard_project" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Appcontext>
  );
}
