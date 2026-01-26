"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 1.8,
        ease: "easeOut",
      });
    }
  }, [inView, value, count]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 text-center">

        {/* TOTAL VIEWS */}
        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-black leading-none
                          text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            <Counter value={1370000000} />+
          </div>
          <p className="mt-4 text-xs sm:text-sm tracking-widest font-semibold text-white/80">
            TOTAL VIEWS
          </p>
        </div>

        {/* BRANDS GROWN */}
        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-black leading-none
                          text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            <Counter value={39} />+
          </div>
          <p className="mt-4 text-xs sm:text-sm tracking-widest font-semibold text-white/80">
            BRANDS GROWN
          </p>
        </div>

        {/* ENGAGEMENT */}
        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-black leading-none
                          text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            <Counter value={3} />.2X
          </div>
          <p className="mt-4 text-xs sm:text-sm tracking-widest font-semibold text-white/80">
            ENGAGEMENT
          </p>
        </div>

      </div>
    </section>
  );
}
