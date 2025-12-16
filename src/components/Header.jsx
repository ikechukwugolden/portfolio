import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update <html> class when darkMode changes
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/10 dark:border-gray-700 transition-colors">
      <div className="w-[90%] mx-auto h-16 flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
        
          <span className="text-black dark:text-white  text-3xl font-serif tracking-wide ">
            Ikechukwuvictor 
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition">Home</a>
          <a href="About.jsx" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition">About</a>
          <a href="#services" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition">Services</a>
          <a href="#contact" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* CTA BUTTON */}
        <button className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition">
          Get Started
        </button>

        {/* DARK/LIGHT TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-black dark:text-white text-xl md:ml-6"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* MOBILE MENU ICON */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black dark:text-white text-3xl cursor-pointer ml-4"
        >
          {menuOpen ? "=" : "☰"}
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-black/90 text-black dark:text-white flex flex-col items-center gap-4 py-4 shadow-lg md:hidden transition-all">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Home</a>
            <a href="#About.jsx" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 dark:hover:text-gray-300 transition">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Contact</a>
            <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition mt-2">
              Get Started
            </button>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
