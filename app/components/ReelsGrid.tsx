"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reels = [
  { src: "/ss1.jpeg", label: "Instagram Reel" },
  { src: "/ss2.jpeg", label: "YouTube Shorts" },
  { src: "/ss1.jpeg", label: "Brand Campaign" },
  { src: "/ss2.jpeg", label: "Viral Hook" },
  { src: "/ss1.jpeg", label: "Creator Content" },
  { src: "/ss2.jpeg", label: "Product Reel" },
];

export default function ReelsGrid() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-16"
        >
          Content That
          <br />
          <span className="text-[var(--pink)]">Stops The Scroll</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {reels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="relative aspect-[9/16] bg-neutral-900
              border-4 border-black overflow-hidden
              shadow-[8px_8px_0px_black]"
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90
                flex items-center justify-center text-black text-xl font-black">
                  ▶
                </div>
              </div>

              {/* LABEL */}
              <div className="absolute bottom-0 left-0 w-full p-3
              bg-gradient-to-t from-black/80 to-transparent text-sm font-bold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
