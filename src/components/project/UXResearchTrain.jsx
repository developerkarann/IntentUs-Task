import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// A futuristic animated UX research process timeline inspired by the user's image
// All styling handled with Tailwind + Framer Motion

export default function UXResearchTrain() {
  const steps = [
    "Research Objective",
    "User Research",
    "User Personas",
    "Pain Points",
    "Hypothesis",
    "User Research Report",
    "Revise Hypothesis",
    "Explore",
    "Feedback",
    "New Ideas",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white p-10">
      <div className="relative w-full max-w-6xl">
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400/30 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Path dots */}
        <div className="relative flex justify-between items-center w-full">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <motion.div
                className={`w-4 h-4 rounded-full ${
                  i <= activeIndex ? "bg-yellow-400" : "bg-gray-600"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: i <= activeIndex ? 1 : 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              />
              <motion.span
                className="text-xs mt-2 text-center w-24"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: i === activeIndex ? 1 : 0.4, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {step}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Train */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: 0 }}
          animate={{ x: `${(activeIndex / (steps.length - 1)) * 100}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          <motion.div
            className="w-12 h-12 bg-yellow-400 rounded-full shadow-xl shadow-yellow-500/50 flex items-center justify-center text-black font-bold"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            🚄
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
