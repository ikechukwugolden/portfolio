import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaCertificate, FaGithub, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import { SiMeta, SiCoursera } from "react-icons/si";

const testimonials = [
  {
    quote:
      "Victor brings product thinking to frontend work. He simplifies complex flows and still ships clean, maintainable components.",
    name: "Chinedu A.",
    role: "Product Designer",
  },
  {
    quote:
      "Working with Victor was smooth. He communicated clearly, delivered fast, and improved both usability and perceived performance.",
    name: "Adaobi O.",
    role: "Startup Founder",
  },
  {
    quote:
      "He contributes with structure, not guesswork. The code quality and UI consistency made collaboration with the team much easier.",
    name: "Daniel K.",
    role: "Open-Source Collaborator",
  },
];

const certifications = [
  {
    title: "Meta Front-End Developer",
    provider: "Meta / Coursera",
    icon: <SiMeta />,
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "AWS Cloud Foundations",
    provider: "AWS Training",
    icon: <FaAws />,
    link: "https://aws.amazon.com/training/",
  },
  {
    title: "Advanced React Patterns",
    provider: "Coursera",
    icon: <SiCoursera />,
    link: "https://www.coursera.org/",
  },
];

const Testimonial = () => {
  return (
    <section
      id="social-proof"
      className="w-full bg-white dark:bg-[#030712] text-slate-900 dark:text-white py-20 md:py-28 px-4 md:px-5 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-16 -left-20 w-80 h-80 bg-blue-600/8 dark:bg-blue-600/12 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/7 dark:bg-purple-600/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">Credibility</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase">Social Proof</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
            Testimonials, learning credentials, and live GitHub activity that show consistent execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
          <div className="lg:col-span-7 space-y-4">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-linear-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 p-6 sm:p-8 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-3xl text-purple-500/40 group-hover:text-purple-500 transition-colors"
                  >
                    <FaQuoteLeft />
                  </motion.div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span key={i} whileHover={{ scale: 1.2 }} className="text-lg text-yellow-400">★</motion.span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-100 leading-relaxed text-base sm:text-lg font-medium mb-6">{item.quote}</p>
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="border-t border-gray-200 dark:border-white/10 pt-4"
                >
                  <p className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-1">{item.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{item.role}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-linear-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-600/10 border border-purple-400/20">
                  <FaCertificate className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/50 px-4 py-3.5 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{cert.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white truncate">{cert.title}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">{cert.provider}</p>
                      </div>
                    </div>
                    <span className="text-sm text-purple-600 dark:text-purple-400 shrink-0">
                      <FaExternalLinkAlt />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://github.com/ikechukwugolden"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              className="block rounded-2xl border border-gray-200 dark:border-white/10 bg-linear-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 p-6 sm:p-8 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all group backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 dark:bg-white">
                    <FaGithub className="text-white dark:text-slate-900 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">GitHub</h3>
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Activity</p>
                  </div>
                </div>
                <motion.span 
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  Live
                </motion.span>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/80">
                <img
                  src="https://ghchart.rshah.org/6b21a8/ikechukwugolden"
                  alt="GitHub contribution graph for ikechukwugolden"
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                → Open full GitHub profile
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
