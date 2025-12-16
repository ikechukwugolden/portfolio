import React from "react";
import victor1 from "../assets/victor-5.jpeg"; // Replace with your photo/avatar

const About = () => {
  return (
    <section className="w-full bg-gray-800 text-white py-20 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Avatar */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={victor1}
            alt="My Avatar"
            className="w-64 h-64 object-cover rounded-full border-4 border-purple-500 shadow-xl"
          />
        </div>

        {/* Right Side - Bio & Vision */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
            Hello! I'm a passionate  web developer with a love for crafting beautiful, responsive, and user-friendly websites. 
            From building simple static pages to complex React applications, I enjoy turning ideas into functional digital experiences.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
            My mission is to create modern, accessible, and high-performing web applications that not only solve problems but also delight users. 
            I am constantly learning and evolving my skills to stay ahead in the ever-changing world of web development.
          </p>
          <p className="text-purple-400 font-semibold text-lg md:text-xl">
            Vision: To combine creativity and technology to build innovative digital solutions that have a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
