import React from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
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
  FaStar,
  FaFire,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript, SiFirebase } from "react-icons/si";

const About = () => {

  const stats = [
    { number: "2+", label: "Years", icon: <FaCode />, color: "from-blue-500 to-cyan-400" },
    { number: "50+", label: "Projects", icon: <FaRocket />, color: "from-purple-500 to-pink-500" },
    { number: "100%", label: "Happy Clients", icon: <FaLightbulb />, color: "from-yellow-500 to-orange-500" },
    { number: "∞", label: "Learning", icon: <FaStar />, color: "from-green-500 to-emerald-400" },
  ];

  const skills = [
    { name: "React", icon: <FaReact />, color: "text-blue-400", level: 95 },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400", level: 90 },
    { name: "Framer", icon: <SiFramer />, color: "text-pink-500", level: 88 },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", level: 92 },
    { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500", level: 82 },
  ];

  const superpower =
    "I turn complex ideas into simple, working web apps that people actually enjoy using.";

  const careerGoal =
    "Looking for a team where I can build cool stuff and keep learning new technologies.";

  const handleResumeClick = (event) => {
    event.preventDefault();

    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set colors and fonts
    const primaryColor = "#9333ea"; // purple-600
    const textColor = "#1e293b"; // slate-900
    const lightGray = "#64748b"; // slate-500
    let yPosition = 20;

    // Title
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.setTextColor(primaryColor);
    pdf.text("IKECHUKWU VICTOR", 20, yPosition);

    yPosition += 12;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(lightGray);
    pdf.text("Frontend Developer | React Expert | Aba, Nigeria", 20, yPosition);
    pdf.text("ikechukwuv074@gmail.com", 20, yPosition + 6);

    yPosition += 18;
    pdf.setDrawColor(primaryColor);
    pdf.setLineWidth(0.5);
    pdf.line(20, yPosition, 190, yPosition);

    yPosition += 10;

    // Professional Summary
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(textColor);
    pdf.text("PROFESSIONAL SUMMARY", 20, yPosition);

    yPosition += 8;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(textColor);
    const summary =
      "Frontend developer specializing in translating complex product logic into clear, fast, and accessible React interfaces. 2+ years of experience building reliable, user-centric digital products with strong attention to UI detail, maintainable architecture, and delivery speed.";
    const summaryLines = pdf.splitTextToSize(summary, 170);
    pdf.text(summaryLines, 20, yPosition);
    yPosition += summaryLines.length * 5 + 5;

    // Core Skills
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(textColor);
    pdf.text("CORE SKILLS", 20, yPosition);

    yPosition += 8;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(textColor);
    const pdfSkills = ["React.js", "Node.js", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "Firebase", "Frontend Development", "UI/UX Development"];
    const skillsText = pdfSkills.join(" • ");
    const skillsLines = pdf.splitTextToSize(skillsText, 170);
    pdf.text(skillsLines, 20, yPosition);
    yPosition += skillsLines.length * 5 + 5;

    // Experience Section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(textColor);
    pdf.text("EXPERIENCE", 20, yPosition);

    yPosition += 8;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.setTextColor(textColor);
    pdf.text("Senior Frontend Developer", 20, yPosition);

    yPosition += 6;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(lightGray);
    pdf.text("Self-Employed | 2022 - Present", 20, yPosition);

    yPosition += 7;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(textColor);
    const expText =
      "Developed 50+ web applications using React and modern JavaScript frameworks. Designed and implemented responsive, accessible user interfaces. Integrated frontend applications with APIs and supporting services. Maintained 100% client satisfaction through quality delivery and clear communication.";
    const expLines = pdf.splitTextToSize(expText, 170);
    pdf.text(expLines, 20, yPosition);
    yPosition += expLines.length * 4 + 5;

    // Education
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(textColor);
    pdf.text("EDUCATION", 20, yPosition);

    yPosition += 8;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.setTextColor(textColor);
    pdf.text("Full Stack Web Development Bootcamp", 20, yPosition);

    yPosition += 6;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(lightGray);
    pdf.text("Online - Completed 2022", 20, yPosition);

    yPosition += 10;

    // Career Goal
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(textColor);
    pdf.text("CAREER GOAL", 20, yPosition);

    yPosition += 8;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(textColor);
    const goalText =
      "Seeking a frontend developer role to help a product team ship high-impact user experiences that improve daily decisions for thousands of users while maintaining technical excellence and code quality.";
    const goalLines = pdf.splitTextToSize(goalText, 170);
    pdf.text(goalLines, 20, yPosition);

    // Footer
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor("#999999");
    pdf.text("Portfolio: victorportfolio.com | Available for Frontend Roles", 20, 280);

    // Save the PDF
    pdf.save("Ikechukwu-Victor-Resume.pdf");
  };

  return (
    <section
      id="about"
      className="relative w-full transition-colors duration-500 bg-white dark:bg-gray-900 text-slate-900 dark:text-white py-20 md:py-32 px-4 md:px-5"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-14 md:mb-24 text-center"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide text-green-600 dark:text-green-400">Available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
            Frontend Developer & Specialist • React Expert • Aba, Nigeria
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* LEFT SIDE: Photo, Badges, Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Photo Container */}
            <div className="relative">
              <div className="bg-linear-to-br from-purple-600/10 to-blue-600/10 border border-purple-400/20 dark:border-purple-500/30 rounded-2xl p-1 shadow-xl">
                <img
                  src={victorHeadshot}
                  alt="Victor - Frontend Developer"
                  className="rounded-2xl w-full aspect-[3.5/5] object-contain bg-gray-100 dark:bg-slate-900"
                />
              </div>

              {/* Available Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-[10px] uppercase tracking-wider shadow-lg border border-green-400/50 backdrop-blur-sm">
                  ✓ Available for Work
                </div>
              </motion.div>
            </div>

            {/* Status Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="pt-6 space-y-2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-purple-100 dark:bg-purple-500/10 border border-purple-300/30 dark:border-purple-500/30">
                <span className="text-purple-600 dark:text-purple-400 text-sm">◆</span>
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">Frontend Expert</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-100 dark:bg-blue-500/10 border border-blue-300/30 dark:border-blue-500/30">
                <span className="text-blue-600 dark:text-blue-400 text-sm">◆</span>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">UI/UX Focused</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-green-100 dark:bg-green-500/10 border border-green-300/30 dark:border-green-500/30">
                <span className="text-green-600 dark:text-green-400 text-sm">◆</span>
                <span className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wider">React Specialist</span>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-4 border-t border-gray-200 dark:border-white/10"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all"
                  >
                    <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3.5 bg-gradient-to-br ${stat.color} bg-opacity-5 border border-gray-200 dark:border-white/10 rounded-lg flex flex-col items-center text-center hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="text-2xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <h4 className="text-lg font-black text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-200">{stat.number}</h4>
                  <p className="text-[9px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8 md:space-y-10"
          >
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                I build <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">fast, beautiful</span> web apps
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                I'm Victor, a frontend developer from Aba, Nigeria. With 2+ years of experience, I specialize in building clean, performant React applications with exceptional UX. I turn complex ideas into simple, working products that people love using.
              </p>
            </motion.div>

            {/* Superpower & Goal */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-purple-200/60 dark:border-purple-500/20 bg-purple-50/50 dark:bg-purple-500/10 p-5 sm:p-6 backdrop-blur-sm"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.24em] text-purple-600 dark:text-purple-300 mb-3">My Superpower</p>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-100 leading-relaxed font-semibold">{superpower}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-blue-200/60 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-500/10 p-5 sm:p-6 backdrop-blur-sm"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300 mb-3">Career Goal</p>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-100 leading-relaxed font-semibold">{careerGoal}</p>
              </motion.div>
            </div>

            {/* Skills with Progress Bars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 border-t border-gray-200 dark:border-white/10"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all"
                  >
                    <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Proficiency Levels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="pt-4 border-t border-gray-200 dark:border-white/10"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-6">Proficiency Levels</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-xs font-black text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/20 px-2.5 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-2.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className={`h-full bg-linear-to-r ${skill.color.includes('blue') ? 'from-blue-500 to-cyan-400' : skill.color.includes('green') ? 'from-green-500 to-emerald-400' : skill.color.includes('cyan') ? 'from-cyan-400 to-blue-500' : skill.color.includes('pink') ? 'from-pink-500 to-rose-400' : skill.color.includes('yellow') ? 'from-yellow-400 to-orange-500' : 'from-orange-500 to-red-500'} rounded-full shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
            >
              <motion.button
                onClick={handleResumeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-black uppercase tracking-[0.15em] text-[9px] shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2.5 transition-all"
              >
                <FaDownload /> Resume
              </motion.button>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-4 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg font-black uppercase tracking-[0.15em] text-[9px] hover:bg-purple-50 dark:hover:bg-purple-500/10 flex items-center justify-center gap-2.5 transition-all"
              >
                <FaPaperPlane /> Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
