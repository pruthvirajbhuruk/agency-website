"use client";

import { motion } from "framer-motion";

export default function WhoItsFor() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-20"
        >
          Who We
          <br />
          <span className="text-[var(--pink)]">Work With.</span>
        </motion.h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-4 border-black p-10"
          >
            <h3 className="text-2xl font-black mb-6">
              You’re a Great Fit If
            </h3>

            <ul className="space-y-4 font-semibold">
              <li>→ You want consistent, long-term growth</li>
              <li>→ You care about quality & brand image</li>
              <li>→ You’re serious about content & systems</li>
              <li>→ You’re ready to invest in real results</li>
            </ul>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-4 border-black p-10 bg-black text-white"
          >
            <h3 className="text-2xl font-black mb-6">
              Probably Not For You If
            </h3>

            <ul className="space-y-4 font-semibold text-white/80">
              <li>→ You want cheap, one-off work</li>
              <li>→ You expect overnight virality</li>
              <li>→ You don’t value strategy or process</li>
              <li>→ You disappear after onboarding 🙂</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
