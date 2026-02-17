import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaCircle } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Tech Stack for the mini-marquee
  const stack = ["React", "Next.js", "Firebase", "Tailwind", "Framer Motion", "Node.js", "MongoDB"];

  return (
    <footer className="w-full bg-[#030712] text-white pt-24 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      {/* 🟢 NEW: Live Availability Indicator */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/20">
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaCircle className="text-green-500 text-[8px]" />
          </motion.div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500">
            Available for new projects — February 2026
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter italic mb-6">
              Ikechukwu victor<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              Crafting high-performance digital experiences with a focus on clean code and intuitive design.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/ikechukwugolden" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Stack List */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-8">Main Stack</h4>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-tighter text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-8">Contact</h4>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-500" />
                  <span className="text-sm font-bold text-gray-300">ikechukwuv074@gmail.com</span>
               </div>
               <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-purple-500" />
                  <span className="text-sm font-bold text-gray-300">Abia, Nigeria</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
            © {currentYear} GOLDEN DESIGNS. ALL RIGHTS RESERVED.
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-purple-400 transition-colors"
          >
            Back to Top 
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500/50">
              <FaArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;