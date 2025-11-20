import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const tabs = [
    {
      id: "branding",
      label: "Branding",
      image: "https://framerusercontent.com/images/JSdtGy8tZ8ZDRMhpYP5L89WLb2g.png?scale-down-to=512",
      points: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Packaging Design",
        "Creative Direction"
      ],
    },
    {
      id: "ux",
      label: "UX & Insights",
      image: "https://framerusercontent.com/images/dqqWzAJcpW5z01ylXDBfsSySA.png",
      points: [
        "Research & Insights",
        "Journey Mapping",
        "Persona Development",
        "Usability Testing",
        "Experience Audits"
      ],
    },
    {
      id: "product",
      label: "Product Strategy",
      image: "https://framerusercontent.com/images/PdXkxZkW2t2VXmlnrUffmVC4eXw.webp?scale-down-to=512",
      points: [
        "Product Planning",
        "Roadmapping",
        "Feature Prioritization",
        "Competitive Analysis",
        "Market Positioning"
      ],
    },
    {
      id: "uiux",
      label: (
        <span className="flex items-center gap-1">
          UX/UI Design <ArrowUpRight size={14} />
        </span>
      ),
      image: "https://framerusercontent.com/images/Df3eJVmNG3szZGYprFfSEoNfZw.png?scale-down-to=512",
      points: [
        "Design Systems",
        "User Flows and Site Map",
        "Micro Interactions & Animations",
        "High-Fidelity Designs",
        "Interactive Experiences"
      ],
    },
    {
      id: "frontend",
      label: "Frontend Development",
      image: "https://framerusercontent.com/images/B6vezQG6naa8XQHfaBM9sWQ1f3g.webp?scale-down-to=512",
      points: [
        "Pixel-perfect UI",
        "Responsive Layouts",
        "Performance Optimization",
        "Reusable Components",
        "Interactive Animations"
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("uiux");
  const activeData = tabs.find((t) => t.id === activeTab);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="w-full bg-black text-white px-6 py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Services to help your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            projects drive success
          </span>
        </h2>

        <p className="text-gray-300 mt-3 max-w-xl">
          We create impactful design solutions that elevate your brand and
          achieve your business goals.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-2 rounded-full border border-white/30 transition-all duration-300
                ${activeTab === tab.id
                  ? " bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105 "
                  : "bg-transparent text-white hover:bg-white/10"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 items-center">

          {/* Left Image */}
          <div className="transition-all duration-700">
            <img
              src={activeData.image}
              alt="service"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Details */}
          <div className="text-gray-300 transition-all duration-700">
            <p className="max-w-md leading-relaxed">
              We design user interfaces that are intuitive, aesthetically
              pleasing, and accessible to all users.
            </p>

            <ul className="mt-6 space-y-4">
              {activeData.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">•</span>
                  <span className="text-white font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 🎥 Background Video */}
      <section className="w-full h-9/12 bg-black flex items-center justify-center overflow-hidden">

        {/* VIDEO */}
        <video
          src="https://framerusercontent.com/assets/PDisQ2J0ZmiKIRslZ2qGcJu4U0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
        />

      </section>
    </section>
  );
}
