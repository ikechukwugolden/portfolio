import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaSun,
  FaMoon,
  FaTimes,
  FaBars,
  FaHome,
  FaUserAlt,
  FaCubes,
  FaBriefcase,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  // Check system preference for initial state
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark") || 
           localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Dark Mode Logic
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/", hint: "Main landing page", icon: FaHome },
    { name: "About", path: "/about", hint: "Background and skills", icon: FaUserAlt },
    { name: "Services", path: "/services", hint: "What I offer", icon: FaCubes },
    { name: "Projects", path: "/projects", hint: "Case studies and work", icon: FaBriefcase },
    { name: "Contact", path: "/contact", hint: "Start a conversation", icon: FaEnvelopeOpenText },
  ];

  const whatsappLink = "https://web.whatsapp.com/send?phone=2349045817261&text=Hello%20Victor%2C%20I%20want%20to%20chat%20about%20a%20project.";
  const resumeFallbackLink =
    "mailto:ikechukwuv074@gmail.com?subject=Resume%20Request&body=Hello%20Victor%2C%20please%20share%20your%20latest%20resume.";

  const triggerHaptic = (pattern = 16) => {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(pattern);
    }
  };

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    triggerHaptic(18);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    triggerHaptic(14);
  };

  const handleResumeClick = async (event) => {
    event.preventDefault();

    try {
      const resumeResponse = await fetch("/resume.pdf", { method: "HEAD" });
      if (resumeResponse.ok) {
        window.location.href = "/resume.pdf";
        return;
      }
    } catch {
      // Fall back to email request.
    }

    window.location.href = resumeFallbackLink;
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-full max-w-7xl z-[100]">
      <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl sm:rounded-[2rem] px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between shadow-2xl transition-all duration-500">
        
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-2 min-w-0">
          <div className="w-10 h-10 bg-linear-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform">
            IV
          </div>
          <span className="hidden sm:block text-black dark:text-white text-base lg:text-xl font-black tracking-tighter uppercase italic truncate">
            Ikechukwu Victor<span className="text-purple-500">.</span>
          </span>
          <span className="sm:hidden text-black dark:text-white text-sm font-black uppercase tracking-tight">
            Victor<span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                location.pathname === link.path 
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* DARK MODE TOGGLE */}
          <button
            onClick={handleThemeToggle}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all border border-transparent dark:border-white/10"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaMoon className="text-purple-600" /> : <FaSun className="text-yellow-400" />}
          </button>

          {/* CHAT ME BUTTON */}
          <a
            href="/resume.pdf"
            onClick={handleResumeClick}
            className="hidden lg:flex items-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white px-4 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-slate-200 dark:border-white/10"
          >
            <FaDownload className="text-xs" />
            Resume
          </a>

          <Link
            to="/#contact"
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-blue-600/20"
          >
            <FaEnvelopeOpenText className="text-base" />
            Let&apos;s Work Together
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp className="text-base" />
            Chat
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden w-10 h-10 flex items-center justify-center text-black dark:text-white text-xl rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/35 backdrop-blur-[2px] md:hidden z-[108]"
            />

            <motion.div
              initial={{ opacity: 0, y: -22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 sm:top-24 left-2 right-2 sm:left-4 sm:right-4 bg-white/92 dark:bg-[#0d0f17]/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[1.8rem] sm:rounded-[2.2rem] p-4 sm:p-5 shadow-2xl md:hidden z-[110]"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">Navigation</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Mobile Menu</p>
              </div>

              <nav className="space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.02 * index }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-center justify-between gap-3 p-3 rounded-2xl border transition-all ${
                          isActive
                            ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-black dark:border-white shadow-lg"
                            : "bg-slate-50/90 dark:bg-white/5 text-slate-900 dark:text-white border-slate-200 dark:border-white/10 hover:border-purple-400/40"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isActive
                                ? "bg-white/15 text-white dark:bg-black/10 dark:text-black"
                                : "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-white/10"
                            }`}
                          >
                            <Icon />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-black uppercase tracking-[0.12em]">{link.name}</p>
                            <p
                              className={`text-[10px] uppercase tracking-[0.12em] truncate ${
                                isActive ? "text-white/70 dark:text-black/70" : "text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {link.hint}
                            </p>
                          </div>
                        </div>
                        <FaArrowRight className={`${isActive ? "opacity-90" : "opacity-30 group-hover:opacity-70"} transition-opacity`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <a
                href="/resume.pdf"
                onClick={handleResumeClick}
                className="mt-4 w-full flex justify-center items-center gap-3 bg-slate-900 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-white dark:text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-colors"
              >
                <FaDownload className="text-base" /> Download PDF Resume
              </a>

              <Link
                to="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-colors"
              >
                <FaEnvelopeOpenText className="text-base" /> Let&apos;s Work Together
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex justify-center items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-colors"
              >
                <FaWhatsapp className="text-base" /> Start WhatsApp Chat
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
