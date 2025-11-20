import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverviewSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const midLayerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const mid = midLayerRef.current;

    if (!section || !bg || !mid) return;

    const ctx = gsap.context(() => {
      // --- Background Parallax ---
      gsap.to(bg, {
        scale: 1.15,
        y: -80,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // --- Light Trail Layer Parallax (deeper Z) ---
      gsap.fromTo(
        mid,
        { y: 120, opacity: 0.2 },
        {
          y: -40,
          opacity: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // --- Cards popping out in 3D on scroll ---
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          z: -80,
          rotateX: 20,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Subtle floating effect while scrolling
        gsap.to(card, {
          y: i % 2 === 0 ? -20 : -10,
          rotateX: i % 2 === 0 ? 8 : -6,
          z: 40,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // --- Mouse-driven 3D Tilt ---
  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const mid = midLayerRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(section, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1200,
      ease: "power2.out",
      duration: 0.4
    });

    gsap.to(bg, { x: x * 30, y: y * 30, duration: 0.5 });
    gsap.to(mid, { x: x * 60, y: y * 60, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(sectionRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-32 bg-black text-white overflow-hidden [perspective:1400px]"
    >
      {/* BACKGROUND LAYER */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1508264165352-258a6c44f0ac?q=80&w=2400"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      {/* MID PARALLAX LAYER */}
      <img
        ref={midLayerRef}
        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen will-change-transform"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Project Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-10"
        >
          This football championship stands as more than just a sports
          gathering — it’s engineered as a complete audiovisual experience.
          High-intensity atmospheres, immersive digital layers...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-14"
        >
          Through advanced motion graphics, interactive branding, crowd
          experience design, and seamless digital infrastructure...
        </motion.p>

        {/* 3D DATA CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {[
            { label: "Location", value: "Helsinki Stadium" },
            { label: "Duration", value: "3 Days" },
            { label: "Attendance", value: "5,000+ Fans" },
            { label: "Services Provided", value: "Branding, Web Dev, Motion, On-Site Media" },
            { label: "Year", value: "2025" }
          ].map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg will-change-transform"
            >
              <h3 className="text-sm uppercase tracking-wide text-[#00c8ff] font-semibold mb-2">
                {item.label}
              </h3>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
