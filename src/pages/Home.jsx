import { Link } from "react-router-dom";
import Profile from "../assets/Profile.png";

function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-900 to-black min-h-screen flex items-center mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 ">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] animate-gradient-slide">
            Hello, I m Dushimiyimana Elisa,
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4 animate-fade-in-up delay-2">
            Software Engineer
          </h2>

          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-300 max-w-lg animate-fade-in-up delay-4">
            As a Fullstack Engineer, I specialize in both frontend and backend
            development. On the frontend, I work with HTML, CSS, JavaScript,
            TypeScript, React, and Next.js. On the backend, I utilize Node.js,
            .NET Core, Express, SQL, Postgres, and Prisma. I can build robust
            web, mobile, and desktop applications, and I also manage deployment
            tasks to ensure seamless project delivery.
          </p>

          <Link to="/contact">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#00C9A7] to-[#9A57D3] text-white font-semibold rounded-full shadow-lg hover:scale-10 animate-pulse">
              Hire me
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative z-10 animate-fade-in-up delay-6">
            <img
              src={Profile}
              alt="Alain Niganze"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="absolute -z-1 bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full filter blur-3xl opacity-30 top-10 md:top-12 lg:top-16 right-0 md:right-16 lg:right-24 animate-pulse" />
        </div>
      </div>
    </main>
  );
}

export default Home;
