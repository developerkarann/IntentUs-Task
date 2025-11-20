import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsSections() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center px-6 pb-20 pt-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight">
        Our work does <span className="text-blue-400">all the talking</span>
      </h2>

      <p className="text-gray-300 text-center max-w-2xl mt-4">
        With each successful project, we let our work take center stage, telling
        a story of our dedication and proficiency in every endeavor.
      </p>

      {/* PROJECT CARD */}
      <div className="relative w-full max-w-6xl mt-16 group cursor-pointer">

        {/* Background Image */}
        <img
          src="https://framerusercontent.com/images/jHBudBkIJXyqgJpiuK8vLQZGrw.webp?scale-down-to=2048&width=2880&height=1444"
          alt="background"
          className="w-full h-auto rounded-3xl object-cover transition duration-700 group-hover:scale-[1.02]"
        />

        {/* Screen Mockup */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img
            src="/project-screen.png"
            alt="mockup"
            className="w-[85%] rounded-2xl shadow-lg transition duration-700 group-hover:scale-[1.03]"
          />
        </div>

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
            <h3 className="text-2xl font-semibold">Unthread Case Study</h3>

            <div className="flex gap-2 mt-2 text-xs text-gray-300 flex-wrap">
              {["Dashboard", "UI/UX", "3D Video", "Branding", "Product Strategy"].map((tag) => (
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

            "
            >
              View Project
              <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
