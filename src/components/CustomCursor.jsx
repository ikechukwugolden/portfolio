import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 16px to center the 32px (w-8) circle
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-purple-500 pointer-events-none z-[99999] hidden md:flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* The center dot ensures you always know exactly where you are pointing */}
      <div className="w-1 h-1 bg-purple-500 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;