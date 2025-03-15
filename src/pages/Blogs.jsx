import { Link } from "react-router-dom";
import blog4 from "../assets/blog4.jpg"; // Example blog image
import { FaUser, FaRegCalendarAlt, FaEye, FaComment } from "react-icons/fa";
import blog1 from "../assets/blog1.jpeg";
import blog3 from "../assets/blog3.png";
import blog2 from "../assets/blog2.jpg";
import blog4 from "../assets/im.jpg"

function Blogs() {
  // Array to hold blog data
const blogs = [
  {
    id: 1,
    image: blog4,
    author: "Dtechel",
    date: "12 Nov, 2022",
    views: "1.2M",
    comments: 6,
    title: "Tech UpSkill Program",
    description:
      "A Front-End Development program at kLab Tech, focused on empowering participants with essential UI/UX design and coding skills.",
    link: "/singleblog",
  },
  {
    id: 2,
    image: blog1,
    author: "Elisa",
    date: "15 Jan, 2024",
    views: "800K",
    comments: 12,
    title: "Talent 4 Start-Up",
    description:
      "A Full-Stack Development initiative at the ICT Chamber Rwanda, aimed at nurturing tech-savvy entrepreneurs and developers.",
    link: "/singleblog",
  },
  {
    id: 3,
    image: blog3,
    author: "Elisa",
    date: "15 Dec, 2023",
    views: "450K",
    comments: 8,
    title: "FFR Project",
    description:
      "An E-Learning initiative by Future Focus Rwanda, designed to create digital education solutions and platforms.",
    link: "/singleblog",
  },
  {
    id: 4,
    image: blog2,
    author: "Elisa",
    date: "10 Oct, 2024",
    views: "450K",
    comments: 8,
    title: "CMU Bridge Program",
    description:
      "An Internet of Things (IoT) training program, providing hands-on experience with smart and connected devices.",
    link: "/singleblog",
  },
  {
    id: 4,
    image: blog4,
    author: "Elisa",
    date: "16 Dec, 2025",
    views: "450K",
    comments: 8,
    title: "Software Development Trainer – Tekher Program at kLab",
    description:
      "As a Software Development Trainer at kLab in the Tekher Program, I mentor and guide aspiring developers in mastering full-stack development.",
    link: "/singleblog",
  },
];


  return (
    <div className="p-6 md:p-10 lg:p-12 bg-[#0a0b1e] text-white min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 pt-16">Blogs</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Dive into my latest blog posts, covering insights and stories on
          technology, career growth, and innovative projects.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1e1e2f] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-t-lg w-full h-52 object-cover"
            />
            {/* Blog Content */}
            <div className="p-5">
              {/* Post Metadata */}
              <div className="flex space-x-4 text-gray-400 text-sm mb-3">
                <div className="flex items-center space-x-1">
                  <FaUser className="text-[#5B4EFF]" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaRegCalendarAlt className="text-[#5B4EFF]" />
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* Blog Title */}
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>

              {/* View More Button */}
              <Link
                to="/blog"
                className="inline-block text-[#5B4EFF] hover:text-[#32F6FF] transition-colors duration-300 font-medium"
              >
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
