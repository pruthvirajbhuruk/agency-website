"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How fast can I expect results?",
    answer:
      "It depends on your starting point, consistency and volume. Some clients see traction within weeks, while others compound results over months. We focus on sustainable growth, not short-term spikes.",
  },
  {
    question: "Do you guarantee growth or virality?",
    answer:
      "No agency can ethically guarantee virality. What we do guarantee is a proven system, high-quality execution and constant optimization based on real performance data.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing is customized based on your goals, content volume, platforms and scope of work. After a quick conversation, we’ll recommend the best plan for your growth stage.",
  },
  {
    question: "What platforms do you work on?",
    answer:
      "We primarily work with Instagram, YouTube Shorts and other short-form platforms. Website projects are built for speed, performance and conversion across all devices.",
  },
  {
    question: "Do you work with small brands or creators?",
    answer:
      "Yes — as long as you’re serious about growth and consistency. We care more about mindset and commitment than current follower count.",
  },
  {
    question: "Is there a contract or long-term lock-in?",
    answer:
      "No long-term contracts. We work on simple monthly agreements. Stay because you see value, not because you’re locked in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-20"
        >
          Questions.
          <br />
          <span className="text-[var(--pink)]">Answered.</span>
        </motion.h2>

        {/* FAQ LIST */}
        <div className="divide-y-4 divide-black">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-xl md:text-2xl font-black">
                  {faq.question}
                </span>
                <span className="text-3xl font-black">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-black/70 max-w-3xl"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
