"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TIMES = [
  "11:00 AM","12:00 PM","1:00 PM","2:00 PM",
  "3:00 PM","4:00 PM","5:00 PM","6:00 PM",
  "7:00 PM","8:00 PM"
];

export default function CTASection() {
  const today = new Date();
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + 4, 1);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const monthLabel = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const isPastDay = (date: Date) =>
    date < new Date(today.setHours(0, 0, 0, 0));

  const isTimeDisabled = (time: string) => {
    if (!selectedDate) return false;
    const now = new Date();
    const [h, , mer] = time.split(/[: ]/);
    let hour = parseInt(h);
    if (mer === "PM" && hour !== 12) hour += 12;
    if (mer === "AM" && hour === 12) hour = 0;

    return (
      selectedDate.toDateString() === now.toDateString() &&
      hour <= now.getHours()
    );
  };

  const handleBooking = () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !/^[a-zA-Z ]+$/.test(name) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      alert("Please enter valid details.");
      return;
    }

    const msg = `Hi, I’m ${name}. I want to book a free strategy call on ${selectedDate.toDateString()} at ${selectedTime}.`;
    window.open(
      `https://wa.me/918482907927?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSuccess(true);
  };

  return (
    <section id="contact" className="py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black">
            BOOK A FREE <span className="text-[var(--pink)]">STRATEGY CALL</span>
          </h2>
          <p className="mt-4 text-white/70">
            30 minutes · No pressure · Clear growth plan
          </p>
        </div>

        {!success ? (
          <div className="grid md:grid-cols-2 gap-12">

            {/* CALENDAR */}
            <div className="bg-white/5 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                    )
                  }
                  disabled={currentMonth <= new Date(today.getFullYear(), today.getMonth(), 1)}
                  className="opacity-60 disabled:opacity-20"
                >
                  ←
                </button>
                <div className="font-bold">{monthLabel}</div>
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                    )
                  }
                  disabled={currentMonth >= maxMonth}
                  className="opacity-60 disabled:opacity-20"
                >
                  →
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[...Array(daysInMonth)].map((_, i) => {
                  const date = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    i + 1
                  );
                  const selected =
                    selectedDate?.toDateString() === date.toDateString();

                  return (
                    <button
                      key={i}
                      disabled={isPastDay(date)}
                      onClick={() => setSelectedDate(date)}
                      className={`h-12 rounded-full transition ${
                        selected
                          ? "bg-[var(--pink)] text-black font-bold scale-110"
                          : "bg-white/10 hover:bg-white/20"
                      } disabled:opacity-30`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIME + FORM */}
            <div className="bg-white/5 rounded-3xl p-6 backdrop-blur-xl flex flex-col gap-6">
              {selectedDate && (
                <>
                  <div className="flex flex-wrap gap-3">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        disabled={isTimeDisabled(t)}
                        onClick={() => setSelectedTime(t)}
                        className={`px-4 py-2 rounded-full transition ${
                          selectedTime === t
                            ? "bg-[var(--pink)] text-black font-bold"
                            : "bg-white/10 hover:bg-white/20"
                        } disabled:opacity-30`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <div className="flex flex-col gap-4 mt-4">
                      <input
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-3 rounded bg-white text-black"
                      />
                      <input
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-3 rounded bg-white text-black"
                      />
                      <button
                        onClick={handleBooking}
                        className="mt-2 px-6 py-4 rounded-full bg-[var(--pink)] text-black font-black hover:scale-105 transition"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl font-bold text-green-400">
            ✅ Thanks! We’ll get back to you shortly.
          </div>
        )}
      </div>
    </section>
  );
}
