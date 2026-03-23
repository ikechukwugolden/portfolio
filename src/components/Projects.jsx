import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
  FaLock,
  FaGlobe,
  FaExchangeAlt,
  FaBolt,
  FaHeart,
} from "react-icons/fa";

import image1 from "../assets/image1.png";
import one from "../assets/one.png";
import two from "../assets/two.webp";
import image2 from "../assets/image.png";
import image3 from "../assets/Screenshot.png";
import netWalletPreview from "../assets/net-wallet-preview.svg";
import MagneticButton from "./MagneticButton";

const projectsData = [
  {
    id: 1,
    title: "Net-wallet",
    tagline: "Your gateway to multi-chain crypto",
    description:
      "A wallet experience focused on speed, trust, and clarity. Users can buy, swap, and manage digital assets across multiple chains from one polished interface.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Web3"],
    image: netWalletPreview,
    demo: "https://net-wallet.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    featured: true,
    type: "Fintech",
    year: "2026",
    highlights: [
      "Self-custody account model with private key ownership",
      "Multi-chain compatibility for Ethereum, BNB Chain, and Polygon",
      "Fast cross-chain swap flow optimized for fewer clicks",
      "Security-first UX with encrypted wallet interactions",
    ],
    breakdown: {
      challenge:
        "Many wallet products feel complex for everyday users, especially when they need to move across chains quickly and safely.",
      solution:
        "Designed a guided wallet flow with clear actions for buy, swap, and manage so users can complete tasks with confidence.",
      role:
        "Led the frontend experience, interaction patterns, and component architecture for a smooth fintech-grade interface.",
      outcome:
        "Created a launch-ready wallet showcase that communicates trust, speed, and modern product quality for 2026 audiences.",
    },
    featureCards: [
      {
        title: "Self-Custody Security",
        detail: "Your keys, your crypto. Full control always.",
        icon: FaLock,
      },
      {
        title: "Multi-Chain Support",
        detail: "Ethereum, BNB Chain, Polygon and more.",
        icon: FaGlobe,
      },
      {
        title: "Instant Cross-Chain Swaps",
        detail: "Swap across supported chains in seconds.",
        icon: FaExchangeAlt,
      },
      {
        title: "Fast and Secure",
        detail: "Enterprise-grade encryption throughout.",
        icon: FaBolt,
      },
    ],
  },
  {
    id: 2,
    title: "Attendance Management",
    tagline: "Real-time academic operations",
    description: "Full-stack attendance platform with live tracking and actionable dashboards.",
    tech: ["React", "Firebase", "Tailwind"],
    image: image3,
    demo: "https://attendance-website-eight.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    type: "Full Stack",
    year: "2025",
    highlights: [
      "Live student attendance sync",
      "Admin-friendly analytics view",
      "Reliable Firebase cloud storage",
    ],
    breakdown: {
      challenge:
        "Manual attendance tracking leads to errors, delays, and limited visibility for teachers and administrators.",
      solution:
        "Built a real-time digital attendance workflow with role-based access and dashboard reporting for faster decisions.",
      role:
        "Handled frontend architecture, Firebase integration, and UX for data capture, filtering, and reporting views.",
      outcome:
        "Delivered a reliable academic operations tool that reduces admin overhead and improves attendance visibility.",
    },
  },
  {
    id: 3,
    title: "Service-Linkr",
    tagline: "Local service discovery made simple",
    description: "Connects trusted local service providers with clients through a smooth booking flow.",
    tech: ["React", "Firebase", "Tailwind"],
    image: image2,
    demo: "https://service-linkr-t938.vercel.app/",
    github: "https://github.com/ikechukwugolden",
    type: "Full Stack",
    year: "2025",
    highlights: [
      "Provider discovery and listing",
      "Client-first matching UX",
      "Responsive mobile experience",
    ],
    breakdown: {
      challenge:
        "Users struggle to find trusted local professionals quickly, while providers need better online visibility.",
      solution:
        "Designed a searchable marketplace flow that connects service providers with clients through a clear booking path.",
      role:
        "Implemented UI system, listing flow, and Firebase-backed service data management for quick content updates.",
      outcome:
        "Produced a scalable service platform concept that makes local hiring more efficient on web and mobile.",
    },
  },
  {
    id: 4,
    title: "Monie Point",
    tagline: "Digital transaction simulation",
    description: "Fintech simulation project focused on payment flow clarity and onboarding UX.",
    tech: ["Tailwind CSS", "JavaScript"],
    image: two,
    demo: "https://ikechukwuv074.github.io/moniepoint/",
    github: "https://github.com/ikechukwugolden",
    type: "Fintech",
    year: "2024",
    highlights: [
      "Clean financial dashboard",
      "Clear payment interaction flow",
      "Readable visual hierarchy",
    ],
    breakdown: {
      challenge:
        "Fintech dashboards often overload users and make payment actions feel risky or unclear.",
      solution:
        "Created a focused transaction simulation with simplified dashboard blocks and direct call-to-action patterns.",
      role:
        "Designed and developed the frontend flow with emphasis on clarity, trust signals, and interaction rhythm.",
      outcome:
        "Showcased a polished fintech UI concept that demonstrates strong product thinking and conversion-friendly UX.",
    },
  },
  {
    id: 5,
    title: "MedConnect Hospital",
    tagline: "Care coordination platform",
    description: "Healthcare interface concept for doctor-patient coordination and appointment flow.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    image: one,
    demo: "https://ikechukwuv074.github.io/MedConnect-Website/",
    github: "https://github.com/ikechukwugolden",
    type: "Healthcare",
    year: "2024",
    highlights: [
      "Doctor-patient scheduling flow",
      "Human-friendly healthcare UI",
      "Device-responsive layout",
    ],
    breakdown: {
      challenge:
        "Healthcare users need low-friction appointment flow and clear communication without technical confusion.",
      solution:
        "Built a patient-friendly interface for doctor discovery, scheduling, and basic communication touchpoints.",
      role:
        "Owned the frontend UX and component layout with attention to trust, readability, and accessibility principles.",
      outcome:
        "Delivered a healthcare concept site that communicates care quality while keeping navigation straightforward.",
    },
  },
  {
    id: 6,
    title: "Tailor Website",
    tagline: "Fashion showcase portfolio",
    description: "Modern brand website for fashion design showcases and customer lead capture.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image1,
    demo: "https://ikechukwuv074.github.io/practical/",
    github: "https://github.com/ikechukwugolden",
    type: "Frontend",
    year: "2024",
    highlights: [
      "Visual storytelling layout",
      "Strong brand presentation",
      "Simple conversion-focused navigation",
    ],
    breakdown: {
      challenge:
        "Fashion brands need visual storytelling and clean structure to convert visitors into serious customers.",
      solution:
        "Developed an editorial-style portfolio website with bold sections, showcase galleries, and clear contact prompts.",
      role:
        "Handled complete frontend execution from layout direction to responsive behavior and visual refinements.",
      outcome:
        "Created a professional brand presence that helps a tailor present work credibly and attract new clients.",
    },
  },
];

