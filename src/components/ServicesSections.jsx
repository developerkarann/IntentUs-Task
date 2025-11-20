import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const tabs = [
    {
      id: "strategy",
      label: "Event Strategy & Concepts",
      image:
        "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "We architect high-impact event concepts build for scale, atmosphere, and unforgettable fan engagement.",
      points: [
        "End-to-end event blueprinting",
        "Story-driven event themes",
        "Fan engagement strategy",
        "Cross-team coordination planning",
        "Experience-driven concepts",
      ],
    },
    {
      id: "logistics",
      label: "Logistics & Operations",
      image:
        "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Smart scheduling, resource allocation, and streamlined operational systems powered by football-level precision.",
      points: [
        "Resource & staffing management",
        "Technical setup planning",
        "Scheduling automation",
        "Safety & flow mapping",
        "On-ground execution tools",
      ],
    },
    {
      id: "media",
      label: "Creative Media & Branding",
      image:
        "https://images.unsplash.com/photo-1612043071344-94c20c4c837e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Visual experiences designed to energize crowds, teams, partners, and sponsors.",
      points: [
        "Promo & hype visuals",
        "Brand identity systems",
        "Sponsor-ready creative kits",
        "Match-day content packages",
        "Motion graphics & highlight reels",
      ],
    },
    {
      id: "onsite",
      label: "On-Site Management",
      image:
        "https://plus.unsplash.com/premium_photo-1664304619594-1b2bffeff5f2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Professional on-ground coordination ensuring every moment happens exactly as planned.",
      points: [
        "Team & talent coordination",
        "Security & gate flow",
        "Match/event sequencing",
        "Live cue & timing control",
        "VIP & sponsor management",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("strategy");
  const activeData = tabs.find((t) => t.id === activeTab);

  // Auto cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black text-white px-6 py-24 relative overflow-hidden">
      
      {/* Stadium Gradient Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,155,255,0.15),transparent_60%)] z-0"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Solutions{" "}
          <span className="bg-gradient-to-r from-[#009dff] to-[#6edcff] bg-clip-text text-transparent">
            Engineered for Impact.
          </span>
        </h2>

        <p className="text-gray-300 mt-3 max-w-xl">
          Purpose-built services crafted for the energy, precision, and scale of
          modern sports and live events.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105"
                  : "border-white/30 bg-transparent text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

          {/* Left: Image */}
          <div className="transition-all duration-700">
            <img
              src={activeData.image}
              alt="service"
              className="w-full h-[370px] object-cover rounded-xl shadow-[0_0_40px_rgba(0,155,255,0.15)]"
            />
          </div>

          {/* Right: Text */}
          <div className="transition-all duration-700">
            <p className="max-w-md leading-relaxed text-gray-300 mb-6">
              {activeData.desc}
            </p>

            <ul className="space-y-4">
              {activeData.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-[#00c6ff] text-lg">•</span>
                  <span className="text-white font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ⚽ Ambient Stadium Video Section */}
      {/* <section className="w-full h-96 mt-20 bg-black flex items-center justify-center overflow-hidden relative">
        <video
          src="https://framerusercontent.com/assets/PDisQ2J0ZmiKIRslZ2qGcJu4U0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-3">Events Designed to Perform.</h3>
          <p className="text-gray-300">
            From kick-off to closing — every detail is engineered for excellence.
          </p>
        </div>
      </section> */}
    </section>
  );
}
