import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  const [cursorLabel, setCursorLabel] = useState("");
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const labelRef = useRef("");
  const interactiveRef = useRef(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) {
      return undefined;
    }

    const syncCursorMode = (nextLabel, nextInteractive) => {
      if (nextLabel !== labelRef.current) {
        labelRef.current = nextLabel;
        setCursorLabel(nextLabel);
      }

      if (nextInteractive !== interactiveRef.current) {
        interactiveRef.current = nextInteractive;
        setIsInteractive(nextInteractive);
      }
    };

    const moveCursor = (event) => {
      setIsVisible(true);
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const labelledTarget = target?.closest?.("[data-cursor-label]");

      if (labelledTarget) {
        const nextLabel = labelledTarget.getAttribute("data-cursor-label") || "";
        syncCursorMode(nextLabel, true);
        return;
      }

      const clickableTarget = target?.closest?.("a, button, input, textarea, [role='button']");
      syncCursorMode("", Boolean(clickableTarget));
    };

    const hideCursor = () => {
      setIsVisible(false);
      syncCursorMode("", false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
      style={{ x: cursorX, y: cursorY }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: cursorLabel ? 1.55 : isInteractive ? 1.14 : 1,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className={`flex items-center justify-center rounded-full border backdrop-blur-md ${
            cursorLabel
              ? "w-16 h-16 bg-purple-600/85 border-purple-300/50 text-white"
              : "w-8 h-8 bg-white/25 border-purple-300/40"
          }`}
        >
          {cursorLabel ? (
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">{cursorLabel}</span>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`drop-shadow-lg ${isInteractive ? "fill-purple-500 stroke-white" : "fill-purple-600 stroke-white"}`}
            >
              <path strokeWidth="1.5" d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
            </svg>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomCursor;
