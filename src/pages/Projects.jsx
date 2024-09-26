// Example project image
import { FaReact, FaGithub } from "react-icons/fa"; // React icons for logos
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS icon
import project1 from '../assets/project1.png';
function Project() {
  return (
    
    <div className="p-4 md:p-8 lg:p-12 mt-8 bg-[#0a0b1e] text-white min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Below are some of the projects I have worked on, showcasing my skills in web development using technologies like React and Tailwind CSS.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-16">
        {/* Project Card */}
        {[1, 2, 3, 4].map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up delay-4"
          >
            {/* Project Image */}
            <img
              src={project1}
              alt="Project"
              className="rounded-lg shadow-md mb-6 w-full h-40 sm:h-48 object-cover"
            />
            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3">Project {project}</h3>
            {/* Project Description */}
            <p className="text-gray-400 mb-4">
              This is a brief description of Project {project}. It was built using React, Tailwind CSS, and other modern technologies to achieve a dynamic and responsive user interface.
            </p>
            {/* Tech Stack */}
            <div className="flex space-x-4 mb-4">
              <FaReact className="text-3xl md:text-4xl text-[#5B4EFF] animate-spin-slow" title="React" />
              <SiTailwindcss className="text-3xl md:text-4xl text-[#32F6FF]" title="Tailwind CSS" />
            </div>
            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Preview Button */}
              <a
                href="https://musa-website.vercel.app/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 bg-[#5B4EFF] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300"
              >
                Preview
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/niganze/healthcare" // Replace with actual GitHub repo link
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 border border-[#5B4EFF] rounded-full text-[#5B4EFF] hover:bg-[#5B4EFF] hover:text-white transition-colors duration-300 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Project;
