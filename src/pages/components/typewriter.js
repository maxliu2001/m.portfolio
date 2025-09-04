import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"], display: "swap" });

/**
 * Typewriter Component with blinking border caret
 */
export default function Typewriter({
  words,
  typingSpeed = 120,
  deleteSpeed = 50,
  pauseBetween = 1000,
  loop = true,
  className = "",
  showCaret = true,
}) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = words[idx % words.length] ?? "";

    if (phase === "typing") {
      if (display.length < current.length) {
        const t = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), pauseBetween);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (display.length > 0) {
        const t = setTimeout(
          () => setDisplay(current.slice(0, display.length - 1)),
          deleteSpeed
        );
        return () => clearTimeout(t);
      }
      const next = idx + 1;
      setIdx(next % words.length);
      setPhase(loop || next % words.length !== 0 ? "typing" : "pausing");
      return;
    }

    if (loop || idx < words.length - 1) {
      const t = setTimeout(() => setPhase("deleting"), pauseBetween);
      return () => clearTimeout(t);
    }
  }, [words, idx, display, phase, typingSpeed, deleteSpeed, pauseBetween, loop]);

  return (
    <motion.span
      className={className}
      style={{
        fontFamily: "Raleway, sans-serif",
        fontSize: "1.5em",
        display: "inline-block",
        maxWidth: "100%",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        whiteSpace: "normal",
        zIndex: 20, 
      }}
      aria-live="polite"
      transition={
        showCaret
          ? { duration: 10, repeat: Infinity, ease: "linear" }
          : undefined
      }
    >
      {display}
    </motion.span>
  );
}
