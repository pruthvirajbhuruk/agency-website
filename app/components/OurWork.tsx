"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const reels = [
  {
    src: "/video1.mp4",
    views: "1.2M",
    engagement: "8.4%",
    growth: "+32%",
  },
  {
    src: "/video2.mp4",
    views: "860K",
    engagement: "6.9%",
    growth: "+21%",
  },
  {
    src: "/video3.mp4",
    views: "2.4M",
    engagement: "11.1%",
    growth: "+54%",
  },
];

const posts = [
  { src: "/poster1.jpeg" },
  
  { src: "/bodyoil.png" },
  { src: "/Man.png" },
  { src: "/Shoes.png" },
  { src: "/Burger.png" },
];

export default function OurWork() {
  const [activeReel, setActiveReel] = useState<string | null>(null);

  return (
    <>
      <section id="work" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-black mb-24"
          >
            Our
            <span className="block text-pink-500">Work</span>
          </motion.h2>

          {/* REELS */}
          <div className="mb-28">
            <h3 className="text-xl font-bold mb-10 uppercase tracking-wide">
              Reels
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {reels.map((reel, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveReel(reel.src)}
                  className="relative aspect-[9/16] bg-black cursor-pointer
                  overflow-hidden shadow-2xl"
                >
                  <video
                    src={reel.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* METRICS OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>👀 {reel.views}</span>
                      <span>❤️ {reel.engagement}</span>
                      <span>📈 {reel.growth}</span>
                    </div>
                  </div>

                  {/* PLAY ICON */}
                  <div className="absolute top-5 right-5 text-white text-lg font-bold">
                    ▶
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* POSTS */}
          <div>
            <h3 className="text-xl font-bold mb-10 uppercase tracking-wide">
              Posts
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square overflow-hidden bg-neutral-200"
                >
                  <Image
                    src={post.src}
                    alt="Post"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FULLSCREEN REEL MODAL */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999]
            bg-black flex items-center justify-center"
          >
            <motion.video
              src={activeReel}
              autoPlay
              controls
              className="h-full max-h-[90vh] aspect-[9/16]"
            />

            {/* CLOSE */}
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
