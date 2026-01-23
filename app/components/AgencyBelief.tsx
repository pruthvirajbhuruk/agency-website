"use client";

import { motion } from "framer-motion";

export default function AgencyBelief() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-16"
        >
          Our
          <br />
          <span className="text-[var(--pink)]">Belief.</span>
        </motion.h2>

        {/* MANIFESTO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl font-semibold leading-relaxed"
        >
          <p>
            We don’t chase trends.
            <br />
            We build systems that compound.
          </p>

          
        </motion.div>

      </div>
    </section>
  );
}
