import React from "react";
import Image from "../assets/image.png"; // local image
import one from "../assets/one.png";
import two from "../assets/two.webp";
import victor1 from "../assets/victor1.webp";



const projectsData = [
  {
    title: "Projects Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    tech: ["HTML", "CSS"],
    image: Image,
    demo: "https://ikechukwugolden.github.io/practical/",
    github: "https://github.com/dashboard",
  },
  
   {
  title: "Monie Point",
  description: "ReactJS e-commerce app with shopping cart functionality.",
  extraDescription:
    "A fintech simulation app focused on user-friendly payments and smooth digital transactions. Built with HTML, CSS, Tailwind, and JavaScript to represent Nigeria’s fintech innovation.",
  tech: ["Tailwind CSS", "HTML"],
  image: two,
  demo: "https://ikechukwugolden.github.io/moniepoint/",
  github: "https://github.com/dashboard",
},

  {
    title: "Hospital Website",
    description: "Simple ReactJS application for hospital services.",
    extraDescription:
      "My biggest dream project — a healthcare platform that connects doctors and patients globally. It will revolutionize online consultations and hospital accessibility worldwide.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: one,
    demo: "https://ikechukwugolden.github.io/MedConnect-Website/",
    github: "https://github.com/dashboard",
  },
  {
    title: "Blog Platform",
    description: "Full-featured blog platform using React and Firebase.",
    tech: ["ReactJS", "Firebase", "Tailwind CSS"],
    image: victor1,
    demo: "https://your-blog-link.com",
    github: "https://github.com/dashboard",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                {project.extraDescription && (
                  <p className="text-gray-300 mb-3">{project.extraDescription}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
