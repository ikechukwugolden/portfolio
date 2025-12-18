import React from "react";
import Image from "../assets/image1.png";
import one from "../assets/one.png";
import two from "../assets/two.webp";
import victor1 from "../assets/victor1.webp";
import image2 from "../assets/image.png";
import { FaExternalLinkAlt, FaGithub, FaStar, FaRocket, FaCode } from "react-icons/fa";

const projectsData = [
  // ⭐ MAIN PROJECT
  {
    title: "Service-Linkr",
    description: "A platform for finding trusted local service providers quickly and securely.",
    extraDescription: "Service-Linkr connects homeowners with verified professionals such as plumbers, electricians, cleaners, and repair experts. Features service discovery, professional listings, and modern responsive UI.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    image: image2,
    demo: "https://service-linkr-t938.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    featured: true,
    type: "Full Stack"
  },
  {
    title: "Talior Website",
    description: "Elegant portfolio website showcasing modern web design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: Image,
    demo: "https://ikechukwugolden.github.io/practical/",
    github: "https://github.com/ikechukwugolden",
    type: "Frontend"
  },
  {
    title: "Monie Point",
    description: "Fintech simulation app focused on user-friendly payments and digital transactions.",
    tech: ["Tailwind CSS", "HTML", "JavaScript"],
    image: two,
    demo: "https://ikechukwugolden.github.io/moniepoint/",
    github: "https://github.com/ikechukwugolden",
    type: "Fintech"
  },
  {
    title: "MedConnect Hospital",
    description: "Healthcare platform connecting doctors and patients globally.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: one,
    demo: "https://ikechukwugolden.github.io/MedConnect-Website/",
    github: "https://github.com/ikechukwugolden",
    type: "Healthcare"
  }
];

const ProjectCard = ({ project, isFeatured }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl ${
      isFeatured 
        ? "lg:col-span-2 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900/20" 
        : "bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm"
    } border border-gray-700 hover:border-purple-500/50`}>
      
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold">
            <FaStar className="text-yellow-300" /> Featured Project
          </div>
        </div>
      )}

      {/* Project Type Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full text-sm font-medium">
          {project.type}
        </div>
      </div>

      {/* Image Container */}
      <div className={`relative overflow-hidden ${isFeatured ? 'h-80' : 'h-60'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <FaCode />
              <span>Project</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.extraDescription && (
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {project.extraDescription}
          </p>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-24 px-5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold tracking-wider mb-4">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A collection of my recent work, showcasing innovative solutions and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Project Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.filter(p => p.featured).map((project) => (
              <ProjectCard key={project.title} project={project} isFeatured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects Header */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <FaCode className="text-purple-400" />
            </div>
            Other Notable Projects
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectsData.filter(p => !p.featured).map((project) => (
            <ProjectCard key={project.title} project={project} isFeatured={false} />
          ))}
        </div>

        {/* Stats & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-300 font-medium">Projects Completed</div>
            <div className="text-gray-500 text-sm mt-2">And counting...</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300 font-medium">Client Satisfaction</div>
            <div className="text-gray-500 text-sm mt-2">Quality focused development</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300 font-medium">Technologies Used</div>
            <div className="text-gray-500 text-sm mt-2">Modern tech stack</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Check out my GitHub for more projects, contributions, and open-source work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ikechukwugolden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                Explore My GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaRocket />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;