"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
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
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">

        <div>
          <div className="text-6xl md:text-7xl font-black">
            <Counter value={1370000000} />+
          </div>
          <p className="mt-4 text-sm tracking-widest font-semibold">
            TOTAL VIEWS
          </p>
        </div>

        <div>
          <div className="text-6xl md:text-7xl font-black">
            <Counter value={39} />+
          </div>
          <p className="mt-4 text-sm tracking-widest font-semibold">
            BRANDS GROWN
          </p>
        </div>

        <div>
          <div className="text-6xl md:text-7xl font-black">
            <Counter value={3} />.2X
          </div>
          <p className="mt-4 text-sm tracking-widest font-semibold">
            ENGAGEMENT
          </p>
        </div>

      </div>
    </section>
  );
}
