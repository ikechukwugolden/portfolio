import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

// Helper to fix scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animation Wrapper for smooth page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const App = () => {
  // 🟢 Theme Initialization Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* 🟢 Standardized Wrapper */}
      {/* md:cursor-none hides default cursor for CustomCursor.jsx to take over */}
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 selection:bg-purple-500 selection:text-white md:cursor-none">
        
        <CustomCursor />
        <Header />

        {/* 🟢 Main Content Area */}
        <main className="pt-20 flex-grow flex flex-col"> 
          <AnimatePresence mode="wait">
            <Routes>
              {/* Main Landing Page Stack */}
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Testimonial />
                    <Contact />
                  </PageWrapper>
                }
              />

              {/* Individual Pages (Optional Routing) */}
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              
              {/* 404 Fallback */}
              <Route path="*" element={<Hero />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Floating WhatsApp Action (Global) */}
        <a
          href="https://wa.me/2349045817261"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[99] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481s3.481 5.228 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.987-.508-5.746-1.472l-6.239 1.696zm6.303-4.108l.351.209c1.404.835 3.031 1.276 4.697 1.276 5.178 0 9.388-4.211 9.388-9.388 0-2.508-.977-4.866-2.753-6.641-1.774-1.774-4.132-2.753-6.641-2.753-5.178 0-9.388 4.211-9.388 9.388 0 1.932.589 3.821 1.703 5.432l.23.333-1.01 3.693 3.784-.979z"/>
          </svg>
        </a>
      </div>
    </Router>
  );
};

export default App;