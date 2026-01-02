// components/AnimatedParagraph.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
};

export default function AnimatedParagraph({ text }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  // Track scroll position relative to this paragraph
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const letters = text.split("");

  return (
    <p
      ref={ref}
      className="font-display text-[40px] md:text-[42px] lg:text-[44px] leading-[1.35] text-left max-w-6xl"
    >
      {letters.map((char, i) => {
        // Each letter activates slightly after the previous one
        const start = i / letters.length;
        const end = start + 0.1;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#d1d5db", "#6b7280"] // light gray → darker gray
        );

        return (
          <motion.span key={i} style={{ color }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}