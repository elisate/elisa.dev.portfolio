function Footer() {
  return (
    <footer className="bg-[#0a0b1e] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Me</h4>
            <p className="text-gray-400 leading-relaxed">
              I'm Dushimiyimana Elisa, a passionate software developer specializing in front-end and full-stack development. I love creating modern and responsive web applications.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact & Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 leading-relaxed">Email: <a href="mailto:dushimiyimanaelisa@gmail.com" className="text-gray-300 hover:text-[#32F6FF] transition-colors duration-300">dushimiyimanaelisa@gmail.com</a></p>
            <p className="text-gray-400 leading-relaxed">Phone: <a href="tel:+250787239952" className="text-gray-300 hover:text-[#32F6FF] transition-colors duration-300">+250787239952</a></p>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-6 animate-pulse">
                <a href="https://github.com/niganze" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0a12 12 0 00-3.784 23.383c.6.111.818-.26.818-.577 0-.285-.012-1.037-.018-2.037-3.338.725-4.042-1.64-4.042-1.64-.545-1.383-1.332-1.75-1.332-1.75-1.089-.744.083-.729.083-.729 1.204.084 1.837 1.237 1.837 1.237 1.07 1.834 2.808 1.303 3.492.996.108-.774.419-1.303.762-1.603-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.125-.303-.536-1.522.117-3.173 0 0 1.009-.323 3.303 1.23a11.467 11.467 0 016.018 0c2.294-1.553 3.303-1.23 3.303-1.23.654 1.651.243 2.87.119 3.173.77.84 1.236 1.911 1.236 3.221 0 4.61-2.803 5.624-5.473 5.921.431.371.815 1.104.815 2.223 0 1.606-.015 2.901-.015 3.293 0 .319.218.694.825.576A12.004 12.004 0 0012 0z" />
                  </svg>
                </a>
                <a href="https://x.com/ANiganze?t=_9LJd6s5nSf4YkItgQviRw&s=09" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.92 4.92 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.918 4.918 0 0016.875 3a4.924 4.924 0 00-4.917 4.917c0 .385.043.76.127 1.122-4.084-.205-7.702-2.159-10.124-5.127a4.908 4.908 0 00-.665 2.475 4.922 4.922 0 002.188 4.102 4.902 4.902 0 01-2.23-.616v.062a4.926 4.926 0 003.946 4.827 4.936 4.936 0 01-2.223.084 4.927 4.927 0 004.597 3.417 9.868 9.868 0 01-6.102 2.103c-.396 0-.786-.023-1.17-.069a13.945 13.945 0 007.545 2.212c9.05 0 14.001-7.503 14.001-14.001 0-.213-.005-.426-.014-.637A9.957 9.957 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/niganze-alain-4a4908252/" className="text-gray-400 hover:text-[#32F6FF] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.563c.784-1.176 2.484-1.72 3.75-1.72 2.071 0 3.75 1.679 3.75 3.75v6.407z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Elisatech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
