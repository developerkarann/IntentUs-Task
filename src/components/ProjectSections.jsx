import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsSections() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center px-6 pb-40 pt-10 ">
      {/* Heading */}
      <h2 style={{fontFamily: ' Arupala Grotesk Trial'}} className="text-4xl md:text-5xl font-bold text-center leading-tight">
        Events That Set  <span className="text-blue-400">New Standards.</span>
      </h2>

      <p className="text-gray-300 text-center max-w-2xl text-lg mt-4">
        Explore some of our favorite executions—from high-energy sports festivals to championship experiences.
      </p>

      {/* PROJECT CARD */}
      <div className="relative w-full max-w-6xl mt-16 group cursor-pointer">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="w-full h-120 rounded-3xl object-cover transition duration-700 group-hover:scale-[1.02]"
        />

        {/* Screen Mockup */}

        {/* BOTTOM OVERLAY — FULLY ANIMATED */}
        <div
          className="
            absolute bottom-0 w-full flex justify-between items-center px-10 py-6
            rounded-3xl
            transition-all duration-500 
            group-hover:bg-black/30 
            group-hover:backdrop-blur-md
            group-hover:translate-y-[-10px]
          "
        >
          {/* Left Block */}
          <div className="transition-all duration-500 group-hover:scale-[1.03]">
            <h3 style={{fontFamily: ' Arupala Grotesk Trial'}} className="text-4xl font-bold"> Championship Football Cup — 2025 Edition</h3>

            <div className="flex gap-2 mt-2 text-xs text-gray-300 flex-wrap">
              {["Event Management", "Challenges", "Our Strategy", "Higlights", "Final CTA"].map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3 py-1 rounded-full bg-white/10 
                    transition-all duration-500
                    group-hover:bg-white/20
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* View Project Button — also animates with the section */}
          <Link to='/project'>
            <button
              className="
              relative flex items-center gap-2 text-2xl px-8 py-2 rounded-full 
              bg-white text-black
              backdrop-blur-lg
            
               invisible
               group-hover:visible
              duration-400
               border border-amber-900
              hover:bg-black 
              hover:text-white
               cursor-pointer
            "
            >
              View Event
              <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
