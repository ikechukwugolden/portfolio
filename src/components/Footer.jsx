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
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-16 overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Top Section - Branding & Social */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-8 border-b border-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Ikechukwu Victor
            </h2>
            <p className="text-gray-400 text-sm">Crafting high-performance digital experiences.</p>
            
            {/* Availability Badge */}
            <motion.div
              className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 px-4 py-2 rounded-full backdrop-blur"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-green-300">Available for Work</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="text-center md:text-right" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ikechukwugolden"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:from-purple-600 hover:to-purple-700 hover:text-white transition-all"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/ikechukwu-victor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ikechukwuv074@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:from-red-600 hover:to-red-700 hover:text-white transition-all"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="mb-12 pb-8 border-b border-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold mb-6 text-gray-200">Built With Modern Tech</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.label}
                  className="flex flex-col items-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors mb-2">
                    <Icon size={28} className={tech.color} />
                  </div>
                  <span className="text-xs text-gray-400">{tech.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-gray-500 text-sm">
              © {currentYear} Ikechukwu Victor. All rights reserved. | Based in Aba, Nigeria 🇳🇬
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ y: -1, scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full text-white font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
          >
            <FaArrowUp size={16} /> Back to Top
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
