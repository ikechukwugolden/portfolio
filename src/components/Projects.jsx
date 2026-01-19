import React from "react";
import Image from "../assets/image1.png";
import one from "../assets/one.png";
import two from "../assets/two.webp";
import image2 from "../assets/image.png";
import image3 from "../assets/attendance.png";
import { FaExternalLinkAlt, FaGithub, FaStar, FaRocket, FaCode } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Attendance Management System",
    description:
      "A full-stack attendance management platform with authentication, role-based access, and real-time tracking.",
    extraDescription:
      "Built using Firebase Authentication, Firestore database, and a modern React dashboard UI.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    image: image3,
    demo: "https://attendance-website-ul.netlify.app/",
    github: "https://github.com/ikechukwugolden",
    featured: true,
    type: "Full Stack",
  },
  {
    id: 2,
    title: "Tailor Website",
    description:
      "Elegant portfolio website showcasing modern web design principles and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: Image,
    demo: "https://ikechukwugolden.github.io/practical/",
    github: "https://github.com/ikechukwugolden",
    type: "Frontend",
  },
  {
    id: 3,
    title: "Service-Linkr",
    description:
      "A platform for finding trusted local service providers with professional listings and service discovery.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    image: image2,
    demo: "https://service-linkr-t938.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    type: "Full Stack",
  },
  {
    id: 4,
    title: "Monie Point",
    description:
      "Fintech simulation app focused on user-friendly payments and digital transactions.",
    tech: ["Tailwind CSS", "HTML", "JavaScript"],
    image: two,
    demo: "https://ikechukwugolden.github.io/moniepoint/",
    github: "https://github.com/ikechukwugolden",
    type: "Fintech",
  },
  {
    id: 5,
    title: "MedConnect Hospital",
    description:
      "Healthcare platform connecting doctors and patients through a clean and responsive interface.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: one,
    demo: "https://ikechukwugolden.github.io/MedConnect-Website/",
    github: "https://github.com/ikechukwugolden",
    type: "Healthcare",
  },
];

const ProjectCard = ({ project, isFeatured }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl ${
        isFeatured
          ? "lg:col-span-2 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900/20"
          : "bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm"
      } border border-gray-700 hover:border-purple-500/50`}
    >
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold">
            <FaStar className="text-yellow-300" /> Featured Project
          </div>
        </div>
      )}

      <div className="absolute top-4 right-4 z-10">
        <div className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full text-sm font-medium">
          {project.type}
        </div>
      </div>

      <div className={`relative overflow-hidden ${isFeatured ? "h-80" : "h-60"}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.extraDescription && (
          <p className="text-gray-400 text-sm mb-6">
            {project.extraDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium hover:scale-105 transition-all"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-purple-500 transition-all"
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
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsData
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured
              />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
