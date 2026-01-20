"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* BRAND */}
          <div className="text-xl font-black tracking-tight">
            ⚡ SOCIAL LAB
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 font-semibold">
            {["Services", "Work", "Results"].map((item) => (
              <a key={item} className="hover:underline underline-offset-4">
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button className="hidden md:block px-6 py-2 bg-black text-white font-bold">
            Let’s Grow
          </button>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black text-white"
          >
            <div className="h-full flex flex-col justify-center items-center gap-10 text-2xl font-bold">
              {["Services", "Work", "Results"].map((item) => (
                <span key={item}>{item}</span>
              ))}
              <button className="px-8 py-4 bg-white text-black">
                Let’s Grow
              </button>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-3xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
