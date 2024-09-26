import { Link } from "react-router-dom";
import  blog4 from "../assets/blog4.jpg"; // Example blog image
import { FaUser, FaRegCalendarAlt, FaEye, FaComment } from "react-icons/fa";

function Blogs() {
  return (
    <div className="p-4 md:p-8 lg:p-12 mt-8 bg-[#0a0b1e] text-white min-h-screen ">
      {/* Title Section */}
      <div className="text-center mb-12 mt-7">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Blogs</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest blog posts, featuring various topics in technology,
          lifestyle, and more.
        </p>
      </div>

      {/* Main Content - Blog Posts and Sidebar */}
      <div className="lg:flex lg:justify-between">
        {/* Blog Posts */}
        <div className="w-full lg:w-2/3 space-y-12">
          {[1, 2, 3].map((blog, index) => (
            <div
              key={index}
              className="bg-[#1e1e2f] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              {/* Blog Image and Content for Mobile/Tablets */}
              <div className="flex flex-col lg:flex-row">
                {/* Blog Image */}
                <img
                  src={blog4}
                  alt="Blog Post"
                  className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none w-full lg:w-1/2 h-48 md:h-auto object-cover"
                />
                {/* Blog Details */}
                <div className="p-6 w-full">
                  {/* Post Metadata */}
                  <div className="flex space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <FaUser className="text-[#5B4EFF]" />
                      <span>Mark Wiens</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaRegCalendarAlt className="text-[#5B4EFF]" />
                      <span>12 Dec, 2017</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaEye className="text-[#5B4EFF]" />
                      <span>1.2M Views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaComment className="text-[#5B4EFF]" />
                      <span>6 Comments</span>
                    </div>
                  </div>

                  {/* Blog Title and Description */}
                  <h3 className="text-2xl font-bold mb-2">Telescope 101</h3>
                  <p className="text-gray-400 mb-4">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>

                  {/* View More Button */}
                  <Link to="/singleblog"
                    className="text-[#5B4EFF] hover:underline hover:text-[#32F6FF] transition-colors duration-300"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - Post Categories */}
        <div className="hidden lg:block lg:w-1/4 bg-[#1e1e2f] p-6 rounded-lg shadow-lg lg:ml-8 mt-12 lg:mt-0">
          <h3 className="text-xl font-bold mb-4 text-center">
            Post Categories
          </h3>
          <ul className="text-gray-400 space-y-3">
            <li className="flex justify-between">
              <span>Technology</span>
              <span>37</span>
            </li>
            <li className="flex justify-between">
              <span>Lifestyle</span>
              <span>24</span>
            </li>
            <li className="flex justify-between">
              <span>Fashion</span>
              <span>59</span>
            </li>
            <li className="flex justify-between">
              <span>Art</span>
              <span>29</span>
            </li>
            <li className="flex justify-between">
              <span>Food</span>
              <span>15</span>
            </li>
            <li className="flex justify-between">
              <span>Architecture</span>
              <span>09</span>
            </li>
            <li className="flex justify-between">
              <span>Adventure</span>
              <span>44</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Categories for Mobile */}
      <div className="block lg:hidden bg-[#1e1e2f] p-6 rounded-lg shadow-lg mt-12">
        <h3 className="text-xl font-bold mb-4 text-center">Post Categories</h3>
        <ul className="text-gray-400 space-y-3">
          <li className="flex justify-between">
            <span>Technology</span>
            <span>37</span>
          </li>
          <li className="flex justify-between">
            <span>Lifestyle</span>
            <span>24</span>
          </li>
          <li className="flex justify-between">
            <span>Fashion</span>
            <span>59</span>
          </li>
          <li className="flex justify-between">
            <span>Art</span>
            <span>29</span>
          </li>
          <li className="flex justify-between">
            <span>Food</span>
            <span>15</span>
          </li>
          <li className="flex justify-between">
            <span>Architecture</span>
            <span>09</span>
          </li>
          <li className="flex justify-between">
            <span>Adventure</span>
            <span>44</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
