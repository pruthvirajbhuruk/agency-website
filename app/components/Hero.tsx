"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  return (
    <section className="pt-24 md:pt-36 pb-20 md:pb-28 bg-[#f2f2f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* LEFT */}
        <div className="space-y-8 md:space-y-10 relative z-10 text-center md:text-left">

          {/* TAG */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-black text-white px-4 py-2 font-bold text-xs sm:text-sm"
          >
            SOCIAL MEDIA MARKETING AGENCY
          </motion.span>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight"
          >
            We Build
            <br />
            <span className="relative inline-block text-[var(--pink)]">
              Internet Brands
              <span className="absolute left-0 -bottom-1 md:-bottom-2 h-[4px] md:h-[6px] w-full bg-black" />
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg max-w-md mx-auto md:mx-0 text-black/80"
          >
            Short-form content, viral strategy & growth systems for brands
            that want attention — and keep it.
          </motion.p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <motion.button
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return; // disable tilt on mobile
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              style={{ rotateX, rotateY }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white font-black rounded-full text-center"
            >
              <a href="#contact">Start Growing →</a>
            </motion.button>

            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-black font-bold rounded-full hover:bg-black hover:text-white transition text-center">
              <a href="#work">See Work</a>
            </button>
          </div>

          
        </div>

        {/* RIGHT – SOCIAL PROOF */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center relative"
        >
          {["/ss1.jpeg", "/ss2.jpeg"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotate: i === 0 ? -2 : 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-64 mx-auto border-4 border-black shadow-[8px_8px_0px_black] bg-white"
            >
              <Image
                src={src}
                alt="reel"
                width={300}
                height={600}
                className="block w-full h-auto"
              />
              <div className="p-3 text-sm font-bold text-center">
                {i === 0 ? "13.5M Views" : "26.9M Views"}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
