import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Star, Zap, Users, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventHighlights() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    // -----------------------------
    //  BACKGROUND PARALLAX DRIFT
    // -----------------------------
    const bg = section.querySelector(".bg-img");
    gsap.to(bg, {
      scale: 1.18,
      y: -150,
      opacity: 0.75,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    // -----------------------------
    //  3D CARD ENTRANCE & PARALLAX
    // -----------------------------
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 120,
          rotateY: index % 2 === 0 ? -18 : 18,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

      // subtle floating while scrolling
      gsap.to(card, {
        y: -20,
        rotateX: index % 2 === 0 ? 6 : -4,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // -----------------------------
    // TIMELINE PARALLAX + REVEAL
    // -----------------------------
    const tl = timelineRef.current;
    gsap.fromTo(
      tl,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tl,
          start: "top 85%",
        },
      }
    );

    // -----------------------------
    //  3D MOUSE CAMERA TILT
    // -----------------------------
    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const posX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const posY = -((e.clientY - rect.top) / rect.height - 0.5) * 10;

      gsap.to(section, {
        rotateY: posX,
        rotateX: posY,
        transformPerspective: 1400,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(section, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out",
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
      className="relative w-full py-40 bg-black text-white overflow-hidden [perspective:1600px]"
    >
      {/* BG Visual */}
      <div className="absolute inset-0 z-0 opacity-55">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023"
          alt="Event Highlights Stadium"
          className="w-full h-full object-cover bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Key Moments & Achievements
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-24"
        >
          A snapshot of standout milestones that defined the event’s success.
        </motion.p>

        {/* HIGHLIGHTS GRID */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: "Fully booked within 48 hours",
                desc: "A surge of early registrations filled all seats instantly.",
                img: "https://images.unsplash.com/photo-1760046997065-25e4d6352bc8?q=80&w=870",
              },
              {
                title: "20+ sponsors on board",
                desc: "Top-tier brands joined to elevate the event.",
                img: "https://plus.unsplash.com/premium_photo-1683134393447-ea29c07775b2?q=80&w=870",
              },
              {
                title: "5000+ attendees",
                desc: "One of the largest and most energetic turnouts ever.",
                img: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-full h-[480px] perspective-1000"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180 hover:scale-[1.04] hover:shadow-[0_0_55px_#00c8ff90] rounded-3xl shadow-2xl">
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold w-4/5">
                      {item.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl flex flex-col justify-center text-left">
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div ref={timelineRef} className="mt-32 border-l-2 border-white/20 pl-10 space-y-14 max-w-4xl mx-auto">
            {[
              {
                title: "Pre-event Preparation",
                text: "Core planning, sponsor coordination, and venue setup logistics.",
              },
              {
                title: "Marketing & Hype Launch",
                text: "Audience engagement with teasers, visuals, and campaigns.",
              },
              {
                title: "On-ground Setup",
                text: "Media, lighting rigs, signage, crowd routes, and technical setup.",
              },
              {
                title: "Live Execution",
                text: "Synchronized operational teams delivered flawless matchday action.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative pl-6"
              >
                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-[#00c8ff] shadow-lg" />
                <h4 className="text-2xl font-bold mb-1">{step.title}</h4>
                <p className="text-gray-300 text-lg">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
