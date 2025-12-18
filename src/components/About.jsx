import React from "react";
import victor1 from "../assets/victor-5.jpeg"; // Replace with your photo/avatar
import { FaReact, FaCode, FaLightbulb, FaRocket, FaDownload, FaPaperPlane } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience", icon: <FaCode className="text-purple-400" /> },
    { number: "50+", label: "Projects Completed", icon: <FaRocket className="text-purple-400" /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaLightbulb className="text-purple-400" /> },
    { number: "∞", label: "Passion for Code", icon: <FaReact className="text-purple-400" /> }
  ];

  const passions = [
    "Clean Code Architecture",
    "Responsive Design",
    "Performance Optimization",
    "User Experience",
    "Modern Frameworks",
    "Continuous Learning"
  ];

  return (
    <section className="w-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold tracking-wider mb-4">
            GET TO KNOW ME
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Portrait Image with Animation */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Image Container - Portrait Aspect Ratio */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl">
                <img
                  src={victor1}
                  alt="Victor - Full Stack Developer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "3/4" }}
                />
                
                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-200">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-purple-500/20 rounded-full blur-md"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-blue-500/20 rounded-full blur-md"></div>
            </div>
          </div>

          {/* Right Side - Bio & Content */}
          <div className="lg:w-3/5">
            {/* Introduction */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold">
                  Hello! I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Victor</span>
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with expertise in creating 
                beautiful, responsive, and user-centric web applications. I transform complex problems into elegant solutions 
                that deliver exceptional user experiences.
              </p>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With a keen eye for detail and a commitment to clean code, I bridge the gap between design and 
                functionality, ensuring every project is both aesthetically pleasing and technically robust.
                My journey in web development has been driven by curiosity and a passion for creating
                digital solutions that make a real impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-2xl mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Passions */}
            <div className="mb-10">
              <h4 className="text-xl font-bold mb-4 text-gray-200 flex items-center gap-2">
                <span className="text-purple-400">✦</span> What I'm Passionate About
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {passions.map((passion, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-2 bg-gray-800/40 border border-gray-700 rounded-lg text-sm hover:bg-linear-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision Box */}
            <div className="relative overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl animate-pulse">✨</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-100">My Vision & Mission</h4>
                    <p className="text-gray-300">
                      To pioneer innovative digital solutions that not only solve real-world problems but also 
                      inspire and elevate human experiences through technology. I believe in creating products 
                      that make a meaningful difference and leave a lasting positive impact on users' lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
              <FaDownload />
              Download Resume
            </button>
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300 group">
              <FaPaperPlane className="group-hover:animate-pulse" />
              Let's Connect & Collaborate
            </button>
          </div>
          
          {/* Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-gray-400 italic text-lg">
              "Great web experiences are born at the intersection of technical excellence and creative vision."
            </p>
            <div className="w-16 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;