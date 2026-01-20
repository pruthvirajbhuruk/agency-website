"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy & Alignment",
    description:
      "We dive deep into your brand, goals and audience to create a clear, data-backed growth plan.",
  },
  {
    number: "02",
    title: "Create & Launch",
    description:
      "Our team produces high-impact content or builds experiences designed to capture attention and convert.",
  },
  {
    number: "03",
    title: "Optimize & Scale",
    description:
      "We track performance, refine the system and scale what’s working to drive consistent growth.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-24"
        >
          How It
          <br />
          <span className="text-[var(--pink)]">Works.</span>
        </motion.h2>

        {/* STEPS */}
        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t-4 border-white/20 pt-10 grid md:grid-cols-3 gap-8 items-start"
            >
              {/* NUMBER */}
              <div className="text-6xl md:text-7xl font-black text-white/20">
                {step.number}
              </div>

              {/* CONTENT */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
