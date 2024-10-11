import { FaReact, FaAws } from 'react-icons/fa'; 
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiLaravel } from 'react-icons/si'; 
import about from "../assets/about.jpg";
import Resume from "../assets/Elisa_Updated_cv.pdf";
import { SiSpringboot } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center py-16 px-8 bg-[#0a0b1e] text-white">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={about}
          alt="About Myself"
          className="rounded-lg shadow-xl w-full max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">About Myself</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] mb-6"></div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          As a dedicated software engineer, I bring a strong problem-solving
          mindset and technical proficiency to every project. With hands-on
          experience in Full-stack Engineering, I excel in collaborative
          environments. With a passion for frontend development, I ve dedicated
          my efforts to crafting seamless and visually stunning user interfaces.
          <br />
          <br />
          <span className="text-white font-semibold">
            Let us connect and discuss how my skills can contribute to the
            success of your projects. I build awesome products using:
          </span>
          <br />
          <br />
          <div className="flex flex-wrap gap-4">
            {/* Icons and Tech Names */}
            <div className="flex items-center space-x-2">
              <SiNextdotjs
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Next.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaReact
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>React</span>
            </div>

            <div className="flex items-center space-x-2">
              <AiOutlineJavaScript
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiTailwindcss
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSass
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Sass</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaJava
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Java</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiSpringboot
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Springboot</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiGraphql
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>GraphQL</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiLaravel
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Laravel</span>
            </div>

            <div className="flex items-center space-x-2">
              <GrMysql
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Sql</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiMongodb
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Mongo</span>
            </div>
          </div>
          <br />
          <br />
          <span className="text-[#32F6FF] font-semibold">
            Additionl: Git • Python •C++ • NodeJS 
          
          </span>
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-[#5B4EFF] rounded-full text-[#5B4EFF] hover:bg-[#5B4EFF] hover:text-white transition-colors duration-300">
            More Info
          </button>
          <a href={Resume} download="Elisa_Updated_cv.pdf">
            <button className="relative px-6 py-2 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300 animate-bounce">
              <span className="inline-block overflow-hidden whitespace-nowrap  pr-2 ">
                Download cv
              </span>
            </button>
          </a>
          {/* border-r-2 border-white */}
        </div>
      </div>
    </div>
  );
}

export default About;
