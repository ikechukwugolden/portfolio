import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const techStack = [
    { icon: FaReact, label: "React", color: "text-blue-400" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
    { icon: SiFramer, label: "Framer", color: "text-purple-400" },
    { icon: SiVite, label: "Vite", color: "text-yellow-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Top Divider */}
      <div className="relative z-10 border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="relative z-20 container mx-auto px-6 py-20">
        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="md:col-span-2 space-y-4" variants={itemVariants}>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                IV
              </h2>
              <p className="text-xl font-semibold text-white">Ikechukwu Victor</p>
              <p className="text-gray-400 text-sm mt-2">Frontend Developer & UI/UX Specialist</p>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Crafting high-performance digital experiences with modern technologies and creative design solutions.
            </p>
            
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/50 px-4 py-2 rounded-full backdrop-blur w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-300">Available for Collaboration</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">Navigation</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Tech */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Connect</h3>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ikechukwugolden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gradient-to-br from-purple-600/30 to-blue-600/30 hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all border border-purple-500/20 hover:border-purple-500/50"
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ikechukwu-victor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 hover:from-blue-600 hover:to-cyan-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all border border-blue-500/20 hover:border-blue-500/50"
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:ikechukwuv074@gmail.com"
                  className="w-9 h-9 bg-gradient-to-br from-rose-600/30 to-pink-600/30 hover:from-rose-600 hover:to-pink-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all border border-rose-500/20 hover:border-rose-500/50"
                >
                  <FaEnvelope size={18} />
                </motion.a>
              </div>
            </div>

            {/* Tech Stack Section - Under Connect */}
            <div className="pt-4 border-t border-gray-700/50">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Built With</h3>
              <div className="flex gap-3 flex-wrap">
                {techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.label}
                      className="flex flex-col items-center"
                      whileHover={{ y: -3 }}
                    >
                      <div className="p-2 rounded-md bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all mb-1">
                        <Icon size={18} className={`${tech.color} transition-all`} />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">{tech.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

        {/* Bottom Section */}
        <motion.div
          className="space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <p className="text-gray-500 text-xs">
              Based in <span className="text-white font-semibold">Aba, Nigeria</span> 🇳🇬
            </p>
            <p className="text-gray-600 text-xs">
              © {currentYear} Ikechukwu Victor. All rights reserved.
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 0, scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-white text-sm font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
          >
            <FaArrowUp size={14} /> Back to Top
          </motion.button>
        </motion.div>
      </div>

      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
