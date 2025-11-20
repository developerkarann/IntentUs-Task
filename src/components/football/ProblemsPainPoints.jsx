import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemsPainPoints() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    // ---------- IMAGE 3D STACK PARALLAX ----------
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { y: 80, rotateY: index % 2 === 0 ? -20 : 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
        }
      );

      // Floating/parallax effect while scrolling
      gsap.to(img, {
        y: index % 2 === 0 ? -20 : -12,
        rotateX: index % 2 === 0 ? 6 : -4,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // ---------- 3D CARDS ANIMATION ----------
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          rotateY: -15,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
          duration: 1.2,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

      // Float while scrolling
      gsap.to(card, {
        y: -20,
        rotateX: 8,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // ---------- SECTION MOUSE-DEPENDENT 3D TILT ----------
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const rect = section.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 6;
      const rotateX = -((y - centerY) / centerY) * 6;

      gsap.to(section, {
        rotateY,
        rotateX,
        transformPerspective: 1400,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    const onMouseLeave = () => {
      gsap.to(section, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
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
      className="relative w-full py-40 bg-black text-white overflow-hidden [perspective:1400px]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1502877828070-33c16dd8d3a5?q=80&w=2400"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HOLOGRAM GLOW */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#00c8ff]/20 blur-[150px] rounded-full"
        />

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Obstacles on the Field
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-3xl text-lg md:text-xl leading-relaxed mb-20"
        >
          Logistical roadblocks, creative challenges, tight deadlines, and budget
          boundaries shaped the project’s workflow.
        </motion.p>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT 3D IMAGE STACK */}
          <div className="[perspective:1500px] space-y-12">
            {[
              "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023",
              "https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?q=80&w=870",
              "https://images.unsplash.com/photo-1600250395178-40fe752e5189?q=80&w=1031",
            ].map((src, i) => (
              <div
                key={i}
                ref={(el) => (imagesRef.current[i] = el)}
                className="relative w-full h-72 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl [transform-style:preserve-3d]"
              >
                <img src={src} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              </div>
            ))}
          </div>

          {/* RIGHT 3D CARDS */}
          <div className="space-y-10 [perspective:1400px]">
            {[
              {
                title: "Logistical Issues",
                Icon: AlertTriangle,
                iconColor: "text-[#ff5e5e]",
                text: "Managing schedules, stadium access, and equipment logistics required constant coordination.",
              },
              {
                title: "Budget Constraints",
                Icon: DollarSign,
                iconColor: "text-[#00ffb3]",
                text: "High-quality output with limited budget required creativity and workflow optimization.",
              },
              {
                title: "Time Pressure",
                Icon: Clock,
                iconColor: "text-[#00c8ff]",
                text: "Fast-paced execution needed accuracy without sacrificing design quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="pp-card relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl [transform-style:preserve-3d] hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <item.Icon className={`${item.iconColor} w-8 h-8`} />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>

                <p className="text-gray-300 text-lg">{item.text}</p>

                {/* Glow */}
                <div className="absolute right-6 top-4 w-20 h-20 rounded-full bg-[#00c8ff]/20 blur-2xl" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
