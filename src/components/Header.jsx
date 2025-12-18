import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  const whatsappNumber = "2348012345678"; // Replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-full border border-white/10 dark:border-gray-700 transition-colors">
      <div className="h-16 flex items-center justify-between px-6">

        {/* LOGO */}
        <span className="text-black dark:text-white text-2xl md:text-3xl font-serif tracking-wide cursor-pointer">
          Ikechukwuvictor
        </span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <Link to="/" className="hover:opacity-70 transition">Home</Link>
          <Link to="/about" className="hover:opacity-70 transition">About</Link>
          <Link to="/Services" className="hover:opacity-70 transition">Services</Link>
          <Link to="/Projects" className="hover:opacity-70 transition">Projects</Link>
          <Link to="/contact" className="hover:opacity-70 transition">Contact</Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* CHAT ME BUTTON */}
          <a
            href="https://wa.me/2349045817261"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold shadow-md transition"
          >
            <FaWhatsapp />
            Chat Me
          </a>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-pink-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white dark:bg-black/90 text-white rounded-2xl py-6 flex flex-col items-center gap-5 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* HIRE ME BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold shadow-md transition"
          >
            <FaWhatsapp />
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
