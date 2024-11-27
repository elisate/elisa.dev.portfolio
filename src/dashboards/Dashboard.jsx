import React from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Chart from "./Chart";
import { mycontext } from "../fetch/ContextProvider";

function Dashboard() {
  const {project} = mycontext();

  return (
    <div className="ml-[14rem] pt-[6rem] pr-[2rem]">
      <div className="flex flex-col md:flex-row gap-[1.5rem]">
        {/* Big Card - Users */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Users
            </div>
            <div className="text-[#00C9A7] flex items-center">
              <BiSolidUpArrowAlt />
              <RiUserLine className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">2</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
              see all users
            </div>

            <div className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] rounded-[2px] text-[#00C9A7] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>

        {/* Big Card - Students */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Projects
            </div>
            <div className="text-[#00C9A7] flex items-center">
              <BiSolidUpArrowAlt />
              <PiStudent className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">{project.length}</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
             see all projects
            </div>
            <div className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] rounded-[2px] text-[#00C9A7] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>

        {/* Big Card - Programs */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Blogs
            </div>
            <div className="text-[#00C9A7] flex items-center">
              <BiSolidUpArrowAlt />
              <SiBookstack className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">3</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
              see all blogs
            </div>
            <div className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] rounded-[2px] text-[#00C9A7] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>

        {/* Big Card - Contacts */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Contacts
            </div>
            <div className="text-[#00C9A7] flex items-center">
              <BiSolidUpArrowAlt />
              <GrContactInfo className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">1</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
              see all contacts
            </div>
            <div className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] rounded-[2px] text-[#00C9A7] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[2rem] flex flex-col lg:flex-row gap-[7rem]">
        <div>
          <div className="text-[1rem] font-medium text-[#636363]">
            Latest Student Progress
          </div>
          <div className="pt-[2rem] flex flex-col justify-center items-center gap-[0.9rem]">
            <div className="w-[100px] h-[100px]">
              <CircularProgressbar
                value={75}
                text="75%"
                styles={buildStyles({
                  textColor: "#636363",
                  pathColor: "#60BC88FF",
                  trailColor: "#e0e0e0",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <div className="text-[1rem] font-medium text-[#636363]">
              Available Student
            </div>
            <div className="text-[1.4rem] font-medium">70</div>
          </div>
        </div>

        <div className="pl-14">
          <div className="text-[1rem] font-medium text-[#636363]">
            Registration History
          </div>
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
