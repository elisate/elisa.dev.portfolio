import { FaFacebookF, FaTwitter, FaGithub, FaBehance } from "react-icons/fa";
import blog4 from "../assets/blog4.jpg";
import project1 from "../assets/project1.png";

function SingleBlog() {
  return (
    <div className="bg-[#0a0b1e] text-white p-8 min-h-screen mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar for interactive content */}
          <div>
            {/* Post Information (Comments, Likes, Social Media) */}
            <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Post Information</h3>
              <p className="text-gray-400 mb-4">Published: <span className="text-white">Sept 7, 2024</span></p>
              <p className="text-gray-400 mb-4">Likes: <span className="text-white">120</span></p>
              <p className="text-gray-400 mb-4">Comments: <span className="text-white">45</span></p>
              <p className="text-gray-400 mb-4">Category: <span className="text-white">Technology</span></p>
              <div className="flex space-x-4 mt-4">
                <FaFacebookF className="text-xl hover:text-[#5B4EFF]" />
                <FaTwitter className="text-xl hover:text-[#5B4EFF]" />
                <FaGithub className="text-xl hover:text-[#5B4EFF]" />
                <FaBehance className="text-xl hover:text-[#5B4EFF]" />
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Author</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={project1}
                  alt="Author"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-bold">Alain Niganze</h4>
                  <p className="text-gray-400">Senior Blog Writer</p>
                </div>
              </div>
              <p className="text-gray-400">
                Alain is a senior blog writer who enjoys covering a wide range of topics, from technology to lifestyle. Follow him on social media to stay updated.
              </p>
            </div>

            {/* Popular Posts */}
            <div className="bg-[#1e1e2f] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={blog4}
                    alt="Post"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h4 className="text-md font-bold">Space The Final Frontier</h4>
                    <p className="text-gray-400 text-sm">2 Hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={blog4}
                    alt="Post"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h4 className="text-md font-bold">The Amazing Hubble</h4>
                    <p className="text-gray-400 text-sm">4 Hours ago</p>
                  </div>
                </div>
                {/* Add more popular posts as needed */}
              </div>
            </div>
          </div>

          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            {/* Blog Header Image */}
            <div className="mb-8">
              <img
                src={blog4}
                alt="Blog header"
                className="w-full h-[300px] lg:w-[75%] object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Blog Text */}
            <h1 className="text-4xl font-bold mb-4">Astronomy Binoculars: A Great Alternative</h1>
            <p className="text-gray-400 mb-4">
              MCSE boot camps have their supporters and detractors. Some people do
              not understand why you should have to spend money on boot camp
              when you can get the MCSE study materials yourself at a fraction
              of the camp price. However, who has the willpower to actually sit
              through a self-imposed MCSE training...
            </p>

            {/* Blog Body */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-400">
                Boot camps have their supporters and their detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price.
              </p>
              <p className="text-gray-400">
                Boot camps have their supporters and detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price.
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-lg mt-12">
          <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="p-4 bg-[#0a0b1e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
              />
              <input
                type="email"
                placeholder="Enter email address"
                className="p-4 bg-[#0a0b1e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-4 bg-[#0a0b1e] rounded-lg text-white w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
            />
            <textarea
              placeholder="Message"
              className="p-4 bg-[#0a0b1e] rounded-lg text-white w-full h-40 focus:outline-none focus:ring-2 focus:ring-[#5B4EFF]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] text-white py-3 px-8 rounded-md hover:bg-gradient-to-r hover:from-[#4a3dd1] hover:to-[#27c8db] transition duration-300 animate-bounce mt-5"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
