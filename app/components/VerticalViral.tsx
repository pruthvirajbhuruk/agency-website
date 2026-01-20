"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VerticalViral() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.15, 0.25, 0.15]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="pointer-events-none fixed top-1/2 -translate-y-1/2
      left-4 md:left-10 z-10"
    >
      <div className="text-[80px] md:text-[120px] font-black leading-none
      text-black uppercase select-none">
        V<br />I<br />R<br />A<br />L
      </div>
    </motion.div>
  );
}
