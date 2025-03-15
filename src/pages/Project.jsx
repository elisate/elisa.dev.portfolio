import { useState,useEffect } from "react";
import { FaReact, FaGithub } from "react-icons/fa"; // React icons for logos
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS icon
import axios from "axios";
import { FaNodeJs } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(
          "https://elis-dev-backend.onrender.com/project/getProjects"
        );
        setProjects(response.data); // Assuming response.data contains the array of projects
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const role = userToken?.user?.role;
  console.log("User role:", role);

  // Function to handle preview button click
  const handlePreviewClick = (projectTitle, projectLink) => {
    if (projectTitle === "Real Estate Project" && role !== "Admin") {
      // Show notification if the user is not admin and the project is "Real Estate Project"
      Notify.failure(
        "This project is private. Please contact the admin to view it.",
        {
          position: "center-top",
          timeout: 4000,
          backOverlay: true,
        }
      );
    } else {
      // Redirect to the project's link if it's not "Real Estate Project" or if the user is admin
      window.open(projectLink, "_blank");
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 mt-8 bg-[#0a0b1e] text-white min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Below are some of the projects I have worked on, showcasing my skills
          in web development using technologies like React and Tailwind CSS.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up delay-4"
          >
            {/* Project Image */}
            <img
              src={project.images} // Replace with a default image if `project.image` is missing
              alt={project.title}
              className="rounded-lg shadow-md mb-6 w-full h-40 sm:h-48 object-cover"
            />
            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {project.projectTitle}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 mb-4">{project.projectContent}</p>
            {/* Tech Stack */}
            <div className="flex space-x-4 mb-4">
              <span className="animate-spin">
                <FaReact
                  className="text-3xl md:text-4xl text-[#32F6FF]"
                  title="React"
                />
              </span>
              <span className="animate-bounce">
                <SiTailwindcss
                  className="text-3xl md:text-4xl text-[#32F6FF]"
                  title="Tailwind CSS"
                />
              </span>
              <span className="animate-ping">
                <FaNodeJs
                  className="text-3xl md:text-4xl text-[#32F6FF] animate-spin-slow"
                  title="Node.js"
                />
              </span>
              <span className="animate-ping">
                <DiDjango
                  className="text-3xl md:text-4xl text-[#32F6FF] animate-spin-slow"
                  title="Node.js"
                />
              </span>
            </div>
            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Preview Button */}
              <button
                onClick={() =>
                  handlePreviewClick(project.projectTitle, project.projectLink)
                } // Pass the projectLink
                className="px-4 md:px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
