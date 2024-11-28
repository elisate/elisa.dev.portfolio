import { FaReact, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
} from "react-icons/si";
import about from "../assets/elisap.jpg";
import Resume from "../assets/Dushimiyimana_Elisa_CV.pdf";
import { SiSpringboot } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-end py-16 px-8 bg-[#0a0b1e] text-white">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 h-full">
        <img
          src={about}
          alt="About Myself"
          className="rounded-lg shadow-xl w-full max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-between h-full">
        <h2 className="text-4xl font-bold mb-4 pt-6">About Myself</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] mb-6"></div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          As a versatile Software Engineer, I am passionate about creating
          impactful solutions across various domains. I specialize in full-stack
          development, with extensive experience in both frontend and backend
          technologies. My expertise in building responsive and interactive web
          applications using React, Next.js, and TypeScript empowers me to
          deliver user-centric designs. On the backend, I utilize Node.js,
          Spring Boot, and Laravel to build efficient and scalable systems. I
          also have hands-on experience working with databases such as MySQL and
          MongoDB. Additionally, I develop mobile applications with Flutter and
          engage in IoT projects that bridge the gap between software and
          hardware.
          <br />
          <br />
          <span className="text-white font-semibold">
            I’d love to connect and explore how my expertise can drive the
            success of your projects. I create exceptional products using:
          </span>
          <br />
          <br />
          <div className="flex flex-wrap gap-4">
            {/* Icons and Tech Names */}
            <div className="flex items-center space-x-2">
              <span className="animate-spin">
                <SiNextdotjs
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>
              <span>Next.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="animate-spin">
                <FaReact
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

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
              <span className="animate-spin">
                <SiTailwindcss
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

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
              <span className="animate-bounce">
                <SiSpringboot
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

              <span>Springboot</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="animate-ping">
                <FaNodeJs
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

              <span>Node js</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiLaravel
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Laravel</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="animate-bounce">
                <RiFlutterFill
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

              <span>Flutter</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <DiDart
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

              <span>Dart</span>
            </div>

            <div className="flex items-center space-x-2">
              <GrMysql
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                size={24}
              />
              <span>Sql</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="animate-ping">
                <SiMongodb
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>

              <span>Mongo</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="animate-bounce">
                <DiPostgresql
                  className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3]"
                  size={24}
                />
              </span>
              <span>Postgresql</span>
            </div>
          </div>
          <br />
          <br />
          <span className="text-[#32F6FF] font-semibold">
            Other Expertise:&nbsp;
            <FaGitAlt className="inline-block mr-2" size={20} /> Git•
            <SiPython className="inline-block mr-2" size={20} /> Python •
            <FaDev className="inline-block mr-2" size={20} /> C++ •
            <SiTypescript className="inline-block mr-2" size={20} /> TypeScript
          </span>
        </p>
        <div className="flex space-x-4 items-end">
          <a href={Resume} download="Dushimiyimana_Elisa_CV.pdf">
            <button className="relative px-6 py-2 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-full hover:bg-[#32F6FF] transition-colors duration-300 animate-bounce">
              <span className="inline-block overflow-hidden whitespace-nowrap  pr-2 ">
                Download cv
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
