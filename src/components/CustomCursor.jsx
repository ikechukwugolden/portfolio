import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="relative -translate-x-[15%] -translate-y-[15%]">
        {/* Pointer Arrow SVG */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="fill-purple-600 stroke-white stroke-[1.5px] drop-shadow-lg"
        >
          <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default CustomCursor;