"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              SOCIAL<span className="text-[var(--pink)]">LAB</span>
            </h3>
            <p className="text-white/70 max-w-sm">
              Building internet brands through content, systems and
              long-term growth.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-black mb-4">Explore</h4>
            <ul className="space-y-3 text-white/70">
             <a href="#services"> <li className="hover:text-white cursor-pointer">Services</li></a>
              <a href="#work"><li className="hover:text-white cursor-pointer">Work</li></a>
              <a href="#results"><li className="hover:text-white cursor-pointer">Results</li></a>
              
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-black mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-white/70">
                            <li className="hover:text-white cursor-pointer">
                <a href="https://wa.me/918482907927?">Contact</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between gap-4">
          <span>© 2026 Social Lab. All rights reserved.</span>
          <span>Designed & built by Social Lab</span>
        </div>

      </div>
    </footer>
  );
}
