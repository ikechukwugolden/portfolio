import React from "react";

const skills = [
  { name: "HTML",},
  { name: "CSS",},
  { name: "JavaScript",},
  { name: "ReactJS",  },
  { name: "Tailwind CSS",},
  { name: "Git",},
   { name: "Firebase",},
];

const Testimonial = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">My Journey & Vision</h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          "I started my web development journey with the fundamentals of HTML, mastering the building blocks of the web. 
          I then progressed to CSS, creating responsive and visually appealing designs, and enhanced my skills with JavaScript to bring interactivity to websites. 
          Over time, I embraced modern frameworks like ReactJS, building dynamic, component-based applications that are scalable and maintainable."
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Along the way, I have gained hands-on experience with Tailwind CSS for rapid UI design, Git for version control, and best practices for clean, semantic code. 
          I am passionate about creating intuitive and beautiful web experiences that not only function seamlessly but also delight users.
        </p>

        <p className="text-lg md:text-xl text-gray-300 font-semibold mb-10">
          My vision is to continue evolving as a full-stack web developer, combining creativity and technical skills to build modern, accessible, and high-performing web applications that make a real impact.
        </p>

        {/* Skills Section as Grid with Hover Effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-6">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600/20 text-purple-400 px-1 py-2  text-sm font-medium hover:bg-purple-500/30 hover:text-white transition transform hover:scale-105"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
