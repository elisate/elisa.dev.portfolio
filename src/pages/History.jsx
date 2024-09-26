function History() {
  return (
    <div className="bg-[#0a0b1e] py-16 text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Job History
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          Reviewing my career history will give you insight into the roles I’ve
          excelled in. I’ve had the opportunity to work on some fantastic
          projects, each one contributing to my growth and expertise in the
          field.
        </p>
      </div>

      {/* Job Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 lg:px-16">
        {/* Job Card 1 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-4">
          <h3 className="text-2xl font-bold mb-2">Backend Engineer</h3>
          <p className="text-gray-400 mb-4">
            {" "}
            ALX-Rwanda Deco Center, KG 9 Ave, Kigali, Rwanda
          </p>
          <p className="text-gray-400 mb-6">
            Responsible for developing and maintaining server-side logic,
            database architecture, and ensuring the responsiveness and
            performance of backend systems.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              June '2021 to  July 2023
            </span>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-6">
          <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
          <p className="text-gray-400 mb-4">
            {" "}
            KLab Rwanda 44 KG 548 St, Kigali
          </p>
          <p className="text-gray-400 mb-6">
            Focused on crafting user interfaces, enhancing user experience, and
            ensuring mobile responsiveness across various platforms using modern
            frontend technologies.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              May '2023 to Sept 2023
              
            </span>
          </div>
        </div>

        {/* Job Card 3 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-8">
          <h3 className="text-2xl font-bold mb-2">Embedded System Developer</h3>
          <p className="text-gray-400 mb-4">
            Fablab Rwanda, 44 KG 548 St, Kigali
          </p>
          <p className="text-gray-400 mb-6">
            Specialized in designing and implementing embedded systems,
            integrating hardware and software, and optimizing system performance
            for various applications.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              Feb '2024 to May 2024
               
            </span>
          </div>
        </div>

        {/* Job Card 4 */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-10">
          <h3 className="text-2xl font-bold mb-2">Full stack Developer</h3>
          <p className="text-gray-400 mb-4">
            Makuza Plazza, 11th floor Block A
          </p>
          <p className="text-gray-400 mb-6">
            At Makuza Plazza, I work as a Full Stack Developer where I am
            responsible for developing and maintaining an e-commerce website. I
            handle both the frontend and backend development using Next.js and
            Node.js, ensuring seamless user experience and robust server-side
            performance.
          </p>
          <div className="flex items-center">
            <span className="px-4 py-2 bg-[#292b45] text-gray-400 rounded-full">
              May 2024  to Present
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
