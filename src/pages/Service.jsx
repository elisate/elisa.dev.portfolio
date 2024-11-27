function Service() {
  return (
    <div className="p-12 bg-[#0a0b1e] text-white">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Services I Offer
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] mx-auto mb-6 animate-width-grow"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-2">
          As a skilled software developer, I offer a wide array of services to
          help transform your ideas into functional, real-world solutions.
          Whether it’s creating responsive websites or developing powerful
          applications, I’m dedicated to delivering high-quality results
          tailored to your project’s needs." Let me know if you would like
          further adjustments!
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Card 1: Web Design */}
        <div className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-4">
          <div className="mb-6 text-center">
            <i className="fas fa-laptop-code text-5xl text-white animate-pulse"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">
            Web Development
          </h3>
          <p className="text-gray-200 text-center">
            I design and develop user-friendly websites that deliver exceptional
            user experiences and responsive layouts across all devices.
          </p>
        </div>

        {/* Service Card 2: Application Development */}
        <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-6">
          <div className="mb-6 text-center">
            <i className="fas fa-mobile-alt text-5xl text-[#5B4EFF] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">
            Mobile Application Development
          </h3>
          <p className="text-gray-300 text-center">
            I create custom mobile apps for iOS and Android, focusing on
            performance and scalability to ensure an engaging experience.
          </p>
        </div>

        {/* Service Card 3: Full-Stack Web Development */}
        <div className="bg-[#4a4a6a] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-8">
          <div className="mb-6 text-center">
            <i className="fas fa-database text-5xl text-[#32F6FF] animate-spin-slow"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">UI/UX Design</h3>
          <p className="text-gray-300 text-center">
            I focus on creating intuitive user interfaces and seamless user
            experiences using modern design principles and tools.
          </p>
        </div>

        {/* Service Card 4: SEO & Marketing */}
        <div className="bg-[#1c1c2d] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-10">
          <div className="mb-6 text-center">
            <i className="fas fa-chart-line text-5xl text-[#ff4a4a] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">
            Digital Marketing
          </h3>
          <p className="text-gray-300 text-center">
            I drive business growth through targeted SEO strategies and
            marketing techniques, ensuring better visibility and engagement.
          </p>
        </div>

        {/* Service Card 5: IoT & Embedded Systems */}
        <div className="bg-[#1c1c2d] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-10">
          <div className="mb-6 text-center">
            <i className="fas fa-cogs text-5xl text-[#ff4a4a] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">
            IoT & Embedded Systems
          </h3>
          <p className="text-gray-300 text-center">
            I design and develop embedded systems and IoT solutions, enabling
            smart devices to communicate and perform advanced tasks.
          </p>
        </div>

        {/* Service Card 6: System Design */}
        <div className="bg-[#1c1c2d] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up delay-10">
          <div className="mb-6 text-center">
            <i className="fas fa-cogs text-5xl text-[#ff4a4a] animate-bounce"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">System Design</h3>
          <p className="text-gray-300 text-center">
            I specialize in designing robust systems that scale efficiently,
            integrating complex workflows with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
