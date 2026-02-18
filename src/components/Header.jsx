import { useState, useEffect } from "react";
import { FaWhatsapp, FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";
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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappLink = `https://wa.me/2349045817261`;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[100%] max-w-7xl z-[100]">
      <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2rem] px-6 h-20 flex items-center justify-between shadow-2xl transition-all duration-500">
        
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform">
            IV
          </div>
          <span className="text-black dark:text-white text-xl font-black tracking-tighter uppercase italic">
           Ikechkwu Victor<span className="text-purple-500">.</span>
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
        <div className="flex items-center gap-3">
          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all border border-transparent dark:border-white/10"
          >
            {darkMode ? <FaMoon className="text-purple-600" /> : <FaSun className="text-yellow-400" />}
          </button>

          {/* CHAT ME BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp className="text-base" />
            Chat
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-black dark:text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-0 w-full bg-white dark:bg-[#0d0d0d] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center gap-6 shadow-2xl md:hidden z-[-1]"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white hover:text-purple-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-3 bg-green-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest"
            >
              <FaWhatsapp className="text-xl" /> Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;