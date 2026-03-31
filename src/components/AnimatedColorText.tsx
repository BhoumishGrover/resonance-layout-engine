// components/AnimatedColorText.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  whiteText: string;
  blueText: string;
  className?: string;
};

/**
 * Renders a two-part paragraph where the first part is static white and the
 * second part animates word-by-word from sky-400 blue to white on mount.
 */
export default function AnimatedColorText({ whiteText, blueText, className = "" }: Props) {
  const words = blueText.split(" ");

  return (
    <p
      className={`font-display text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[1200px] font-bold ${className}`}
      style={{ 
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'auto'
      }}
    >
      <span className="text-white">{whiteText} </span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ color: "#38bdf8" }}
          animate={{ color: "#ffffff" }}
          transition={{
            duration: 0.5,
            delay: 0.6 + i * 0.06,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ 
            willChange: 'color'
          }}
        >
          {word + " "}
        </motion.span>
      ))}
    </p>
  );
}
