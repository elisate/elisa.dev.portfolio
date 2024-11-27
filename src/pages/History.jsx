import { BsCalendar } from "react-icons/bs";

function History() {
  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Exploring my career journey will provide you with a deeper
          understanding of the diverse roles I’ve embraced. Over the years, I’ve
          been fortunate to contribute to innovative projects that have
          significantly enhanced my skills and broadened my expertise in the
          tech industry.
        </p>
      </div>

      {/* Job Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 lg:px-16">
        {/* Job Card 1 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              June '2021 to July 2023
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            ICT Chamber-Rwanda Deco Center, KG 9 Ave, Kigali, Rwanda
          </p>
          <p className="text-gray-400 mb-6">
            As a Full Stack Developer, I was responsible for developing and
            maintaining server-side logic, database architecture, and ensuring
            the performance of backend systems. I worked closely with frontend
            developers to integrate API endpoints and optimize user experience
            for all applications.
          </p>
        </div>

        {/* Job Card 2 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              May '2023 to Sept 2023
            </span>
          </div>
          <p className="text-gray-400 mb-4">KLab Rwanda 44 KG 548 St, Kigali</p>
          <p className="text-gray-400 mb-6">
            As a Frontend Developer, I focused on crafting intuitive user
            interfaces, improving user experience, and ensuring mobile
            responsiveness using the latest frontend technologies. My role
            involved designing responsive websites and optimizing frontend
            performance for cross-platform functionality.
          </p>
        </div>

        {/* Job Card 3 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">IoT Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              Feb '2024 to May 2024
            </span>
          </div>
          <p className="text-gray-400 mb-4">CMU, 44 KG 548 St, Kigali</p>
          <p className="text-gray-400 mb-6">
            Specialized in designing IoT systems, integrating both hardware and
            software components, and optimizing system performance for diverse
            applications. I collaborated with engineers and data scientists to
            implement cutting-edge IoT solutions for smart devices.
          </p>
        </div>

        {/* Job Card 4 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Mobile App Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              May 2024 to Present
            </span>
          </div>
          <p className="text-gray-400 mb-4">KABC, 11th floor Block A</p>
          <p className="text-gray-400 mb-6">
            As a Mobile App Developer, I contributed to building and maintaining
            a mobile application for an e-commerce platform. My tasks involved
            both frontend and backend development using React Native and
            Node.js, ensuring optimal performance and a seamless user experience
            across devices.
          </p>
        </div>

        {/* Job Card 5 (Future Focus Rwanda) */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              May 2024 to Present
            </span>
          </div>
          <p className="text-gray-400 mb-4">Telcom House, 11th floor Block A</p>
          <p className="text-gray-400 mb-6">
            At Future Focus Rwanda, I worked as a Full Stack Developer, focusing
            on the development of an e-learning system. I was involved in both
            frontend and backend development, building dynamic, scalable, and
            user-friendly platforms to enhance the learning experience for
            users.
          </p>
        </div>

        {/* Job Card 6 (Atradezone) */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
            <span className="flex items-center text-gray-400">
              <BsCalendar className="mr-2" />
              Jan 2024 to Sept 2024
            </span>
          </div>
          <p className="text-gray-400 mb-4">Atradezone, Kigali</p>
          <p className="text-gray-400 mb-6">
            At Atradezone, I worked as a Full Stack Developer, responsible for
            building and maintaining a cart system for an e-commerce platform. I
            handled both frontend and backend aspects, integrating payment
            gateways and optimizing performance to ensure smooth transactions
            and a great shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
