"use client";

import { motion } from "framer-motion";

const results = [
  {
    brand: "E-commerce Brand",
    before: "12K",
    after: "410K",
    label: "Instagram Reach",
    growth: 90,
  },
  {
    brand: "Personal Creator",
    before: "3.5K",
    after: "98K",
    label: "Followers",
    growth: 85,
  },
  {
    brand: "Local Business",
    before: "8K",
    after: "1.2M",
    label: "Video Views",
    growth: 95,
  },
];

export default function Results() {
  return (
    <section className="py-32 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-20"
        >
          Real Results.
          <br />
          <span className="text-[var(--pink)]">Not Promises.</span>
        </motion.h2>

        {/* RESULTS LIST */}
        <div className="space-y-16">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t-4 border-black pt-8"
            >
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-black">{item.brand}</h3>
                <span className="text-sm font-bold uppercase tracking-wider">
                  {item.label}
                </span>
              </div>

              {/* BEFORE / AFTER */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                <div>
                  <p className="text-sm font-semibold">Before</p>
                  <p className="text-3xl font-black">{item.before}</p>
                </div>

                <div className="hidden md:block text-center text-3xl font-black">
                  →
                </div>

                <div>
                  <p className="text-sm font-semibold">After</p>
                  <p className="text-3xl font-black text-[var(--pink)]">
                    {item.after}
                  </p>
                </div>

                {/* GROWTH BAR */}
                <div className="md:col-span-4">
                  <div className="h-3 bg-black/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.growth}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-3 bg-black"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
