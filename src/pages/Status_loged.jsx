import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import  profile2 from '../assets/profile2.png'

const Status_loged = () => {
  const [profile, setProfile] = useState(false);
  const handleprofile = () => {
    setProfile(!profile);
  };

  let userToken = JSON.parse(localStorage.getItem("userToken"));
  let username = userToken?.user?.lastname;
  let role = userToken?.user?.role;
// console.log('kkkkkkkkkkkkkkkkkkkkkkkkk',role)
  if (role === undefined) {
    return (
      <div className="flex md:hidden lg:flex items-center">
        <Link to="/login">
          <button className="ml-4 px-5 py-2 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-full hover:opacity-90 transition-opacity duration-300">
            Login
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex md:hidden lg:flex items-center">
        {profile && <Profile handleprofile={handleprofile} />}
        <div className="flex items-center gap-2 md:gap-3">
          <img
          src={profile2}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full cursor-pointer"
            onClick={handleprofile}
            alt="Profile"
          />
          <div
            className="text-sm md:text-base cursor-pointer text-white"
            onClick={handleprofile}
          >
            {username || "Guest"}
          </div>
          <RiArrowDropDownLine
            className="text-xl md:text-2xl cursor-pointer text-white"
            onClick={handleprofile}
          />
        </div>
      </div>
    );
  }
};

export default Status_loged;
