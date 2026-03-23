import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({
  as = "button",
  className = "",
  strength = 0.24,
  radius = 150,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) {
      return undefined;
    }

    const updateMagnet = (event) => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);

      if (distance < radius) {
        rawX.set((event.clientX - centerX) * strength);
        rawY.set((event.clientY - centerY) * strength);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    };

    const resetMagnet = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("mousemove", updateMagnet);
    window.addEventListener("mouseleave", resetMagnet);

    return () => {
      window.removeEventListener("mousemove", updateMagnet);
      window.removeEventListener("mouseleave", resetMagnet);
    };
  }, [radius, rawX, rawY, strength]);

  const MotionTag = motion[as] || motion.button;

  return (
    <MotionTag
      ref={ref}
      style={{ x, y }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
