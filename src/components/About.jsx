import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import victorHeadshot from "../assets/CHAT.png";
import {
  FaReact,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaDownload,
  FaPaperPlane,
  FaCheckCircle,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript, SiFirebase } from "react-icons/si";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const stats = [
    { number: "2+", label: "Years Experience", icon: <FaCode /> },
    { number: "50+", label: "Projects", icon: <FaRocket /> },
    { number: "100%", label: "Satisfaction", icon: <FaLightbulb /> },
    { number: "8", label: "Passion", icon: <FaReact /> },
  ];

  const skills = [
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Framer", icon: <SiFramer />, color: "text-pink-500" },
    { name: "JS ES6", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
  ];

  const superpower =
    "I specialize in translating complex product logic into clear, fast, and accessible React interfaces that non-technical users can trust immediately.";

  const careerGoal =
    "In my next role, I want to help a product team ship high-impact frontend experiences that improve daily decisions for thousands of users.";

  const handleResumeClick = async (event) => {
    event.preventDefault();

    try {
      const resumeResponse = await fetch("/resume.pdf", { method: "HEAD" });
      if (resumeResponse.ok) {
        window.location.href = "/resume.pdf";
        return;
      }
    } catch {
      // Fall back to email request if resume file is not present.
    }

    window.location.href =
      "mailto:ikechukwuv074@gmail.com?subject=Resume%20Request&body=Hello%20Victor%2C%20please%20share%20your%20latest%20resume.";
  };

  return (
    <section
      id="about"
      className="relative w-full transition-colors duration-500 bg-white dark:bg-[#030712] text-slate-900 dark:text-white py-20 md:py-32 px-4 md:px-5 overflow-hidden"
    >
      <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 w-80 h-80 md:w-96 md:h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] z-0" />
      <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-24 w-72 h-72 md:w-80 md:h-80 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-14 md:mb-24 text-center"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">The Architect</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 italic uppercase">
            CRAFTING {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
              DIGITAL
            </span>{" "}
            SOULS
          </h2>
          <p className="text-gray-500 font-medium uppercase tracking-[0.16em] sm:tracking-[0.5em] text-[10px] sm:text-xs">
            Frontend Developer | React Expert | Aba, Nigeria
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-10 dark:opacity-25 group-hover:opacity-100 transition duration-1000" />

            <div className="relative bg-white dark:bg-black rounded-[2.5rem] p-3 border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={victorHeadshot}
                alt="Ikechukwu Victor professional headshot"
                className="rounded-[2rem] w-full h-[420px] sm:h-[540px] md:h-[600px] object-cover grayscale-[10%] dark:grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[88%] sm:w-4/5 bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-4 sm:p-5 rounded-2xl flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Available For</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">Full-Stack Roles</p>
                </div>
                <FaCheckCircle className="text-green-500 text-2xl animate-pulse" />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-slate-900 dark:text-white">
                Building reliable products where <span className="text-purple-600 dark:text-purple-500">clarity meets performance.</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                I am <span className="text-slate-900 dark:text-white font-bold">Victor</span>, a frontend-focused full-stack engineer. I ship products
                that are technically robust and easy to use, with strong attention to UI detail, maintainable architecture, and delivery speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-purple-200/60 dark:border-purple-500/20 bg-purple-50/50 dark:bg-purple-500/10 p-6 sm:p-8"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-purple-600 dark:text-purple-300 mb-2">Superpower</p>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">{superpower}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-purple-600 dark:text-purple-300 mt-6 mb-2">Career Goal</p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">{careerGoal}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(147, 51, 234, 0.05)" }}
                  className="p-5 sm:p-8 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-center text-center transition-all shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl text-purple-600 dark:text-purple-500 mb-3 sm:mb-4">{stat.icon}</div>
                  <h4 className="text-3xl sm:text-4xl font-black mb-1 tracking-tighter text-slate-900 dark:text-white">{stat.number}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 dark:text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 md:pt-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6 md:mb-8 border-l-2 border-purple-500 pl-4">Core Arsenal</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.07, duration: 0.35 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl hover:border-purple-500/30 transition-all shadow-sm"
                  >
                    <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center pt-4 sm:pt-8">
              <motion.a
                href="/resume.pdf"
                onClick={handleResumeClick}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-slate-900 dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[10px] hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaDownload className="text-lg" /> Download PDF Resume
              </motion.a>

              <motion.a
                href="/#contact"
                whileHover={{ x: 5 }}
                className="group flex items-center justify-center sm:justify-start gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white cursor-pointer"
              >
                Let&apos;s Work Together <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-purple-600 dark:text-purple-500 text-lg" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

