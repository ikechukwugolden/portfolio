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
      <div className="absolute top-16 -left-20 w-80 h-80 bg-blue-600/8 dark:bg-blue-600/12 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/7 dark:bg-purple-600/10 rounded-full blur-[120px] -z-0" />

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.8rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 sm:p-6"
              >
                <FaQuoteLeft className="text-purple-500 mb-3" />
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">{item.quote}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.role}</p>
              </motion.article>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <FaCertificate className="text-purple-600 dark:text-purple-400" />
                <h3 className="text-sm font-black uppercase tracking-[0.16em]">Certifications</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/70 px-3 py-3 hover:border-purple-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg text-purple-600 dark:text-purple-400">{cert.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-[0.1em] truncate">{cert.title}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 truncate">{cert.provider}</p>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="text-xs text-slate-500" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://github.com/ikechukwugolden"
              target="_blank"
              rel="noreferrer"
              className="block rounded-[1.8rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-purple-600 dark:text-purple-400" />
                  <h3 className="text-sm font-black uppercase tracking-[0.16em]">GitHub Activity</h3>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Live</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/60">
                <img
                  src="https://ghchart.rshah.org/6b21a8/ikechukwugolden"
                  alt="GitHub contribution graph for ikechukwugolden"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Click to open full GitHub profile
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
