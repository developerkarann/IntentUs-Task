import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Map, Sparkles, Video, Flag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StrategySolution() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    // 👉 CINEMATIC BACKGROUND DRIFT
    gsap.to(section.querySelector("img.bg-img"), {
      scale: 1.15,
      y: -120,
      opacity: 0.7,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // 👉 EACH VISUAL BLOCK: 3D SLIDE + SCROLL PARALLAX
    blocksRef.current.forEach((block, index) => {
      const img = block.querySelector(".strategy-img");
      const content = block.querySelector(".strategy-content");

      // IMAGE MOVEMENT
      gsap.fromTo(
        img,
        {
          opacity: 0,
          y: 120,
          rotateY: index % 2 === 0 ? -18 : 18,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
        }
      );

      // IMAGE PARALLAX FLOAT
      gsap.to(img, {
        y: -30,
        rotateX: index % 2 === 0 ? 5 : -5,
        scrollTrigger: {
          trigger: block,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // CONTENT (TEXT) SLIDE
      gsap.fromTo(
        content,
        { opacity: 0, x: index % 2 === 0 ? 80 : -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
        }
      );
    });

    // 👉 SECTION WIDE 3D MOUSE TILT
    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;

      gsap.to(section, {
        rotateY: x,
        rotateX: y,
        transformPerspective: 1500,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    const onMouseLeave = () => {
      gsap.to(section, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-40 bg-black text-white overflow-hidden [perspective:1800px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-55 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400"
          className="w-full h-full object-cover bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Playbook for Success
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-[#00c8ff] text-xl md:text-2xl mb-14"
        >
          How our team approached planning, creativity, logistics, and execution.
        </motion.p>

        {/* INTRO PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-28"
        >
          Creating a next-gen football event meant crafting a strategy that balanced
          creativity, crowd engagement, and operational precision. Our approach
          blended cinematic visuals, technology-driven workflows, and streamlined
          coordination to deliver an unforgettable, immersive atmosphere.
        </motion.p>

        {/* VISUAL STRATEGY BLOCKS */}
        <div className="space-y-40">
          {[
            {
              title: "Concept Development",
              Icon: Lightbulb,
              color: "text-[#00c8ff]",
              img: "https://images.unsplash.com/photo-1629217855633-79a6925d6c47?q=80&w=870",
            },
            {
              title: "Logistics Mapping",
              Icon: Map,
              color: "text-[#00ff9d]",
              img: "https://images.unsplash.com/photo-1695954771698-0e25f158f09c?q=80&w=870",
            },
            {
              title: "Experience Design",
              Icon: Sparkles,
              color: "text-[#ffd45e]",
              img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=676",
            },
            {
              title: "Media Production",
              Icon: Video,
              color: "text-[#00c8ff]",
              img: "https://images.unsplash.com/photo-1649771544464-03bedb456a4f?q=80&w=870",
            },
            {
              title: "Event Day Execution",
              Icon: Flag,
              color: "text-[#ff5964]",
              img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400",
            },
          ].map((step, i) => (
            <div
              key={i}
              ref={(el) => (blocksRef.current[i] = el)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="strategy-img relative w-full h-[480px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={step.img}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="strategy-content">
                <div className="flex items-center gap-3 mb-4">
                  <step.Icon className={`${step.color} w-8 h-8`} />
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.title === "Concept Development"
                    ? "We crafted the core creative direction — immersive visuals, dynamic motion language, and stadium-wide atmosphere direction."
                    : step.title === "Logistics Mapping"
                    ? "We mapped crowd flow, match timing, and operational zones to create a seamless stadium experience."
                    : step.title === "Experience Design"
                    ? "A full sensory entertainment journey engineered through visuals, motion, and crowd interaction."
                    : step.title === "Media Production"
                    ? "Motion graphics, highlight videos, and sponsor reels formed a cohesive visual story."
                    : "Live coordination, media deployment, and audience engagement merged to deliver a high-energy matchday."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