const ProjectCard = ({ project, index, onPreview, liked, onToggleLike }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
    className="group overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/70 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/30"
  >
    <button
      type="button"
      onClick={() => onPreview(project)}
      data-cursor-label="Preview"
      className="relative block w-full h-56 text-left"
      aria-label={`Preview ${project.title}`}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/35 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.16em]">
        {project.type}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/35 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.16em]">
        {project.year}
      </div>
    </button>

    <div className="p-6 md:p-7 flex flex-col gap-4">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-[11px] uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300 font-bold mt-1">{project.tagline}</p>
      </div>

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{project.description}</p>

      <button
        type="button"
        onClick={() => onToggleLike(project.id)}
        className={`inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${
          liked
            ? "bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-300"
            : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-rose-300 hover:text-rose-600"
        }`}
      >
        <FaHeart className={liked ? "fill-current" : ""} />
        {liked ? "Liked" : "Like Product"}
      </button>

      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((stack) => (
          <span
            key={stack}
            className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.14em] bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 dark:bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.16em] hover:bg-blue-700 transition-colors"
        >
          Live <FaExternalLinkAlt className="text-xs" />
        </a>
        <button
          type="button"
          onClick={() => onPreview(project)}
          className="px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-[10px] font-black uppercase tracking-[0.12em]"
          aria-label={`Full breakdown for ${project.title}`}
        >
          Breakdown
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          aria-label={`${project.title} GitHub`}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState(() => {
    if (typeof window === "undefined") {
      return {};
    }

    try {
      const savedLikes = window.localStorage.getItem("portfolio-project-likes");
      return savedLikes ? JSON.parse(savedLikes) : {};
    } catch {
      return {};
    }
  });

  const featuredProject = projectsData.find((project) => project.featured);
  const projectCatalog = projectsData.filter((project) => !project.featured);
  const categories = ["All", ...new Set(projectCatalog.map((project) => project.type))];
  const filteredProjects = filter === "All" ? projectCatalog : projectCatalog.filter((project) => project.type === filter);
  const isLiked = (projectId) => Boolean(likedProjects[projectId]);

  const handleToggleLike = (projectId) => {
    setLikedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("portfolio-project-likes", JSON.stringify(likedProjects));
  }, [likedProjects]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-16 md:py-28 px-4 md:px-5 text-slate-900 dark:text-white bg-slate-50 dark:bg-[#020613] overflow-hidden"
    >
      <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-blue-500/18 dark:bg-blue-500/12 blur-[130px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-cyan-500/12 dark:bg-cyan-500/8 blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-cyan-300"
          >
            2026 Portfolio Format
          </motion.span>
          <h2 className="mt-4 text-4xl md:text-7xl font-black tracking-tight uppercase">Project Case Studies</h2>
          <p className="mt-5 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Each project below is presented like a product launch: clear value proposition, key features, stack, and direct access to the live experience.
          </p>
        </div>

        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-slate-700/70 bg-linear-to-br from-[#0a1326] via-[#070f1f] to-[#040915] text-white shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute -top-24 right-0 w-[340px] h-[340px] rounded-full bg-blue-500/25 blur-[120px]" />
            <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-violet-500/18 blur-[120px]" />

            <div className="relative grid lg:grid-cols-12 gap-8 p-6 md:p-8 lg:p-10">
              <button
                type="button"
                onClick={() => setActiveProject(featuredProject)}
                data-cursor-label="Open"
                className="lg:col-span-6 rounded-[1.6rem] overflow-hidden border border-white/15 h-[280px] md:h-[360px] text-left"
                aria-label={`Preview ${featuredProject.title}`}
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </button>

              <div className="lg:col-span-6 flex flex-col gap-5">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[10px] font-black uppercase tracking-[0.18em]">
                    Featured Release - {featuredProject.year}
                  </span>
                  <h3 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">{featuredProject.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-300 font-bold">{featuredProject.tagline}</p>
                </div>

                <p className="text-slate-200 leading-relaxed">{featuredProject.description}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {featuredProject.featureCards.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3">
                          <Icon />
                        </div>
                        <h4 className="text-sm font-bold mb-1">{feature.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{feature.detail}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 text-white font-black text-[11px] uppercase tracking-[0.16em] hover:brightness-110 transition-all"
                  >
                    Visit Net-wallet <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-black text-[11px] uppercase tracking-[0.16em] hover:bg-white/20 transition-all"
                  >
                    Source Code <FaGithub className="text-sm" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white/95 font-black text-[11px] uppercase tracking-[0.16em] hover:bg-white/10 transition-all"
                  >
                    Full Breakdown <FaArrowRight className="text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleLike(featuredProject.id)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-black text-[11px] uppercase tracking-[0.16em] transition-all ${
                      isLiked(featuredProject.id)
                        ? "border-rose-300 bg-rose-500/20 text-rose-100"
                        : "border-white/20 text-white/95 hover:bg-white/10"
                    }`}
                  >
                    <FaHeart className={isLiked(featuredProject.id) ? "fill-current" : ""} />
                    {isLiked(featuredProject.id) ? "Liked" : "Like Product"}
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 md:px-7 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.16em] border transition-all ${
                filter === category
                  ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-500"
                  : "bg-white dark:bg-slate-900/70 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-blue-700 dark:hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onPreview={setActiveProject}
                liked={isLiked(project.id)}
                onToggleLike={handleToggleLike}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight">Need your product presented this clearly?</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I design and build modern experiences that are conversion-focused, technically solid, and ready for production.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://github.com/ikechukwugolden"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-[0.16em] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <FaGithub /> GitHub
            </a>

            <MagneticButton
              as="a"
              href="/#contact"
              data-cursor-label="Contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.16em] shadow-xl shadow-blue-700/30 hover:brightness-110 transition-all"
            >
              Start a Project <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl rounded-[2rem] overflow-hidden bg-white dark:bg-[#081023] border border-slate-300 dark:border-slate-700 shadow-2xl"
            >
              <div className="relative">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-[240px] md:h-[420px] object-cover" />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  data-cursor-label="Close"
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/60 text-white border border-white/25 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-colors"
                  aria-label="Close preview"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">{activeProject.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.16em] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {activeProject.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.16em] bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                      {activeProject.year}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{activeProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-500 dark:text-slate-400 mb-3">Project Breakdown</h4>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <p className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 px-3 py-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300 mb-1">Challenge</span>
                      {activeProject.breakdown.challenge}
                    </p>
                    <p className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 px-3 py-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300 mb-1">Solution</span>
                      {activeProject.breakdown.solution}
                    </p>
                    <p className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 px-3 py-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300 mb-1">My Role</span>
                      {activeProject.breakdown.role}
                    </p>
                    <p className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 px-3 py-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300 mb-1">Outcome</span>
                      {activeProject.breakdown.outcome}
                    </p>
                  </div>

                  <h5 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 dark:text-slate-400 mb-2">Key Highlights</h5>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {activeProject.highlights.map((item) => (
                      <p
                        key={item}
                        className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 px-3 py-3 text-sm text-slate-700 dark:text-slate-200"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tech.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-blue-600 text-white text-center font-black text-[11px] uppercase tracking-[0.16em] hover:bg-blue-500 transition-colors"
                  >
                    Visit Live Project
                  </a>
                  <button
                    type="button"
                    onClick={() => handleToggleLike(activeProject.id)}
                    className={`px-5 py-3 rounded-xl border transition-colors ${
                      isLiked(activeProject.id)
                        ? "bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-300"
                        : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-300 hover:text-rose-500"
                    }`}
                    aria-label={`Like ${activeProject.title}`}
                  >
                    <FaHeart className={isLiked(activeProject.id) ? "fill-current" : ""} />
                  </button>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Project source code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
