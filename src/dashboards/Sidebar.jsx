import React, { useState } from "react";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { PiNotePencil } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar toggle

  let userToken = JSON.parse(localStorage.getItem("userToken"));
  let token = userToken?.access_token;
  let username = userToken?.user?.lastname;
  let usernames = userToken?.user?.firstname;
  let email = userToken?.user?.email;
  let role = userToken?.user?.role;

  function Logout() {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  }

  return (
    <div className="z-0">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#00C9A7] p-2 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 border-r border-gray-500 w-48 fixed h-screen z-50 bg-white`}
      >
        {/* Close button for small screens */}
        <button
          className="md:hidden fixed top-4 right-4 z-50 bg-[#00C9A7] p-2 rounded-md text-white"
          onClick={() => setIsOpen(false)}
        >
          <MdClose />
        </button>

        <div className="border-b border-gray-500 flex flex-col gap-1 pl-4 py-2">
          <div className="text-[#00C9A7]  text-lg font-medium">
            {usernames
              ? usernames.length > 3
                ? `${usernames.slice(0, 4)}...`
                : usernames
              : "Guest"}
          </div>

          <div className="text-base font-medium text-gray-500">Admin</div>
        </div>
        <div className="flex flex-col gap-4 text-gray-500 font-medium text-sm">
          <div className="text-xs pl-2">MAIN</div>
          <div className="flex items-center gap-2 pl-4">
            <MdDashboard className="text-[#00C9A7] text-xl" />
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <FaUsers className="text-[#00C9A7] text-xltext-xl" />
            <Link to="/dashboard">Users</Link>
          </div>
          <div className="text-xs pl-2">LIST</div>
          <div className="flex items-center gap-2 pl-4">
            <PiStudent className="text-[#00C9A7] text-xl" />
            <Link to="/dashboard">Blogs</Link>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <MdOutlinePayments className="text-[#00C9A7] text-xl" />
            <div>Subscription</div>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <GrContactInfo className="text-[#00C9A7] text-xl" />
            <Link to="/dashboard">Contacts</Link>
          </div>
          <div className="text-xs pl-2">SERVICES</div>
          <div className="flex items-center gap-2 pl-4">
            <SiBookstack className="text-[#00C9A7] text-xl" />
            <Link to="/project">Projects</Link>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <PiNotePencil className="text-[#00C9A7] text-xl" />
            <Link to="/dashboard">Services</Link>
          </div>
          <div className="text-xs pl-2">AUTHENTICATION</div>
          <div
            className="flex items-center gap-2 pl-4 cursor-pointer"
            onClick={Logout}
          >
            <RiLogoutCircleRLine className="text-[#00C9A7] text-xl" />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
