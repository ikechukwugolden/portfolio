import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaBolt,
  FaRocket,
  FaTools,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Mastery",
    description: "Building responsive, interactive user interfaces with modern frameworks like ReactJS. I focus on clean, maintainable code and seamless transitions.",
    features: ["React / Vite", "Tailwind CSS", "Framer Motion", "Next.js"],
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that enhance user engagement and drive conversions through research-backed design.",
    features: ["Figma Prototyping", "Design Systems", "User Research", "Wireframing"],
    icon: <FaPaintBrush />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Full Stack Integration",
    description: "End-to-end web development with seamless frontend and backend integration using robust database architectures.",
    features: ["REST/GraphQL APIs", "Firebase / SQL", "Authentication", "Node.js"],
    icon: <FaBolt />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Speed Optimization",
    description: "Improving website performance, SEO, and accessibility to ensure maximum reach and user satisfaction on all devices.",
    features: ["SEO Strategies", "Core Web Vitals", "Image Lazy Loading", "Caching"],
    icon: <FaRocket />,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Maintenance & Scale",
    description: "Ongoing support, security updates, and performance monitoring to keep your website running smoothly and securely.",
    features: ["Security Patches", "Bug Fixes", "CI/CD Setup", "Cloud Hosting"],
    icon: <FaTools />,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Custom Web Apps",
    description: "Tailored solutions for specific business needs with scalable architecture and modern third-party API integrations.",
    features: ["Custom CMS", "Fintech Solutions", "E-commerce", "SaaS Platforms"],
    icon: <FaMagic />,
    color: "from-indigo-500 to-purple-600",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-sm hover:shadow-xl"
    >
      {/* Background Glow Effect */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-[80px] transition-opacity duration-500`}></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="relative">
            {/* Soft Glow behind the icon */}
            <div className={`absolute inset-0 bg-linear-to-br ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>

            <div className={`relative text-3xl p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
              <div className="text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">
                {service.icon}
              </div>
            </div>
          </div>

          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-700 group-hover:text-purple-500 transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
          {service.description}
        </p>

        <ul className="grid grid-cols-2 gap-y-3 gap-x-2 border-t border-gray-100 dark:border-white/5 pt-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-[9px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-500 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors">
              <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color} mr-2 shadow-lg`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="w-full bg-white dark:bg-[#030712] text-slate-900 dark:text-white py-32 px-5 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">
              My Arsenal
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase"
          >
            SERVICES{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              &
            </span>{" "}
            SOLUTIONS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-2xl font-medium uppercase tracking-[0.4em] text-[10px]"
          >
            Delivering high-performance digital products through technical excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} />
          ))}
        </div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 bg-gray-50 dark:bg-white/5 rounded-[3rem] border border-gray-200 dark:border-white/10 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <h3 className="text-3xl font-black text-center mb-16 tracking-tighter italic text-slate-900 dark:text-white">
            THE <span className="text-purple-600 dark:text-purple-500 uppercase">Workflow</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "Understanding the 'Why' behind your project." },
              { step: "02", title: "Architecture", desc: "Designing the blueprint for scale." },
              { step: "03", title: "Execution", desc: "Building with pixel perfection." },
              { step: "04", title: "Launch", desc: "Deployment & continuous growth." },
            ].map((process, index) => (
              <div key={index} className="relative text-center">
                <div className="text-5xl font-black text-slate-200 dark:text-white/5 mb-4 group-hover:text-purple-600/20 dark:group-hover:text-purple-500/20 transition-colors">
                  {process.step}
                </div>
                <h4 className="font-black text-[10px] uppercase tracking-widest mb-2 text-purple-600 dark:text-purple-400">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase leading-relaxed">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;