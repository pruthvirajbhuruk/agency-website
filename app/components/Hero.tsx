"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-8">
          <span className="inline-block bg-black text-white px-4 py-2 font-bold text-sm">
            SOCIAL MEDIA MARKETING AGENCY
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            We Build
            <br />
            <span className="text-[var(--pink)]">Internet Brands</span>
          </h1>

          <p className="text-lg max-w-md">
            Short-form content, viral strategy & growth systems for brands
            that want attention — and keep it.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-black text-white font-bold">
              Start Growing
            </button>
            <button className="px-8 py-4 border-2 border-black font-bold">
              See Work
            </button>
          </div>

          <div className="flex gap-6 font-semibold text-sm">
            <span>🔥 100+ Brands</span>
            <span>🎥 5M+ Views</span>
            <span>📈 Real Growth</span>
          </div>
        </div>

        {/* RIGHT – SOCIAL PROOF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          {["/ss1.jpeg", "/ss2.jpeg"].map((src, i) => (
            <div
              key={i}
              className="w-64 border-4 border-black shadow-[8px_8px_0px_black] overflow-hidden"
            >
              <Image
                src={src}
                alt="reel"
                width={300}
                height={600}
                className="block"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
