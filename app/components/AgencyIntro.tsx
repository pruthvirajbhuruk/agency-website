"use client";

import { motion } from "framer-motion";

const icons = [
  { emoji: "📱", color: "bg-pink-500" },
  { emoji: "🎬", color: "bg-purple-500" },
  { emoji: "🚀", color: "bg-indigo-500" },
  { emoji: "📊", color: "bg-blue-500" },
  { emoji: "🔥", color: "bg-rose-500" },
  { emoji: "💡", color: "bg-yellow-400" },
];

export default function AgencyIntro() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20
        rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Animated icons row */}
        <div className="flex justify-center items-center gap-4 mb-10 flex-wrap">
          {icons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.15, rotate: 6 }}
              className={`w-14 h-14 rounded-full ${item.color}
              flex items-center justify-center text-2xl
              shadow-lg cursor-pointer`}
            >
              {item.emoji}
            </motion.div>
          ))}
        </div>

        

  

        
      </div>
    </section>
  );
}
