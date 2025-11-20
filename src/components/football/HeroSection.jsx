import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    // Smooth fade + slide for content
    gsap.from(content, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });

    // Very lightweight parallax on BG
    gsap.to(bg, {
      y: -80,
      scale: 1.05,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[180vh] flex items-start justify-center pt-40 overflow-hidden bg-black"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400"
          alt="Stadium"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Soft gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-[#00c8ff] mb-4"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wide">
            Futuristic Sports Experience
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
        >
          Championship Football Cup — 2025 Edition
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 mt-6 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          A next-gen event for{" "}
          <span className="text-white font-semibold">12 elite teams</span>,{" "}
          <span className="text-white font-semibold">5,000 fans</span>, and the
          most electrifying atmosphere in modern football.
        </motion.p>
      </div>
    </section>
  );
}
