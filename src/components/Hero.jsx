import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import victor from "../assets/chatone.png";
import MagneticButton from "./MagneticButton";

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate(`/#${sectionId}`);
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        navigate(`/#${sectionId}`);
    };

    return (
        <section
            id="home"
            className="w-full min-h-screen relative flex items-center justify-center bg-white dark:bg-gray-900 pt-24 pb-14 sm:pt-28 sm:pb-20"
        >
            <div className="relative z-10 flex flex-col md:flex-row items-center w-[92%] max-w-7xl gap-10 md:gap-20">

                {/* Left Side: Content */}
                <div className="flex flex-col justify-center text-center md:text-left md:w-3/5 gap-6 md:gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center self-center md:self-start gap-2 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1]"
                    >
                        <span>CRAFTING</span><br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">DIGITAL SOULS</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
                    >
                        I am Victor, a Frontend Developer and React specialist based in Aba, Nigeria. Turning complex product logic into fast, accessible interfaces.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
                    >
                        <motion.button
                            onClick={() => goToSection("contact")}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.16em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-600/30 transition-all"
                        >
                            Let's Work Together
                        </motion.button>

                        <motion.button
                            onClick={() => goToSection("projects")}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.16em] border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:w-2/5 flex justify-center md:justify-end relative mt-8 md:mt-0"
                >
                    <div className="relative group">
                        {/* Available Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 dark:border-purple-500/50 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg"
                        >
                            <p className="text-center">
                                <span className="text-xs font-black uppercase tracking-wider block mb-1">AVAILABLE FOR</span>
                                <span className="text-lg font-black tracking-tight">Full-Stack Roles</span>
                            </p>
                        </motion.div>

                        <img
                            src={victor}
                            alt="Victor - Frontend Developer"
                            className="w-72 h-96 md:w-96 md:h-[550px] object-cover rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 transition-transform group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
