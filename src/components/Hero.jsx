import React from "react";
import { motion } from "framer-motion";
import victor from "../assets/chatone.png";
import heroTechBg from "../assets/heroTechBg.jpg";
import MagneticButton from "./MagneticButton";

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="home"
            className="w-full min-h-screen relative flex items-center justify-center bg-cover bg-center overflow-hidden transition-all duration-500 bg-white dark:bg-[#030712] pt-24 pb-14 sm:pt-28 sm:pb-20"
            style={{ 
                // Light mode: no background image (clean white) 
                // Dark mode: your tech image background
                backgroundImage: `var(--hero-bg)`,
            }}
        >
            {/* Inline Style Logic for Tailwind v4/Standard CSS Variables */}
            <style dangerouslySetInnerHTML={{ __html: `
                :root { --hero-bg: none; }
                .dark { --hero-bg: url(${heroTechBg}); }
            `}} />

            {/* 🟢 OVERLAY: Swaps from a soft studio light to your deep dark linear */}
            <div className="absolute inset-0 transition-opacity duration-500 
                bg-linear-to-br from-purple-50 via-white to-white opacity-100 dark:opacity-0"></div>
            
            <div className="absolute inset-0 transition-opacity duration-500 
                bg-linear-to-br from-[#030712] via-[#030712]/80 to-transparent opacity-0 dark:opacity-100"></div>

            {/* 🟢 Animated Ambient Light (Purple Glow) */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600 rounded-full blur-[120px] z-0" 
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center w-[92%] max-w-7xl gap-10 md:gap-20">
                
                {/* Left Side: Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center text-center md:text-left md:w-3/5 gap-6 md:gap-8"
                >
                    <div className="inline-flex items-center self-center md:self-start gap-2 px-3 py-1 rounded-full 
                        bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] text-gray-600 dark:text-gray-300">
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] md:leading-[0.9] tracking-tighter">
                        CRAFTING <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-500 dark:to-blue-500">
                            DIGITAL SOULS
                        </span>
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                        I am Victor, a Full-Stack Developer specializing in high-performance web experiences. 
                        Turning complex logic into <span className="text-purple-600 dark:text-white italic">effortless beauty.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-5 mt-3 sm:mt-4 w-full sm:w-auto">
                        <MagneticButton
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            data-cursor-label="Contact"
                            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-[0.18em] sm:tracking-widest text-[9px] sm:text-[10px] shadow-2xl text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-purple-500/20"
                        >
                            Hire the architect
                        </MagneticButton>
                        
                        <MagneticButton
                            type="button"
                            onClick={() => scrollToSection("projects")}
                            data-cursor-label="View"
                            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-[0.18em] sm:tracking-widest text-[9px] sm:text-[10px] border border-black/10 text-slate-900 bg-transparent hover:bg-black/5 dark:border-white/10 dark:text-white dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md transition-all"
                        >
                            View Portfolio
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Right Side: Image with Floating Effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="md:w-2/5 flex justify-center md:justify-end relative mt-4 md:mt-0"
                >
                    {/* Background Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[120%] h-[120%] border border-black/5 dark:border-white/5 rounded-full"
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-20 dark:opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src={victor}
                                alt="Victor"
                                className="w-52 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[450px] object-cover rounded-[2rem] border-2 border-black/10 dark:border-white/10 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                        
                        {/* Floating Experience Badge */}
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-black/10 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-2xl"
                        >
                            <p className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-500">2+</p>
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Years Exp.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* 🟢 Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden sm:flex absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-linear-to-b from-purple-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
