import { useState } from "react";
import { Link } from "react-router-dom";
import logo_pt from "../assets/logo_pt.png";
import Status_loged from "./Status_loged";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#0a0b1e] fixed top-0 left-0 w-full z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] rounded-full animate-spin">
            <img src={logo_pt} alt="logo_pt" />
          </div>

          <Link to="/">
            <span className="ml-2 text-xl text-white font-semibold">Dtechel</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex space-x-6 font-semibold items-center">
          <Link
            to="/"
            className="text-white hover:text-[#00CDAC] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-[#00CDAC] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-[#00CDAC] transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-[#00CDAC] transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-[#00CDAC] transition duration-300"
          >
            Blog
          </Link>
          <Status_loged />
        </nav>
      </div>

      {/* Modal Menu for Mobile Screens */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-30 flex items-center justify-center md:hidden">
          <div className="bg-[#0a0b1e] w-3/4 h-3/4 rounded-lg p-8 flex flex-col space-y-6 items-center">
            <button
              onClick={closeModal}
              className="text-white self-end focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-6 font-semibold items-center">
              <Link
                to="/"
                onClick={closeModal}
                className="text-white text-xl hover:text-[#00CDAC] transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeModal}
                className="text-white text-xl hover:text-[#00CDAC] transition duration-300"
              >
                About
              </Link>
              <Link
                to="/projects"
                onClick={closeModal}
                className="text-white text-xl hover:text-[#00CDAC] transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={closeModal}
                className="text-white text-xl hover:text-[#00CDAC] transition duration-300"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                onClick={closeModal}
                className="text-white text-xl hover:text-[#00CDAC] transition duration-300"
              >
                Blog
              </Link>
              <Link to="/login">
                <button className="ml-4 px-5 py-2 bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] text-white rounded-full hover:opacity-90 transition-opacity duration-300">
                  Login
                </button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
