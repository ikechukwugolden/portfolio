import victor from "../assets/victor-5.jpeg";
import heroTechBg from "../assets/heroTechBg.jpg"; // <-- new modern background

const Hero = () => {
    return (
        <section
            className="w-full h-[90vh] relative flex items-center justify-center bg-cover bg-center transition-colors duration-500"
            style={{ backgroundImage: `url(${heroTechBg})` }}
        >
            <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-transparent"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center w-[90%] max-w-6xl gap-12 md:gap-20">

                <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 gap-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white dark:text-gray-100 drop-shadow-xl leading-tight">
                        Build Modern{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
                            Web Experiences
                        </span>
                    </h1>
                    <p className="text-white/90 dark:text-gray-300 text-lg md:text-xl max-w-md drop-shadow-md">
                        Create stunning interfaces with React, Tailwind CSS, and effortless dark/light mode support. Perfect for portfolios, startups, and SaaS products.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
                        <button className="px-6 py-3 rounded-lg font-semibold shadow-lg text-white bg-purple-500 hover:bg-purple-600 transition transform hover:scale-105">
                            Hire me
                        </button>
                        <button className="px-6 py-3 rounded-lg font-semibold shadow-lg border border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition transform hover:scale-105">
                            View Projects
                        </button>
                    </div>
                </div>


                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={victor}
                        alt="logo"
                        className="hidden md:block w-64 h-auto md:w-80 animate-bounce-slow drop-shadow-2xl rounded-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
