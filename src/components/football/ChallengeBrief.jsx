import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, AlertTriangle, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengeBrief() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;

    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      // Background parallax depth
      gsap.to(bg, {
        scale: 1.15,
        y: -60,
        opacity: 0.6,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Each 3D card scroll float
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Card enters
        gsap.from(card, {
          y: 60,
          opacity: 0,
          rotateX: 10,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });

        // Floating scroll parallax
        gsap.to(card, {
          y: i % 2 === 0 ? -20 : -10,
          rotateX: i % 2 === 0 ? 8 : -6,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Mouse 3D tilt effect
  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(section, {
      rotateY: x * 6,
      rotateX: -y * 6,
      transformPerspective: 1200,
      ease: "power3.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(sectionRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const data = [
    {
      label: "Goals",
      img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      text: "Deliver a thrilling event experience, boost fan participation, elevate brand perception, and create sponsor-friendly visibility.",
    },
    {
      label: "Constraints",
      img: "https://plus.unsplash.com/premium_photo-1661881970542-8447015772e8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      text: "Time limitations, stadium layout restrictions, budget control, and ensuring smooth digital integration across multiple platforms.",
    },
    {
      label: "Expectations",
      img: "https://images.unsplash.com/photo-1641772623206-dc7358509b28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      text: "Build a visually futuristic identity, enhance crowd engagement, and deliver a polished, high-quality event experience.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-40 bg-black text-white overflow-hidden [perspective:1400px]"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-50 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1508264165352-258a6c44f0ac?q=80&w=2400"
          className="w-full h-full object-cover"
          alt="Stadium"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Glow behind heading (subtle) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00c8ff]/10 blur-[140px] rounded-full"></div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 relative"
        >
          The Challenge Brief
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#00c8ff] text-xl md:text-2xl mb-10"
        >
          The goals, constraints, and expectations set by the client.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-20"
        >
          The client’s objective was clear: create a high-impact football event
          capable of energizing the community, elevating team spirit, attracting
          sponsors, and establishing a visually powerful identity online and on-site.
        </motion.p>

        {/* 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-14">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative w-full h-[420px] group perspective-1000 will-change-transform"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-2xl shadow-xl">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden">
                  <img src={item.img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <h3 className="absolute bottom-4 left-4 text-3xl font-bold tracking-wide">
                    {item.label}
                  </h3>

                  {/* Glow behind image */}
                  <div className="absolute -inset-4 bg-[#00c8ff]/10 blur-3xl opacity-0 group-hover:opacity-70 transition-all"></div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-32 border-l-2 border-white/20 pl-10 space-y-14"
        >
          {[
            {
              title: "Initial Discovery Phase",
              text: "Understanding the client’s goals, audience, stadium layout, and limitations.",
            },
            {
              title: "Concept Development",
              text: "Building moodboards, visual directions, and experience concepts.",
            },
            {
              title: "Experience Engineering",
              text: "Developing identity, web presence, and activation systems.",
            },
            {
              title: "Final Execution",
              text: "Launching visuals, media, and integrations across the event.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative pl-6"
            >
              {/* Neon Dot */}
              <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-[#00c8ff] shadow-[0_0_20px_#00c8ff]" />

              <h4 className="text-xl font-bold mb-1">{step.title}</h4>
              <p className="text-gray-300 text-lg">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
