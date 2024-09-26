import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about"element={<About/>}/>
            <Route path="/singleblog"element={<SingleBlog/>}/>

          </Route>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
