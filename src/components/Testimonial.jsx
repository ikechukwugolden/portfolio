import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500 dark:text-yellow-400" },
  { name: "ReactJS", icon: <FaReact />, color: "text-cyan-500 dark:text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-500 dark:text-sky-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-amber-500" },
];

const Testimonial = () => {
  return (
    <section className="w-full bg-white dark:bg-[#030712] text-slate-900 dark:text-white py-32 px-5 relative overflow-hidden transition-colors duration-500">
      
      {/* 🟢 Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">Evolution</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">
            JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-500">&</span> VISION
          </h2>
        </motion.div>

        {/* Narrative Content */}
        <div className="space-y-12 mb-20 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
          >
            <span className="text-slate-900 dark:text-white font-black italic">"</span> I started my journey with the building blocks of the web. What began as simple HTML tags evolved into a deep fascination with <span className="text-slate-900 dark:text-white font-bold">responsive design</span> and the logical complexities of <span className="text-slate-900 dark:text-white font-bold">JavaScript</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
          >
            Embracing <span className="text-purple-600 dark:text-purple-400 font-bold">ReactJS</span> changed everything. It allowed me to move from building pages to architecting dynamic <span className="text-slate-900 dark:text-white underline decoration-purple-500 underline-offset-8">experiences</span> that are as scalable as they are beautiful.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] backdrop-blur-sm shadow-sm"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-bold italic tracking-tight">
              My vision is to bridge the gap between imagination and reality, creating high-performing full-stack applications that don't just solve problems—they leave a lasting digital impact.
            </p>
          </motion.div>
        </div>

        {/* 🟢 Refined Skills Arsenal */}
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200 dark:border-white/5"></div>
            </div>
            <div className="relative flex justify-center mb-10">
                <span className="bg-white dark:bg-[#030712] px-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-600">Core Arsenal</span>
            </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -5, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
              className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-3 rounded-2xl transition-all cursor-default shadow-sm"
            >
              <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;