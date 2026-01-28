"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Video Editing & Content Creation",
    description:
      "Scroll-stopping reels, posts & short-form content designed to grab attention, boost engagement and build brands people remember.",
    items: ["Instagram Reels", "Short-Form Videos", "Creative Posts"],
  },
  {
    title: "Website Development",
    description:
      "High-performance, visually striking websites built to convert visitors into leads, clients and customers — 24/7.",
    items: ["Landing Pages", "Agency Websites", "Fast & SEO-Ready"],
  },
  {
    title: "Video Clipping",
    description:
      "We transform long-form videos into high-retention clips optimized for reach, consistency and growth.",
    items: ["Podcast Clips", "YouTube Shorts", "Daily Content System"],
  },
  {
    title: "Google My Business Optimization",
    description:
      "We Increase your google rankings by optimizaing your google profile",
    items: ["Reviews", "Photos", "Keywords","Blogs"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-20"
        >
          What We
          <br />
          <span className="text-[var(--pink)]">Do Best.</span>
        </motion.h2>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-4 border-black p-10 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-black mb-4">
                  {service.title}
                </h3>

                <p className="text-sm mb-6 opacity-80">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm font-semibold">
                  {service.items.map((item, index) => (
                    <li key={index}>→ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 text-4xl font-black opacity-20 group-hover:opacity-60 transition">
                →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
