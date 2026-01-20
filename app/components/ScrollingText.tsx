"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const rows = [
  "WE CREATE VIRAL CONTENT • SOCIAL MEDIA • REELS • SHORTS •",
  "ATTENTION IS THE CURRENCY • WE HELP YOU WIN •",
  "GROWTH • VIEWS • ENGAGEMENT • INTERNET BRANDS •",
];

export default function ScrollingText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-black border-y-4 border-black"
    >
      {rows.map((text, index) => {
        const x = useTransform(
          scrollYProgress,
          [0, 1],
          index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"]
        );

        const color = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          ["#ffffff", "#ff3d81", "#ffd60a"]
        );

        return (
          <motion.div
            key={index}
            style={{ x, color }}
            className="whitespace-nowrap flex py-6"
          >
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="text-5xl md:text-7xl font-black mx-8"
              >
                {text}
              </span>
            ))}
          </motion.div>
        );
      })}
    </section>
  );
}
