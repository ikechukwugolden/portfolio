import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

// Assets
import image1 from "../assets/image1.png";
import one from "../assets/one.png";
import two from "../assets/two.webp";
import image2 from "../assets/image.png";
import image3 from "../assets/Screenshot.png";

const projectsData = [
  {
    id: 1,
    title: "Attendance Management",
    description: "Full-stack attendance platform with real-time tracking.",
    tech: ["React", "Firebase", "Tailwind"],
    image: image3,
    demo: "https://attendance-website-eight.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    featured: true,
    type: "Full Stack",
  },
  {
    id: 2,
    title: "Tailor Website",
    description: "Modern portfolio for fashion design showcases.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image1,
    demo: "https://ikechukwuv074.github.io/practical/",
    github: "https://github.com/ikechukwugolden",
    type: "Frontend",
  },
  {
    id: 3,
    title: "Service-Linkr",
    description: "Connects trusted local service providers with clients.",
    tech: ["React", "Firebase", "Tailwind"],
    image: image2,
    demo: "https://service-linkr-t938.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    type: "Full Stack",
  },
  {
    id: 4,
    title: "Monie Point",
    description: "Fintech simulation focused on digital transactions.",
    tech: ["Tailwind CSS", "JS"],
    image: two,
    demo: "https://ikechukwuv074.github.io/moniepoint/",
    github: "https://github.com/ikechukwugolden",
    type: "Fintech",
  },
  {
    id: 5,
    title: "MedConnect Hospital",
    description: "Healthcare platform for doctor-patient connectivity.",
    tech: ["HTML", "Tailwind", "JS"],
    image: one,
    demo: "https://ikechukwuv074.github.io/MedConnect-Website/",
    github: "https://github.com/ikechukwugolden",
    type: "Healthcare",
  }
];

const ProjectCard = ({ project, isFeatured }) => (
  <div className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 
    bg-white dark:bg-gray-900/50 
    border border-gray-200 dark:border-white/5 
    hover:border-purple-500/50 hover:shadow-2xl dark:hover:shadow-purple-500/10
    ${isFeatured ? "md:col-span-2" : "col-span-1"}`}>
    
    <div className={`relative overflow-hidden ${isFeatured ? "h-[200px] md:h-[300px]" : "h-64"}`}>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
    </div>
    
    <div className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
        <h3 className={`${isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-black text-slate-900 dark:text-white`}>
            {project.title}
        </h3>
        <span className="px-3 py-1 bg-purple-100 dark:bg-white/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">
          {project.type}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none font-medium">
        {project.description}
      </p>
      
      <div className="flex gap-3 md:gap-4">
        <a href={project.demo} target="_blank" rel="noreferrer" 
            className="flex-1 py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-center rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-tighter hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white transition-all">
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" 
            className="px-4 md:px-5 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-slate-900 dark:text-white text-lg md:text-xl">
          <FaGithub />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projectsData.map((p) => p.type))];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter((p) => p.type === filter);

  return (
    <section id="projects" className="w-full transition-colors duration-500 bg-gray-50 dark:bg-black text-slate-900 dark:text-white py-16 md:py-32 px-4 md:px-5 min-h-screen relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className="text-purple-600 dark:text-purple-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4">
            Selected Works
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-center tracking-tighter mb-8 md:mb-10 italic uppercase">
            Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all border ${
                  filter === cat 
                  ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20" 
                  : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 hover:text-purple-600 dark:hover:text-white shadow-sm dark:shadow-none"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard 
                  project={project} 
                  isFeatured={project.featured && filter === "All"} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🟢 Action Section: FIXED FOR LIGHT MODE VISIBILITY */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-20 
            bg-white dark:bg-linear-to-b dark:from-white/5 dark:to-transparent 
            border border-gray-200 dark:border-white/10 
            rounded-[2.5rem] md:rounded-[4rem] 
            text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 
            shadow-2xl shadow-gray-200/50 dark:shadow-none"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 italic uppercase leading-tight text-slate-900 dark:text-white">
              Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500">Elevate</span> your project?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px]">
              Available for freelance opportunities and full-stack collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="https://github.com/ikechukwugolden" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 md:px-10 py-5 md:py-6 
                bg-gray-100 dark:bg-white/5 
                border border-gray-200 dark:border-white/10 
                rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest 
                text-slate-900 dark:text-white 
                hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <FaGithub className="text-lg md:text-xl" /> GitHub
            </a>
            
            <a href="#contact" 
              className="group flex items-center justify-center gap-3 px-8 md:px-10 py-5 md:py-6 bg-purple-600 text-white rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl shadow-purple-500/40 hover:scale-105 transition-all"
            >
              Collaborate <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;